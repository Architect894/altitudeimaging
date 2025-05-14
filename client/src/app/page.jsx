"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import Connections from "@/components/connections";

export default function Home() {
    const [scrollY, setScrollY] = useState(0); // Track the scroll position

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Calculate gradient stops based on scroll position
    const getGradientPosition = () => {
        const scrollFactor = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);
        const purpleStop = Math.max(30 - scrollFactor * 30, 0); // Purple dominates the top
        const cyanStop = Math.min(40 + scrollFactor * 40, 100); // Cyan appears earlier
        return `linear-gradient(to bottom, hsl(280, 100%, 50%) ${purpleStop}%, hsl(180, 100%, 50%) ${cyanStop}%)`;
    };

    return (
        <section id="home">
            {/* Header Section */}
            <header
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                    background: "rgba(0, 0, 0, 0.8)", // Keep a dark overlay for readability
                    height: "100vh",
                    color: "#fff",
                    zIndex: 10,
                    overflow: "hidden",
                }}
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.videoBackground}
                >
                    <source src="https://jelliottvideos.b-cdn.net/altimagingvid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay content */}
                <div className={`text-center position-relative ${styles.frostedGlass}`} style={{ zIndex: 2 }}>
                    <h1 className="display-3 mb-4">See More. Know More. Do More.</h1>
                    <p className="lead mb-5 text-xl md:text-2xl lg:text-5xl">
                        <br />We are Altitude Imaging
                    </p>
                    <p className="lead mb-5 text-xl md:text-2xl lg:text-3xl">
                        We&apos;re dedicated to helping businesses, communities, and creators stand out with 
                        professional drone media and marketing solutions.
                        From breathtaking aerial footage to event coverage and 
                        strategic social media content, we bring your vision to life with high-quality production that makes an impact from every angle.
                    </p>
                    <div className="d-flex justify-content-center gap-3 mb-4">
                        <Link
                            href="/videoedits"
                            className="btn btn-outline-light text-5xl px-14 py-6 rounded-lg shadow-lg hover:scale-105 transition-all"
                        >
                            View Content
                        </Link>
                    </div>

                    {/* Social Media Icons placed here */}
                    <p className="text-light mb-3" style={{ fontSize: "1.5rem" }}>Visit our socials!</p>
                    <div className="d-flex justify-content-center gap-4">
                        {[
                            { href: "https://www.facebook.com/altitudeimagingofficial/", icon: "facebook" },
                            { href: "https://www.instagram.com/altitudeimagingofficial/", icon: "instagram" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                                style={{
                                    fontSize: "2.5rem",
                                    transition: "transform 0.2s ease-in-out",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <i className={`bi bi-${social.icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </header>


        </section>
    );
}
