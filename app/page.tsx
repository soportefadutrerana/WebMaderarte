'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  DoorOpen,
  Box,
  Wrench,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Award,
  Calendar,
  Sparkles,
  Ruler,
  Truck,
  Shield,
  Quote,
  ChevronRight,
  Play
} from 'lucide-react'

const services = [
  {
    icon: DoorOpen,
    title: 'Puertas de Madera',
    description: 'Puertas de entrada y paso con diseños exclusivos. Medidas especiales, lacadas o barnizadas con acabados de primera calidad.',
    image: '/uploads/vista-frontal-de-la-entrada-al-edificio-de-la-ciudad.jpg',
    features: ['Medidas especiales', 'Acabados premium', 'Instalación incluida']
  },
  {
    icon: Box,
    title: 'Armarios a Medida',
    description: 'Interiores personalizados con sistemas de almacenaje inteligente. Maximiza cada centímetro de tu espacio.',
    image: 'https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png',
    features: ['Diseño 3D previo', 'Interiores modulares', 'Iluminación LED']
  },
  {
    icon: Wrench,
    title: 'Mobiliario Personalizado',
    description: 'Cocinas, muebles de salón, baños y oficina. Cada pieza diseñada específicamente para tu espacio y estilo de vida.',
    image: 'https://cdn.abacus.ai/images/19c212a3-7406-4aaa-ab72-ef8b8b1e258b.png',
    features: ['Diseño exclusivo', 'Materiales selectos', 'Garantía extendida']
  }
]

const process = [
  {
    step: '01',
    icon: Phone,
    title: 'Contacto Inicial',
    description: 'Cuéntanos tu proyecto. Escuchamos tus necesidades y te asesoramos sin compromiso.'
  },
  {
    step: '02',
    icon: Ruler,
    title: 'Medición y Diseño',
    description: 'Visitamos tu espacio, tomamos medidas precisas y creamos el diseño perfecto.'
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Fabricación Artesanal',
    description: 'Cada pieza se fabrica en nuestro taller con los mejores materiales y técnicas.'
  },
  {
    step: '04',
    icon: Truck,
    title: 'Instalación Profesional',
    description: 'Montaje impecable por nuestro equipo. Tu proyecto listo para disfrutar.'
  }
]

const testimonials = [
  {
    name: 'María García',
    role: 'Propietaria en Utrera',
    content: 'Increíble trabajo con nuestros armarios empotrados. La calidad del acabado y la atención al detalle superaron todas nuestras expectativas.',
    rating: 5,
    image: '/uploads/vista-frontal-de-la-entrada-al-edificio-de-la-ciudad.jpg'
  },
  {
    name: 'Antonio Rodríguez',
    role: 'Arquitecto',
    content: 'Colaboramos en varios proyectos de interiorismo. Su profesionalidad y capacidad para materializar cualquier diseño es excepcional.',
    rating: 5,
    image: 'https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png'
  },
  {
    name: 'Carmen López',
    role: 'Propietaria en Sevilla',
    content: 'Las puertas de entrada que nos fabricaron son una obra de arte. Cada día recibimos cumplidos de las visitas.',
    rating: 5,
    image: 'https://cdn.abacus.ai/images/19c212a3-7406-4aaa-ab72-ef8b8b1e258b.png'
  }
]

const features = [
  { icon: CheckCircle, text: 'Presupuesto cerrado', description: 'Sin sorpresas ni costes ocultos' },
  { icon: Calendar, text: 'Plazos garantizados', description: 'Cumplimos las fechas acordadas' },
  { icon: Award, text: 'Acabado artesanal', description: 'Calidad en cada detalle' }
]

const stats = [
  { number: '25+', label: 'Años de experiencia', suffix: '' },
  { number: '500', label: 'Proyectos entregados', suffix: '+' },
  { number: '100', label: 'Clientes satisfechos', suffix: '%' },
  { number: '0', label: 'Proyectos abandonados', suffix: '' }
]

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Cinematic Design */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/video/166808-835670743_tiny.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/70 via-[#1a1410]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-transparent to-transparent" />
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
                >
                  Carpintería
                  <br />
                  de Madera
                  <br />
                  <span className="text-gradient">a Medida</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
                >
                  Transformamos espacios con muebles únicos. Especialistas en puertas, armarios y mobiliario personalizado con la más alta calidad artesanal.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="btn-premium text-white rounded-full px-10 py-7 text-base font-semibold">
                    <Link href="/contacto">
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="glass border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-7 text-base">
                    <Link href="/galeria" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Ver Trabajos
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Right Column - Carpentry Tools */}
              <div className="hidden lg:flex items-center justify-center relative">
                {/* Floating Tools Composition */}
                <div className="relative w-[500px] h-[500px]">
                  {/* Decorative Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-12 rounded-full border border-white/10"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute inset-24 rounded-full border border-accent/20"
                  />

                  {/* Tool 1 - Hammer */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -15 }}
                    animate={{ opacity: 1, y: 0, rotate: -15 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute top-8 left-1/2 -translate-x-1/2"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
                        <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M15.5 8.5L19 5M19 5L21 7M19 5L17 3M15.5 8.5L5 19L3 21L5 19L15.5 8.5Z" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13 11L9 7" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tool 2 - Saw */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: 10 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute top-1/4 right-4"
                  >
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
                      <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 12H21M3 12L7 8M3 12L7 16M21 12C21 12 19 10 17 10C15 10 14 12 14 12" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 8V6M12 8V5M15 8V6" strokeLinecap="round" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Tool 3 - Chisel (Center, larger) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-md rounded-3xl border border-accent/30 flex items-center justify-center shadow-2xl">
                      <svg className="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 4L10 8L6 12L4 20L12 18L16 14L20 10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 4L20 10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 8L16 14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Tool 4 - Plane */}
                  <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -10 }}
                    animate={{ opacity: 1, x: 0, rotate: -10 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="absolute top-1/3 left-4"
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
                      <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="10" width="20" height="6" rx="1" strokeLinecap="round" />
                        <path d="M6 10V7C6 6 7 5 8 5H16C17 5 18 6 18 7V10" strokeLinecap="round" />
                        <path d="M12 16V19" strokeLinecap="round" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Tool 5 - Ruler/Square */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: 5 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-1/4 right-12"
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
                      <Ruler className="w-10 h-10 text-accent" />
                    </div>
                  </motion.div>

                  {/* Tool 6 - Screwdriver */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -20 }}
                    animate={{ opacity: 1, y: 0, rotate: -20 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="absolute bottom-16 left-16"
                  >
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-2xl">
                      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14.5 9.5L9.5 14.5M6 17L4 19L5 20L7 18L6 17Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 3L21 7L18 10L14 6L17 3Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 6L9.5 10.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Floating Particles */}
                  <motion.div
                    animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-32 left-24 w-3 h-3 bg-accent/50 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [-5, 15, -5], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/50 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5"
          >
            <motion.div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition Strip */}
      <section ref={statsRef} className="py-12 bg-primary border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, text: 'Garantía de 5 años', sub: 'Cobertura integral' },
              { icon: Truck, text: 'Instalación incluida', sub: 'Sin costes ocultos' },
              { icon: Ruler, text: 'Diseño a medida', sub: 'Personalización total' },
              { icon: Award, text: 'Calidad artesanal', sub: 'Acabados premium' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-white mb-1">{item.text}</span>
                  <p className="text-sm text-white/50">{item.sub}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section - Premium Cards */}
      <section ref={servicesRef} className="py-28 bg-gradient-to-b from-white via-gray-50/50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-12 h-px bg-accent/50"></span>
              Nuestros Servicios
              <span className="w-12 h-px bg-accent/50"></span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Soluciones a Medida
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada proyecto es único. Combinamos tradición artesanal con técnicas modernas para crear piezas excepcionales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Link href="/servicios" className="block group h-full">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-premium card-premium h-full border border-gray-100/50">
                      <div className="relative aspect-[4/3] img-zoom">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Icon Badge */}
                        <div className="absolute top-5 left-5">
                          <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-accent" />
                          </div>
                        </div>

                        {/* Title on image */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                        </div>
                      </div>

                      <div className="p-8">
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                        {/* Features list */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center text-accent font-semibold group-hover:gap-3 gap-2 transition-all">
                          Ver más detalles
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="rounded-full px-10 py-7 text-base font-semibold bg-primary hover:bg-primary/90">
              <Link href="/servicios">
                Explorar Todos los Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section - How We Work */}
      <section ref={processRef} className="py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,155,80,0.15),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-12 h-px bg-accent/50"></span>
              Nuestro Proceso
              <span className="w-12 h-px bg-accent/50"></span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cómo Trabajamos
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Un proceso transparente y profesional, desde la primera consulta hasta la instalación final.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-14 left-[60%] w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
                  )}

                  <div className="relative text-center group">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-white/5 group-hover:text-accent/10 transition-colors">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white/10 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Why Choose Us - Editorial Masonry Design */}
      <section ref={featuresRef} className="py-32 bg-[#fafafa] relative overflow-hidden">
        {/* Background Texture/Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#1a1410 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left Column - Sticky Content */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-accent"></span>
                  <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase">Nuestra Filosofía</span>
                </div>

                <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-8 leading-[1.05]">
                  La <span className="italic text-accent">Maestría</span> de lo Artesanal
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg">
                  Entendemos la madera no solo como material, sino como un elemento vivo que aporta alma a cada espacio. Nuestra promesa es la <span className="text-primary font-bold">perfección técnica</span> en cada corte.
                </p>

                {/* Vertical Feature List - Premium Timeline Style */}
                <div className="relative mt-16 space-y-12">
                  {/* Decorative connecting line */}
                  <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-accent/50 via-primary/10 to-transparent hidden sm:block" />

                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                        className="group relative flex items-start gap-8"
                      >
                        {/* Icon Container with Timeline Indicator */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-black/[0.03] border border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-primary/20">
                            <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                          </div>
                          {/* Step Number Badge */}
                          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-50 flex items-center justify-center text-[10px] font-black pointer-events-none group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                            <span className="text-accent group-hover:text-white">0{index + 1}</span>
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className="flex-grow pt-1">
                          <div className="inline-block py-1 px-3 rounded-full bg-accent/5 text-[10px] font-bold text-accent uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                            Excelencia {index === 0 ? 'Garantizada' : index === 1 ? 'Comprometida' : 'Artesanal'}
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
                            {feature.text}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg max-w-sm group-hover:text-primary/70 transition-colors duration-500">
                            {feature.description}
                          </p>

                          {/* Hover Underline */}
                          <div className="w-0 h-px bg-accent mt-4 transition-all duration-500 group-hover:w-24" />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Asymmetric Masonry Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 items-start">

                {/* Large Tall Image */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative aspect-[3/5] rounded-[2.5rem] overflow-hidden shadow-2xl group lg:translate-y-20"
                >
                  <Image
                    src="https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png"
                    alt="Carpintería artesanal"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                <div className="space-y-6">
                  {/* Square Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl group border-4 border-white"
                  >
                    <Image
                      src="https://cdn.abacus.ai/images/19c212a3-7406-4aaa-ab72-ef8b8b1e258b.png"
                      alt="Detalle madera"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Accented Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-accent rounded-[2rem] p-8 text-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                      <Quote className="w-16 h-16" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 fill-white" />
                        ))}
                      </div>
                      <p className="font-serif text-2xl italic leading-relaxed mb-6">
                        &quot;La calidad se siente en el pulido de cada veta.&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-white/40"></div>
                        <span className="text-xs font-bold uppercase tracking-widest">Maestros Carpinteros</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Wide Image at the bottom of the grid or separate */}
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-12 h-px bg-accent/50"></span>
              Testimonios
              <span className="w-12 h-px bg-accent/50"></span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Lo Que Dicen
              <br />
              <span className="text-gradient">Nuestros Clientes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 shadow-premium card-premium relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section ref={ctaRef} className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/19c212a3-7406-4aaa-ab72-ef8b8b1e258b.png"
            alt="Fondo carpintería"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,155,80,0.2),transparent_70%)]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-10"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">Presupuesto sin compromiso</span>
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              ¿Tienes un Proyecto
              <br />
              <span className="text-gradient">en Mente?</span>
            </h2>
            <p className="text-xl mb-12 text-white/70 max-w-2xl mx-auto leading-relaxed">
              Cuéntanos tu idea y te ayudamos a hacerla realidad. Visita sin compromiso y presupuesto personalizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild size="lg" className="btn-premium text-white rounded-full px-10 py-8 text-lg font-semibold">
                <Link href="/contacto">
                  Solicitar Presupuesto Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
