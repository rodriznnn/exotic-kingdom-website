import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Exotic Kingdom | Clínica Veterinaria Premium en Surco, Lima',
  description: 'Clínica veterinaria especializada en mascotas exóticas, perros y gatos. Servicios de consultas, grooming, hotel, rayos X, ecografías y más. Av. Benavides 5125, Surco.',
  keywords: ['veterinaria', 'mascotas exóticas', 'Surco', 'Lima', 'perros', 'gatos', 'grooming', 'hotel mascotas'],
  authors: [{ name: 'Exotic Kingdom' }],
  openGraph: {
    title: 'Exotic Kingdom | Clínica Veterinaria Premium',
    description: 'Cuidado veterinario de excelencia para mascotas exóticas, perros y gatos en Lima.',
    locale: 'es_PE',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#059669',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
