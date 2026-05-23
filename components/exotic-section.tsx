"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const exoticPets = [
  { name: "Reptiles", description: "Iguanas, geckos, tortugas, serpientes", image: "/images/exotic-reptile.jpg" },
  { name: "Aves", description: "Loros, cacatúas, guacamayos, canarios", image: "/images/exotic-bird.jpg" },
  { name: "Pequeños Mamíferos", description: "Conejos, hamsters, cuyes, hurones", image: "/images/exotic-mammal.jpg" },
]

export function ExoticSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="exoticos" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-accent-foreground">
                Nuestra Especialidad
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Expertos en mascotas exóticas
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Somos pioneros en Lima en el cuidado de mascotas no tradicionales. 
              Nuestro equipo cuenta con certificaciones internacionales y años de 
              experiencia tratando las especies más diversas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Entendemos que cada especie tiene necesidades únicas de manejo, 
              alimentación y tratamiento. Por eso, ofrecemos protocolos 
              especializados que garantizan el bienestar de tu compañero.
            </p>

            <div className="mt-10 space-y-4">
              {exoticPets.map((pet, index) => (
                <motion.div
                  key={pet.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{pet.name}</h3>
                    <p className="text-sm text-muted-foreground">{pet.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/images/exotic-1.jpg"
                    alt="Veterinario examinando un loro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/images/exotic-2.jpg"
                    alt="Iguana en consulta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/images/exotic-3.jpg"
                    alt="Conejo siendo atendido"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/images/exotic-4.jpg"
                    alt="Tortuga en revisión"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-6 py-3 shadow-lg"
            >
              <p className="text-sm font-medium">+50 especies atendidas</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
