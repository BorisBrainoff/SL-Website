import React from "react";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen font-sans bg-black text-white">
      {/* Hero Video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/stationary-light-landing-page.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur text-white flex justify-between px-4 py-3 text-sm">
          <div className="font-bold font-serif">SL Cosmology</div>
          <div className="flex space-x-3">
            <a href="#calculator" className="hover:underline">Calculator</a>
            <a href="#videos" className="hover:underline">Videos</a>
            <a href="#paper" className="hover:underline">Paper</a>
          </div>
        </nav>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2" style={{ fontFamily: 'Beaufort Pro, serif' }}>
            Stationary Light Cosmology
          </h1>
        </div>
      </section>
    </div>
  );
}
