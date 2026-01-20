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
  Users,
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
  { icon: Award, text: 'Acabado artesanal', description: 'Calidad en cada detalle' },
  { icon: Shield, text: 'Garantía de 5 años', description: 'Respaldamos nuestro trabajo' }
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
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text */}
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="text-white/90 text-sm font-medium tracking-wide">Carpintería artesanal desde 1999</span>
                </motion.div>

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

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg sm:text-xl text-white/70 mb-10 max-w-lg leading-relaxed"
                >
                  Transformamos espacios con muebles únicos. Especialistas en puertas, armarios y mobiliario personalizado con la más alta calidad artesanal.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 mb-14"
                >
                  <Button asChild size="lg" className="btn-premium text-white rounded-full px-8 py-7 text-base font-semibold">
                    <Link href="/contacto">
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="glass border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-7 text-base">
                    <Link href="/galeria" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Ver Trabajos
                    </Link>
                  </Button>
                </motion.div>

              </div>

              {/* Right Column - Featured Image with Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="hidden lg:block relative"
              >
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative glass rounded-3xl p-2 overflow-hidden">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                      <Image
                        src="/uploads/vista-frontal-de-la-entrada-al-edificio-de-la-ciudad.jpg"
                        alt="Trabajo de carpintería premium"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Image overlay content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="glass-dark rounded-2xl p-4">
                          <p className="text-white font-semibold text-lg mb-1">Puertas de entrada</p>
                          <p className="text-white/70 text-sm">Diseño exclusivo a medida</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Quality Badge - Top Right */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute right-4 top-8 glass rounded-2xl p-3 shadow-2xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Premium</p>
                        <p className="text-white/60 text-xs">Calidad garantizada</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
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

      {/* Stats Section - Sleek Design */}
      <section ref={statsRef} className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,155,80,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(196,155,80,0.2),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative inline-block">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-400 to-accent"
                  >
                    {stat.number}{stat.suffix}
                  </motion.span>
                </div>
                <p className="text-white/70 text-sm md:text-base mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Features Section - Why Choose Us */}
      <section ref={featuresRef} className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-12 h-px bg-accent/50"></span>
                Nuestra Promesa
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Por Qué Confiar
                <br />
                <span className="text-gradient">en Nosotros</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                No competimos por precio, competimos por <span className="font-semibold text-primary">calidad, personalización y cumplimiento</span>. Cada proyecto es único y lo tratamos como tal.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 p-5 rounded-2xl bg-gray-50/80 hover:bg-accent/5 transition-colors border border-transparent hover:border-accent/20"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{feature.text}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right Column - Image Composition */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-accent/5 to-transparent rounded-3xl blur-2xl" />

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5]">
                    <Image
                      src="https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png"
                      alt="Armario a medida de alta calidad"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating Quality Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-amber-600 rounded-2xl flex items-center justify-center">
                      <Star className="w-7 h-7 text-white fill-white" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">Calidad Premium</p>
                      <p className="text-sm text-muted-foreground">Materiales de primera calidad</p>
                    </div>
                  </div>
                </motion.div>

                {/* Years badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -top-6 -right-6 w-28 h-28 bg-primary rounded-full flex flex-col items-center justify-center shadow-xl"
                >
                  <span className="text-3xl font-bold text-accent">25+</span>
                  <span className="text-xs text-white/70">años</span>
                </motion.div>
              </div>
            </motion.div>
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
              <Button asChild size="lg" variant="outline" className="glass border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-8 text-lg">
                <a href="tel:+34600000000" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  600 000 000
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
