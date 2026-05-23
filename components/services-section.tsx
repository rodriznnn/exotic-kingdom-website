"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Stethoscope, 
  Scissors, 
  Home, 
  Radio, 
  ScanLine, 
  FlaskConical, 
  Heart, 
  Apple 
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Veterinarias",
    description: "Evaluación completa de salud, diagnóstico preciso y tratamientos personalizados para cada paciente.",
  },
  {
    icon: Scissors,
    title: "Grooming Premium",
    description: "Baños, cortes y estética profesional. Tu mascota lucirá y se sentirá increíble.",
  },
  {
    icon: Home,
    title: "Hotel para Mascotas",
    description: "Hospedaje de lujo con atención 24/7, espacios amplios y monitoreo constante.",
  },
  {
    icon: Radio,
    title: "Rayos X Digital",
    description: "Diagnóstico por imagen de alta resolución para detección temprana de condiciones.",
  },
  {
    icon: ScanLine,
    title: "Ecografías",
    description: "Ultrasonido avanzado para evaluación de órganos internos y seguimiento de gestación.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio Clínico",
    description: "Análisis de sangre, orina y más. Resultados rápidos y confiables.",
  },
  {
    icon: Heart,
    title: "Medicina Preventiva",
    description: "Vacunación, desparasitación y chequeos regulares para una vida larga y saludable.",
  },
  {
    icon: Apple,
    title: "Nutrición Especializada",
    description: "Planes alimenticios personalizados según especie, edad y condición de salud.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Nuestros Servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance"
          >
            Atención integral para el bienestar de tu mascota
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Ofrecemos una amplia gama de servicios veterinarios con los más altos 
            estándares de calidad y equipamiento de última generación.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
