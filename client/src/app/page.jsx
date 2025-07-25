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
                            <div className="mt-4 text-sm text-gray-400">
                                Fonda Evins, 2 months ago
                            </div>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <p className="text-yellow-400 text-2xl mb-2 text-center">★★★★★</p>
                            <p className="italic">
                                "Working with Jarred at Altitude Imaging has been an absolute
                                pleasure! He is incredibly professional, knowledgeable, and makes the
                                entire process smooth and stress-free. From listing photos to drone
                                footage and even commercials, his work is outstanding."
                            </p>
                            <div className="mt-4 text-sm text-gray-400">
                                Chris Ferguson, 1 day ago
                            </div>
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
        </section >

            <section id="portfolio-video" className="py-5 bg-dark text-white">
                <div className="container">
                    <h2 className="text-center mb-4 fs-1 font-bold">Portfolio</h2>
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
