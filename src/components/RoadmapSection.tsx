'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './RoadmapSection.module.css';

export default function RoadmapSection() {
  const modules = [
    {
      week: "Semanas 1-2",
      title: "Fundamentos Web",
      description: "HTML5, CSS3, Git y metodologías de desarrollo",
      skills: ["HTML semántico", "CSS Grid & Flexbox", "Git & GitHub", "Responsive Design"]
    },
    {
      week: "Semanas 3-4",
      title: "JavaScript Moderno",
      description: "ES6+, DOM, APIs y programación asíncrona",
      skills: ["ES6+ Features", "DOM Manipulation", "Fetch API", "Async/Await"]
    },
    {
      week: "Semanas 5-7",
      title: "React & Frontend",
      description: "Componentes, hooks, estado y ecosistema React",
      skills: ["Components & JSX", "Hooks & State", "React Router", "Context API"]
    },
    {
      week: "Semanas 8-10",
      title: "Backend & APIs",
      description: "Node.js, Express, bases de datos y autenticación",
      skills: ["Node.js & Express", "MongoDB", "JWT Auth", "REST APIs"]
    },
    {
      week: "Semanas 11-12",
      title: "Proyecto Final",
      description: "Aplicación full stack completa y deployment",
      skills: ["Full Stack App", "Testing", "Deployment", "Portfolio"]
    }
  ];

  return (
    <section className={styles.roadmapSection}>
      {/* Elementos decorativos */}
      <div className={`${styles.decorativeElement} ${styles.decorativeCircle1}`} />
      <div className={`${styles.decorativeElement} ${styles.decorativeCircle2}`} />
      
      <div className={styles.roadmapContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.roadmapHeader}
        >
          <h2 className={styles.roadmapTitle}>
            Tu Ruta de{' '}
            <span style={{ color: '#10b981' }}>Aprendizaje</span>
          </h2>
          <p className={styles.roadmapDescription}>
            Un programa estructurado que te lleva paso a paso desde los fundamentos 
            hasta convertirte en un desarrollador full stack completo.
          </p>
        </motion.div>

        <div className={styles.timelineContainer}>
          {/* Línea de tiempo mejorada */}
          <motion.div 
            className={styles.timelineLine}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          
          <div className={styles.timelineItems}>
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={styles.timelineItem}
              >
                {/* Punto de timeline */}
                <motion.div 
                  className={styles.timelineDot}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
                
                {/* Tarjeta del módulo */}
                <motion.div 
                  className={styles.timelineCard}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.weekBadge}>
                    {module.week}
                  </div>
                  
                  <h3 className={styles.moduleTitle}>
                    {module.title}
                  </h3>
                  
                  <p className={styles.moduleDescription}>
                    {module.description}
                  </p>
                  
                  <div className={styles.skillsGrid}>
                    {module.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className={styles.skillItem}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className={styles.skillIcon} size={20} />
                        <span className={styles.skillText}>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}