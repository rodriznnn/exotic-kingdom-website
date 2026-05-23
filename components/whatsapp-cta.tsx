"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-card rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-card rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div ref={ref} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card/20 mb-8">
            <MessageCircle className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground text-balance">
            ¿Listo para darle a tu mascota el mejor cuidado?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Agenda tu cita hoy mismo. Nuestro equipo está listo para recibirte 
            y brindarte la atención que tu compañero merece.
          </p>

          <motion.a
            href="https://wa.me/51908805225?text=Hola,%20quisiera%20agendar%20una%20cita%20en%20Exotic%20Kingdom"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-10 bg-card text-foreground rounded-full px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos por WhatsApp
          </motion.a>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Respuesta promedio: menos de 30 minutos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
