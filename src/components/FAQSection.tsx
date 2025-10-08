'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Necesito experiencia previa en programación?",
      answer: "No, nuestro bootcamp está diseñado para principiantes. Comenzamos desde los fundamentos y te llevamos paso a paso hasta convertirte en un desarrollador full stack completo."
    },
    {
      question: "¿Cuánto tiempo dura el bootcamp?",
      answer: "El programa tiene una duración de 12 semanas intensivas. Incluye clases en vivo, proyectos prácticos y mentorías personalizadas para asegurar tu éxito."
    },
    {
      question: "¿Hay certificación oficial?",
      answer: "Sí, al completar el bootcamp recibirás un certificado oficial de CodeBoost Academy que podrás agregar a tu LinkedIn y CV para destacar ante empleadores."
    },
    {
      question: "¿Qué tecnologías voy a aprender?",
      answer: "Aprenderás HTML5, CSS3, JavaScript ES6+, React, Node.js, Express, MongoDB, Git, y herramientas modernas de desarrollo. Todo lo que necesitas para ser un desarrollador full stack."
    },
    {
      question: "¿Ofrecen ayuda para conseguir trabajo?",
      answer: "Absolutamente. Incluimos preparación para entrevistas, optimización de CV y LinkedIn, y acceso a nuestra bolsa de trabajo exclusiva con empresas partner."
    },
    {
      question: "¿Puedo estudiar mientras trabajo?",
      answer: "Sí, ofrecemos horarios flexibles con clases grabadas y sesiones en vivo en diferentes horarios. Puedes adaptar el estudio a tu ritmo de vida actual."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
    }}>
      <div className="absolute inset-0 z-0" style={{
        background: `radial-gradient(circle at 40% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
                     radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.06) 0%, transparent 45%),
                     radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 35%)`,
        animation: 'bubbleFloat6 35s ease-in-out infinite'
      }}></div>
      <style jsx>{`
        @keyframes bubbleFloat6 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(-10px) translateY(15px); }
          50% { transform: translateX(15px) translateY(-10px); }
          75% { transform: translateX(-5px) translateY(5px); }
        }
      `}</style>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 15 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-smoke text-center" style={{ lineHeight: '1.3', marginBottom: '2rem' }}>
            Preguntas <span className="text-green-400">Frecuentes</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 text-center max-w-3xl mx-auto" style={{ lineHeight: '1.2 !important', marginBottom: '3rem !important' }}>
            Resolvemos las dudas más comunes sobre nuestro bootcamp
          </p>
        </motion.div>

        <div className="space-y-2" style={{ gap: '0.5rem !important' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-green-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 pr-4" style={{ lineHeight: '1.1 !important', marginBottom: '0 !important' }}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-green-500 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <p className="text-gray-600 text-lg max-w-3xl mx-auto" style={{ lineHeight: '1.3 !important', marginTop: '0.5rem !important' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}