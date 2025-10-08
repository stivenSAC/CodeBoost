'use client';

import { motion } from 'framer-motion';
import { Users, Code, Rocket, Clock } from 'lucide-react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Mentores Expertos",
      description: "Aprende de desarrolladores con experiencia real en la industria"
    },
    {
      icon: Code,
      title: "Proyectos Reales",
      description: "Construye aplicaciones que podrás mostrar en tu portafolio profesional"
    },
    {
      icon: Rocket,
      title: "Metodología Práctica",
      description: "70% práctica, 30% teoría. Aprende haciendo desde el primer día"
    },
    {
      icon: Clock,
      title: "Flexibilidad Total",
      description: "Clases en vivo y grabadas. Estudia a tu ritmo con apoyo constante"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.aboutHeader}
        >
          <h2 className={styles.aboutTitle}>
            ¿Por qué elegir{' '}
            <span style={{ color: '#10b981' }}>
              CodeBoost Academy
            </span>?
          </h2>
          <p className={styles.aboutDescription}>
            Nuestro bootcamp está diseñado para llevarte de principiante a desarrollador 
            full stack en tiempo récord, con el apoyo que necesitas para triunfar.
          </p>
        </motion.div>

        <motion.div 
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className={styles.featureCard}
            >
              <motion.div 
                className={styles.featureIcon}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon size={32} />
              </motion.div>
              
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}