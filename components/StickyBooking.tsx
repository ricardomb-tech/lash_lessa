'use client'
import React, { useState, useEffect } from 'react'

interface StickyBookingProps {
  onOpenBooking: () => void
}

export default function StickyBooking({ onOpenBooking }: StickyBookingProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after 100vh (past hero)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={onOpenBooking}
      style={{
        position: 'fixed',
        bottom: '3.2rem',
        left: '3.2rem',
        background: 'var(--c-off-black)',
        color: 'white',
        border: 'none',
        padding: '1.2rem 2.8rem',
        borderRadius: '5rem',
        fontFamily: 'var(--ff-dm)',
        fontSize: '1.3rem',
        fontWeight: 500,
        letterSpacing: '0.05em',
        zIndex: 1400,
        cursor: 'pointer',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      Agendar Reserva
    </button>
  )
}
