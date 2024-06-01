'use client';
import React from "react";
import Navbar from "../../Navbar";
import Link from "next/link";

const HomeMarketing = () => {
    return(
        <div>
            <Navbar/>
            <div className="flex justify-center items-center">
                <div>
                    <div>
                        <h1>Services</h1>
                        <h1>Out of Home Marketing</h1>
                        <h1>Impactful Outdoor Advertising</h1>
                        <p>Reach a broad audience with eye-catching, strategic outdoor advertisements.</p>
                        <span>150+ Projects Done</span>
                        <span>100+ Testimonials</span>
                        <Link href="/services/digitalMarketing">
                            <button>Explore Services</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeMarketing;