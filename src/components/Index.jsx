import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Navbar from './Navbar';
import projectsData from '../data/projectsData';

export default function Index() {
    // Extraer años únicos de los datos y ordenarlos de menor a mayor
    const yearsData = [...new Set(projectsData.map(p => p.año))].sort((a, b) => a - b);
    // Seleccionar el índice del último año por defecto
    const [activeYearIndex, setActiveYearIndex] = useState(yearsData.length > 0 ? yearsData.length - 1 : 0);
    const [searchQuery, setSearchQuery] = useState('');

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

    // Paleta de colores para los diferentes años (puedes ajustarla según necesites)
    const yearColors = [
        'from-[#0b1b36] to-[#040814]',
        'from-[#0f2142] to-[#040814]',
        'from-[#122e5e] to-[#040814]',
        'from-[#193a73] to-[#040814]',
        'from-[#1f4a8e] to-[#0a162b]'
    ];

    // Obtener los proyectos del año activo
    const currentYear = yearsData[activeYearIndex] || new Date().getFullYear();
    const activeProjects = projectsData.filter(p => p.año === currentYear && p.id !== 1);
    const normalizedSearch = searchQuery.trim().toLowerCase();
    const filteredActiveProjects = activeProjects.filter((project) => {
        if (!normalizedSearch) return true;
        const haystack = `${project.titulo} ${project.resumen} ${project.autores.join(' ')} ${project.mencion} ${project.año}`.toLowerCase();
        return haystack.includes(normalizedSearch);
    });
    const activeColor = yearColors[activeYearIndex % yearColors.length] || yearColors[0];

    // ─── Empty state cuando no hay proyectos ────────────────────────────────
    if (projectsData.length === 0) {
        return (
            <div className="relative w-full min-h-screen overflow-x-hidden bg-magazine-dark font-sans flex flex-col">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
                </div>
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center text-center z-10 px-4">
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-20 h-20 mb-6 rounded-full border-2 border-magazine-cyan/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                    >
                        <BookOpen size={36} className="text-magazine-cyan/60" />
                    </motion.div>
                    <h3 className="text-white text-2xl font-bold tracking-widest uppercase mb-3">
                        Cargando próximas investigaciones...
                    </h3>
                    <p className="text-gray-400 text-sm tracking-wider max-w-md">
                        Los proyectos del Liceo Ángel María Duque estarán disponibles próximamente.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden bg-magazine-dark font-sans flex flex-col">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
            </div>

            {/* ── Navbar reutilizable ── */}
            <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4">
                <div className="w-full h-full flex flex-col items-center justify-center relative -mt-10">

                    {/* ── Carrusel 3D — mapeado desde projectsData ── */}
                        {filteredActiveProjects.length === 0 ? (
                            <div className="w-full py-20 text-center text-white/80">
                                <p className="text-lg font-semibold">No se encontraron proyectos para esta búsqueda.</p>
                                <p className="text-sm text-gray-400 mt-2">Intenta cambiar el término de búsqueda o selecciona otro año.</p>
                            </div>
                        ) : (
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1.2,
                                        spaceBetween: -20
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: -30
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: -50
                                    }
                                }}
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
                                {filteredActiveProjects.map((project) => (
                                    <SwiperSlide key={project.id} className="w-[300px] sm:w-[380px] md:w-[480px] h-[480px] sm:h-[550px] md:h-[650px] flex items-center justify-center">
                                        <Link to={`/proyectos/${project.id}`} className="w-[85%] h-[90%] block">
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className={`relative w-full h-full mx-auto bg-magazine-dark p-0 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] md:shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10 rounded-sm`}
                                    >
                                        <div className="absolute inset-0 z-0">
                                            <img src={project.caratulaURL || project.portadaURL} alt={project.titulo} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000a12] via-[#000a12]/40 to-transparent opacity-90" />
                                        
                                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8">
                                            <div className="w-8 h-[3px] bg-magazine-cyan shadow-[0_0_10px_rgba(0,229,255,0.5)] mb-4" />
                                            <h4 className={`text-white font-black uppercase leading-tight tracking-wider drop-shadow-lg ${project.titulo.length > 40 ? 'text-base sm:text-lg md:text-xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
                                                {project.titulo}
                                            </h4>
                                        </div>
                                    </motion.div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                        )}

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-6 z-30 relative">
                        <Link to="/proyectos" className="group relative flex items-center justify-center gap-2 text-magazine-cyan font-bold tracking-[0.2em] text-sm transition-all hover:text-white px-8 py-3 outline-none">
                            <span className="text-lg opacity-70">«</span> EXPLORAR LISTADO <span className="text-lg opacity-70">»</span>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-magazine-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                    </motion.div>
                </div>
            </main>

            {/* ── Selector de Año ── */}
            <div className="relative z-20 w-full max-w-5xl mx-auto pb-10 px-4 mt-auto">
                <div className="relative flex justify-between items-center">
                    <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-600/50 -translate-y-1/2 z-0">
                        <div className="h-full bg-gradient-to-r from-blue-900 via-indigo-500 to-magazine-cyan shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-700 ease-in-out" style={{ width: `${(activeYearIndex / Math.max(1, yearsData.length - 1)) * 100}%` }} />
                    </div>

                    {yearsData.map((year, index) => {
                        const isActive = index === activeYearIndex;
                        const isPast = index <= activeYearIndex;
                        const isLast = index === yearsData.length - 1;

                        return (
                            <button key={year} onClick={() => setActiveYearIndex(index)} className="relative z-10 flex flex-col items-center group outline-none">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${isActive ? 'bg-[#000a12] border-magazine-cyan text-magazine-cyan shadow-[0_0_25px_rgba(0,229,255,0.7)] scale-125' : isPast ? 'bg-magazine-cyan border-magazine-cyan text-[#000a12]' : 'bg-[#000a12] border-gray-600 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-300'}`}>
                                    {isActive && <div className="absolute inset-2 border border-magazine-cyan/50 rounded-full animate-ping opacity-20" />}
                                    <span className="relative z-10">{year.toString().slice(-2)}'</span>
                                </div>
                                <span className={`absolute -bottom-8 text-xs whitespace-nowrap transition-colors duration-500 font-bold tracking-widest uppercase ${isActive ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : 'text-gray-500 group-hover:text-gray-400'}`}>
                                    {isActive && isLast ? `${year} (RECIENTE)` : `Año ${year}`}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
