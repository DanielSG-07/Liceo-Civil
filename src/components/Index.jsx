import React, { useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Search, Menu } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Index() {
    const [activeVolume, setActiveVolume] = useState(4);

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const particlesConfig = {
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
            color: { value: "#00e5ff" },
            links: { color: "#00e5ff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { value: 60, density: { enable: true, area: 1000 } },
            opacity: { value: 0.8, random: true, animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
    };

    const volumes = [
        { id: 'I', title: 'Volumen I', color: 'from-[#0b1b36] to-[#040814]' },
        { id: 'II', title: 'Volumen II', color: 'from-[#0f2142] to-[#040814]' },
        { id: 'III', title: 'Volumen III', color: 'from-[#122e5e] to-[#040814]' },
        { id: 'IV', title: 'Volumen IV', color: 'from-[#193a73] to-[#040814]' },
        { id: 'V', title: 'Volumen V - ÚLTIMO NÚMERO', color: 'from-[#1f4a8e] to-[#0a162b]' },
    ];

    const slides = [
        { id: 1, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop', title: 'Portada' },
        { id: 2, image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop', title: 'Ciencias Experimentales' },
        { id: 3, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', title: 'Tecnología Aplicada' },
        { id: 4, image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop', title: 'Humanidades Digitales' },
        { id: 5, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop', title: 'Proyectos Estudiantiles' },
        { id: 6, image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop', title: 'Arte y Sociedad' },
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-magazine-dark font-sans flex flex-col">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
            </div>

            <nav className="relative z-20 flex items-center justify-between px-12 py-8 bg-transparent">
                <div className="flex items-center gap-4">
                    {/* Inline shield SVG — replaces broken external logo */}
                    <svg className="w-12 h-14 drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 4L6 16v24c0 16 11 28 26 32 15-4 26-16 26-32V16L32 4z" fill="#001f3f" stroke="#00e5ff" strokeWidth="2"/>
                        <path d="M32 12L12 22v18c0 12 8 21 20 24 12-3 20-12 20-24V22L32 12z" fill="#000a12" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.5"/>
                        <text x="32" y="42" textAnchor="middle" fill="#00e5ff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">L</text>
                        <text x="32" y="56" textAnchor="middle" fill="#00e5ff" fontSize="8" fontFamily="sans-serif" letterSpacing="2">AMD</text>
                    </svg>
                    <div className="flex flex-col ml-2">
                        <h1 className="text-white text-2xl font-bold tracking-[0.1em] uppercase leading-tight drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">Liceo Ángel</h1>
                        <h2 className="text-white text-2xl font-bold tracking-[0.1em] uppercase leading-none drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">María Duque</h2>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-magazine-cyan text-sm tracking-[0.2em] font-medium uppercase drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">Revista Digital</span>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    <a href="#inicio" className="text-white relative font-semibold text-sm tracking-[0.1em] uppercase border-b-2 border-magazine-cyan pb-1">INICIO</a>
                    <a href="#menciones" className="text-gray-300 hover:text-white transition-all text-sm tracking-[0.1em] uppercase font-medium">MENCIONES</a>
                    <a href="#autores" className="text-gray-300 hover:text-white transition-all text-sm tracking-[0.1em] uppercase font-medium">AUTORES</a>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors border border-gray-600 rounded-full px-4 py-1.5 ml-4">
                        <Search size={16} />
                        <span className="text-sm font-medium tracking-wide">BUSCAR</span>
                    </button>
                </div>

                <button className="md:hidden text-white"><Menu size={24} /></button>
            </nav>

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4">
                <div className="w-full h-full flex flex-col items-center justify-center relative -mt-10">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={-50}
                        loop={true}
                        coverflowEffect={{
                            rotate: 35,
                            stretch: 20,
                            depth: 400,
                            modifier: 1.2,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        className="w-full max-w-[1400px] pb-10"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className="w-[380px] sm:w-[420px] md:w-[480px] h-[550px] sm:h-[600px] md:h-[650px] flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className={`relative w-[85%] h-[90%] mx-auto bg-gradient-to-b ${volumes[activeVolume].color} p-0 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] md:shadow-[0_30px_60px_rgba(0,0,0,0.9)]`}
                                >
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10 transition-opacity duration-300 swiper-slide-overlay" />
                                    <div className="absolute inset-1 z-0 bg-magazine-dark">
                                         <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-60 mix-blend-screen" />
                                    </div>
                                    <div className="absolute inset-0 z-20 flex flex-col p-8 bg-gradient-to-t from-black/90 via-black/20 to-black/60 border border-white/20">
                                         <div className="flex flex-col mb-auto items-center text-center mt-4">
                                              <h3 className="text-white text-3xl font-bold tracking-[0.15em] leading-[1.1] drop-shadow-md">LICEO ÁNGEL</h3>
                                              <h3 className="text-white text-3xl font-bold tracking-[0.15em] leading-[1.1] mb-2 drop-shadow-md">MARÍA DUQUE</h3>
                                              <p className="text-white/80 text-xs tracking-[0.2em] uppercase">{volumes[activeVolume].title}</p>
                                         </div>
                                         <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-magazine-cyan to-transparent opacity-50 my-6"></div>
                                         <div className="flex-1 flex justify-center items-center my-4 opacity-80">
                                              <div className="w-[80%] h-[80%] relative">
                                                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-magazine-cyan rounded-full shadow-[0_0_15px_#00e5ff]"></div>
                                                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_15px_#ec4899]"></div>
                                                <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                                                 <svg className="w-full h-full" viewBox="0 0 100 100">
                                                      <line x1="25" y1="50" x2="66" y2="25" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
                                                      <line x1="25" y1="50" x2="75" y2="66" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
                                                      <line x1="66" y1="25" x2="75" y2="66" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
                                                 </svg>
                                              </div>
                                         </div>
                                         <div className="mt-auto">
                                            <h4 className="text-magazine-cyan text-[1.4rem] font-black uppercase leading-[1.1] tracking-wide mb-1 flex items-center gap-2">
                                              <span className="w-1.5 h-6 bg-magazine-cyan shadow-[0_0_8px_#00e5ff]"></span>
                                              {slide.title}
                                            </h4>
                                            <div className="flex justify-between items-end mt-4">
                                              <div className="flex flex-col max-w-[50%]">
                                                <p className="text-[10px] text-white/70 tracking-wider">PROYECTOS CIENTÍFICOS 2024</p>
                                                <p className="text-[8px] text-white/50 mt-1">Liceo Ángel María Duque. Investigaciones en Ciencias Experimentales y Computación.</p>
                                              </div>
                                              <div className="flex flex-col items-end text-right border-l border-white/20 pl-2">
                                                <h5 className="text-white text-[11px] font-bold tracking-[0.2em] mb-1">INTERACTIVIDAD</h5>
                                                <p className="text-magazine-cyan text-[10px] tracking-widest font-bold">AVANZADA</p>
                                              </div>
                                            </div>
                                         </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>



                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-6 z-30 relative">
                        <button className="group relative flex items-center justify-center gap-2 text-magazine-cyan font-bold tracking-[0.2em] text-sm transition-all hover:text-white px-8 py-3 outline-none">
                            <span className="text-lg opacity-70">«</span> EXPLORAR ÚLTIMO VOLUMEN <span className="text-lg opacity-70">»</span>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-magazine-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </motion.div>
                </div>
            </main>

            <div className="relative z-20 w-full max-w-5xl mx-auto pb-10 px-4 mt-auto">
                <div className="relative flex justify-between items-center">
                    <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-600/50 -translate-y-1/2 z-0">
                        <div className="h-full bg-gradient-to-r from-blue-900 via-indigo-500 to-magazine-cyan shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-700 ease-in-out" style={{ width: `${(activeVolume / (volumes.length - 1)) * 100}%` }} />
                    </div>

                    {volumes.map((vol, index) => {
                        const isActive = index === activeVolume;
                        const isPast = index <= activeVolume;

                        return (
                            <button key={vol.id} onClick={() => setActiveVolume(index)} className="relative z-10 flex flex-col items-center group outline-none">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${isActive ? 'bg-[#000a12] border-magazine-cyan text-magazine-cyan shadow-[0_0_25px_rgba(0,229,255,0.7)] scale-125' : isPast ? 'bg-magazine-cyan border-magazine-cyan text-[#000a12]' : 'bg-[#000a12] border-gray-600 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-300'}`}>
                                    {isActive && <div className="absolute inset-2 border border-magazine-cyan/50 rounded-full animate-ping opacity-20" />}
                                    <span className="relative z-10">{vol.id}</span>
                                </div>
                                <span className={`absolute -bottom-8 text-xs whitespace-nowrap transition-colors duration-500 font-bold tracking-widest uppercase ${isActive ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : 'text-gray-500 group-hover:text-gray-400'}`}>
                                    {isActive ? vol.title : `Vol. ${vol.id}`}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
