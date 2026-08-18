// Returns the channel's best-performing recent uploads for the homepage section.
//
// Needs YOUTUBE_API_KEY (YouTube Data API v3, "API key" credential).
// Optional: YOUTUBE_CHANNEL_ID (starts with "UC...") skips a lookup call and is
// the most robust option; otherwise the handle below is resolved at request time.
//
// Quota cost per refresh: 3 units with the handle, 2 with the channel id.

const API = "https://www.googleapis.com/youtube/v3";

const CHANNEL_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || "@PastorPilot9116";
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "";

// How many recent uploads to consider before ranking them by views.
const RECENT_POOL = 25;
const TOP_N = 3;
// The homepage grid is 16:9, so vertical Shorts are skipped.
const EXCLUDE_SHORTS = true;

// Hand-picked videos, used when the API key is missing or YouTube errors out so
// the section never renders empty. Listed in the order they appear on the page.
// Swap these for new ones by pasting the part of the share link after "youtu.be/".
const FALLBACK_IDS = ["-fOSwehRX90", "ERYv7SVqZao", "8X4aDcc5e5E"];

// Revalidate the cached response every 6 hours.
export const revalidate = 21600;

// oEmbed is public and needs no API key, so the hand-picked list still gets real
// titles. It has no view counts — those only come from the Data API.
async function oembedTitle(id) {
    const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(
        `https://www.youtube.com/watch?v=${id}`
    )}&format=json`;

    try {
        const res = await fetch(url, { next: { revalidate } });
        if (!res.ok) return "";
        const data = await res.json();
        return data.title || "";
    } catch {
        return "";
    }
}

// maxresdefault is a true 16:9 1280x720 still, but YouTube does not generate it
// for every upload, so fall back to the always-present hqdefault.
async function staticThumbnail(id) {
    const maxres = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

    try {
        const res = await fetch(maxres, { method: "HEAD", next: { revalidate } });
        if (res.ok) return maxres;
    } catch {
        // fall through to hqdefault
    }

    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

async function fallbackPayload(reason) {
    const videos = await Promise.all(
        FALLBACK_IDS.map(async (id) => ({
            id,
            title: await oembedTitle(id),
            thumbnail: await staticThumbnail(id),
            viewCount: null,
            publishedAt: null,
        }))
    );

    return { fallback: true, reason, videos };
}

async function ytFetch(path, params) {
    const url = new URL(`${API}/${path}`);
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
    url.searchParams.set("key", process.env.YOUTUBE_API_KEY);

    const res = await fetch(url, { next: { revalidate } });
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`youtube ${path} ${res.status}: ${body.slice(0, 300)}`);
    }
    return res.json();
}

// "PT1H2M3S" -> seconds
function parseDuration(iso) {
    const m = /^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || "");
    if (!m) return 0;
    const [, d, h, min, s] = m.map((x) => (x ? Number(x) : 0));
    return d * 86400 + h * 3600 + min * 60 + s;
}

// The API returns titles with HTML entities still encoded.
function decodeEntities(str = "") {
    return str
        .replace(/&#(d+);/g, (_, n) => String.fromCharCode(Number(n)))
        .replace(/&quot;/g, '"')
        .replace(/&#?39;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
}

function bestThumbnail(thumbnails = {}, id) {
    const pick =
        thumbnails.maxres ||
        thumbnails.standard ||
        thumbnails.high ||
        thumbnails.medium ||
        thumbnails.default;
    return pick?.url || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

async function resolveUploadsPlaylistId() {
    // A channel's uploads playlist id is its channel id with the "UC" prefix
    // swapped for "UU", so an explicit channel id needs no API call.
    if (CHANNEL_ID) return `UU${CHANNEL_ID.slice(2)}`;

    const data = await ytFetch("channels", {
        part: "contentDetails",
        forHandle: CHANNEL_HANDLE,
    });
    const uploads =
        data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploads) throw new Error(`no channel found for handle ${CHANNEL_HANDLE}`);
    return uploads;
}

export async function GET() {
    if (!process.env.YOUTUBE_API_KEY) {
        return Response.json(await fallbackPayload("missing YOUTUBE_API_KEY"));
    }

    try {
        const uploadsPlaylistId = await resolveUploadsPlaylistId();

        const playlist = await ytFetch("playlistItems", {
            part: "contentDetails",
            playlistId: uploadsPlaylistId,
            maxResults: String(RECENT_POOL),
        });

        const ids = (playlist.items || [])
            .map((item) => item.contentDetails?.videoId)
            .filter(Boolean);

        if (!ids.length) return Response.json(await fallbackPayload("no recent uploads"));

        const details = await ytFetch("videos", {
            part: "snippet,statistics,contentDetails",
            id: ids.join(","),
            maxResults: String(ids.length),
        });

        const videos = (details.items || [])
            .filter((v) => !EXCLUDE_SHORTS || parseDuration(v.contentDetails?.duration) > 60)
            .map((v) => ({
                id: v.id,
                title: decodeEntities(v.snippet?.title || ""),
                thumbnail: bestThumbnail(v.snippet?.thumbnails, v.id),
                viewCount: Number(v.statistics?.viewCount || 0),
                publishedAt: v.snippet?.publishedAt || null,
            }))
            .sort((a, b) => b.viewCount - a.viewCount)
            .slice(0, TOP_N);

        if (!videos.length) return Response.json(await fallbackPayload("no eligible videos"));

        return Response.json({ fallback: false, videos });
    } catch (err) {
        console.error("[api/youtube/top]", err);
        return Response.json(await fallbackPayload(String(err.message || err)));
    }
}
