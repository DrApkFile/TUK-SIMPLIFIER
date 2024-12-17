'use client';

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-gradient-primary text-accent-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TUK SIMPLIFIERS
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary-yellow transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary-yellow transition-colors">Services</Link>
          <Link href="/about" className="hover:text-primary-yellow transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-primary-yellow transition-colors">Contact</Link>
          <Link href="/faq" className="hover:text-primary-yellow transition-colors">FAQs</Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-primary-blue px-4 py-2">
          <Link href="/" className="block py-2 hover:text-primary-yellow transition-colors">Home</Link>
          <Link href="/services" className="block py-2 hover:text-primary-yellow transition-colors">Services</Link>
          <Link href="/about" className="block py-2 hover:text-primary-yellow transition-colors">About Us</Link>
          <Link href="/contact" className="block py-2 hover:text-primary-yellow transition-colors">Contact</Link>
          <Link href="/faq" className="block py-2 hover:text-primary-yellow transition-colors">FAQs</Link>
        </nav>
      )}
    </header>
  )
}

export default Header

