// Every "get started" path on the site ends at one of these Lead Peeks forms.
// The homepage chooser, the audience list, and the footer all read from here.
export const START_HREF = "/#start";

export const LEAD_FORMS = [
    {
        key: "makers",
        label: "Light sport makers & dealers",
        blurb: "Launch, listing, and demo-flight content that moves aircraft.",
        href: "https://altitudeimaging.leadpeeks.com/makers",
    },
    {
        key: "schools",
        label: "Flight schools",
        blurb: "Fill the schedule with discovery flights and new students.",
        href: "https://altitudeimaging.leadpeeks.com/schools",
    },
    {
        key: "mission",
        label: "Mission organizations",
        blurb: "Show supporters the work their giving makes possible.",
        href: "https://altitudeimaging.leadpeeks.com/mission",
    },
    {
        key: "pastor-pilot",
        label: "Pastor Pilot partnership",
        blurb: "Sponsor, collaborate, or appear on the Pastor Pilot channel.",
        href: "https://altitudeimaging.leadpeeks.com/pastor-pilot",
    },
    {
        key: "other",
        label: "Anything else",
        blurb: "Something different in mind? Tell us about it.",
        href: "https://altitudeimaging.leadpeeks.com/other",
    },
];

export const leadForm = (key) => LEAD_FORMS.find((form) => form.key === key);
