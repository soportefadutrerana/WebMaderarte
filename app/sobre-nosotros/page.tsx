'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Target, Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Calidad',
    description: 'Trabajos bien ejecutados con atención al detalle en cada proyecto'
  },
  {
    icon: Award,
    title: 'Profesionalidad',
    description: 'Proceso controlado desde la medición hasta el cierre administrativo'
  },
  {
    icon: Users,
    title: 'Personalización',
    description: 'Cada proyecto se adapta a las necesidades únicas de nuestros clientes'
  },
  {
    icon: Clock,
    title: 'Cumplimiento',
    description: 'Plazos claros y respetados, sin sorpresas ni retrasos'
  }
]

const differentials = [
  'Empresa estructurada con método claro',
  'Presupuesto cerrado sin cambios',
  'Responsable técnico asignado',
  'Calidad documentada fotográficamente',
  'Garantía real y seguimiento',
  'Comunicación constante con el cliente'
]

export default function SobreNosotrosPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [differentialRef, differentialInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen">
      <Header />

      <section ref={heroRef} className="pt-32 pb-16 bg-gradient-to-br from-primary to-[#5d4e37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Carpintería de madera con más de 25 años de experiencia en Utrera
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                Quiénes Somos
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <span className="font-bold text-primary">Maderarte Utrera</span> es una empresa de carpintería especializada en trabajos de madera de alta calidad. Nos posicionamos como referentes en puertas, armarios y mobiliario a medida.
                </p>
                <p>
                  No competimos por precio bajo. <span className="font-bold text-primary">Competimos por calidad, personalización y cumplimiento</span>. Nuestro diferencial está en el proceso controlado y los acabados profesionales.
                </p>
                <p>
                  Trabajamos con particulares, constructoras, reformistas, interioristas y arquitectos que valoran un trabajo bien hecho y un servicio profesional.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-8">
                  <p className="text-2xl font-serif italic text-primary">
                    "Donde la madera cobra vida"
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://cdn.abacus.ai/images/278deb02-57a5-41a9-ae9a-7c6f511fdd97.png"
                    alt="Trabajos de carpintería"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-lg mt-8">
                  <Image
                    src="https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png"
                    alt="Armarios a medida"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores Section - Modern & Professional Redesign */}
      <section ref={valuesRef} className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-[0.3em] mb-4">
              <span className="w-10 h-[2px] bg-accent"></span>
              Nuestra Esencia
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Nuestros <span className="text-gradient">Valores</span>
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Los pilares fundamentales que guían cada uno de nuestros proyectos y definen nuestra excelencia artesanal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values?.map((value, index) => {
              const Icon = value?.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Card Background with hover effect */}
                  <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl shadow-black/[0.03] group-hover:shadow-accent/10 transition-all duration-500 border border-gray-100 group-hover:border-accent/20 group-hover:-translate-y-2 opacity-100" />

                  <div className="relative p-10 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className="relative mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-accent transition-colors duration-500">
                        {Icon && <Icon className="w-10 h-10 text-white" />}
                      </div>

                      {/* Step index hint */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[10px] font-black text-primary border border-gray-50">
                        0{index + 1}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                      {value?.title ?? ''}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value?.description ?? ''}
                    </p>

                    {/* Decorative bottom line */}
                    <div className="w-12 h-1 bg-accent/20 mt-8 rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-accent" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section ref={differentialRef} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={differentialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Nuestro Diferencial
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo que nos distingue de otros carpinteros
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={differentialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentials?.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item ?? ''}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Calidad es nuestro lema
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Por eso trabajamos con un proceso claro: <span className="font-bold">Medir bien · Fabricar bien · Instalar bien · Cerrar bien</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            ¿Quieres Trabajar con Nosotros?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Hablemos de tu proyecto. Te ofrecemos presupuesto sin compromiso
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contacto">
              Contactar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
