"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";

const YT_CHANNEL_URL = "https://www.youtube.com/@PastorPilot";
const WORK_WITH_US_URL =
    "https://www.notion.so/Work-with-us-2f5154c8e1ff806ea5d4c9c5ef8c47ad";
const GOOGLE_REVIEWS_URL =
    "https://www.google.com/search?q=Altitude+Imaging+Reviews";
const REEL_VIDEO_URL = "https://altitudeimagingvideos.b-cdn.net/LOOP%202.m4v";

// Placeholder cards rendered while the top-videos request is in flight
const YT_SKELETONS = [0, 1, 2];

// The first thing a visitor reads. Ordered hardest-hitting first.
const PAIN_POINTS = [
    {
        title: "The quote goes out, then silence.",
        body: "Nothing keeps you top of mind while a buyer spends three months deciding.",
    },
    {
        title: "Your listing looks like every other listing.",
        body: "Phone photos in a dim hangar cannot carry a six-figure aircraft or a full rating.",
    },
    {
        title: "Your marketing people do not speak aviation.",
        body: "You spend half of every kickoff call explaining what a discovery flight is.",
    },
    {
        title: "Interest that never turns into a booking.",
        body: "The inquiries come in. The schedule still has gaps you cannot explain.",
    },
];

const CLIENT_LOGOS = [
    { src: "https://altitudeimagingvideos.b-cdn.net/habitatwhite.png", alt: "Habitat Land" },
    { src: "https://altitudeimagingvideos.b-cdn.net/for_website.png", alt: "Flying C Aviation" },
    { src: "https://altitudeimagingvideos.b-cdn.net/CentralLogo.png", alt: "Central Aviation" },
    { src: "https://altitudeimagingvideos.b-cdn.net/tecnamlogo.png", alt: "Tecnam" },
    { src: "https://altitudeimagingvideos.b-cdn.net/Sling-Aircraft.png", alt: "Sling Aircraft" },
];

const REVIEWS = [
    {
        quote:
            "Jarred brought his media expertise to Evins Healthcare and blew us all away! Altitude Imaging is the way to go, hands down. He was professional, informative, and prompt with our video! We are excited to continue to do business with Altitude Imaging!",
        name: "Fonda Evins",
        role: "Evins Healthcare",
    },
    {
        quote:
            "Working with Jarred at Altitude Imaging has been an absolute pleasure! He is incredibly professional, knowledgeable, and makes the entire process smooth and stress-free. From listing photos to drone footage and even commercials, his work is outstanding.",
        name: "Chris Ferguson",
        role: "Google review",
    },
];

const SOCIALS = [
    { href: "https://www.facebook.com/altitudeimagingofficial/", icon: "facebook", label: "Facebook" },
    { href: "https://www.instagram.com/altitudeimagingofficial/", icon: "instagram", label: "Instagram" },
];

const viewFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
});

const initialsOf = (name) =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

export default function Home() {
    // Top-performing recent uploads, pulled live from the YouTube Data API
    const [videos, setVideos] = useState([]);
    const [videosLoading, setVideosLoading] = useState(true);

    // Which card has been swapped from its thumbnail to a playing iframe.
    // Nothing embeds until a click, so the homepage stays light.
    const [playingId, setPlayingId] = useState(null);

    // The showreel now sits well below the fold, so its source is only attached
    // once the visitor scrolls near it — the page above it loads on text alone.
    const reelRef = useRef(null);
    const [reelReady, setReelReady] = useState(false);

    // Ease every [data-reveal] element in as it enters the viewport
    useEffect(() => {
        const items = Array.from(document.querySelectorAll("[data-reveal]"));
        if (!items.length) return;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced || typeof IntersectionObserver === "undefined") {
            items.forEach((el) => el.classList.add("is-in"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-in");
                    observer.unobserve(entry.target);
                });
            },
            { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
        );

        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [videosLoading]);

    useEffect(() => {
        const node = reelRef.current;
        if (!node) return;

        if (typeof IntersectionObserver === "undefined") {
            setReelReady(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setReelReady(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "400px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let cancelled = false;

        fetch("/api/youtube/top")
            .then((res) => res.json())
            .then((data) => {
                if (!cancelled) setVideos(data.videos || []);
            })
            .catch(() => {
                if (!cancelled) setVideos([]);
            })
            .finally(() => {
                if (!cancelled) setVideosLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <>
            {/* ================= 1. HERO — the pain points lead the page ================= */}
            <section id="home" className={styles.hero}>
                <div className={styles.heroAura} aria-hidden="true" />

                <div className={styles.shell}>
                    <div className={styles.heroGrid}>
                        {/* Left: the problem, stated plainly */}
                        <div className={styles.heroCopy}>
                            <p className={styles.kicker} data-reveal>
                                <span className={styles.kickerDot} aria-hidden="true" />
                                By aviators, for aviators
                            </p>

                            <h1 className={styles.heroTitle} data-reveal style={{ "--reveal-delay": "80ms" }}>
                                Aviation buyers decide{" "}
                                <span className={styles.heroTitleAccent}>
                                    long before they ever call you.
                                </span>
                            </h1>

                            <p className={styles.heroLead} data-reveal style={{ "--reveal-delay": "160ms" }}>
                                Most flight schools, dealers, and charter operators lose the sale in the
                                silence — the weeks a prospect spends researching, comparing, and
                                scrolling.{" "}
                                <span className={styles.heroLeadStrong}>
                                    Altitude Imaging fills that silence with video that earns trust before
                                    the first phone call.
                                </span>
                            </p>

                            <div className={styles.heroActions} data-reveal style={{ "--reveal-delay": "240ms" }}>
                                <a
                                    href={WORK_WITH_US_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.btnPrimary}
                                >
                                    Work With Us
                                    <span className={styles.btnArrow} aria-hidden="true">→</span>
                                </a>
                                <a href="#work" className={styles.btnGhost}>
                                    See the work
                                    <span className={styles.btnArrow} aria-hidden="true">↓</span>
                                </a>
                            </div>

                            <div className={styles.heroProof} data-reveal style={{ "--reveal-delay": "320ms" }}>
                                <span className={styles.heroProofStars} aria-hidden="true">★★★★★</span>
                                <span>
                                    Five-star rated — trusted by flight schools, dealers, charter
                                    operators, and aviation brands.
                                </span>
                            </div>
                        </div>

                        {/* Right: the pain points themselves, visible without scrolling */}
                        <aside className={styles.painPanel} data-reveal style={{ "--reveal-delay": "200ms" }}>
                            <h2 className={styles.painPanelHead}>Sound familiar?</h2>

                            <ul className={styles.painList}>
                                {PAIN_POINTS.map((pain) => (
                                    <li className={styles.painItem} key={pain.title}>
                                        <span className={styles.painMark} aria-hidden="true">✕</span>
                                        <span>
                                            <span className={styles.painTitle}>{pain.title}</span>
                                            <span className={styles.painBody}>{pain.body}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <p className={styles.painFoot}>
                                If two of those landed,{" "}
                                <span className={styles.painFootStrong}>we should talk.</span>
                            </p>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ================= 2. THE ANSWER ================= */}
            <section className={`${styles.section} ${styles.sectionDivided}`}>
                <div className={styles.shell}>
                    <div className={styles.sectionHead}>
                        <p className={styles.kicker} data-reveal>
                            <span className={styles.kickerDot} aria-hidden="true" />
                            Where we come in
                        </p>

                        <h2 className={styles.promiseBrand} data-reveal style={{ "--reveal-delay": "80ms" }}>
                            See more. Know more. Do more.
                        </h2>

                        <p className={styles.sectionSub} data-reveal style={{ "--reveal-delay": "140ms" }}>
                            Customer video marketing strategies that produce more sales, generate
                            better leads, and shorten sales cycles.
                        </p>
                    </div>

                    <ul className={styles.beats} data-reveal style={{ "--reveal-delay": "180ms" }}>
                        <li>We speak the language.</li>
                        <li>We know the hurdles.</li>
                        <li>We drive results.</li>
                    </ul>

                    <div className={styles.valueGrid}>
                        <div className={styles.valueCard} data-reveal style={{ "--reveal-delay": "120ms" }}>
                            <div className={styles.cardLabel}>The outcome</div>
                            <div className={styles.cardBig}>Demand-driven aviation media.</div>
                            <div className={styles.cardDivider} />
                            <div className={styles.cardSmall}>
                                Premium content that turns aircraft, training, and experiences into
                                bookings.
                            </div>
                        </div>

                        <div className={styles.valueCard} data-reveal style={{ "--reveal-delay": "220ms" }}>
                            <div className={styles.cardLabel}>Altitude Imaging helps</div>
                            <ul className={styles.helpList}>
                                {["Flight schools", "Dealers", "Charter operators", "Aviation brands"].map(
                                    (who) => (
                                        <li key={who}>
                                            <span className={styles.check} aria-hidden="true">✓</span>
                                            {who}
                                        </li>
                                    )
                                )}
                            </ul>
                            <div className={styles.cardDivider} />
                            <div className={styles.cardSmall}>
                                Cinematic aerials • on-ground production • scroll-stopping social content
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 3. TRUST ================= */}
            <section className={`${styles.section} ${styles.sectionTight}`}>
                <div className={styles.shell}>
                    <p className={styles.trustLabel} data-reveal>Companies who trust us</p>
                    <div data-reveal style={{ "--reveal-delay": "100ms" }}>
                        <div className="logoMarquee">
                            <div className="logoTrack">
                                {/* the second set is a clone that makes the scroll loop
                                    seamlessly — it is hidden from screen readers so each
                                    brand is announced once */}
                                {[false, true].map((isClone) => (
                                    <div
                                        className="logoSet"
                                        key={isClone ? "clone" : "set"}
                                        aria-hidden={isClone || undefined}
                                    >
                                        {CLIENT_LOGOS.map((logo) => (
                                            <div className="logoItem" key={logo.alt}>
                                                <img src={logo.src} alt={isClone ? "" : logo.alt} loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 4. THE WORK — video lives here, not at the top ================= */}
            <section id="work" className={`${styles.section} ${styles.sectionDivided}`}>
                <div className={styles.shell}>
                    <div className={styles.sectionHead}>
                        <p className={styles.kicker} data-reveal>
                            <span className={styles.kickerDot} aria-hidden="true" />
                            The work
                        </p>
                        <h2 className={styles.sectionTitle} data-reveal style={{ "--reveal-delay": "80ms" }}>
                            See it in motion.
                        </h2>
                        <p className={styles.sectionSub} data-reveal style={{ "--reveal-delay": "140ms" }}>
                            The kind of footage that keeps a prospect watching instead of scrolling
                            past.
                        </p>
                    </div>

                    {/* Caption sits over the frame on desktop and drops below it on phones */}
                    <div className={styles.reelBlock} data-reveal>
                        <div className={styles.reelFrame} ref={reelRef}>
                            <video
                                className={styles.reelVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="none"
                            >
                                {reelReady ? <source src={REEL_VIDEO_URL} type="video/mp4" /> : null}
                                Your browser does not support the video tag.
                            </video>

                            <div className={styles.reelShade} aria-hidden="true" />
                        </div>

                        <div className={styles.reelCaption}>
                            <div>
                                <p className={styles.reelTitle}>Cinematic aerial + on-ground production</p>
                                <p className={styles.reelSub}>
                                    Shot, edited, and delivered ready to run.
                                </p>
                            </div>
                            <span className={styles.reelBadge}>
                                <span className={styles.reelBadgeDot} aria-hidden="true" />
                                Showreel
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 5. YOUTUBE ================= */}
            <section id="youtube-feature" className={styles.section}>
                <div className={styles.shell}>
                    <div className={styles.sectionHead}>
                        <h2 className={styles.sectionTitle} data-reveal>Latest from the channel</h2>
                        <p className={styles.sectionSub} data-reveal style={{ "--reveal-delay": "80ms" }}>
                            Our three best-performing recent uploads.
                        </p>

                        <div className="d-flex justify-content-center mt-4" data-reveal style={{ "--reveal-delay": "140ms" }}>
                            <a
                                href={YT_CHANNEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit the Pastor Pilot YouTube channel"
                                className={styles.ytChannel}
                            >
                                <span className={styles.ytAvatar}>
                                    <Image
                                        src="https://altitudeimagingvideos.b-cdn.net/PastorPilot.png"
                                        alt=""
                                        width={64}
                                        height={64}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </span>
                                <span className={styles.ytLabel}>Pastor Pilot</span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.ytGrid}>
                        {videosLoading
                            ? YT_SKELETONS.map((i) => (
                                <div className={styles.ytCard} key={`yt-skeleton-${i}`}>
                                    <div className={styles.ytRatio}>
                                        <div className={styles.ytSkeleton} />
                                    </div>
                                </div>
                            ))
                            : videos.map((video, i) => (
                                <div
                                    className={styles.ytCard}
                                    key={video.id}
                                    data-reveal
                                    style={{ "--reveal-delay": `${i * 90}ms` }}
                                >
                                    <div className={styles.ytRatio}>
                                        {playingId === video.id ? (
                                            <iframe
                                                className={styles.ytIframe}
                                                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`}
                                                title={video.title || "Pastor Pilot video"}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <button
                                                type="button"
                                                className={styles.ytThumbButton}
                                                onClick={() => setPlayingId(video.id)}
                                                aria-label={video.title ? `Play ${video.title}` : "Play video"}
                                            >
                                                <Image
                                                    src={video.thumbnail}
                                                    alt=""
                                                    fill
                                                    sizes="(max-width: 992px) 100vw, 33vw"
                                                    className={styles.ytThumbImg}
                                                />
                                                <span className={styles.ytRank}>#{i + 1}</span>
                                                <span className={styles.ytPlay} aria-hidden="true" />
                                            </button>
                                        )}
                                    </div>

                                    {video.title || video.viewCount ? (
                                        <div className={styles.ytMeta}>
                                            {video.title ? (
                                                <div className={styles.ytTitle}>{video.title}</div>
                                            ) : null}
                                            {video.viewCount ? (
                                                <div className={styles.ytViews}>
                                                    {viewFormatter.format(video.viewCount)} views
                                                </div>
                                            ) : null}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* ================= 6. REVIEWS ================= */}
            <section id="reviews" className={`${styles.section} ${styles.sectionDivided}`}>
                <div className={styles.shell}>
                    <div className={styles.sectionHead}>
                        <p className={styles.kicker} data-reveal>
                            <span className={styles.kickerDot} aria-hidden="true" />
                            Proof
                        </p>
                        <h2 className={styles.sectionTitle} data-reveal style={{ "--reveal-delay": "80ms" }}>
                            What people are saying
                        </h2>
                    </div>

                    <div className={styles.reviewGrid}>
                        {REVIEWS.map((review, i) => (
                            <figure
                                className={styles.reviewCard}
                                key={review.name}
                                data-reveal
                                style={{ "--reveal-delay": `${i * 120}ms` }}
                            >
                                <div className={styles.stars} aria-label="Five out of five stars">
                                    ★★★★★
                                </div>
                                <blockquote className={styles.reviewQuote}>{review.quote}</blockquote>
                                <figcaption className={styles.reviewWho}>
                                    <span className={styles.reviewAvatar} aria-hidden="true">
                                        {initialsOf(review.name)}
                                    </span>
                                    <span>
                                        <span className={styles.reviewName}>{review.name}</span>
                                        <br />
                                        <span className={styles.reviewRole}>{review.role}</span>
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className="d-flex justify-content-center mt-4 pt-2" data-reveal>
                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnGhost}
                        >
                            See more Google reviews
                            <span className={styles.btnArrow} aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= 7. CLOSING CTA ================= */}
            <section className={styles.section}>
                <div className={styles.shell}>
                    <div className={styles.ctaPanel} data-reveal>
                        <h2 className={styles.ctaTitle}>Stop explaining it. Start showing it.</h2>
                        <p className={styles.ctaSub}>
                            Tell us what you fly and who you are trying to reach. We will come back
                            with a plan for the video that does the selling for you.
                        </p>

                        <div className={styles.ctaRow}>
                            <a
                                href={WORK_WITH_US_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Work With Us
                                <span className={styles.btnArrow} aria-hidden="true">→</span>
                            </a>
                            <a href="mailto:jarred@altitudeimaging.org" className={styles.btnGhost}>
                                jarred@altitudeimaging.org
                            </a>
                        </div>

                        <div className={styles.socialBlock}>
                            <div className={styles.socialLabel}>Visit our socials</div>
                            <div className={styles.socialIcons}>
                                {SOCIALS.map((social) => (
                                    <a
                                        key={social.icon}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                        aria-label={social.label}
                                    >
                                        <i className={`bi bi-${social.icon}`} aria-hidden="true"></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
