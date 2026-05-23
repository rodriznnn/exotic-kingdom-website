"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María Elena Rodríguez",
    pet: "Dueña de Kiko (Guacamayo)",
    content: "Encontrar una clínica que realmente entienda a las aves no es fácil. En Exotic Kingdom, el Dr. Carlos trata a Kiko con un cuidado excepcional. Después de años buscando, finalmente encontré el lugar perfecto.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Roberto Campos",
    pet: "Dueño de Luna (Golden Retriever)",
    content: "La atención es impecable. Desde el primer momento te reciben con calidez, y Luna siempre sale feliz de sus consultas. Las instalaciones son hermosas y el equipo muy profesional.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Carla Mendoza",
    pet: "Dueña de Totoro (Conejo)",
    content: "Mi conejito tuvo una emergencia a medianoche y nos atendieron de inmediato. Salvaron su vida. Estaré eternamente agradecida con todo el equipo de Exotic Kingdom.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
  {
    name: "Fernando Vega",
    pet: "Dueño de Rex (Iguana)",
    content: "Llevar una iguana al veterinario siempre fue un reto hasta que conocí Exotic Kingdom. Aquí saben exactamente cómo manejar reptiles. Rex está más sano que nunca.",
    rating: 5,
    image: "/images/testimonial-4.jpg",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Testimonios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance"
          >
            Lo que dicen las familias que confían en nosotros
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main testimonial card */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  {`"${testimonials[currentIndex].content}"`}
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].pet}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
