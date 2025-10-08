'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const quickLinks = [
    { name: "Programa", href: "#roadmap" },
    { name: "Precios", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <footer className="relative overflow-hidden text-gray-900 py-16 px-6 flex flex-col items-center justify-center" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
    }}>
      <div className="absolute inset-0 z-0" style={{
        background: `radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
                     radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.06) 0%, transparent 40%),
                     radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.04) 0%, transparent 30%)`,
        animation: 'bubbleFloat 25s ease-in-out infinite'
      }}></div>
      <style jsx>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(10px) translateY(-15px) rotate(90deg); }
          50% { transform: translateX(-5px) translateY(10px) rotate(180deg); }
          75% { transform: translateX(-10px) translateY(-5px) rotate(270deg); }
        }
      `}</style>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16 text-center">
          
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">{'</>'}</span>
              </div>
              <span className="text-2xl font-bold">CodeBoost Academy</span>
            </div>
            <p className="text-gray-600 text-center text-sm sm:text-base" style={{ lineHeight: '1.7' }}>
              Transformamos vidas a través de la educación tecnológica. 
              Tu futuro como desarrollador comienza aquí.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-center">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-center">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-600 hover:text-green-400 transition-colors inline-block"
                    style={{ lineHeight: '1.6' }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-center">Contacto</h3>
            <div className="space-y-3 sm:space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base" style={{ lineHeight: '1.5' }}>info@codeboostacademy.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base" style={{ lineHeight: '1.5' }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base" style={{ lineHeight: '1.5' }}>Online - Global</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-center">Síguenos</h3>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-100 hover:bg-green-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center" style={{ lineHeight: '1.6' }}>
              Únete a nuestra comunidad de más de 500 desarrolladores
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © 2024 CodeBoost Academy. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ color: "#10b981" }}
              className="text-gray-500 hover:text-green-400 transition-colors"
            >
              Términos de Servicio
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#10b981" }}
              className="text-gray-500 hover:text-green-400 transition-colors"
            >
              Política de Privacidad
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}