import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import quemFazImg from '../assets/original/sustenido_audio_branding_quem_faz.png'

const QuemFaz = () => {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <Helmet>
        <title>Sustenido | Quem Faz</title>
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl mx-auto py-24 px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16 mt-10"
      >
        <div className="w-full lg:w-1/2">
          <h3 className="text-accent tracking-widest text-xs font-bold uppercase mb-4 border border-accent/30 inline-block px-4 py-1 rounded-full">Quem Faz</h3>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Os fundadores por trás da aceleração sonora.
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
            A Sustenido Audio Branding é a união perfeita entre tecnologia estrutural e comunicação comercial de alto impacto. 
          </p>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg mb-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Uma criação do empresário e engenheiro <strong className="text-white">Guilherme Annes</strong> e do comunicador e jornalista <strong className="text-accent">Rafinha Spada</strong>.
            </p>
            <p className="text-lg text-gray-400 mt-6 leading-relaxed">
              Juntos, unimos a precisão da engenharia com a vivência das maiores emissoras de rádio do país para entregar uma solução de áudio focada única e exclusivamente no aumento de conversão para o seu PDV.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative p-2 bg-gradient-to-tr from-accent/30 to-white/10 rounded-2xl">
             <div className="absolute inset-0 bg-accent blur-3xl opacity-20 rounded-full"></div>
             <img src={quemFazImg} alt="Guilherme Annes e Rafinha Spada" className="relative z-10 w-full h-auto object-cover rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default QuemFaz
