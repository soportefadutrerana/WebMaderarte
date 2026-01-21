'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { X, ChevronLeft, ChevronRight, Grid3X3, LayoutGrid, Expand, ArrowDown } from 'lucide-react'

type Category = 'todos' | 'puertas' | 'armarios' | 'cocinas' | 'baños' | 'interiores'

interface GalleryImage {
  url: string
  title: string
  category: Category
  description?: string
  featured?: boolean
}

const categories: { id: Category; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'puertas', label: 'Puertas' },
  { id: 'armarios', label: 'Armarios' },
  { id: 'cocinas', label: 'Cocinas' },
  { id: 'baños', label: 'Baños' },
  { id: 'interiores', label: 'Interiores' },
]

const galleryImages: GalleryImage[] = [
  { url: "/uploads/vista-frontal-de-la-entrada-al-edificio-de-la-ciudad.jpg", title: "Puerta de entrada maciza", category: "puertas", description: "Puerta de madera maciza tallada a mano con herrajes artesanales", featured: true },
  { url: "https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png", title: "Armario empotrado elegante", category: "armarios", description: "Armario empotrado con acabados en madera natural" },
  { url: "https://cdn.abacus.ai/images/19c212a3-7406-4aaa-ab72-ef8b8b1e258b.png", title: "Mueble de baño premium", category: "baños", description: "Mueble de baño con encimera de mármol", featured: true },
  { url: "https://cdn.abacus.ai/images/8bdce244-935b-439b-9fe9-1de673e08749.png", title: "Carpintería de interiores", category: "interiores", description: "Trabajo de carpintería interior personalizado" },
  { url: "https://cdn.abacus.ai/images/c563bd7a-d8ce-4123-8b7c-3910f6fba306.png", title: "Puerta lacada blanca", category: "puertas", description: "Puerta lacada con diseño minimalista" },
  { url: "https://cdn.abacus.ai/images/642ef15c-6560-4b8a-b573-d9d51e3a5fcb.png", title: "Vestidor a medida", category: "armarios", description: "Vestidor completo con iluminación LED integrada", featured: true },
  { url: "https://cdn.abacus.ai/images/d605f28d-321a-4a0c-85bd-3a5967f9c506.png", title: "Cocina de diseño", category: "cocinas", description: "Cocina moderna con isla central" },
  { url: "https://cdn.abacus.ai/images/29255a1c-5547-40e7-857a-fc6c1ae29e45.png", title: "Armario personalizado", category: "armarios", description: "Armario con distribución personalizada" },
  { url: "https://cdn.abacus.ai/images/f00edfae-8888-4906-9e36-5cedfa1ec7ab.png", title: "Puerta de paso interior", category: "puertas", description: "Puerta de paso con cristal decorativo" },
  { url: "https://cdn.abacus.ai/images/324eed02-c2be-482d-8df0-a215eb1b4610.png", title: "Mueble de baño moderno", category: "baños", description: "Diseño contemporáneo con almacenaje optimizado" },
  { url: "https://cdn.abacus.ai/images/b3b7681c-f86b-4a80-a351-53174e810e8f.png", title: "Carpintería a medida", category: "interiores", description: "Soluciones de carpintería personalizadas" },
  { url: "https://cdn.abacus.ai/images/5f75afdf-8234-4d70-bb4f-ef1fd7e15cca.png", title: "Puertas interiores", category: "puertas", description: "Conjunto de puertas con diseño unificado" },
  { url: "https://cdn.abacus.ai/images/6034c3ae-ce28-4076-9691-617f9569f12e.png", title: "Armario empotrado", category: "armarios", description: "Solución de almacenaje empotrado" },
  { url: "https://cdn.abacus.ai/images/afda3ae4-7d32-4036-9dc1-1d8206ffa4b1.png", title: "Mobiliario personalizado", category: "interiores", description: "Muebles diseñados a medida", featured: true },
  { url: "https://cdn.abacus.ai/images/555af0d3-5451-433e-b397-3bd5116878ea.png", title: "Puerta blindada", category: "puertas", description: "Puerta de seguridad con acabado en madera" },
  { url: "https://cdn.abacus.ai/images/235768b4-23df-4b8a-a11b-04d0e1280d50.png", title: "Vestidor completo", category: "armarios", description: "Vestidor con múltiples compartimentos" },
  { url: "https://cdn.abacus.ai/images/a6d0e792-2314-4409-8d70-65213369d680.png", title: "Mueble de salón", category: "interiores", description: "Mueble de salón con diseño moderno" },
  { url: "https://cdn.abacus.ai/images/a6ccb82c-36c8-4156-afde-741950a3003b.png", title: "Carpintería fina", category: "interiores", description: "Trabajos de carpintería de alta calidad" },
  { url: "https://cdn.abacus.ai/images/66329e08-8d46-4406-8262-493b549a8abb.png", title: "Armario a medida", category: "armarios", description: "Armario diseñado según necesidades del cliente" },
  { url: "https://cdn.abacus.ai/images/4fe40555-2061-409b-bb2e-f491d967f86f.png", title: "Puerta de madera noble", category: "puertas", description: "Puerta fabricada con maderas nobles" },
  { url: "https://cdn.abacus.ai/images/13245fe5-1603-4ce9-89c1-95a324642115.png", title: "Cocina integral", category: "cocinas", description: "Cocina completamente equipada", featured: true },
  { url: "https://cdn.abacus.ai/images/5c4e0c03-d82b-4c51-bf3b-7c86a7349c1f.png", title: "Puertas lacadas", category: "puertas", description: "Acabado lacado de alta calidad" },
  { url: "https://cdn.abacus.ai/images/a92707de-2f08-40ba-90ff-9aa1ff678252.png", title: "Vestidor personalizado", category: "armarios", description: "Diseño personalizado para vestidor" },
  { url: "https://cdn.abacus.ai/images/b9ff7189-8dee-4401-8558-afd9cdb7f900.png", title: "Armario empotrado premium", category: "armarios", description: "Armario de gama alta con acabados premium" },
  { url: "https://cdn.abacus.ai/images/ec0b926b-9014-43c3-9b59-4c56b3d6226e.png", title: "Mueble a medida", category: "interiores", description: "Mobiliario personalizado para el hogar" },
  { url: "https://cdn.abacus.ai/images/0feb84db-576d-46ff-83eb-ae999e1fa2c1.png", title: "Carpintería interior", category: "interiores", description: "Soluciones integrales de carpintería" },
  { url: "https://cdn.abacus.ai/images/fe30d384-eaf1-4903-95b8-890e062630c8.png", title: "Puerta especial", category: "puertas", description: "Diseño especial según proyecto" },
  { url: "https://cdn.abacus.ai/images/d69b2e02-1e1e-4bea-9c9f-d688dfe75e16.png", title: "Mobiliario exclusivo", category: "interiores", description: "Piezas únicas de mobiliario" },
  { url: "https://cdn.abacus.ai/images/eb843a02-d780-4ca7-b1c7-5496536365dd.png", title: "Armario de madera", category: "armarios", description: "Armario en madera natural" },
  { url: "https://cdn.abacus.ai/images/0c35a523-61d7-408c-9cf3-de4ca1f10441.png", title: "Vestidor de lujo", category: "armarios", description: "Vestidor con diseño de lujo" },
  { url: "https://cdn.abacus.ai/images/badad727-99ec-4775-81db-bb29259b7b87.png", title: "Puerta interior clásica", category: "puertas", description: "Diseño clásico atemporal" },
  { url: "https://cdn.abacus.ai/images/8daf53cc-a515-4af6-98d5-dcf938ff6f1e.png", title: "Mueble personalizado", category: "interiores", description: "Diseño único para espacios especiales" },
  { url: "https://cdn.abacus.ai/images/2bd94409-2835-4133-a65f-1907e0e5ef05.png", title: "Carpintería artesanal", category: "interiores", description: "Trabajo artesanal de alta calidad" },
  { url: "https://cdn.abacus.ai/images/6421014b-7ad4-4bfe-9f41-890401d02400.png", title: "Proyecto destacado", category: "interiores", description: "Uno de nuestros proyectos más destacados" },
]

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category>('todos')
  const [isGridView, setIsGridView] = useState(true)

  const filteredImages = activeCategory === 'todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }, [])

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }, [selectedImage, filteredImages.length])

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }, [selectedImage, filteredImages.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, nextImage, prevImage, closeLightbox])

  const scrollToGallery = () => {
    document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Cálido y elegante */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-[#5d4e37]">
        {/* Patrón decorativo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-amber-200 text-sm font-medium mb-6">
                Nuestro Portfolio
              </span>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Galería de Trabajos
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                Explora nuestra colección de proyectos realizados con calidad y dedicación artesanal
              </p>

              <motion.button
                onClick={scrollToGallery}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-300 border border-white/20"
                whileHover={{ y: 3 }}
              >
                <span className="text-sm font-medium">Ver proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Wave decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L48 95.8C96 91.7 192 83.3 288 79.2C384 75 480 75 576 77.1C672 79.2 768 83.3 864 83.3C960 83.3 1056 79.2 1152 75C1248 70.8 1344 66.7 1392 64.6L1440 62.5V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Filtros y controles */}
      <section id="gallery-section" className="py-8 bg-white sticky top-[72px] z-30 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Filtros de categoría */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-primary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Vista toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded-md transition-all ${isGridView ? 'bg-white shadow-sm text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                title="Vista Grid"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded-md transition-all ${!isGridView ? 'bg-white shadow-sm text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                title="Vista Masonry"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contador de resultados */}
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-gray-500 mt-4"
          >
            Mostrando <span className="font-semibold text-primary">{filteredImages.length}</span> {filteredImages.length === 1 ? 'proyecto' : 'proyectos'}
            {activeCategory !== 'todos' && ` en ${categories.find(c => c.id === activeCategory)?.label}`}
          </motion.p>
        </div>
      </section>

      {/* Galería */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isGridView ? (
              /* Vista Grid - Uniforme */
              <motion.div
                key="grid-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                          <Expand className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Info on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-xs text-accent font-medium uppercase tracking-wide mb-1">{image.category}</p>
                          <h3 className="text-sm font-semibold text-primary line-clamp-1">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Vista Masonry - Columnas con CSS */
              <motion.div
                key="masonry-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="group cursor-pointer break-inside-avoid"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={image.url}
                        alt={image.title}
                        width={400}
                        height={image.featured ? 500 : (index % 3 === 0 ? 350 : 300)}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                          <Expand className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Info on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-xs text-accent font-medium uppercase tracking-wide mb-1">{image.category}</p>
                          <h3 className="text-sm font-semibold text-primary line-clamp-1">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#5d4e37]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Te gustaría un proyecto similar?
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos y hagamos realidad tu próximo proyecto de carpintería
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Solicitar Presupuesto
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navegación */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Imagen */}
            <div
              className="h-full flex flex-col items-center justify-center p-4 md:p-16"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-5xl max-h-[70vh] w-full h-full"
              >
                <Image
                  src={filteredImages[selectedImage]?.url ?? ''}
                  alt={filteredImages[selectedImage]?.title ?? ''}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Info */}
              <div className="mt-6 text-center">
                <span className="inline-block px-3 py-1 bg-accent/80 text-white text-xs font-medium rounded-full mb-3 capitalize">
                  {filteredImages[selectedImage]?.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                  {filteredImages[selectedImage]?.title}
                </h3>
                {filteredImages[selectedImage]?.description && (
                  <p className="text-gray-300 text-sm max-w-xl mx-auto">
                    {filteredImages[selectedImage]?.description}
                  </p>
                )}
                <p className="text-gray-400 text-sm mt-4">
                  {selectedImage + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
