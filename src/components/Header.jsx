import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/original/sustenido_logo.png'

const Header = () => {
  return (
    <header className="py-8 px-10 flex justify-between items-center z-50 absolute top-0 w-full">
      <div className="flex items-center gap-2">
        <Link to="/"><img src={logo} alt="Sustenido Logo" className="h-10 hover:opacity-80 transition-opacity" /></Link>
      </div>
      
      <nav className="space-x-8 text-xs tracking-widest font-bold hidden md:flex items-center uppercase text-white">
        <Link to="/" className="hover:text-accent transition-colors">HOME</Link>
        <Link to="/quem-somos" className="hover:text-accent transition-colors">QUEM SOMOS</Link>
        <Link to="/supermercados" className="hover:text-accent transition-colors">SUPERMERCADOS</Link>
        <Link to="/farmacias" className="hover:text-accent transition-colors">FARMÁCIAS</Link>
        <a href="#contato" className="hover:text-accent transition-colors">CONTATO</a>
        
        <div className="flex items-center gap-4 ml-4">
          <a href="#" className="hover:text-gray-300">IG</a>
          <a href="#" className="hover:text-gray-300">TEL</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
