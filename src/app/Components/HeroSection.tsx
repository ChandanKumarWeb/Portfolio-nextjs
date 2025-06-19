"use client";
import React from "react";

function HeroSection() {
    return (
        <div>
            <section id="heroSection" className="bg-white dark:bg-gray-900 mt-6">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Welcome to My Portfolio
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            Explore my projects, skills, and experiences.
                        </p>
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;