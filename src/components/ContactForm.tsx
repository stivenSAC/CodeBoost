'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    ciudad: '',
    correo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="pt-64 pb-48 px-6 relative overflow-hidden flex flex-col items-center justify-center" style={{
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

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 15 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center" style={{ lineHeight: '1.3', marginBottom: '2rem' }}>
            ¡Únete a <span className="text-green-400">CodeBoost Academy!</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 text-center max-w-3xl mx-auto" style={{ lineHeight: '1.4' }}>
            Completa el formulario y da el primer paso hacia tu nueva carrera en tecnología
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-2">
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                placeholder="Tu apellido"
              />
            </div>
          </div>

          <div>
            <label htmlFor="ciudad" className="block text-sm font-semibold text-gray-700 mb-2">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
              placeholder="Tu ciudad"
            />
          </div>

          <div>
            <label htmlFor="correo" className="block text-sm font-semibold text-gray-700 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
              placeholder="tu@email.com"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 15px 30px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
          >
            <Send className="w-5 h-5" />
            Enviar información
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}