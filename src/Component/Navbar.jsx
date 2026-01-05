import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300
        ${scrolled ? "shadow" : ""}`}>

            <div className='flex justify-between items-center px-6 py-6'>
                <Link to="/" className='font-bold text-2xl text-blue-600'>
                    Poshan Bista
                </Link>

                <div className='flex gap-16 font-semibold'>
                    <a href="#about" className='hover:text-blue-500'>About</a>

                    <a href="#skill" className='hover:text-blue-500'>Skill</a>

                    <a href="#education" className='hover:text-blue-500'>Education</a>

                    <a href="#projects" className='hover:text-blue-500'>Projects</a>

                    <a href="#contact" className='hover:text-blue-500'>Contact</a>
                </div>

                <div className='flex gap-5'>
                    <a href='https://github.com/Poshanbista' target='blank' rel='noreferrer'>
                        <FiGithub size={25} />
                    </a>
                    <a href='https://www.linkedin.com/in/poshan-bista-bb1064349/' target='blank' rel='noreferrer'>
                        <FaLinkedinIn size={25} />
                    </a>
                </div>

            </div>
        </nav>
    )
}
