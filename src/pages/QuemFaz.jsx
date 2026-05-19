import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import quemFazImg from '../assets/original/sustenido_audio_branding_quem_faz.png'

const QuemFaz = () => {
  return (
    <div className="w-full flex flex-col items-center pb-24 relative min-h-[90vh]">
      <Helmet>
        <title>Sustenido | Quem Faz</title>
      </Helmet>

      {/* Imagem de Fundo Mesclada */}
      <div className="absolute inset-0 w-full h-[70vh] md:h-full z-0 overflow-hidden pointer-events-none">
        {/* Gradientes para mesclar a imagem de forma suave ao azul marinho */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/80 to-dark z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-transparent z-10 md:w-2/3"></div>
        
        <img 
          src={quemFazImg} 
          alt="Guilherme Annes e Rafinha Spada" 
          className="w-full h-full object-cover object-[center_20%] opacity-40 mix-blend-luminosity"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl mx-auto py-24 px-6 md:px-10 flex flex-col justify-center relative z-20 mt-10 md:mt-20"
      >
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h3 className="text-accent tracking-widest text-xs font-bold uppercase mb-4 border border-accent/30 inline-block px-4 py-1 rounded-full backdrop-blur-sm bg-black/30 shadow-lg">Quem Faz</h3>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl text-white">
            Os fundadores por trás da aceleração sonora.
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg font-medium">
            A Sustenido Audio Branding é a união perfeita entre tecnologia estrutural e comunicação comercial de alto impacto. 
          </p>
          
          <div className="bg-black/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Uma criação do empresário e engenheiro <strong className="text-white">Guilherme Annes</strong> e do comunicador e jornalista <strong className="text-accent">Rafinha Spada</strong>.
            </p>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Juntos, unimos a precisão da engenharia com a vivência das maiores emissoras de rádio do país para entregar uma solução de áudio focada única e exclusivamente no aumento de conversão para o seu PDV.
            </p>
          </div>
          
          <button className="bg-white text-dark px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 shadow-xl flex items-center gap-3">
            Falar com a Sustenido
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default QuemFaz
