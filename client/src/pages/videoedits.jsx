"use client";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";
import PagesLayout from "./pageslayout";
import Head from "./logos";

export default function VideoEditing() {
    const videoRefs = useRef([]);

    const handlePlay = (index) => {
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const finishedVideos = [
        {
            src: "https://altitudeimagingvideos.b-cdn.net/Long%20Creek%20Final.mp4",
            title: "Habitat Land Showing",
            description: "A smooth flyover capturing beautiful land."
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/JACKSON%20GLADE%20240.MP4",
            title: "Meet Seth Davis",
            description: "Meet Seth Davis, let him show you around this beautiful land."
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/newport%20city%20rando.mp4",
            title: "Newport City Viewing",
            description: "Viewing Newport from the best view possible."
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/AltitudeAd1.mp4",
            title: "George Kell Chevrolet",
            description: "Scenic coverage of a bridge with flowing traffic and skyline views."
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/AltitudeAd2.mp4",
            title: "Newport Park",
            description: "Check out some aerial views that show you Newport's awesome public park."
        },
    ];

    return (
        <PagesLayout>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                />
            </Head>

            {/* Finished Videos Section */}
            <section className="text-white py-5" style={{ fontFamily: "Quicksand" }}>
                <div className="container mb-5 text-center">
                    <h3 className="display-5 bg-gray-900 p-4 rounded">View My Work</h3>
                    <p className="lead mb-4 bg-gray-800" style={{ fontSize: "1.5rem" }}>
                        At Altitude Imaging, we deliver fully edited, professional-grade videos 
                        that are ready to share with your audience. Whether you're showcasing your business, community, 
                        or a special project, our cinematic landscape videos are crafted to captivate—perfect for websites, 
                        presentations, and long-term marketing that future customers will remember.
                    </p>
                </div>

                <div className="container">
                    <div className="row g-4 justify-content-center bg-dark p-4 rounded">
                        {finishedVideos.map((video, index) => (
                            <div className="col-12 col-md-6 col-lg-6" key={index}>
                                <h5 className="fw-semibold text-white fs-1 text-center">{video.title}</h5>
                                <p className="text-white mb-3 text-center fs-5" style={{ fontSize: "1.2rem" }}>{video.description}</p>
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    onPlay={() => handlePlay(index)}
                                    controls
                                    muted={false}
                                    className={styles.videoHoverEffect}
                                    style={{
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PagesLayout>
    );
}
