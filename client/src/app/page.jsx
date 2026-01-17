"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import Connections from "@/components/connections";

const YT_CHANNEL_URL = "https://www.youtube.com/@PastorPilot9116";

// Curated list of Pastor Pilot videos (IDs are the part after ?v=)
const YT_VIDEO_IDS = ["Mc2RzCS7d3g", "_mgNJQAJrJY", "YIFgaArsMwE", "bvLrzyoS-28"];

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    // Hydration-safe: stable first render (index 0), then client mounts iframe
    const [isMounted, setIsMounted] = useState(false);
    const [videoIndex, setVideoIndex] = useState(0);

    // Scroll tracking
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mount flag for iframe render (prevents hydration mismatch)
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Optional: you had this function; keeping it even if not used
    const getGradientPosition = () => {
        const scrollFactor = Math.min(
            scrollY / (document.body.scrollHeight - window.innerHeight),
            1
        );
        const purpleStop = Math.max(30 - scrollFactor * 30, 0);
        const cyanStop = Math.min(40 + scrollFactor * 40, 100);
        return `linear-gradient(to bottom, hsl(280, 100%, 50%) ${purpleStop}%, hsl(180, 100%, 50%) ${cyanStop}%)`;
    };

    const ytId = YT_VIDEO_IDS[videoIndex];

    const ytEmbedUrl = useMemo(() => {
        // rel=0 reduces unrelated recommendations (mostly); modestbranding reduces chrome
        return `https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1`;
    }, [ytId]);

    const goPrev = () =>
        setVideoIndex((i) => (i - 1 + YT_VIDEO_IDS.length) % YT_VIDEO_IDS.length);

    const goNext = () => setVideoIndex((i) => (i + 1) % YT_VIDEO_IDS.length);

    return (
        <>
            {/* 👇 YouTube Feature Section (circle logo + arrows) 👇 */}
            <section id="youtube-feature" className="py-3 text-white">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
                        {/* Left Arrow */}
                        <button
                            type="button"
                            onClick={goPrev}
                            className="btn btn-outline-light"
                            aria-label="Previous video"
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 999,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.75rem",
                                lineHeight: 1,
                            }}
                        >
                            ‹
                        </button>

                        {/* Circular Channel Logo (clickable) */}
                        <a
                            href={YT_CHANNEL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Pastor Pilot YouTube channel"
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(255,255,255,0.08)",
                                boxShadow: "0 0 0 rgba(255,0,0,0)",
                                transform: "translateY(0px) scale(1)",
                                transition: "transform 180ms ease, box-shadow 180ms ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px) scale(1.06)";
                                e.currentTarget.style.boxShadow = "0 0 18px rgba(0, 110, 255, 0.45)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0px) scale(1)";
                                e.currentTarget.style.boxShadow = "0 0 0 rgba(255,0,0,0)";
                            }}
                        >
                            <Image
                                src="https://altitudeimagingvideos.b-cdn.net/PastorPilot.png"
                                alt="Pastor Pilot YouTube Channel"
                                width={96}
                                height={96}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                priority
                            />
                        </a>

                        {/* Right Arrow */}
                        <button
                            type="button"
                            onClick={goNext}
                            className="btn btn-outline-light"
                            aria-label="Next video"
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 999,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.75rem",
                                lineHeight: 1,
                            }}
                        >
                            ›
                        </button>
                    </div>

                    <div className="text-center text-secondary mb-2">
                        Video {videoIndex + 1} of {YT_VIDEO_IDS.length}
                    </div>

                    <div className="ratio ratio-16x9">
                        {isMounted ? (
                            <iframe
                                className="w-100 rounded"
                                src={ytEmbedUrl}
                                title="Pastor Pilot video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div className="w-100 rounded bg-black" />
                        )}
                    </div>
                </div>
            </section>

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
                            src="https://altitudeimagingvideos.b-cdn.net/AltitudeLoop.m4v"
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
                            Premium aviation media that turns aircraft, training, and experiences
                            into demand.
                            <br />
                            Altitude Imaging helps flight schools, dealers, charter operators, and
                            aviation brands stand out with cinematic aerials, on-ground production,
                            <br />
                            and scroll-stopping social content.
                            <br />
                            Crafted to make prospects feel the flight before they ever book.
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

            {/* 👇 Companies Who Trust Us 👇 */}
            <section className="py-16 bg-dark text-white">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        Companies Who Trust Us:
                    </h2>

                    <div className="logoMarquee">
                        <div className="logoTrack">
                            {/* Set 1 */}
                            {[
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/habitatwhite.png",
                                    alt: "Habitat Land",
                                },
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/for_website.png",
                                    alt: "Flying C Aviation",
                                },
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/CentralLogo.png",
                                    alt: "Central Logo",
                                },
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/tecnamlogo.png",
                                    alt: "Tecnam Logo",
                                },
                            ].map((logo, i) => (
                                <div className="logoItem" key={`logo-a-${i}`}>
                                    <img src={logo.src} alt={logo.alt} />
                                </div>
                            ))}

                            {/* Set 2 (duplicate for seamless loop) */}
                            {[
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/habitatwhite.png",
                                    alt: "Evins Healthcare",
                                },
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/for_website.png",
                                    alt: "Flying C Aviation",
                                },
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/CentralLogo.png",
                                    alt: "Central Aviation",
                                },
                                {
                                    src: "https://altitudeimagingvideos.b-cdn.net/tecnamlogo.png",
                                    alt: "Tecnam Logo",
                                },
                            ].map((logo, i) => (
                                <div className="logoItem" key={`logo-b-${i}`}>
                                    <img src={logo.src} alt={logo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* 👇 Google Reviews Section 👇 */}
            <section className="text-white py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        What People Are Saying
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <p className="text-yellow-400 text-2xl mb-2 text-center">★★★★★</p>
                            <p className="italic">
                                "Jarred brought his media expertise to Evins Healthcare and blew us
                                all away! Altitude Imaging is the way to go, hands down. He was
                                professional, informative, and prompt with our video! We are excited
                                to continue to do business with Altitude Imaging!"
                            </p>
                            <div className="mt-4 text-sm text-gray-400">Fonda Evins</div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <p className="text-yellow-400 text-2xl mb-2 text-center">★★★★★</p>
                            <p className="italic">
                                "Working with Jarred at Altitude Imaging has been an absolute
                                pleasure! He is incredibly professional, knowledgeable, and makes the
                                entire process smooth and stress-free. From listing photos to drone
                                footage and even commercials, his work is outstanding."
                            </p>
                            <div className="mt-4 text-sm text-gray-400">Chris Ferguson</div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a
                        href="https://www.google.com/search?client=opera-gx&sca_esv=0e7e332804e82cc8&biw=1738&bih=1280&sxsrf=AE3TifOLZSi5uHlubFt8kPLI_4Z3w0RBSQ:1753416551121&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5UD8-DI2nNuWDO2DOMbTnzYI1-kCEDspNUfjwsU08PNM2A1iC2dfzUt5vcWeFGw4uU4sDk7Il5ZYgql9lKBnysP3KURtkL7wlVk5vEOte83VUc8sA%3D%3D&q=Altitude+Imaging+Reviews&sa=X&ved=2ahUKEwik0qvVkdeOAxV548kDHYqrOM4Q0bkNegQIHhAD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition mt-5"
                    >
                        See More Google Reviews
                    </a>
                </div>
            </section>


        </>
    );
}
