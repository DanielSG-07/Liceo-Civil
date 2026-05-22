import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import projectsData from '../data/projectsData';
import { Users, Calendar, ExternalLink, BookOpen, FlaskConical, User } from 'lucide-react';

// Datos de los autores (Se mantiene idéntico)
const authorsData = [
    {
        id: 1,
        name: 'Ortiz Zambrano Maryori Yaquelin',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Perez Garcia Jismalkar Gabriela',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Zambrano Perez Jenica Milagros',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Dayner Leandro Mosquera Calixto',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: 5,
        name: 'Romer Santiago Montilva Guerrero',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: 6,
        name: 'Ender Javier Franco Sanchez',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: 7,
        name: 'Cristofer Daniel Labrador Vera',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: 8,
        name: 'Moreno Vera Benjamin Miguel',
        role: 'Estudiante',
        bio: 'Frase/Mensaje personal',
        image: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop'
    }
];

const menciones = {
    Ciencias: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        icon: <FlaskConical size={16} className="text-cyan-400" />,
        glow: 'shadow-[0_0_50px_rgba(0,229,255,0.1)]',
        bar: 'from-cyan-500 to-cyan-300',
        hover: 'hover:border-cyan-500/40 hover:bg-cyan-500/5'
    },
    Humanidades: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        icon: <BookOpen size={16} className="text-purple-400" />,
        glow: 'shadow-[0_0_50px_rgba(168,85,247,0.1)]',
        bar: 'from-purple-500 to-purple-300',
        hover: 'hover:border-purple-500/40 hover:bg-purple-500/5'
    },
};

export default function Authors() {
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
            links: { color: "#00e5ff", distance: 150, enable: true, opacity: 0.1, width: 1 },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 0.4, straight: false },
            number: { value: 30, density: { enable: true, area: 1000 } },
            opacity: { value: 0.5, random: true },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
    };

    const project = projectsData && projectsData.length ? projectsData[0] : null;
    const style = (project && menciones[project.mencion]) ? menciones[project.mencion] : menciones['Ciencias'];

    return (
        <div className="relative min-h-screen bg-[#040814] font-sans flex flex-col overflow-x-hidden antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
            {/* Partículas de Fondo */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Particles id="tsparticles-authors" init={particlesInit} options={particlesConfig} />
            </div>

            <Navbar />

            <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* ─── Hero del Proyecto Principal ─── */}
                {project && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`relative w-full rounded-xl overflow-hidden border border-white/5 mb-12 bg-[#060d22]/80 backdrop-blur-md ${style.glow}`}>
                        
                        <div className="relative h-60 sm:h-72 md:h-96 w-full overflow-hidden bg-[#02050d] flex items-center justify-center border-b border-white/5">
                            <img
                                src={project.portadaURL}
                                alt={project.titulo}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl saturate-150"
                            />
                            <img
                                src={project.portadaURL}
                                alt={project.titulo}
                                className="relative z-10 w-full h-full object-contain p-6 sm:p-8"
                            />
                            <div className={`absolute z-30 top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase backdrop-blur-md ${style.bg} ${style.border} ${style.text}`}>
                                {style.icon}
                                {project.mencion}
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 md:p-10">
                            <div className={`w-16 h-[3px] bg-gradient-to-r ${style.bar} mb-5 rounded-full`} />
                            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-snug tracking-wide mb-6">
                                {project.titulo}
                            </h1>

                            <div className="flex flex-wrap gap-y-3 gap-x-6 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                                    <Users size={15} className={style.text} />
                                    <span className="text-gray-300 font-medium">{project.autores.join(', ')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm ml-auto sm:ml-0">
                                    <Calendar size={15} />
                                    <span>Año: {project.año}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* ─── Ficha Técnica y Resumen ─── */}
                {project && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Izquierda: Ficha Técnica (1 Columna en LG) */}
                        <motion.section 
                            initial={{ opacity: 0, x: -20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-1 flex flex-col justify-start">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-6 bg-cyan-500 rounded-full shadow-[0_0_8px_#00e5ff]" />
                                <h2 className="text-white text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Ficha Técnica</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                                <div className={`border rounded-lg p-4 flex items-center gap-4 bg-[#060d22]/40 ${style.border}`}>
                                    <div className={`p-2 rounded-md ${style.bg}`}>{style.icon}</div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 tracking-widest uppercase font-semibold">Mención</p>
                                        <p className={`font-bold text-sm tracking-wide ${style.text}`}>{project.mencion}</p>
                                    </div>
                                </div>
                                <div className="border border-white/5 bg-[#060d22]/40 rounded-lg p-4 flex items-center gap-4">
                                    <div className="p-2 rounded-md bg-white/5">
                                        <Calendar size={16} className="text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 tracking-widest uppercase font-semibold">Año Escolar</p>
                                        <p className="text-white font-bold text-sm">{project.año}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Derecha: Resumen (2 Columnas en LG) */}
                        <motion.section 
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.5, delay: 0.3 }} 
                            className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-6 bg-cyan-500 rounded-full shadow-[0_0_8px_#00e5ff]" />
                                <h2 className="text-white text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Resumen del Proyecto</h2>
                            </div>
                            <div className="bg-[#060d22]/50 backdrop-blur-sm border border-white/5 p-5 sm:p-6 rounded-lg h-full flex items-center">
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">{project.resumen}</p>
                            </div>
                        </motion.section>
                    </div>
                )}

                {/* ─── Video Defensa e Interactivos ─── */}
                {project && (project.videoURL || (project.documentoURL && project.documentoURL !== '#')) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {project.videoURL && (
                            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-6 bg-cyan-500 rounded-full" />
                                    <h2 className="text-white text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Video Defensa</h2>
                                </div>
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/5 bg-black shadow-lg">
                                    <iframe src={project.videoURL} title={`Video de ${project.titulo}`} className="w-full h-full" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                            </motion.section>
                        )}

                        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-6 bg-cyan-500 rounded-full" />
                                    <h2 className="text-white text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Documentos y Anexos</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {project.documentoURL && project.documentoURL !== '#' && (
                                        <a href={project.documentoURL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-cyan-500/5 text-cyan-400 border border-cyan-500/20 px-4 py-3 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all group">
                                            <span className="flex items-center gap-2.5"><ExternalLink size={14} /> Documento Principal</span>
                                            <span className="text-[10px] opacity-60">PDF</span>
                                        </a>
                                    )}
                                    {project.anexos && project.anexos.map((anexo, idx) => (
                                        anexo.url && anexo.url !== '#' && (
                                            <a key={idx} href={anexo.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/3 text-gray-300 border border-white/5 px-4 py-3 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-white/5 hover:text-white transition-all group">
                                                <span className="flex items-center gap-2.5"><ExternalLink size={14} /> {anexo.titulo}</span>
                                                <span className="text-[10px] opacity-40">ANEXO</span>
                                            </a>
                                        )
                                    ))}
                                    {(!project.documentoURL || project.documentoURL === '#') && (!project.anexos || project.anexos.length === 0) && (
                                        <div className="border border-white/5 bg-white/3 rounded-lg p-6 text-center">
                                            <p className="text-gray-500 text-xs tracking-wider uppercase">Documentos en proceso de digitalización</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    </div>
                )}

                {/* ─── Sección: Autores de la Web (Rediseño UX) ─── */}
                <hr className="border-white/5 my-4" />
                
                <div className="mt-10">
                    <div className="text-center md:text-left mb-10">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <div className="w-1.5 h-8 bg-cyan-500 shadow-[0_0_12px_#00e5ff] rounded-full" />
                            <h2 className="text-white text-2xl sm:text-3xl font-black tracking-widest uppercase">
                                Autores de la Web
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
                            Conoce al equipo de desarrollo y colaboradores encargados del diseño de la plataforma digital del Liceo Ángel María Duque.
                        </p>
                    </div>

                    {/* Grid Autores: 1 Columna en móvil, 2 en Escritorio */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        {authorsData.map((author, index) => (
                            <motion.div 
                                key={author.id} 
                                initial={{ opacity: 0, y: 15 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, margin: "-50px" }} 
                                transition={{ duration: 0.4, delay: index * 0.05 }} 
                                className={`group relative flex items-center gap-5 bg-[#060d22]/40 border border-white/5 rounded-xl p-4 transition-all duration-300 ${style.hover}`}>
                                
                                {/* Avatar circular con borde estilizado */}
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/5 group-hover:border-cyan-500/30 transition-colors bg-slate-900 flex items-center justify-center">
                                    {author.image ? (
                                        <img src={author.image} alt={author.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <User className="text-white/20" size={24} />
                                    )}
                                </div>

                                {/* Contenido de Texto */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white text-base sm:text-lg font-bold tracking-wide truncate group-hover:text-cyan-300 transition-colors">
                                        {author.name}
                                    </h4>
                                    <p className="text-cyan-400 text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-1">
                                        {author.role}
                                    </p>
                                    <p className="text-gray-400 text-xs sm:text-sm font-light line-clamp-2 italic">
                                        "{author.bio}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}