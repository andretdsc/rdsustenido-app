import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Supermercados from './pages/Supermercados'
import Farmacias from './pages/Farmacias'
import QuemFaz from './pages/QuemFaz'
import Contato from './pages/Contato'

import bckg from './assets/original/sustenido_audio_branding_bckg.jpg'

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col relative bg-dark text-white font-sans" 
       style={{ backgroundImage: `url(${bckg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
    <div className="absolute inset-0 bg-dark/70 pointer-events-none z-0"></div>

    <Header />
    <main className="flex-grow pt-32 z-10">{children}</main>
    <Footer />
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-faz" element={<QuemFaz />} />
            <Route path="/supermercados" element={<Supermercados />} />
            <Route path="/farmacias" element={<Farmacias />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App
