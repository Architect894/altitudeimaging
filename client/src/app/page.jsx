"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import Connections from "@/components/connections";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getGradientPosition = () => {
        const scrollFactor = Math.min(
            scrollY / (document.body.scrollHeight - window.innerHeight),
            1
        );
        const purpleStop = Math.max(30 - scrollFactor * 30, 0);
        const cyanStop = Math.min(40 + scrollFactor * 40, 100);
        return `linear-gradient(to bottom, hsl(280, 100%, 50%) ${purpleStop}%, hsl(180, 100%, 50%) ${cyanStop}%)`;
    };

    return (
        <>
            <section id="home">
                <header
                    className="position-relative d-flex align-items-center justify-content-center"
                    style={{
                        background: "rgba(0, 0, 0, 0.8)",
                        height: "100vh",
                        color: "#fff",
                        zIndex: 10,
                        overflow: "hidden",
                    }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.videoBackground}
                    >
                        <source
                            src="https://altitudeimagingvideos.b-cdn.net/Delta%20Arts%20Festival.m4v"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    <div
                        className={`text-center position-relative ${styles.frostedGlass}`}
                        style={{ zIndex: 2 }}
                    >
                        <h1 className="display-4 mb-5">See More. Know More. Do More.</h1>
                        <p className="lead mb-5 text-xl md:text-2xl lg:text-3xl">
                            We&apos;re dedicated to helping businesses, communities, and
                            creators stand out with professional drone media and marketing
                            solutions. From breathtaking aerial footage to event coverage and
                            strategic social-media content, we bring your vision to life with
                            high-quality production that makes an impact from every angle.
                        </p>

                        <div className="d-flex justify-content-center gap-3 mb-4">
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://altitudeimaging.hbportal.co/public/682a5bb52c86d7002408cd0f",
                                        "_blank",
                                        "noopener,noreferrer"
                                    )
                                }
                                className="btn btn-outline-light text-3xl px-9 py-6 rounded-lg shadow-lg hover:scale-105 transition-all"
                            >
                                View Pricing
                            </button>
                        </div>

                        <div className="d-flex justify-content-center gap-3 mb-3">
                            <Link
                                href="/videoedits"
                                className="btn btn-outline-light text-3xl px-9 py-6 rounded-lg shadow-lg hover:scale-105 transition-all"
                            >
                                View Content
                            </Link>
                        </div>

                        <p className="text-light mb-3" style={{ fontSize: "1.5rem" }}>
                            Visit our socials!
                        </p>
                        <div className="d-flex justify-content-center gap-4">
                            {[
                                {
                                    href: "https://www.facebook.com/altitudeimagingofficial/",
                                    icon: "facebook",
                                },
                                {
                                    href: "https://www.instagram.com/altitudeimagingofficial/",
                                    icon: "instagram",
                                },
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
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform = "scale(1.2)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                >
                                    <i className={`bi bi-${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </header>
            </section>

            <section id="portfolio-video" className="py-5 bg-dark text-white">
                <div className="container">
                    <h2 className="text-center mb-4 fs-1">Portfolio</h2>
                    <p className="text-center mb-4 fs-5">
                        A quick visual showcase of our premium aerial
                        photography and videography services, highlighting stunning drone
                        footage for real&nbsp;estate, events, and commercial projects.
                    </p>

                    <div className="ratio ratio-16x9">
                        <video
                            controls
                            className="w-100 rounded"
                            style={{ objectFit: "cover" }}
                        >
                            <source
                                src="https://altitudeimagingvideos.b-cdn.net/Portfolio.m4v"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
        </>
    );
}
