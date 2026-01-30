"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css";
import "../styles/global.css";
import PagesLayout from './pageslayout';
import Head from './logos';

export default function Contact() {
    return (
        <PagesLayout>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                />
            </Head>

            <section
                id="contact"
                className="text-white py-5 text-center position-relative"
                style={{
                    marginTop: "0%",
                    fontFamily: "Quicksand",
                    zIndex: 0,
                    background: "rgba(0, 0, 0, 0.8)",
                    height: "100vh",
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
                    <source src="https://altitudeimagingvideos.b-cdn.net/newport%20city%20rando.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Frosted Glass Content Box */}
                <div className={`container d-flex flex-column justify-content-center align-items-center mb-5 mt-5 ${styles.frostedGlass}`}>
                    <h2 className="display-3 mb-3">Get in Touch</h2>
                    <p className="lead" style={{ fontSize: "1.4rem" }}>
                        We&apos;d love to hear from you, whether it&apos;s a project, a question, or just a hello.
                    </p>
                    <p className="text-light mb-4" style={{ fontSize: "1.5rem" }}>
                        Email us directly at:
                    </p>
                    <p>
                        <a
                            href="mailto:jarredelliott@icloud.com"
                            className="text-info fw-bold"
                            style={{ fontSize: "1.2rem" }}
                        >
                            jarred@altitudeimaging.org
                        </a>
                    </p>

                    {/* Social Icons */}
                    <p className="text-light mt-4 mb-2" style={{ fontSize: "1.5rem" }}>Connect with us:</p>
                    <div className="d-flex justify-content-center gap-4 mb-4">
                        {[
                            { href: "https://facebook.com/altitudeimagingofficial/", icon: "facebook" },
                            { href: "https://instagram.com/altitudeimagingofficial/", icon: "instagram" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                                style={{
                                    fontSize: "2rem",
                                    transition: "transform 0.2s ease-in-out",
                                    margin: "0 20px",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                <i className={`bi bi-${social.icon}`}></i>
                            </a>
                        ))}
                    </div>

                </div>
            </section>
        </PagesLayout>
    );
}
