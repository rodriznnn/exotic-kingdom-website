"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Clock, Phone } from "lucide-react"

export function MapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Ubicación
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Visítanos en Surco
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Estamos ubicados en una zona de fácil acceso, con amplio estacionamiento 
              disponible para tu comodidad.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-muted-foreground">
                    Av. Alfredo Benavides 5125<br />
                    Santiago de Surco, Lima
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario de Atención</p>
                  <p className="text-muted-foreground">
                    Lunes a Sábado: 9:00 AM - 8:00 PM<br />
                    Domingos: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a 
                    href="tel:+51908805225" 
                    className="text-primary hover:underline"
                  >
                    +51 908 805 225
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Av.+Alfredo+Benavides+5125,+Santiago+de+Surco,+Lima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:underline"
            >
              Abrir en Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0876147361835!2d-77.00516672394128!3d-12.108459042115736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f6e7e9e5e5%3A0x1234567890abcdef!2sAv.%20Alfredo%20Benavides%205125%2C%20Santiago%20de%20Surco%2015039!5e0!3m2!1ses!2spe!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Exotic Kingdom"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
