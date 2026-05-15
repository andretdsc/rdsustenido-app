import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/original/sustenido_logo.png'
import spotAudio from '../assets/original/exemplo-de-spot-site.mp3'

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex flex-col items-center w-full">
      <audio ref={audioRef} src={spotAudio} onEnded={() => setIsPlaying(false)} preload="auto" />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center mt-10"
      >
        <div className="flex items-center gap-4 mb-16">
          <img src={logo} alt="Sustenido Logo" className="h-16 md:h-20" />
          <h1 className="text-5xl md:text-6xl font-light tracking-wide hidden">Sustenido</h1>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-5xl drop-shadow-lg leading-tight">
          Transforme anúncios internos em <br /> vendedores invisíveis na sua loja.
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-12 drop-shadow-md">
          Criamos campanhas sonoras promocionais para supermercados, magazines e farmácias com spots rápidos e locução premium.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <button className="bg-white text-dark px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 shadow-xl">
            Solicitar Diagnóstico
          </button>
          
          <div className="border border-white/30 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <span className="text-gray-200">
              {isPlaying ? 'Tocando: Spot Vendedor' : 'Ouvir Spots Vendedores'}
            </span>
            <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className={`h-full bg-white transition-all duration-300 ${isPlaying ? 'w-full animate-pulse' : 'w-0'}`}></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Como Funciona Section */}
      <motion.section 
        id="como-funciona"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto py-24 px-6 md:px-10 mt-20"
      >
        <div className="text-center mb-16">
          <h3 className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-bold">Aceleração de Vendas</h3>
          <h2 className="text-3xl md:text-4xl font-light">Como funciona o <strong className="font-bold">Retail Audio Marketing</strong></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Comercial', desc: 'Sua equipe define os produtos foco, margens e ofertas relâmpago.' },
            { step: '02', title: 'Roteiro e Voz', desc: 'Criamos o roteiro estratégico e gravamos com locutores premium em horas.' },
            { step: '03', title: 'No Ar', desc: 'A campanha promocional entra no ar na sua loja de forma rápida e assertiva.' },
            { step: '04', title: 'Sell-out', desc: 'O produto ganha destaque sensorial e acelera a saída do estoque.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-darker/60 backdrop-blur-sm p-8 hover:border-accent/50 transition-colors group"
            >
              <div className="text-5xl font-light text-white/10 mb-6 group-hover:text-accent/30 transition-colors">{item.step}</div>
              <h4 className="font-bold text-lg mb-3 tracking-wide">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Diferenciais Premium Section */}
      <motion.section 
        id="diferenciais"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="w-full max-w-7xl mx-auto py-24 px-6 md:px-10"
      >
        <div className="text-center mb-16">
          <h3 className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-bold">Por que a Sustenido?</h3>
          <h2 className="text-3xl md:text-4xl font-light">O verdadeiro premium é a <strong className="font-bold">velocidade e conversão</strong></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Spots Vendedores', desc: 'Foco total em gatilhos de urgência e venda, não apenas "música legal".' },
            { title: 'Velocidade de Produção', desc: 'Roteiros aprovados pela manhã, spots gravados e no ar na sua loja à tarde.' },
            { title: 'Locução Premium', desc: 'Vozes reconhecidas do rádio gaúcho e nacional para dar máxima credibilidade.' },
            { title: 'Integração Comercial', desc: 'Trabalhamos lado a lado com seu time de compras para acelerar quem paga a conta.' },
            { title: 'Campanhas Diárias', desc: 'Flexibilidade para trocar a comunicação todos os dias conforme seu estoque exige.' },
            { title: 'Influência Comportamental', desc: 'Áudio estrategicamente mixado para direcionar o cliente pela loja e gerar compra por impulso.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="border-l-2 border-accent/20 pl-6 py-2 hover:border-accent transition-colors"
            >
              <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* O Que Ajudamos a Vender Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-black/40 py-24 border-y border-white/5 mt-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-bold">Aceleração de Sell-Out</h3>
            <h2 className="text-3xl md:text-4xl font-light mb-8">O que ajudamos o seu supermercado a <strong className="font-bold">vender hoje?</strong></h2>
            <ul className="space-y-4">
              {[
                'Produtos encalhados ou perto do vencimento',
                'Ofertas relâmpago de açougue e padaria',
                'Campanhas sazonais (Dia das Mães, Natal)',
                'Aumento de margem em marcas parceiras',
                'Reforço promocional diário'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                  <span className="text-accent font-bold text-xl">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white/5 h-48 rounded-lg animate-pulse border border-white/5"></div>
            <div className="bg-white/5 h-48 rounded-lg animate-pulse border border-white/5 mt-8"></div>
            <div className="bg-white/5 h-48 rounded-lg animate-pulse border border-white/5"></div>
            <div className="bg-white/5 h-48 rounded-lg animate-pulse border border-white/5 mt-8"></div>
          </div>
        </div>
      </motion.section>

      {/* Bastidores CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto py-24 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Qualidade de Rádio. Foco de Varejo.</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Nosso estúdio opera a todo vapor. Roteiristas, editores e locutores trabalhando juntos para colocar a sua oferta no ar antes que o seu concorrente abra a loja.
        </p>
        <button className="border border-accent text-accent px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent hover:text-dark transition-colors shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          Solicitar Análise da Minha Loja
        </button>
      </motion.section>

    </div>
  )
}

export default Home
