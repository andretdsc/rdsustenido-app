import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const Contato = () => {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <Helmet>
        <title>Sustenido | Fale com Especialistas</title>
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl mx-auto py-24 px-6 md:px-10 text-center mt-10"
      >
        <h3 className="text-accent tracking-widest text-xs font-bold uppercase mb-4 border border-accent/30 inline-block px-4 py-1 rounded-full">Fale Conosco</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Pronto para acelerar as <br /> vendas do seu PDV?
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Passe a responsabilidade do Retail Audio para quem entende de varejo. Fale com nossa equipe e solicite um diagnóstico gratuito para a sua loja.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
          <div className="border border-white/10 bg-black/30 p-8 rounded-xl hover:border-accent transition-colors flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-2">Equipe Comercial</h4>
            <p className="text-gray-400 mb-6">Orçamentos, projetos em rede e planos de expansão.</p>
            {/* O WhatsApp pode ser atualizado com o número real depois */}
            <a href="#" className="inline-block bg-accent text-dark px-6 py-3 rounded-full font-bold text-center hover:scale-105 transition-transform mb-4">
              Chamar no WhatsApp
            </a>
            <p className="text-sm text-gray-500 text-center">comercial@rdsustenido.com.br</p>
          </div>
          
          <div className="border border-white/10 bg-black/30 p-8 rounded-xl hover:border-accent transition-colors flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-2">Estúdio e Produção</h4>
            <p className="text-gray-400 mb-6">Envio de briefing, dúvidas de gravação e roteirização.</p>
            <p className="text-xl font-bold text-accent">+55 (51) 9999-9999</p>
            <p className="text-sm text-gray-500 mt-2">producao@rdsustenido.com.br</p>
          </div>
        </div>

        <div className="mt-16 border border-white/5 bg-white/5 p-8 rounded-xl max-w-2xl mx-auto flex flex-col items-center">
          <h4 className="text-xl font-bold mb-4">Acompanhe a Sustenido</h4>
          <a href="https://instagram.com/rdsustenido" target="_blank" rel="noreferrer" className="text-accent hover:underline text-lg font-bold">@rdsustenido</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Contato
