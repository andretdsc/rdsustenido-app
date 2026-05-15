import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import quemFazImg from '../assets/original/sustenido_audio_branding_quem_faz.png'

const QuemSomos = () => {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <Helmet>
        <title>Sustenido | Quem Somos</title>
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl mx-auto py-24 px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 mt-10"
      >
        <div className="w-full md:w-1/2">
          <h3 className="text-accent tracking-widest text-xs font-bold uppercase mb-4 border border-accent/30 inline-block px-4 py-1 rounded-full">Quem Faz</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Os fundadores por trás da aceleração sonora.
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            A Sustenido Audio Branding é a união perfeita entre tecnologia estrutural e comunicação comercial de alto impacto. 
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Uma criação do empresário e engenheiro <strong className="text-white">Guilherme Annes</strong> e do comunicador e jornalista <strong className="text-white">Rafinha Spada</strong>.
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Juntos, unimos a precisão da engenharia com a vivência das maiores emissoras de rádio do país para entregar uma solução de áudio focada única e exclusivamente no aumento de conversão para o seu PDV.
          </p>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="relative">
             <div className="absolute inset-0 bg-accent blur-3xl opacity-20 rounded-full"></div>
             {/* A imagem original do site contendo os sócios */}
             <img src={quemFazImg} alt="Guilherme Annes e Rafinha Spada" className="relative z-10 w-full h-auto object-cover rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/5" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default QuemSomos
