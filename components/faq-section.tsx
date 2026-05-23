"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Qué tipos de mascotas exóticas atienden?",
    answer: "Atendemos una amplia variedad de especies incluyendo reptiles (iguanas, geckos, serpientes, tortugas), aves (loros, cacatúas, guacamayos, canarios), pequeños mamíferos (conejos, hamsters, cuyes, hurones, chinchillas), anfibios y más. Si tienes dudas sobre tu mascota específica, contáctanos.",
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer: "Puedes agendar tu cita de varias formas: a través de WhatsApp al +51 908 805 225, llamando al mismo número, o completando el formulario de contacto en nuestra web. Te confirmaremos tu cita en un máximo de 2 horas.",
  },
  {
    question: "¿Atienden emergencias fuera de horario?",
    answer: "Sí, contamos con servicio de emergencias. Para emergencias fuera de nuestro horario regular, puedes comunicarte al WhatsApp de emergencias. Un veterinario evaluará tu caso y te indicará los pasos a seguir.",
  },
  {
    question: "¿Cuáles son los horarios de atención?",
    answer: "Nuestro horario de atención regular es de lunes a sábado de 9:00 AM a 8:00 PM, y domingos de 10:00 AM a 2:00 PM. El servicio de hotel para mascotas opera las 24 horas.",
  },
  {
    question: "¿Qué debo llevar a la primera consulta de mi mascota exótica?",
    answer: "Te recomendamos traer a tu mascota en un transportador adecuado para su especie, cualquier documentación previa (historial médico, certificados), información sobre su alimentación actual, y si es posible, una muestra de heces reciente para análisis.",
  },
  {
    question: "¿Ofrecen planes de salud o membresías?",
    answer: "Sí, contamos con planes de bienestar que incluyen consultas preventivas, vacunas, desparasitaciones y descuentos en servicios adicionales. Consulta con nuestro equipo sobre el plan que mejor se adapte a las necesidades de tu mascota.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Preguntas Frecuentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance"
          >
            ¿Tienes dudas? Te ayudamos
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-foreground pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
