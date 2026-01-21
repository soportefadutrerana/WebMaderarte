'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactoPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('¡Mensaje enviado!', {
          description: 'Gracias por contactarnos. Te responderemos pronto.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        toast.error('Error al enviar', {
          description: data?.error ?? 'Por favor, inténtalo de nuevo.'
        })
      }
    } catch (error) {
      toast.error('Error de conexión', {
        description: 'No se pudo enviar el mensaje. Verifica tu conexión.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Contacto
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Cuentános sobre tu proyecto
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rellena el formulario y nos pondremos en contacto contigo lo antes posible para discutir tu proyecto.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="600 000 000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Asunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ej: Presupuesto para armarios"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tu proyecto o consulta..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-foreground hover:text-foreground"
                  size="lg"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Tus datos serán tratados de forma confidencial y solo los usaremos para responder a tu consulta.
                </p>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                      <p className="text-muted-foreground">Utrera, Sevilla</p>
                      <p className="text-muted-foreground">Andalucía, España</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                      <a href="tel:+34600000000" className="text-muted-foreground hover:text-accent transition-colors">
                        955387218
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:info@maderarte-utrera.com" className="text-muted-foreground hover:text-accent transition-colors">
                        info@maderarteutrera.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horario</h4>
                      <p className="text-muted-foreground">Lunes - Viernes: 9:00 - 18:30</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  ¿Por Qué Elegirnos?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Presupuesto cerrado sin sorpresas
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Plazos claros y respetados
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Acabados profesionales
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Garantía y seguimiento
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
