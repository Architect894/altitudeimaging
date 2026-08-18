"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/global.css";

const WORK_WITH_US_URL =
    "https://www.notion.so/Work-with-us-2f5154c8e1ff806ea5d4c9c5ef8c47ad";

const NAV_LINKS = [
    { href: "/#work", label: "The Work" },
    { href: "/#youtube-feature", label: "Channel" },
    { href: "/#reviews", label: "Reviews" },
];

export default function DropMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStuck, setIsStuck] = useState(false);

    // The bar stays transparent over the hero and frosts once the page moves
    useEffect(() => {
        const onScroll = () => setIsStuck(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`menu-container ${isStuck ? "is-stuck" : ""}`}>
            <nav
                className="mx-auto d-flex align-items-center justify-content-between"
                style={{ maxWidth: "1200px", padding: "10px 24px", gap: "24px" }}
                aria-label="Main"
            >
                <Link href="/" aria-label="Altitude Imaging home" style={{ lineHeight: 0 }}>
                    <Image
                        src="/altitudehome.png"
                        alt="Altitude Imaging"
                        width={220}
                        height={88}
                        style={{
                            width: "auto",
                            height: isStuck ? "66px" : "92px",
                            transition: "height 320ms cubic-bezier(0.22,0.61,0.36,1)",
                        }}
                        priority
                    />
                </Link>

                {/* Desktop links */}
                <div className="d-none d-lg-flex align-items-center" style={{ gap: "32px" }}>
                    {NAV_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} className="nav-link-underline">
                            {link.label}
                        </Link>
                    ))}

                    <a
                        href={WORK_WITH_US_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 20px",
                            borderRadius: "999px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            textDecoration: "none",
                            color: "#04121e",
                            background: "linear-gradient(135deg, #7fe0ff, #38bdf8 45%, #818cf8)",
                            boxShadow: "0 14px 30px -16px rgba(56,189,248,0.9)",
                        }}
                    >
                        Work With Us
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="d-inline-flex d-lg-none align-items-center justify-content-center"
                    style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "14px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        color: "var(--ai-text)",
                    }}
                    aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
                    aria-expanded={isMenuOpen}
                >
                    <svg
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7h16.5M3.75 12h16.5m-16.5 5h16.5" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div
                    className="d-lg-none animate-dropdown"
                    style={{
                        padding: "8px 24px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        borderTop: "1px solid var(--ai-line)",
                        background: "rgba(5,8,15,0.92)",
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                    }}
                >
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                padding: "14px 4px",
                                color: "var(--ai-text)",
                                textDecoration: "none",
                                fontWeight: 600,
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <a
                        href={WORK_WITH_US_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            marginTop: "14px",
                            padding: "14px 20px",
                            borderRadius: "999px",
                            textAlign: "center",
                            fontWeight: 700,
                            textDecoration: "none",
                            color: "#04121e",
                            background: "linear-gradient(135deg, #7fe0ff, #38bdf8 45%, #818cf8)",
                        }}
                    >
                        Work With Us
                    </a>
                </div>
            )}
        </header>
    );
}
