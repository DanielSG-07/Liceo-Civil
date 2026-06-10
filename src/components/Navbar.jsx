import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar({ searchQuery = '', onSearchChange }) {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (path) => location.pathname === path;
    const linkClass = (path) =>
        `block relative font-semibold text-sm tracking-[0.1em] uppercase transition-all ${isActive(path)
            ? 'text-white border-b-2 border-magazine-cyan pb-1'
            : 'text-gray-300 hover:text-white'
        }`;

    return (
        <nav className="relative z-20 w-full bg-transparent">
            {/* ─── Barra principal ─── */}
            <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5 sm:py-7">
                {/* Logo + Nombre */}
                <Link to="/" className="flex items-center gap-3">
                    <svg className="w-9 h-11 sm:w-12 sm:h-14 drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 4L6 16v24c0 16 11 28 26 32 15-4 26-16 26-32V16L32 4z" fill="#001f3f" stroke="#00e5ff" strokeWidth="2" />
                        <path d="M32 12L12 22v18c0 12 8 21 20 24 12-3 20-12 20-24V22L32 12z" fill="#000a12" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.5" />
                        <text x="32" y="42" textAnchor="middle" fill="#00e5ff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">L</text>
                        <text x="32" y="56" textAnchor="middle" fill="#00e5ff" fontSize="8" fontFamily="sans-serif" letterSpacing="2">AMD</text>
                    </svg>
                    <div className="flex flex-col">
                        <span className="text-white text-base sm:text-xl font-bold tracking-[0.1em] uppercase leading-tight drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">Liceo Ángel</span>
                        <span className="text-white text-base sm:text-xl font-bold tracking-[0.1em] uppercase leading-none drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">María Duque</span>
                        <span className="text-magazine-cyan text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase drop-shadow-[0_0_5px_rgba(0,229,255,0.8)] mt-0.5">Portal Web</span>
                    </div>
                </Link>

                {/* Links escritorio */}
                <div className="hidden md:flex items-center gap-8 lg:gap-10">
                    <Link to="/" className={linkClass('/')}>INICIO</Link>
                    <Link to="/proyectos" className={linkClass('/proyectos')}>PROYECTOS</Link>
                    <Link to="/autores" className={linkClass('/autores')}>NUESTRO PROYECTO</Link>
                    {onSearchChange ? (
                        <label htmlFor="project-search" className="relative flex items-center w-72">
                            <Search size={16} className="absolute left-3 text-gray-400" />
                            <input
                                id="project-search"
                                type="search"
                                value={searchQuery}
                                onChange={(event) => onSearchChange(event.target.value)}
                                placeholder="Buscar proyectos..."
                                className="w-full pl-11 pr-4 py-2 rounded-full bg-[#020814] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-magazine-cyan"
                            />
                        </label>
                    ) : (
                        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors border border-gray-600 rounded-full px-4 py-1.5 ml-2">
                            <Search size={15} />
                            <span className="text-sm font-medium tracking-wide">BUSCAR</span>
                        </button>
                    )}
                </div>

                {/* Hamburguesa */}
                <button
                    className="md:hidden text-white p-1"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menú"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* ─── Menú móvil ─── */}
            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#040d1a]/95 backdrop-blur-md border-t border-white/10 z-30 px-6 py-6 flex flex-col gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
                    <Link to="/" className={linkClass('/')} onClick={() => setMobileOpen(false)}>INICIO</Link>
                    <Link to="/proyectos" className={linkClass('/proyectos')} onClick={() => setMobileOpen(false)}>PROYECTOS</Link>
                    <Link to="/autores" className={linkClass('/autores')} onClick={() => setMobileOpen(false)}>NUESTRO PROYECTO</Link>
                    {onSearchChange ? (
                        <label htmlFor="project-search-mobile" className="flex items-center gap-2 text-gray-300 border border-gray-700 rounded-full px-4 py-2 w-full">
                            <Search size={14} className="text-gray-400" />
                            <input
                                id="project-search-mobile"
                                type="search"
                                value={searchQuery}
                                onChange={(event) => onSearchChange(event.target.value)}
                                placeholder="Buscar proyectos..."
                                className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
                            />
                        </label>
                    ) : (
                        <div className="flex items-center gap-2 text-gray-400 border border-gray-700 rounded-full px-4 py-2 w-fit">
                            <Search size={14} />
                            <span className="text-sm font-medium">BUSCAR</span>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
