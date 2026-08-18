"use client";

import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

const SOCIALS = [
    { href: "https://facebook.com/altitudeimagingofficial/", icon: "facebook", label: "Facebook" },
    { href: "https://instagram.com/altitudeimagingofficial/", icon: "instagram", label: "Instagram" },
];

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
                background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(5,8,15,0.65))",
                color: "var(--ai-text)",
                padding: "clamp(48px, 6vw, 80px) 0 32px",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
                <div className="row g-5">
                    {/* Brand */}
                    <div className="col-12 col-md-5">
                        <h3
                            style={{
                                fontFamily: "var(--ai-font-display)",
                                fontWeight: 800,
                                fontSize: "1.45rem",
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
                    <div className="col-6 col-md-3">
                        <p
                            style={{
                                fontSize: "0.76rem",
                                fontWeight: 700,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "var(--ai-faint)",
                                marginBottom: "16px",
                            }}
                        >
                            Explore
                        </p>
                        <div className="d-flex flex-column gap-2">
                            <Link href="/#work" style={linkStyle}>The work</Link>
                            <Link href="/#youtube-feature" style={linkStyle}>Channel</Link>
                            <Link href="/#reviews" style={linkStyle}>Reviews</Link>
                            <a
                                href="https://www.notion.so/Work-with-us-2f5154c8e1ff806ea5d4c9c5ef8c47ad"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={linkStyle}
                            >
                                Work with us
                            </a>
                        </div>
                    </div>

                    {/* What we do */}
                    <div className="col-6 col-md-4">
                        <p
                            style={{
                                fontSize: "0.76rem",
                                fontWeight: 700,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "var(--ai-faint)",
                                marginBottom: "16px",
                            }}
                        >
                            What we do
                        </p>
                        <p style={{ color: "var(--ai-muted)", lineHeight: 1.7 }}>
                            Cinematic aerial and on-ground production for flight schools, dealers,
                            charter operators, and aviation brands — plus the social content that
                            keeps you in front of a buyer while they decide.
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
                                        borderRadius: "999px",
                                        background: "var(--ai-surface)",
                                        border: "1px solid var(--ai-line)",
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
