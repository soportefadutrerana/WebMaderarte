'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {url: "/uploads/vista-frontal-de-la-entrada-al-edificio-de-la-ciudad.jpg", title: "Puerta de madera maciza"},
  {url: "https://cdn.abacus.ai/images/cea69fe1-3d0b-4d54-a766-792df39678d4.png", title: "Armario empotrado"},
  {url: "https://cdn.abacus.ai/images/19c212a3-7406-4aaa-ab72-ef8b8b1e258b.png", title: "Mueble de salón"},
  {url: "https://cdn.abacus.ai/images/8bdce244-935b-439b-9fe9-1de673e08749.png", title: "Carpintería de interiores"},
  {url: "https://cdn.abacus.ai/images/c563bd7a-d8ce-4123-8b7c-3910f6fba306.png", title: "Puerta lacada"},
  {url: "https://cdn.abacus.ai/images/642ef15c-6560-4b8a-b573-d9d51e3a5fcb.png", title: "Vestidor a medida"},
  {url: "https://cdn.abacus.ai/images/d605f28d-321a-4a0c-85bd-3a5967f9c506.png", title: "Cocina de madera"},
  {url: "https://cdn.abacus.ai/images/29255a1c-5547-40e7-857a-fc6c1ae29e45.png", title: "Armario personalizado"},
  {url: "https://cdn.abacus.ai/images/f00edfae-8888-4906-9e36-5cedfa1ec7ab.png", title: "Puerta de paso"},
  {url: "https://cdn.abacus.ai/images/324eed02-c2be-482d-8df0-a215eb1b4610.png", title: "Mueble de baño"},
  {url: "https://cdn.abacus.ai/images/b3b7681c-f86b-4a80-a351-53174e810e8f.png", title: "Carpintería a medida"},
  {url: "https://cdn.abacus.ai/images/5f75afdf-8234-4d70-bb4f-ef1fd7e15cca.png", title: "Puertas interiores"},
  {url: "https://cdn.abacus.ai/images/6034c3ae-ce28-4076-9691-617f9569f12e.png", title: "Armario empotrado"},
  {url: "https://cdn.abacus.ai/images/afda3ae4-7d32-4036-9dc1-1d8206ffa4b1.png", title: "Mobiliario personalizado"},
  {url: "https://cdn.abacus.ai/images/555af0d3-5451-433e-b397-3bd5116878ea.png", title: "Puerta blindada"},
  {url: "https://cdn.abacus.ai/images/235768b4-23df-4b8a-a11b-04d0e1280d50.png", title: "Vestidor completo"},
  {url: "https://cdn.abacus.ai/images/a6d0e792-2314-4409-8d70-65213369d680.png", title: "Mueble de salón"},
  {url: "https://cdn.abacus.ai/images/a6ccb82c-36c8-4156-afde-741950a3003b.png", title: "Carpintería fina"},
  {url: "https://cdn.abacus.ai/images/66329e08-8d46-4406-8262-493b549a8abb.png", title: "Armario a medida"},
  {url: "https://cdn.abacus.ai/images/4fe40555-2061-409b-bb2e-f491d967f86f.png", title: "Puerta de madera"},
  {url: "https://cdn.abacus.ai/images/13245fe5-1603-4ce9-89c1-95a324642115.png", title: "Mobiliario de cocina"},
  {url: "https://cdn.abacus.ai/images/5c4e0c03-d82b-4c51-bf3b-7c86a7349c1f.png", title: "Puertas lacadas"},
  {url: "https://cdn.abacus.ai/images/a92707de-2f08-40ba-90ff-9aa1ff678252.png", title: "Vestidor personalizado"},
  {url: "https://cdn.abacus.ai/images/b9ff7189-8dee-4401-8558-afd9cdb7f900.png", title: "Armario empotrado"},
  {url: "https://cdn.abacus.ai/images/ec0b926b-9014-43c3-9b59-4c56b3d6226e.png", title: "Mueble a medida"},
  {url: "https://cdn.abacus.ai/images/0feb84db-576d-46ff-83eb-ae999e1fa2c1.png", title: "Carpintería interior"},
  {url: "https://cdn.abacus.ai/images/fe30d384-eaf1-4903-95b8-890e062630c8.png", title: "Puerta especial"},
  {url: "https://cdn.abacus.ai/images/d69b2e02-1e1e-4bea-9c9f-d688dfe75e16.png", title: "Mobiliario personalizado"},
  {url: "https://cdn.abacus.ai/images/eb843a02-d780-4ca7-b1c7-5496536365dd.png", title: "Armario de madera"},
  {url: "https://cdn.abacus.ai/images/0c35a523-61d7-408c-9cf3-de4ca1f10441.png", title: "Vestidor a medida"},
  {url: "https://cdn.abacus.ai/images/badad727-99ec-4775-81db-bb29259b7b87.png", title: "Puerta interior"},
  {url: "https://cdn.abacus.ai/images/8daf53cc-a515-4af6-98d5-dcf938ff6f1e.png", title: "Mueble personalizado"},
  {url: "https://cdn.abacus.ai/images/2bd94409-2835-4133-a65f-1907e0e5ef05.png", title: "Carpintería a medida"},
  {url: "https://cdn.abacus.ai/images/6421014b-7ad4-4bfe-9f41-890401d02400.png", title: "Trabajo realizado"}
]

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages?.length ?? 0)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + (galleryImages?.length ?? 0)) % (galleryImages?.length ?? 0))
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
              Galería de Trabajos
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explora nuestra colección de proyectos realizados con calidad y dedicación
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={galleryRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square bg-muted rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <Image
                    src={image?.url ?? ''}
                    alt={image?.title ?? ''}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm">{image?.title ?? ''}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-50"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-accent transition-colors text-4xl font-bold z-50"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-accent transition-colors text-4xl font-bold z-50"
            aria-label="Siguiente"
          >
            ›
          </button>

          <div className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              <Image
                src={galleryImages?.[selectedImage]?.url ?? ''}
                alt={galleryImages?.[selectedImage]?.title ?? ''}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">
              {galleryImages?.[selectedImage]?.title ?? ''}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {(selectedImage ?? 0) + 1} / {galleryImages?.length ?? 0}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
