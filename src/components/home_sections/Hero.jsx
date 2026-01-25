import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Countdown from './Countdown';

const HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBGKMeJjd8Ny6E0nslFciPUkWRDeLy0CJKK1NPccHn47_XnKOF8uziQORUhFmy_rxeCqfLSwGYXUlhuWirfM_FJk1nRNbSN5TyNatopMUg_n_5BI43Q2VCCo9uP_Rhb5mGDbCw6SykM_RGTpZB9BATBie_TU-oNJ5s3JwaBksclwBPZN8srEXSc_Tk4ktqW9wFQ9yK-e7kGzTCzYjRWHQxgNjHICa2tcv4s1adowjpkNQWlPJo7PuKPXmqJyxr8T6mtU4BLtoxvIok";

const Hero = () => {
    const { isDark } = useOutletContext() || { isDark: true }; // Default to dark if no context

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 text-center px-6 overflow-hidden">
            {/* Background Image & Cinematic Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_BG}
                    alt="Space Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-screen scale-110"
                />

                {/* Dynamic Radial Overlay - Red Chip (Dark) = Burgundy/Red, White Chip (Light) = White/Gray */}
                <div className={`absolute inset-0 transition-colors duration-700 ${isDark
                    ? 'bg-gradient-to-b from-[#8B0000] via-[#3d0000] to-black opacity-90'
                    : 'bg-gradient-to-b from-white via-gray-100 to-white opacity-95'
                    }`} />

                {/* Soft center glow to highlight text */}
                <div className={`absolute inset-0 ${isDark
                    ? 'bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.2)_0%,_transparent_60%)]'
                    : 'bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.05)_0%,_transparent_60%)]'
                    }`} />

                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] transition-all duration-700"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">


                {/* Hero Typography - Matching Image Hierarchy */}
                <div className="space-y-4">
                    <h2 className={`font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-[0.1em] uppercase opacity-80 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        Ascend Into
                    </h2>

                    <h1 className={`font-display font-black leading-none tracking-[-0.02em] transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <span className={`text-5xl md:text-6xl lg:text-9xl ${isDark ? 'drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]'}`}>
                            AVINYAA<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">'26</span>
                        </span>
                    </h1>

                    {/* Symposium Subtitle */}
                    <p className={`mt-6 text-sm md:text-base lg:text-lg font-light tracking-[0.3em] uppercase opacity-70 transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        3rd National Level Symposium
                    </p>
                </div>

                {/* Tagline - Spaced as per Image */}
                <p className={`mt-16 text-sm md:text-lg font-light tracking-[0.8em] uppercase leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Where Innovation Meets Infinity
                </p>

                {/* EVENT BUTTON */}
                <div className="mt-12">
                    <Link to="/events" className={`inline-block px-10 py-4 rounded-full font-display font-bold tracking-[0.15em] uppercase text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 ${isDark
                        ? 'bg-gradient-to-r from-rose-900/40 to-red-900/40 border border-rose-500/50 text-white hover:bg-rose-900/60 hover:border-rose-400 shadow-[0_0_20px_rgba(225,29,72,0.2)] hover:shadow-[0_0_35px_rgba(225,29,72,0.5)] backdrop-blur-sm'
                        : 'bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300 shadow-lg hover:shadow-xl'
                        }`}>
                        Explore Events
                    </Link>
                </div>

                {/* Launch Countdown */}
                <div className="flex flex-col gap-6 justify-center items-center mt-16 opacity-90 hover:opacity-100 transition-opacity">
                    {/* Event Date */}
                    <span className={`text-xs md:text-sm font-display font-medium tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        February 9, 2026
                    </span>

                    <span className={`text-[10px] md:text-xs font-display font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Initiating launch in count of
                    </span>

                    <div className={`scale-110 md:scale-125 font-mono transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
                        <Countdown targetDate="2026-02-09T00:00:00" />
                    </div>

                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
