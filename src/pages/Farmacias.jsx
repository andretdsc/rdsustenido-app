import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const Farmacias = () => {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <Helmet>
        <title>Sustenido | Áudio Promocional para Farmácias</title>
      </Helmet>
      
      {/* Hero Nicho */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl mx-auto py-24 px-6 md:px-10 text-center"
      >
        <h3 className="text-accent tracking-widest text-xs font-bold uppercase mb-4 border border-accent/30 inline-block px-4 py-1 rounded-full">Inteligência para Farmácias</h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Aumente o ticket médio <br /> com dermocosméticos e vitaminas.
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          O cliente quase sempre entra na sua farmácia para comprar remédios. O papel do Retail Audio é garantir que ele saia com um kit de perfumaria, vitaminas em oferta e higiene pessoal de alto valor agregado.
        </p>
        <button className="bg-white text-dark px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 shadow-xl">
          Falar com Consultor de Farmácias
        </button>
      </motion.div>

      {/* Grid de Casos de Uso */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-6"
      >
        {[
          { area: 'Dermocosméticos', desc: 'Campanhas focadas em produtos de alta margem como protetores solares, hidratantes e marcas premium.' },
          { area: 'Vitaminas e Suplementos', desc: 'Anúncios educacionais seguidos de ofertas de polivitamínicos da marca própria.' },
          { area: 'Perfumaria e Higiene', desc: 'Ofertas de "Leve 3, Pague 2" comunicadas ativamente na loja para estimular a compra por impulso.' },
          { area: 'Espera Constutiva', desc: 'Música de qualidade intervalada com dicas de saúde para melhorar a experiência enquanto o cliente espera no balcão.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="border border-white/10 bg-black/20 backdrop-blur-sm p-8 rounded-lg hover:border-accent transition-colors"
          >
            <h4 className="font-bold text-xl mb-3 text-white">{item.area}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  )
}

export default Farmacias
