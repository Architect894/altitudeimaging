"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css"; // Adjust the path if necessary
import "../styles/global.css";
import Connections from "./connections";

export default function Footer() {
    return (
        <footer
            className="text-white py-5"
            style={{
                backgroundColor: "rgb(12, 18, 49)", // Bright blue background color
                fontFamily: "Quicksand",
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Personal Branding Section */}
                    <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                        <h3 className="text-white font-bold">Altitude Imaging</h3>
                        <p>Your story with a unique angle.</p>
                        <address className="mt-3">
                            <p>
                                <a href="mailto:sendittojelliott@gmail.com" className="text-white text-decoration-none">
                                    jarred@altitudeimaging.org
                                </a>
                            </p>
                            <p>
                                <a href="tel:8706238220" className="text-white text-decoration-none font-bold">
                                    (870) 623-8080
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* About Section */}
                    <div className="col-md-4 text-center text-md-start">
                        <h5 className="mb-0 font-bold text-center">About Me</h5>
                        <p>
                            We are Altitude Imaging. We&apos;re dedicated to helping businesses, communities, and creators stand out with 
                            professional drone media and marketing solutions. From breathtaking aerial footage to event coverage and 
                            strategic social media content, we bring your vision to life with high-quality production that makes an impact from every angle.
                        </p>
                        <p className="text-center text-light mt-4 mb-2" style={{ fontSize: "1.5rem" }}>Check our socials!</p>
                        <div className="d-flex justify-content-center gap-4">
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
                                        fontSize: "2.0rem",
                                        transition: "transform 0.2s ease-in-out",
                                        margin: "0 20px",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    <i className={`bi bi-${social.icon}`}></i>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="text-center mt-5 pt-3"
                    style={{ borderTop: "1px solid #FFFFFF" }}
                >
                    <small>
                        Designed & Developed by <span className="text-warning">Jacob Elliott</span>
                    </small>
                </div>
            </div>
        </footer>
    );
}
