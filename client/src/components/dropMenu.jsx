"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../styles/global.css";
import "../styles/styles.module.css";

export default function DropMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleBookNowClick = () => {
        window.open(
            "https://altitudeimaging.hbportal.co/public/682a5bb52c86d7002408cd0f",
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
                    <Link href="/" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        <img
                            src="/altitudehome.png"
                            alt="Home"
                            style={{ height: "110px", width: "auto" }}
                        />
                    </Link>
                    <Link href="/videoedits" className="button-container py-1 px-3">
                        Content
                    </Link>
                    <Link href="/contact" className="button-container py-1 px-3">
                        Get In Touch
                    </Link>
                    {/* ✅ Book Now Button - Desktop */}
                    <button
                        onClick={handleBookNowClick}
                        className="button-container py-1 px-4"
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="flex lg:hidden w-full justify-center">
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
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
                    <Link href="/" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        <img
                            src="/altitudehome.png"
                            alt="Home"
                            style={{ height: "100px", width: "auto" }}
                        />
                    </Link>
                    <Link href="/videoedits" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        Content
                    </Link>
                    <Link href="/contact" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        Get In Touch →
                    </Link>
                    {/* ✅ Book Now Button - Mobile */}
                    <button
                        onClick={handleBookNowClick}
                        className="button-container py-2 px-4 text-white"
                    >
                        Book Now
                    </button>
                </div>
            )}
        </header>
    );
}
