import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

/**
 * Página de nicho: Rádio Institucional e Utilidade Pública
 * Posicionamento: Controle de fluxo de informação, segurança e monetização de grandes espaços.
 */
const RadioInstitucional = () => {
  const pilares = [
    {
      area: 'Mobilidade',
      subtitulo: 'Canal Oficial e Monetizado',
      desc: 'Substitua o silêncio ou rádios amadoras por uma ferramenta de utilidade pública. Informe próximas paradas, campanhas de conscientização e abra espaço para cotas de patrocínio local. Operação 100% remota e programada.',
      tag: 'Ônibus / Metrôs'
    },
    {
      area: 'Shopping Centers e Terminais',
      subtitulo: 'Controle e Prestação de Serviço',
      desc: 'Gestão de fluxo e segurança em tempo real. Veiculação automática de avisos de funcionamento, campanhas de marketing, achados e perdidos e alertas emergenciais com locução profissional padronizada.',
      tag: 'Shoppings / Terminais'
    },
    {
      area: 'Comunicação Interna',
      subtitulo: 'Alinhamento Corporativo',
      desc: 'Não dependa de murais de aviso que ninguém lê. Leve a cultura da empresa, avisos do RH, metas de segurança (CIPA) e aniversariantes direto para o ambiente de trabalho através do áudio.',
      tag: 'Chão de Fábrica / RH'
    }
  ]

  return (
    <div className="w-full flex flex-col items-center pb-24">
      <Helmet>
        <title>Sustenido | Rádio Institucional e Utilidade Pública</title>
        <meta
          name="description"
          content="Rádio corporativa para ônibus, shoppings e fábricas. A Sustenido garante comunicação em massa com precisão individual para grandes fluxos de pessoas."
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
          Grandes Fluxos
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight mt-6">
          Comunicação em massa <br />
          <span className="text-accent">com precisão individual.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Da parada de ônibus ao chão de fábrica. Onde há fluxo de pessoas, há uma oportunidade
          de comunicar com precisão.
        </p>
        <a
          href="/contato"
          className="inline-block bg-white text-dark px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 shadow-xl"
        >
          Montar Meu Projeto de Rádio Institucional
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

export default RadioInstitucional
