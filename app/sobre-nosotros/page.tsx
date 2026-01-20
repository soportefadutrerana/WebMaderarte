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

      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los pilares que definen nuestra forma de trabajar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values?.map((value, index) => {
              const Icon = value?.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
                >
                  {Icon && (
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-primary mb-3">{value?.title ?? ''}</h3>
                  <p className="text-muted-foreground">{value?.description ?? ''}</p>
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
