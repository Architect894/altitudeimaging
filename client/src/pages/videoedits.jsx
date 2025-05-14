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

    const mobileVideos = [
        {
            src: "https://altitudeimagingvideos.b-cdn.net/golfcourse.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/newporttower.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/treewatertower.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/bleachersportrait.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/golfriver.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/houses_.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/watertower.MP4",
        }
    ];

    const landscapeVideos = [
        {
            src: "https://altitudeimagingvideos.b-cdn.net/bleachers.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/footballfour.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/footballfield.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/bridgeone.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/bridgethree.MP4",
        },
        {
            src: "https://altitudeimagingvideos.b-cdn.net/bridgetwo.MP4",
        },
        {
            src: "https://jelliottvideos.b-cdn.net/altitudeadone.mp4",
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
            <section
                className="text-white py-5 text-center"
                style={{ fontFamily: "Quicksand" }}
            >
                <div className="container mb-5">
                    <h2 className="display-4 mb-3">Portrait Video Projects</h2>
                    <p className="lead">Want to elevate your brand&apos;s story? We specialize in eye-catching portrait videos designed to showcase your small business, community, or special project from a whole new perspective.</p>
                </div>

                <div
                    className="container-fluid px-5"
                    style={{
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        display: "flex",
                        gap: "3rem",
                        paddingBottom: "2rem",
                        scrollSnapType: "x mandatory",
                    }}
                >
                    {mobileVideos.map((video, index) => (
                        <div
                            key={index}
                            style={{
                                width: "300px",
                                flex: "0 0 auto",
                                scrollSnapAlign: "center",
                                textAlign: "left",
                            }}
                        >
                            <h5 className="fw-semibold mb-2 text-white">{video.title}</h5>
                            <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>{video.description}</p>

                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                onPlay={() => handlePlay(index)}
                                controls
                                muted={false}
                                className={styles.videoHoverEffect}
                                style={{
                                    width: "100%",
                                    aspectRatio: "9 / 16",
                                    objectFit: "cover",
                                }}
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            </section>

            {/* Landscape Section */}
            <section className="text-white py-5" style={{ fontFamily: "Quicksand" }}>
                <div className="container mb-5 text-center">
                    <h3 className="display-5 mb-3">Landscape Video Projects</h3>
                    <p className="lead">Looking to make a big-screen impact?
At Altitude Imaging, we produce stunning landscape videos ideal for websites, presentations, and advertising displays. Whether you&apos;re highlighting your business, community, or a special project,
our aerial footage and expert editing bring your story to life in a wide, cinematic format that leaves a lasting impression.</p>
                </div>

                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {landscapeVideos.map((video, index) => {
                            const globalIndex = mobileVideos.length + index;
                            return (
                                <div className="col-12 col-md-6 col-lg-5" key={index}>
                                    <h5 className="fw-semibold text-white">{video.title}</h5>
                                    <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>{video.description}</p>
                                    <video
                                        ref={(el) => (videoRefs.current[globalIndex] = el)}
                                        onPlay={() => handlePlay(globalIndex)}
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
                            );
                        })}
                    </div>
                </div>
            </section >
        </PagesLayout >
    );
}
