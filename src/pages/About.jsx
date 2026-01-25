
import { useEffect, useRef, useState, useMemo } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import CircularGallery from "../components/CircularGallery";
import { useOutletContext } from "react-router-dom";
import LightRays from "../components/LightRays";

// Member Photos
import bhuvaneshImg from '../assets/memebers photo/bhuvanesh .jpeg';
import narenImg from '../assets/memebers photo/naren.jpeg';
import sanjeevImg from '../assets/memebers photo/sanjeev.jpeg';
import shajinImg from '../assets/memebers photo/shajin.jpeg';
import vamanImg from '../assets/memebers photo/vaman.jpeg';
import girijaImg from '../assets/memebers photo/girija.jpeg';
import hasikaImg from '../assets/memebers photo/hasika.jpeg';
import ssrutheegaImg from '../assets/memebers photo/Shrutheega.jpeg';
import kumariImg from '../assets/memebers photo/kumari.jpeg';
import burhanImg from '../assets/memebers photo/burhan.jpeg';
import mahadiyaImg from '../assets/memebers photo/mahadhiya.jpeg';
import deepakImg from '../assets/memebers photo/deepak.jpeg';
import dharmaduraiImg from '../assets/memebers photo/dharmadurai.jpeg';
import ezhumalaiImg from '../assets/memebers photo/ezhumalai.jpeg';
import jothishwaranImg from '../assets/memebers photo/jothishwaran.jpeg';
import lakshmiImg from '../assets/memebers photo/lakshmi .jpeg';
import kamalikaImg from '../assets/memebers photo/kamalika.jpeg';
import mathinshackImg from '../assets/memebers photo/mathinshack.jpg';

import treasurerImg from '../assets/memebers photo/treasurer.jpg';

const About = () => {
  const canvasRef = useRef(null);
  const [activeDev, setActiveDev] = useState(null);
  const { isDark } = useOutletContext() || { isDark: true };

  // Coordinators Data
  const coordinators = useMemo(() => [
    { id: 1, name: "Kumari Selvi C", role: "President", image: kumariImg, gmail: "selvi16122005@gmail.com", linkedin: "http://www.linkedin.com/in/kumari-selvi-2314032b8" },
    { id: 2, name: "Shajin S P", role: "Vice President", image: shajinImg, gmail: "shajinsree03@gmail.com", linkedin: "http://www.linkedin.com/in/shajinaiml" },
    { id: 3, name: "Mohammed Burhan K", role: "Secretary", image: burhanImg, gmail: "23204030@rmd.ac.in", linkedin: "https://www.linkedin.com/in/mohammed-burhan-61a710285" },
    { id: 4, name: "Mahadiya", role: "Joint Secretary", image: mahadiyaImg, gmail: "23204027@rmd.ac.in", linkedin: "https://www.linkedin.com/in/mahadiya-maheen-k-f-b236b629a/" },
    { id: 5, name: "Yuvaraj R", role: "Treasurer", image: treasurerImg, gmail: "23204059@rmd.ac.in", linkedin: "https://www.linkedin.com/in/yuvarajr15/" },
    { id: 9, name: "Mathinshack Meshack", role: "Office Bearers", image: mathinshackImg, gmail: "23204028@rmd.ac.in", linkedin: "https://www.linkedin.com/in/mathinshack-meshack-7160232a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { id: 6, name: "Jothishwaran S", role: "Office Bearers", image: jothishwaranImg, gmail: "23204061@rmd.ac.in", linkedin: "https://www.linkedin.com/in/jothishwaran-s-914406314/" },
    { id: 7, name: "Lakshmi Shri", role: "Office Bearers", image: lakshmiImg, gmail: "23204026@rmd.ac.in", linkedin: "https://www.linkedin.com/in/lakshmi-shri-41705a2b0/" },
    { id: 8, name: "Kamalika", role: "Office Bearers", image: kamalikaImg, gmail: "23204020@rmd.ac.in", linkedin: "https://www.linkedin.com/in/kamalika-m01/" },
  ], []);
  // Developers Data for Circular Gallery
  const developers = useMemo(() => [
    { id: 1, name: "Bhuvanesh Kumar S", image: bhuvaneshImg, gmail: "bhuvaneshkumar433@gmail.com", linkedin: "https://www.linkedin.com/in/bhuvaneshkumar08/" },
    { id: 2, name: "Dharmadurai K", image: dharmaduraiImg, gmail: "dharmaduraik04@gmail.com", linkedin: "https://in.linkedin.com/in/dharmadurai-k-39a9a2293" },
    { id: 3, name: "Girija", image: girijaImg, gmail: "girijasd904@gmail.com", linkedin: "https://www.linkedin.com/in/girija06/" },
    { id: 4, name: "Hasika", image: hasikaImg, gmail: "hasika2014raj@gmail.com", linkedin: "www.linkedin.com/in/hasika-rajendran-16083a2a7" },
    { id: 5, name: "Naren", image: narenImg, gmail: "23204035@rmd.ac.in", linkedin: "https://www.linkedin.com/in/om-naren-d-68a2502b5/" },
    { id: 6, name: "Sanjeev", image: sanjeevImg, gmail: "23204045@rmd.ac.in", linkedin: "https://www.linkedin.com/in/sanjeevrajg2312/" },
    { id: 7, name: "Shajin", image: shajinImg, gmail: "shajinsree03@gmail.com", linkedin: "https://www.linkedin.com/in/shajinaiml/" },
    { id: 8, name: "Ssrutheega", image: ssrutheegaImg, gmail: "23204052@rmd.ac.in", linkedin: "https://www.linkedin.com/in/ssrutheega-g-i/" },
    { id: 9, name: "Deepak", image: deepakImg, gmail: "23204056@rmd.ac.in", linkedin: "https://www.linkedin.com/in/vijji-deepak-6b0a0b312/" },
    { id: 10, name: "Vaman", image: vamanImg, gmail: "23204062@rmd.ac.in", linkedin: "https://www.linkedin.com/in/vaman-prabakar-32b6072a1/" },
  ], []);

  const galleryItems = useMemo(() => developers.map(d => ({
    ...d,
    text: d.name, // Text for the WebGL plane
    image: d.image
  })), [developers]);

  // === RISING PARTICLES ===
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    let particles = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initial Particles
    const PARTICLE_COUNT = 40;

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h + h; // Start below or randomly
        this.size = Math.random() * 2 + 0.5; // Small size
        this.speedY = Math.random() * 1 + 0.2; // Slow rising
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = `rgba(225, 29, 72, ${this.opacity})`; // Rose/Red tint
      }
      update() {
        this.y -= this.speedY;
        if (this.y < -10) {
          this.y = h + 10;
          this.x = Math.random() * w;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
        // Randomize starting Y for initial load
        particles[i].y = Math.random() * h;
      }
    };
    init();

    let frameId;
    const animate = () => {
      // Clear with Fade effect for trails (optional, but keep clean for now)
      ctx.fillStyle = isDark ? '#2a0a10' : '#ffffff'; // Background color
      // Actually, let's just clearRect to keep transparent for CSS bg
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []); // Removed isDark dependency to prevent re-init on theme switch


  return (
    <div className={`relative isolate min-h-screen font-body overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#2a0a10] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />

      {/* LightRays Effect Removed for Performance */}
      {/* <div className="absolute inset-0 z-[1] opacity-50 pointer-events-none">
        <LightRays
          raysColor={isDark ? "#ff0000" : "#ff99aa"}
          raysSpeed={0.2}
          lightSpread={2.0}
          rayLength={0.9}
          mouseInfluence={0.5}
          noiseAmount={0.04}
        />
      </div> */}


      {/* HERO SECTION - REFINED */}
      <section className="relative pt-32 pb-20 px-6 text-center z-10 min-h-[50vh] flex flex-col items-center justify-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 backdrop-blur-md ${isDark ? 'border-rose-400/30 bg-rose-900/30 shadow-[0_0_20px_rgba(225,29,72,0.2)]' : 'border-rose-200 bg-white/50 shadow-sm'}`}>
          <span className={`text-xs font-bold tracking-[0.25em] uppercase ${isDark ? 'text-rose-100' : 'text-rose-900'}`}>The Team</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.0] font-display">
          <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>BEHIND</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-500 to-rose-400 drop-shadow-md">
            AVINYAA
          </span>
        </h1>

        <p className={`max-w-2xl mx-auto text-lg font-medium leading-relaxed ${isDark ? 'text-rose-100/90' : 'text-gray-600'}`}>
          The architects of innovation. Planning, building, and launching experiences that inspire.
        </p>
      </section>

      {/* CAROUSEL FOR COORDINATORS */}
      <section className="relative z-10 space-y-24 pb-20">
        <InfiniteCarousel title="Event Coordinators" data={coordinators} isDark={isDark} />

        {/* CIRCULAR GALLERY FOR DEVELOPERS */}
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-100 to-rose-400 drop-shadow-md">
            The Developers
          </h2>

          <div className="h-[600px] w-full relative">
            {/* Circular Gallery */}
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor={isDark ? "#fb7185" : "#be123c"}
              borderRadius={0.05}
              onHoverItem={setActiveDev}
            />

            {/* Developer Info Overlay - Appears when looking at a dev (centered) */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-sm px-4 pointer-events-none z-30">
              {activeDev && (
                <div className={`p-6 rounded-2xl border backdrop-blur-md pointer-events-auto transition-all duration-300 animate-fade-in-up hover:scale-105 ${isDark ? 'bg-[#120205]/80 border-rose-500/30 hover:border-rose-400 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]' : 'bg-white/80 border-rose-200 shadow-xl'}`}>
                  <h3 className={`text-2xl font-display font-bold text-center mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{activeDev.name}</h3>
                  <div className="w-12 h-0.5 bg-rose-500 mx-auto mb-3"></div>
                  <p className={`mb-5 text-center text-sm font-bold tracking-widest uppercase ${isDark ? 'text-rose-200/80' : 'text-rose-700'}`}>Full Stack Developer</p>

                  <div className="flex gap-8 justify-center">
                    {activeDev.gmail && (
                      <a href={`mailto:${activeDev.gmail}`} className={`text-xl hover:scale-110 transition-all duration-300 p-2 rounded-full ${isDark ? 'text-rose-400 hover:text-white bg-white/5' : 'text-rose-600 hover:text-rose-800 bg-rose-50'}`}>
                        <MdEmail />
                      </a>
                    )}
                    {activeDev.linkedin && (
                      <a href={activeDev.linkedin} target="_blank" rel="noopener noreferrer" className={`text-xl hover:scale-110 transition-all duration-300 p-2 rounded-full ${isDark ? 'text-rose-400 hover:text-white bg-white/5' : 'text-rose-600 hover:text-rose-800 bg-rose-50'}`}>
                        <FaLinkedin />
                      </a>
                    )}

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Original InfiniteCarousel component - Styled to match Events Page & Theme
const InfiniteCarousel = ({ title, data, isDark }) => {
  const carouselRef = useRef(null);

  // Duplicate data for infinite loop
  const displayData = [...data, ...data];

  return (
    <div className="py-10 overflow-hidden relative group">
      <h2 className="text-xl md:text-5xl font-display font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-100 to-rose-400 drop-shadow-md">
        {title}
      </h2>

      {/* Fade Gradients */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-gradient-to-r ${isDark ? "from-[#2a0a10] to-transparent" : "from-gray-100 to-transparent"
          }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-gradient-to-l ${isDark ? "from-[#2a0a10] to-transparent" : "from-gray-100 to-transparent"
          }`}
      />

      <div ref={carouselRef} className="overflow-hidden relative w-full flex">
        <div
          className="flex gap-8 px-4 animate-scroll"
          style={{ width: "max-content" }}
        >
          {displayData.map((p, i) => (
            <div
              key={i}
              className={`min-w-[300px] h-[440px] rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 cursor-pointer group/card relative overflow-hidden shrink-0 ${isDark
                ? "bg-[#120205] border-rose-500/30 shadow-[0_0_25px_rgba(225,29,72,0.3)] hover:shadow-[0_0_45px_rgba(225,29,72,0.5)] hover:border-rose-400"
                : "bg-white border-rose-200 shadow-xl"
                }`}
            >
              {/* IMAGE SECTION */}
              <div className="h-[70%] w-full overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#120205]/60 to-transparent" : "opacity-0"
                    }`}
                />
              </div>

              {/* TEXT SECTION */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-center flex flex-col items-center">
                <h3
                  className={`text-base md:text-lg font-display font-black mb-1 uppercase leading-tight transition-colors ${isDark ? "text-white group-hover/card:text-rose-400" : "text-gray-900"
                    }`}
                >
                  {p.name}
                </h3>

                <p
                  className={`text-sm font-display font-bold tracking-widest uppercase mb-3 ${isDark ? "text-rose-200/70" : "text-rose-600/70"
                    }`}
                >
                  {p.role}
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-4 opacity-0 translate-y-3 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
                  {p.gmail && (
                    <a
                      href={`mailto:${p.gmail}`}
                      className={`${isDark
                        ? "text-white hover:text-rose-400"
                        : "text-gray-700 hover:text-rose-600"
                        }`}
                    >
                      <MdEmail size={20} />
                    </a>
                  )}
                  {p.linkedin && (
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDark
                        ? "text-white hover:text-rose-400"
                        : "text-gray-700 hover:text-rose-600"
                        }`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default About;
