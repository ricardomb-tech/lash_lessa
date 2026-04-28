import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--ff-cormorant',
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--ff-dm',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lash_Lessa — Estética Ocular de Lujo',
  description:
    'Centro de belleza y estética ocular premium. Especialistas en extensiones de pestañas, lifting y skin care. Donde la precisión técnica transforma tu mirada en tu firma.',
  keywords: [
    'extensiones de pestañas',
    'lifting pestañas',
    'skin care',
    'estética ocular',
    'belleza de lujo',
  ],
  openGraph: {
    title: 'Lash_Lessa — Estética Ocular de Lujo',
    description:
      'Donde la precisión técnica y el arte transforman tu mirada en tu firma.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
