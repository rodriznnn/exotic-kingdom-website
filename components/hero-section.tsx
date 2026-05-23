"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-pet.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-6"
          >
            Clínica Veterinaria Premium en Surco
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-foreground text-balance"
          >
            Donde cada mascota es tratada como{" "}
            <span className="text-primary">realeza</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Especialistas en mascotas exóticas, perros y gatos. Brindamos atención 
            veterinaria de excelencia con la calidez y dedicación que tu compañero merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/51908805225?text=Hola,%20quisiera%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
            >
              Agendar Cita
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-card hover:shadow-lg"
            >
              Conocer Servicios
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif font-semibold text-primary">10+</span>
              <span className="text-sm text-muted-foreground">Años de<br />experiencia</span>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif font-semibold text-primary">5000+</span>
              <span className="text-sm text-muted-foreground">Mascotas<br />atendidas</span>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif font-semibold text-primary">50+</span>
              <span className="text-sm text-muted-foreground">Especies<br />exóticas</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
