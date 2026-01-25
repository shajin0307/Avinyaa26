import React from 'react';
import logoDark from '../../assets/avinyaa-logo-new.png';
import logoLight from '../../assets/avinyaa-logo-light.png';

const Navbar = ({ scrolled, isDark, toggleTheme }) => {
    const handleThemeToggle = (e) => {
        if (!document.startViewTransition) {
            toggleTheme();
            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const right = window.innerWidth - x;
        const bottom = window.innerHeight - y;
        const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

        const transition = document.startViewTransition(() => {
            toggleTheme();
        });

        transition.ready.then(() => {
            // Animate the circle clip-path
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 700,
                    easing: 'ease-out',
                    pseudoElement: '::view-transition-new(root)',
                }
            );
        });
    };
    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? (isDark ? 'bg-[#8B0000]/90' : 'bg-[#B22222]/90') + ' backdrop-blur-md py-4 border-b ' + (isDark ? 'border-white/10' : 'border-black/10') : 'bg-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <img
                            src={isDark ? logoDark : logoLight}
                            alt="Avinyaa '26 Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    <div className="hidden lg:flex items-center gap-16">
                        {['Home', 'Missions', 'Gallery', 'Developers'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`relative text-[10px] font-display font-bold ${isDark ? 'text-rose-200 hover:text-white' : 'text-rose-100 hover:text-black'} transition-all tracking-[0.5em] uppercase group`}
                            >
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons & Toggle Group */}
                    <div className="flex items-center gap-12">
                        {/* Action Button */}
                        <div className="flex items-center gap-8">
                            <button className={`hidden sm:flex items-center gap-2 text-[10px] font-display font-bold ${isDark ? 'text-rose-200 hover:text-primary' : 'text-rose-100 hover:text-primary'} tracking-[0.3em] uppercase transition-colors`}>
                                <span className="material-symbols-outlined text-sm">info</span> About Us
                            </button>
                            <button className="relative px-6 py-2.5 bg-primary/10 border border-primary/50 hover:bg-primary transition-all group">
                                <span className="relative z-10 text-[10px] font-display font-black tracking-[0.3em] uppercase text-white">
                                    Register
                                </span>
                            </button>
                        </div>

                        {/* System Status - Theme Toggle */}
                        <button
                            onClick={handleThemeToggle}
                            className={`relative group h-7 w-24 rounded-full border ${isDark ? 'border-primary/40 bg-black/40' : 'border-primary/40 bg-white/40'} backdrop-blur-md transition-all hover:border-primary overflow-hidden`}
                        >
                            {/* Sliding Dot Container */}
                            <div
                                className={`absolute top-0.5 bottom-0.5 w-6 h-6 rounded-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isDark ? 'left-0.5' : 'left-[calc(100%-1.625rem)]'}`}
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </div>
                            </div>

                            {/* Text Labels - Crossfade for stability */}
                            <span
                                className={`absolute top-1/2 -translate-y-1/2 right-2 text-[8px] font-bold uppercase font-display tracking-[0.15em] text-primary transition-all duration-500 ${isDark ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                            >
                                Red Chip
                            </span>
                            <span
                                className={`absolute top-1/2 -translate-y-1/2 left-2 text-[8px] font-bold uppercase font-display tracking-[0.15em] text-primary transition-all duration-500 ${!isDark ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                            >
                                White Chip
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* View Transition Styles */}
            <style>{`
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        ::view-transition-old(root) {
          z-index: 1;
        }
        ::view-transition-new(root) {
          z-index: 9999;
          pointer-events: none;
        }
      `}</style>
        </>
    );
};

export default Navbar;
