import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";

export default function ContactUs() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:max-w-6xl lg:px-8 text-center">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Turning your vision into reality.
                </p>

                {/* Centered Card Grid */}
                <div className="mt-16 grid gap-10 lg:grid-cols-2 justify-items-center">
                    
                    {/* Card 1: Software Solutions */}
                    <div className="flex flex-col w-full max-w-xl hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-900 ring-1 ring-white/15">
                            <video
                                className="w-full h-85 object-cover object-center"
                                src="https://altitudeimagingvideos.b-cdn.net/aerialmedia.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-white">Aerial Media</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-200">
                                    Elevate Your Brand
                                </p>
                                <p className="mt-2 text-sm text-white">
                                    Need professional drone footage that delivers real results?
                                    Whether it&apos;s social media content, community highlights, or full-scale commercial ads, Altitude Imaging captures and 
                                    produces stunning aerial videos tailored to your unique vision—using the latest drone technology and professional editing to make your message stand out.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Collaboration */}
                    <div className="flex flex-col w-full max-w-xl hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15">
                            <video
                                className="w-full h-85 object-cover object-center"
                                src="https://altitudeimagingvideos.b-cdn.net/Events.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-white">Events</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Turn your next event into unforgettable content.
                                </p>
                                <p className="mt-2 text-sm text-white">
                                    From festivals and grand openings to community gatherings and corporate events, Altitude Imaging captures every moment from breathtaking aerial angles. Our professional 
                                    event coverage helps you relive the energy, showcase attendance, and promote future events with stunning highlight reels and promotional videos.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Collaboration */}
                    <div className="flex flex-col w-full max-w-xl hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15">
                            <video
                                className="w-full h-85 object-cover object-center"
                                src="https://altitudeimagingvideos.b-cdn.net/Marketing.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-white">Business Marketing</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Showcase your business like never before.
                                </p>
                                <p className="mt-2 text-sm text-white">
                                    We help businesses of all sizes stand out with cinematic aerial content perfect for websites, social media, and digital ads. 
                                    Whether you&apos;re promoting your services, showing off your location, or creating a brand story, our professional 
                                    drone videos help you capture attention and turn viewers into customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2: Collaboration */}
                    <div className="flex flex-col w-full max-w-xl hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15">
                            <video
                                className="w-full h-85 object-cover object-center"
                                src="https://altitudeimagingvideos.b-cdn.net/Management.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-white">Social Media Management</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Let your content work for you.
                                </p>
                                <p className="mt-2 text-sm text-white">
                                    We don&apos;t just create stunning videos—we help you share them with the right audience. Altitude Imaging offers 
                                    social media management services to keep your business active online with consistent posting, audience engagement, and strategy-driven content 
                                    that boosts your reach and grows your brand across platforms like Facebook, Instagram, TikTok, and YouTube.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
