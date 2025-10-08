'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Frontend Developer en TechCorp",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      content: "CodeBoost Academy cambió mi vida completamente. En 12 semanas pasé de no saber nada de programación a conseguir mi primer trabajo como desarrolladora. Los mentores son increíbles.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Full Stack Developer en StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "La metodología práctica del bootcamp es lo que más me gustó. Desde el primer día estás construyendo proyectos reales. Ahora trabajo en una startup y me siento completamente preparado.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "React Developer en DigitalAgency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "El apoyo de la comunidad y los mentores es excepcional. Nunca me sentí sola en el proceso. Las clases son dinámicas y el contenido está súper actualizado con las últimas tecnologías.",
      rating: 5
    },
    {
      name: "Diego Fernández",
      role: "Backend Developer en CloudTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "El enfoque en proyectos reales me preparó perfectamente para el mundo laboral. Los instructores tienen experiencia real y te enseñan las mejores prácticas de la industria.",
      rating: 5
    },
    {
      name: "Sofía Herrera",
      role: "UI/UX Developer en DesignStudio",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "La combinación de diseño y desarrollo que aprendí aquí me abrió muchas puertas. El bootcamp no solo te enseña a programar, sino a pensar como un desarrollador completo.",
      rating: 5
    },
    {
      name: "Alejandro Torres",
      role: "DevOps Engineer en InfraCorp",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Después del bootcamp conseguí trabajo en una empresa internacional. La preparación para entrevistas técnicas fue excelente y me dio la confianza que necesitaba.",
      rating: 5
    },
    {
      name: "Valentina Castro",
      role: "Mobile Developer en AppFactory",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: "La transición de carrera fue más fácil de lo que esperaba gracias al programa estructurado. Ahora desarrollo aplicaciones móviles y amo lo que hago cada día.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.testimonialsHeader}
        >
          <h2 className={styles.testimonialsTitle}>
            Historias de <span style={{ color: '#10b981' }}>Éxito</span>
          </h2>
          <p className={styles.testimonialsDescription}>
            Conoce a algunos de nuestros graduados que han transformado sus carreras 
            y ahora trabajan en las mejores empresas tecnológicas.
          </p>
        </motion.div>

        <div className={styles.carouselContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut" as const
              }}
              className={styles.testimonialCard}
            >
              {/* Elementos decorativos */}
              <div className={styles.decorativeQuote}>"</div>
              <div className={styles.decorativePattern} />
              
              <div className={styles.avatarContainer}>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className={styles.avatar}
                />
              </div>
              
              <div className={styles.starsContainer}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className={styles.star} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className={styles.testimonialContent}>
                {testimonials[currentIndex].content}
              </blockquote>
              
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>
                  {testimonials[currentIndex].name}
                </h4>
                <p className={styles.authorRole}>
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles del carrusel */}
          <div className={styles.carouselControls}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className={styles.carouselButton}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className={styles.carouselButton}
              disabled={currentIndex === testimonials.length - 1}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Indicadores */}
          <div className={styles.carouselIndicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.active : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}