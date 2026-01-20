import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const dynamic = 'force-dynamic'

const baseUrl = process.env.NEXTAUTH_URL || 'https://maderarteutrera.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Maderarte Utrera | Carpintería de Madera a Medida',
  description: 'Especialistas en puertas de madera, armarios y mobiliario a medida. Calidad, profesionalidad y acabados perfectos. La madera bien trabajada se nota el primer día y se agradece muchos años.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  openGraph: {
    title: 'Maderarte Utrera | Carpintería de Madera a Medida',
    description: 'Especialistas en puertas de madera, armarios y mobiliario a medida. Calidad, profesionalidad y acabados perfectos.',
    url: baseUrl,
    siteName: 'Maderarte Utrera',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630
    }],
    locale: 'es_ES',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
