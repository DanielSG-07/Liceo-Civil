import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Users, BookOpen, FlaskConical } from 'lucide-react';
import Navbar from './Navbar';
import projectsData from '../data/projectsData';

// Colores de badge según mención
const menciones = {
    Ciencias: {
        bg: 'bg-cyan-500/20',
        border: 'border-cyan-500/50',
        text: 'text-cyan-300',
        icon: <FlaskConical size={12} className="text-cyan-400" />,
        glow: 'shadow-[0_0_15px_rgba(0,229,255,0.2)]',
    },
    Humanidades: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/50',
        text: 'text-purple-300',
        icon: <BookOpen size={12} className="text-purple-400" />,
        glow: 'shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    },
};

// Estado vacío / sin proyectos
function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-32 text-center px-4">
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
                Los proyectos de investigación del Liceo Ángel María Duque estarán disponibles próximamente.
            </p>
        </div>
    );
}

// Tarjeta individual de proyecto
function ProjectCard({ project, index }) {
    const style = menciones[project.mencion] || menciones['Ciencias'];

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col bg-gradient-to-b from-[#0b1b36] to-[#040d1a] border border-white/10 rounded-sm overflow-hidden group hover:border-magazine-cyan/40 transition-all duration-400 ${style.glow}`}
        >
            {/* Portada */}
            <div className="relative w-full h-48 overflow-hidden bg-[#000a12] flex items-center justify-center">
                {/* Fondo desenfocado */}
                <img
                    src={project.caratulaURL || project.portadaURL}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-md saturate-150 group-hover:opacity-60 transition-opacity duration-500"
                />
                {/* Imagen real sin recortar */}
                <img
                    src={project.caratulaURL || project.portadaURL}
                    alt={project.titulo}
                    className="relative z-10 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradiente sobre la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a] via-transparent to-black/30" />
                {/* Badge de mención */}
                <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${style.bg} ${style.border} ${style.text}`}>
                    {style.icon}
                    {project.mencion}
                </div>
                {/* Año */}
                <span className="absolute top-3 left-3 text-[10px] text-white/50 tracking-[0.2em] font-medium bg-black/40 px-2 py-1 rounded-full">
                    {project.año}
                </span>
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1 p-6">
                {/* Línea decorativa cian */}
                <div className="w-8 h-[2px] bg-magazine-cyan shadow-[0_0_8px_#00e5ff] mb-4" />

                <h3 className="text-white font-black text-lg leading-snug tracking-wide mb-3 group-hover:text-magazine-cyan transition-colors duration-300">
                    {project.titulo}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {project.resumen}
                </p>

                {/* Autores */}
                <div className="flex items-center gap-2 mb-5">
                    <Users size={12} className="text-magazine-cyan/60 flex-shrink-0" />
                    <p className="text-magazine-cyan/70 text-[11px] tracking-wider truncate">
                        {project.autores.join(' · ')}
                    </p>
                </div>

                {/* Botón Ver detalles */}
                <Link
                    to={`/proyectos/${project.id}`}
                    className="relative flex items-center justify-center gap-2 w-full py-2.5 border border-magazine-cyan/40 text-magazine-cyan text-xs font-bold tracking-[0.2em] uppercase hover:bg-magazine-cyan/10 hover:border-magazine-cyan transition-all duration-300 group/btn"
                >
                    <span>VER DETALLES</span>
                    <ExternalLink size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    {/* Brillo inferior al hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-magazine-cyan group-hover/btn:w-full transition-all duration-500" />
                </Link>
            </div>
        </motion.article>
    );
}

export default function ProjectList() {
    const isEmpty = projectsData.length === 0;

    return (
        <div className="relative min-h-screen bg-[#040814] font-sans flex flex-col">
            {/* Fondo con gradiente sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,229,255,0.05)_0%,_transparent_60%)] pointer-events-none" />

            <Navbar />

            <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-20">
                {/* Encabezado de sección */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-1 h-8 bg-magazine-cyan shadow-[0_0_10px_#00e5ff]" />
                        <h2 className="text-white text-4xl font-black tracking-[0.1em] uppercase drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
                            Proyectos
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm tracking-wider ml-5 max-w-xl">
                        Investigaciones y proyectos estudiantiles desarrollados por los alumnos del
                        <span className="text-magazine-cyan"> Liceo Ángel María Duque</span>.
                    </p>
                    {/* Línea separadora */}
                    <div className="mt-6 h-[1px] bg-gradient-to-r from-magazine-cyan/50 via-magazine-cyan/10 to-transparent" />
                </motion.div>

                {/* Grid de proyectos o estado vacío */}
                {isEmpty ? (
                    <EmptyState />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsData.filter(p => p.id !== 1).map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
