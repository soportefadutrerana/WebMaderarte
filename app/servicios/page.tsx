'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { DoorOpen, Box, Sofa, Hammer, Wrench, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: DoorOpen,
    title: 'Puertas de Madera',
    description: 'Fabricación e instalación de puertas de interior y exterior con acabados profesionales',
    features: [
      'Puertas de paso',
      'Puertas blindadas y macizas',
      'Puertas lacadas en cualquier color',
      'Puertas especiales y personalizadas'
    ],
    image: '/uploads/vista-frontal-de-la-entrada-al-edificio-de-la-ciudad.jpg'
  },
  {
    icon: Box,
    title: 'Armarios y Vestidores a Medida',
    description: 'Diseño y construcción de armarios empotrados y vestidores adaptados a tu espacio',
    features: [
      'Frentes de armario personalizados',
      'Interiores optimizados',
      'Vestidores completos',
      'Múltiples acabados y materiales'
    ],
    priceRange: 'Desde 1.200 - 4.500€',
    image: 'https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png'
  },
  {
    icon: Sofa,
    title: 'Mobiliario a Medida',
    description: 'Creación de muebles únicos adaptados a tus necesidades y estilo',
    features: [
      'Cocinas completas',
      'Muebles de salón',
      'Muebles de baño',
      'Mobiliario de oficina'
    ],
    priceRange: 'Desde 2.000 - 15.000€',
    image: 'https://cdn.abacus.ai/images/19c212a3-7406-4aaa-ab72-ef8b8b1e258b.png'
  },
  {
    icon: Hammer,
    title: 'Carpintería para Obra y Reforma',
    description: 'Servicios integrales de carpintería para proyectos de construcción y renovación',
    features: [
      'Puertas en obra nueva',
      'Carpintería interior completa',
      'Coordinación con otros gremios',
      'Proyectos llave en mano'
    ],
    priceRange: 'Presupuesto por proyecto',
    image: 'https://cdn.abacus.ai/images/8bdce244-935b-439b-9fe9-1de673e08749.png'
  },
  {
    icon: Wrench,
    title: 'Reparaciones y Ajustes',
    description: 'Servicio rápido de reparación y mantenimiento de carpintería existente',
    features: [
      'Ajuste de puertas',
      'Sustitución de elementos',
      'Reparaciones puntuales',
      'Mantenimiento preventivo'
    ],
    priceRange: 'Desde 80 - 250€',
    image: 'https://cdn.abacus.ai/images/c563bd7a-d8ce-4123-8b7c-3910f6fba306.png'
  }
]

const processSteps = [
  { step: '1', title: 'Medición técnica previa', description: 'Visitamos tu espacio y tomamos medidas exactas' },
  { step: '2', title: 'Presupuesto cerrado', description: 'Te entregamos un presupuesto detallado sin sorpresas' },
  { step: '3', title: 'Diseño funcional', description: 'Creamos un diseño adaptado a tus necesidades' },
  { step: '4', title: 'Fabricación cuidada', description: 'Elaboramos cada pieza con atención al detalle' },
  { step: '5', title: 'Instalación profesional', description: 'Instalamos todo en los plazos acordados' },
  { step: '6', title: 'Cierre administrativo', description: 'Garantía y seguimiento post-instalación' }
]

export default function ServiciosPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Carpintería con proceso controlado: Medir bien, fabricar bien, instalar bien, cerrar bien
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services?.map((service, index) => {
              const Icon = service?.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'lg:direction-rtl'
                  }`}
                >
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={service?.image ?? ''}
                        alt={service?.title ?? ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={`${isEven ? '' : 'lg:order-1'}`}>
                    <div className="flex items-center mb-4">
                      {Icon && <Icon className="w-10 h-10 text-accent mr-3" />}
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                        {service?.title ?? ''}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service?.description ?? ''}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service?.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature ?? ''}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="bg-accent hover:bg-accent/90 text-foreground hover:text-foreground">
                      <Link href="/contacto">
                        Solicitar Presupuesto
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section ref={processRef} className="py-20 bg-gradient-to-br from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un método claro y controlado para garantizar resultados perfectos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item?.step ?? ''}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item?.title ?? ''}</h3>
                <p className="text-muted-foreground">{item?.description ?? ''}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contáctanos para un presupuesto personalizado sin compromiso
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-foreground hover:text-foreground">
            <Link href="/contacto">
              Solicitar Presupuesto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
