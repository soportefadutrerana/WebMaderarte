'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/galeria', label: 'Galería' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/contacto', label: 'Contacto' }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top bar - Premium Info Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden lg:block fixed top-0 left-0 right-0 z-50"
      >
        <div className="bg-primary/95 backdrop-blur-md text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-xs tracking-wide">
              <div className="flex items-center divide-x divide-white/20">
                <span className="flex items-center gap-2 pr-6 text-white/80 hover:text-white transition-colors cursor-default">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Utrera, Sevilla
                </span>
                <span className="flex items-center gap-2 px-6 text-white/80 hover:text-white transition-colors cursor-default">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  Lun - Vie: 8:00 - 19:00
                </span>
              </div>
              <a
                href="tel:+34600000000"
                className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-3 h-3 text-accent" />
                </span>
                600 000 000
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-white shadow-lg shadow-black/5 py-3'
            : 'lg:top-10 top-0 bg-black/60 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-50">
              <motion.div
                className={`relative transition-all duration-500 ${
                  isScrolled ? 'w-44 h-14' : 'w-56 h-16'
                }`}
              >
                <Image
                  src="/logo/madearte.webp"
                  alt="Maderarte Utrera Logo"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full group ${
                      isScrolled
                        ? isActive
                          ? 'text-accent'
                          : 'text-primary hover:text-accent'
                        : isActive
                          ? 'text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                          : 'text-white hover:text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                    }`}
                  >
                    {link.label}
                    {/* Active/Hover indicator */}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                        isActive ? 'w-6' : 'w-0 group-hover:w-6'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <Button
                  asChild
                  className={`rounded-full px-6 py-5 text-sm font-semibold transition-all duration-300 ${
                    isScrolled
                      ? 'btn-premium text-white shadow-lg'
                      : 'bg-accent hover:bg-accent/90 text-white shadow-xl'
                  }`}
                >
                  <a href="tel:+34600000000" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Llamar</span>
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden relative w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isScrolled
                    ? 'text-primary bg-gray-100 hover:bg-gray-200'
                    : 'text-white bg-white/10 hover:bg-white/20'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl overflow-y-auto"
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="relative w-36 h-10">
                      <Image
                        src="/logo/madearte.webp"
                        alt="Maderarte"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="p-6">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium transition-colors ${
                            pathname === link.href
                              ? 'bg-accent/10 text-accent'
                              : 'text-primary hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                          <ChevronDown className="w-4 h-4 -rotate-90 opacity-40" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* CTA Section */}
                <motion.div
                  className="p-6 border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    asChild
                    className="w-full btn-premium text-white rounded-xl py-6 text-lg font-semibold mb-4"
                  >
                    <a
                      href="tel:+34600000000"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Llamar Ahora
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-xl py-6 text-lg font-semibold"
                  >
                    <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                      Solicitar Presupuesto
                    </Link>
                  </Button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  className="p-6 bg-gray-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Ubicación</p>
                        <p className="font-medium text-primary">Utrera, Sevilla</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Clock className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Horario</p>
                        <p className="font-medium text-primary">Lun - Vie: 8:00 - 19:00</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
