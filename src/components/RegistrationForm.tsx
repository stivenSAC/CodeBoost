'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, User, MapPin, Code } from 'lucide-react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    country: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage
    localStorage.setItem('codeBoostRegistration', JSON.stringify(formData));
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', level: '', country: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-lime/10 to-lime-dark/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 bg-lime rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          </motion.div>
          <h3 className="text-3xl font-bold text-smoke mb-4">¡Registro Exitoso!</h3>
          <p className="text-gray-600">Te contactaremos pronto con más información sobre el bootcamp.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-green-100 via-green-50 to-green-200 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 15 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 space-y-8"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-smoke text-center"
            style={{ lineHeight: '1.3', marginBottom: '2rem' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¡Únete a{' '}
            <motion.span 
              className="text-green-400 inline-block"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(163, 230, 53, 0)",
                  "0 0 30px rgba(163, 230, 53, 0.5)",
                  "0 0 0px rgba(163, 230, 53, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CodeBoost Academy
            </motion.span>!
          </motion.h2>
          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 text-center max-w-3xl mx-auto"
            style={{ lineHeight: '1.9' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Completa el formulario y da el primer paso hacia tu nueva carrera en tecnología.
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", damping: 15 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white to-green-50 p-12 rounded-3xl shadow-2xl border-2 border-green-200 hover:shadow-3xl transition-all duration-500"
        >
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="text-lg font-bold text-gray-900 flex items-center justify-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <User className="w-5 h-5 text-green-600" />
                </motion.div>
                Nombre completo
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full p-6 border-2 border-green-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-lg bg-white shadow-inner"
                placeholder="Tu nombre completo"
              />
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="text-lg font-bold text-gray-900 flex items-center justify-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 text-green-600" />
                </motion.div>
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-6 border-2 border-green-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-lg bg-white shadow-inner"
                placeholder="tu@email.com"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="text-lg font-bold text-gray-900 flex items-center justify-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                  >
                    <Code className="w-5 h-5 text-green-600" />
                  </motion.div>
                  Nivel actual
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full p-6 border-2 border-green-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-lg bg-white shadow-inner"
                >
                  <option value="">Selecciona tu nivel</option>
                  <option value="principiante">Principiante total</option>
                  <option value="basico">Conocimientos básicos</option>
                  <option value="intermedio">Nivel intermedio</option>
                  <option value="avanzado">Quiero especializarme</option>
                </select>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="text-lg font-bold text-gray-900 flex items-center justify-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                  >
                    <MapPin className="w-5 h-5 text-green-600" />
                  </motion.div>
                  País
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full p-6 border-2 border-green-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-lg bg-white shadow-inner"
                  placeholder="Tu país"
                />
              </motion.div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl"
          >
            🚀 Registrarme ahora
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}