import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 text-center text-sm text-gray-400 z-10 bg-darker/80 mt-20 w-full relative">
      &copy; {new Date().getFullYear()} Sustenido Retail Audio Marketing. Todos os direitos reservados.
    </footer>
  )
}

export default Footer
