"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Recepción de la clínica", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Sala de consultas", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Área de grooming", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Laboratorio", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Hotel para mascotas", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-6.jpg", alt: "Equipo de rayos X", span: "col-span-1 row-span-1" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Galería
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance"
          >
            Conoce nuestras instalaciones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Un espacio diseñado para el confort de tu mascota y tu tranquilidad.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`${image.span} rounded-2xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}
