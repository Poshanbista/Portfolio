import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300
        ${scrolled ? "shadow" : ""}`}>
            <div className='flex justify-between items-center px-6 py-6 max-w-7xl mx-auto'>
                {/* Logo */}
                <Link to="/" className='font-bold text-2xl text-blue-600'>
                    Poshan Bista
                </Link>

                {/* Desktop Menu */}
                <div className='hidden md:flex gap-16 font-semibold'>
                    <a href="#about" className='hover:text-blue-500'>About</a>
                    <a href="#skill" className='hover:text-blue-500'>Skill</a>
                    <a href="#education" className='hover:text-blue-500'>Education</a>
                    <a href="#projects" className='hover:text-blue-500'>Projects</a>
                    <a href="#contact" className='hover:text-blue-500'>Contact</a>
                </div>

                {/* Social Icons - desktop */}
                <div className='hidden md:flex gap-5'>
                    <a href='https://github.com/Poshanbista' target='_blank' rel='noreferrer'>
                        <FiGithub size={25} />
                    </a>
                    <a href='https://www.linkedin.com/in/poshan-bista-bb1064349/' target='_blank' rel='noreferrer'>
                        <FaLinkedinIn size={25} />
                    </a>
                </div>

                {/* Hamburger Menu Button - Mobile */}
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden bg-white shadow-md'>
                    <div className='flex flex-col gap-6 px-6 py-6'>
                        <a href="#about" className='hover:text-blue-500' onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#skill" className='hover:text-blue-500' onClick={() => setMenuOpen(false)}>Skill</a>
                        <a href="#education" className='hover:text-blue-500' onClick={() => setMenuOpen(false)}>Education</a>
                        <a href="#projects" className='hover:text-blue-500' onClick={() => setMenuOpen(false)}>Projects</a>
                        <a href="#contact" className='hover:text-blue-500' onClick={() => setMenuOpen(false)}>Contact</a>
                        <div className='flex gap-5 mt-4'>
                            <a href='https://github.com/Poshanbista' target='_blank' rel='noreferrer'>
                                <FiGithub size={25} />
                            </a>
                            <a href='https://www.linkedin.com/in/poshan-bista-bb1064349/' target='_blank' rel='noreferrer'>
                                <FaLinkedinIn size={25} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
