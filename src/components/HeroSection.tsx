'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className={`${styles.heroSection} min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 px-6 py-20`}>
      <div className={styles.heroContent}>
        <div>
          
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-12 text-center"
          >
            <motion.h1
              variants={itemVariants}
              className={`${styles.heroTitle} text-4xl sm:text-5xl lg:text-7xl font-bold text-white`}
            >
              Domina el{' '}
              <motion.span 
                className="text-green-400 inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Desarrollo Web
              </motion.span>{' '}
              en Solo 12 Semanas
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className={`${styles.heroDescription} text-xl lg:text-2xl text-white max-w-4xl`}
            >
              Aprende desde cero las tecnologías que las empresas realmente usan. 
              Conviértete en desarrollador full stack con proyectos reales.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className={`${styles.heroButtons} pt-6`}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(163, 230, 53, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-400 hover:bg-green-600 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Inscribirme ahora
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#A3E635",
                  backgroundColor: "rgba(163, 230, 53, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const roadmapSection = document.querySelector('[class*="roadmapSection"]');
                  roadmapSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white hover:border-green-400 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg"
              >
                <Play size={24} />
                Ver programa completo
              </motion.button>
            </motion.div>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
}