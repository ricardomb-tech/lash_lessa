'use client'
import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import BookingModal from './BookingModal'
import AIAgent from './AIAgent'
import StickyBooking from './StickyBooking'
import Footer from './Footer'
import { usePathname } from 'next/navigation'

interface GlobalUIProps {
  children: React.ReactNode
}

export default function GlobalUI({ children }: GlobalUIProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const pathname = usePathname()

  const handleOpenBooking = () => setIsBookingOpen(true)

  // Close modal on navigation
  useEffect(() => {
    setIsBookingOpen(false)
  }, [pathname])

  // Global event listener
  useEffect(() => {
    const handleOpen = () => setIsBookingOpen(true)
    window.addEventListener('open-booking', handleOpen)
    return () => window.removeEventListener('open-booking', handleOpen)
  }, [])

  // Don't show global UI in admin (just render children)
  if (pathname.startsWith('/admin')) return <>{children}</>

  return (
    <>
      <Nav onOpenBooking={handleOpenBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <AIAgent />
      <StickyBooking onOpenBooking={handleOpenBooking} />
      
      {/* Main Content */}
      <main>{children}</main>

      <Footer onOpenBooking={handleOpenBooking} />
    </>
  )
}
