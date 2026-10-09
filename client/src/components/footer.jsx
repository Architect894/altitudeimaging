"use client";

import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import { LEAD_FORMS, START_HREF } from "@/lib/leadForms";

const SOCIALS = [
    { href: "https://facebook.com/altitudeimagingofficial/", icon: "facebook", label: "Facebook" },
    { href: "https://instagram.com/altitudeimagingofficial/", icon: "instagram", label: "Instagram" },
];

const headingStyle = {
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ai-faint)",
    marginBottom: "16px",
};

const linkStyle = {
    color: "var(--ai-muted)",
    textDecoration: "none",
    fontSize: "0.98rem",
};

export default function Footer() {
    return (
        <footer
            style={{
                position: "relative",
                marginTop: "40px",
                borderTop: "1px solid var(--ai-line)",
                background: "var(--ai-bg-elev)",
                color: "var(--ai-text)",
                padding: "clamp(48px, 6vw, 80px) 0 32px",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
                <div className="row g-5">
                    {/* Brand */}
                    <div className="col-12 col-md-4">
                        <h3
                            style={{
                                fontFamily: "var(--ai-font-display)",
                                fontWeight: 700,
                                fontSize: "1.35rem",
                                marginBottom: "10px",
                            }}
                        >
                            Altitude Imaging
                        </h3>
                        <p style={{ color: "var(--ai-muted)", maxWidth: "38ch", lineHeight: 1.65 }}>
                            Your story with a unique angle. By aviators, for aviators.
                        </p>

                        <div className="d-flex flex-column gap-2 mt-4">
                            <a href="mailto:jarred@altitudeimaging.org" style={linkStyle}>
                                jarred@altitudeimaging.org
                            </a>
                            <a href="tel:8706238080" style={{ ...linkStyle, fontWeight: 700, color: "var(--ai-text)" }}>
                                (870) 623-8080
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="col-6 col-md-2">
                        <p style={headingStyle}>
                            Explore
                        </p>
                        <div className="d-flex flex-column gap-2">
                            <Link href="/#work" style={linkStyle}>The work</Link>
                            <Link href="/#youtube-feature" style={linkStyle}>Channel</Link>
                            <Link href="/#reviews" style={linkStyle}>Reviews</Link>
                            <Link href={START_HREF} style={linkStyle}>Get started</Link>
                        </div>
                    </div>

                    {/* Start a project — one link per Lead Peeks form */}
                    <div className="col-6 col-md-3">
                        <p style={headingStyle}>
                            Start a project
                        </p>
                        <div className="d-flex flex-column gap-2">
                            {LEAD_FORMS.map((form) => (
                                <a
                                    key={form.key}
                                    href={form.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                >
                                    {form.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* What we do */}
                    <div className="col-12 col-md-3">
                        <p style={headingStyle}>
                            What we do
                        </p>
                        <p style={{ color: "var(--ai-muted)", lineHeight: 1.7 }}>
                            Cinematic aerial and on-ground production for aircraft makers and
                            dealers, flight schools, and mission organizations, plus the social
                            content that keeps you in front of buyers while they decide.
                        </p>

                        <div className="d-flex gap-3 mt-4">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.icon}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "var(--ai-radius-btn)",
                                        border: "1px solid var(--ai-line-strong)",
                                        color: "var(--ai-text)",
                                        fontSize: "1.2rem",
                                        textDecoration: "none",
                                    }}
                                >
                                    <i className={`bi bi-${social.icon}`} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="d-flex flex-wrap justify-content-between gap-2 mt-5 pt-4"
                    style={{ borderTop: "1px solid var(--ai-line)", color: "var(--ai-faint)", fontSize: "0.85rem" }}
                >
                    <span>© {new Date().getFullYear()} Altitude Imaging. All rights reserved.</span>
                    <span>
                        Designed &amp; developed by{" "}
                        <span style={{ color: "var(--ai-text)" }}>Jacob Elliott</span>
                    </span>
                </div>
            </div>
        </footer>
    );
}
