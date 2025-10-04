'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl backdrop-blur-md bg-white/60 shadow-md transition-all duration-300 ${scrolled ? 'py-2 px-6' : 'py-4 px-8'}`}>
      <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
        <Link href="#hero">Accueil</Link>
        <Link href="#about">À propos de moi</Link>
        <Link href="#skills">Compétences</Link>
        <Link href="#projects">Projets</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  )
}