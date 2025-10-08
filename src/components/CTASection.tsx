'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="pt-20 pb-64 px-6 relative overflow-hidden flex flex-col items-center justify-center" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
    }}>
      <div className="absolute inset-0 z-0" style={{
        background: `radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                     radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                     radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)`,
        animation: 'bubbleFloat 20s ease-in-out infinite'
      }}></div>
      <style jsx>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
      `}</style>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">¡Últimas plazas disponibles!</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white text-center" style={{ lineHeight: '1.2' }}>
            Transforma tu futuro{' '}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="block"
            >
              hoy mismo
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto text-center"
            style={{ lineHeight: '1.8' }}
          >
            No esperes más para cambiar tu vida. Únete a CodeBoost Academy y 
            conviértete en el desarrollador que siempre quisiste ser.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-400 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 shadow-xl transition-colors"
            >
              Inscribirme ahora
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <div className="text-white/80 text-sm">
              <p>✓ Sin compromiso inicial</p>
              <p>✓ Garantía de satisfacción</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/20"
          >
            <p className="text-white/70 text-sm">
              Más de 500 estudiantes ya han transformado sus carreras con nosotros
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}