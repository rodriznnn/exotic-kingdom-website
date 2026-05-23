"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/images/about-clinic.jpg"
                alt="Interior de la clínica Exotic Kingdom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Certificados en</p>
                  <p className="font-semibold text-foreground">Medicina Exótica</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Cuidado experto con pasión genuina
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En Exotic Kingdom, nacimos de una pasión profunda por los animales más 
                especiales. Desde 2014, nos hemos dedicado a brindar atención veterinaria 
                de primer nivel, especializándonos en mascotas exóticas sin descuidar 
                a nuestros queridos perros y gatos.
              </p>
              <p>
                Nuestro equipo de veterinarios cuenta con formación especializada y 
                actualización constante en medicina de animales no tradicionales. 
                Entendemos que cada mascota es única y merece un cuidado personalizado.
              </p>
              <p>
                Ubicados en el corazón de Surco, hemos construido una comunidad de 
                familias que confían en nosotros para el bienestar de sus compañeros 
                más preciados.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Excelencia Médica</p>
                  <p className="text-sm text-muted-foreground">Equipos de última generación</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Calidez Humana</p>
                  <p className="text-sm text-muted-foreground">Trato personalizado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Especialización</p>
                  <p className="text-sm text-muted-foreground">Expertos en exóticos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Confianza</p>
                  <p className="text-sm text-muted-foreground">Miles de familias nos eligen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
