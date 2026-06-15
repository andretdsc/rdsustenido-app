import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

/**
 * Página de nicho: Áudio Branding & Bem-Estar
 * Posicionamento: Identidade sonora, experiência de marca e controle de percepção.
 */
const AudioBranding = () => {
  const pilares = [
    {
      area: 'Saúde e Estética',
      subtitulo: 'Acalmar e Informar',
      desc: 'Transforme a sala de espera. Reduza a percepção do tempo e a ansiedade dos pacientes com curadoria musical terapêutica, intercalada com dicas de saúde, lembretes de exames e comunicação institucional humanizada.',
      tag: 'Clínicas / Hospitais'
    },
    {
      area: 'Varejo de Moda e Lifestyle',
      subtitulo: 'Conexão Direta com o Target',
      desc: 'O BPM da sua loja dita o comportamento de quem veste a sua marca. Criamos ecossistemas sonoros que refletem a identidade da sua coleção e conectam emocionalmente o cliente ao seu produto.',
      tag: 'Moda / Lifestyle'
    },
    {
      area: 'Clubes e Academias',
      subtitulo: 'Ritmo e Retenção',
      desc: 'Trilhas de alta performance divididas por zonas (musculação, cardio, relaxamento). Inclua spots curtos sobre aulas, horários e upsell de serviços sem quebrar a energia do treino.',
      tag: 'Fitness / Clubes'
    }
  ]

  return (
    <div className="w-full flex flex-col items-center pb-24">
      <Helmet>
        <title>Sustenido | Áudio Branding & Bem-Estar</title>
        <meta
          name="description"
          content="Identidade sonora para clínicas, academias e moda. A Sustenido cria ecossistemas sonoros que moldam o comportamento do consumidor e fortalecem o brand equity."
        />
      </Helmet>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl mx-auto py-24 px-6 md:px-10 text-center mt-10"
      >
        <span className="text-accent tracking-widest text-xs font-bold uppercase mb-4 border border-accent/30 inline-block px-4 py-1 rounded-full">
          Experiência de Marca
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight mt-6">
          O ambiente sonoro certo <br /> muda o comportamento. <br />
          <span className="text-accent">Nós o criamos.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Desenhamos a identidade sonora de clínicas, academias e marcas de moda para reduzir
          a ansiedade, aumentar o tempo de permanência e ditar o ritmo de consumo.
        </p>
        <a
          href="/contato"
          className="inline-block bg-white text-dark px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 shadow-xl"
        >
          Agendar Diagnóstico Sensorial para Minha Marca
        </a>
      </motion.div>

      {/* Grid de Pilares */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="w-full max-w-6xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10"
      >
        {pilares.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="border border-white/10 bg-black/20 backdrop-blur-sm p-8 rounded-xl hover:border-accent transition-colors flex flex-col gap-4 group"
          >
            <span className="text-xs font-bold tracking-widest text-accent uppercase border border-accent/30 px-3 py-1 rounded-full self-start group-hover:bg-accent/10 transition-colors">
              {item.tag}
            </span>
            <h4 className="font-bold text-2xl text-white">{item.subtitulo}</h4>
            <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  )
}

export default AudioBranding
