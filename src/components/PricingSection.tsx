'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "299",
      period: "mes",
      description: "Perfecto para comenzar tu carrera",
      features: [
        "Acceso a todas las clases",
        "Material de estudio",
        "Proyectos guiados",
        "Comunidad de estudiantes",
        "Certificado de finalización"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "499",
      period: "mes",
      description: "La opción más popular",
      features: [
        "Todo lo del plan Básico",
        "Mentorías 1:1 semanales",
        "Revisión de código personalizada",
        "Preparación para entrevistas",
        "Bolsa de trabajo exclusiva",
        "Soporte prioritario"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "799",
      period: "mes",
      description: "Máximo nivel de acompañamiento",
      features: [
        "Todo lo del plan Pro",
        "Mentorías ilimitadas",
        "Proyecto final personalizado",
        "LinkedIn y CV optimizado",
        "Garantía de empleo*",
        "Acceso de por vida"
      ],
      popular: false
    }
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.pricingHeader}
        >
          <h2 className={styles.pricingTitle}>
            Elige tu{' '}
            <span style={{ color: '#10b981' }}>Plan</span>
          </h2>
          <p className={styles.pricingDescription}>
            Opciones flexibles diseñadas para adaptarse a tus necesidades y presupuesto. 
            Todos los planes incluyen acceso completo al contenido.
          </p>
        </motion.div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.popular ? 1.05 : 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring" as const,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -15,
                scale: plan.popular ? 1.08 : 1.03,
                boxShadow: plan.popular 
                  ? "0 30px 60px rgba(163, 230, 53, 0.3)" 
                  : "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-lime to-lime-dark text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </motion.div>
                    Más Popular
                  </div>
                </motion.div>
              )}

              <div className="text-center mb-12 relative z-10">
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {plan.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-8 text-base sm:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {plan.description}
                </motion.p>
                <motion.div 
                  className="mb-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 text-lg sm:text-xl">/{plan.period}</span>
                </motion.div>
              </div>

              <ul className="space-y-6 mb-12 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-start gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-lime flex-shrink-0 mt-1" />
                    </motion.div>
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg text-left" style={{ lineHeight: '1.6' }}>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: plan.popular 
                    ? "0 15px 30px rgba(163, 230, 53, 0.4)" 
                    : "0 15px 30px rgba(163, 230, 53, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ position: 'relative', zIndex: 20 }}
                className="w-full py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 border-2 border-lime text-lime hover:bg-lime hover:text-white shadow-lg hover:shadow-xl"
              >
                Comenzar ahora
              </motion.button>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}