"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/global.css";
import "../styles/styles.module.css";

export default function DropMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handlePastorPilotClick = () => {
        window.open(
            "https://www.youtube.com/@PastorPilot9116",
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <header
            className="menu-container"
            style={{
                position: "sticky",
                top: "0",
                zIndex: "50",
                backgroundColor: "rgba(75, 94, 201, 0.23)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                padding: "10px 20px",
            }}
        >
            <nav
                className="mx-auto flex max-w-8xl items-center justify-between p-0 lg:px-8"
                aria-label="Global"
            >
                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex w-full justify-center items-center space-x-6">
                    <Link
                        href="/"
                        className="button-container py-1 px-3 text-white hover:text-yellow-400"
                    >
                        <Image
                            src="/altitudehome.png"
                            alt="Home"
                            width={110}
                            height={110}
                            style={{ width: "auto", height: "110px" }}
                            priority
                        />
                    </Link>

                    <a
                        href="https://www.notion.so/Work-with-us-2f5154c8e1ff806ea5d4c9c5ef8c47ad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-container py-1 px-3"
                    >
                        Content
                    </a>
                </div>

                {/* Mobile Navigation Bar (Closed State) */}
                <div className="flex lg:hidden w-full items-center justify-between px-2 py-1 h-[84px]">
                    {/* Logo on the Left */}
                    <Link href="/">
                        <Image
                            src="/altitudehome.png"
                            alt="Home"
                            width={120}
                            height={60}
                            style={{ width: "auto", height: "60px" }}
                            className="h-10 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Hamburger Menu Button on the Right */}
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        aria-label="Open main menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-blue-1000 text-white py-6 px-4 flex flex-col items-center text-center space-y-4 animate-dropdown">

                    {/* Content link */}
                    <a
                        href="https://www.notion.so/Work-with-us-2f5154c8e1ff806ea5d4c9c5ef8c47ad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-container py-1 px-3 text-white hover:text-yellow-400 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Work With Us
                    </a>

                    {/* Pastor Pilot YouTube Logo Button - Mobile */}
                    <a
                        href="https://www.notion.so/Work-with-us-2f5154c8e1ff806ea5d4c9c5ef8c47ad"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="button-container py-2 px-4 flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="Work With Us"
                    >
                        <Image
                            src="https://altitudeimagingvideos.b-cdn.net/PastorPilot.png"
                            alt="Work With Us"
                            width={160}
                            height={50}
                            style={{ width: "auto", height: "50px" }}
                        />
                    </a>

                </div>
            )}

        </header>
    );
}

