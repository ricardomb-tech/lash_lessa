'use client'
import React from 'react'

interface NavProps {
  onOpenBooking: () => void
}

export default function Nav({ onOpenBooking }: NavProps) {
  const links = [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Filosofía', href: '/#filosofia' },
    { label: 'Portafolio', href: '/#portafolio' },
  ]

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '2.4rem',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center', // Center both pills
        alignItems: 'center',
        zIndex: 9999,
        pointerEvents: 'none',
        gap: '1.2rem' // Small gap between independent pills
      }}>
        {/* ── Logo Pill (Independent) ── */}
        <a 
          href="/" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center',
            background: 'rgba(238, 238, 240, 0.45)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '5rem',
            padding: '1rem 2.4rem',
            border: '0.5px solid rgba(15, 16, 18, 0.05)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)',
            pointerEvents: 'auto',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(238, 240, 242, 0.8)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(238, 238, 240, 0.45)')}
        >
          <span style={{
            fontFamily: 'var(--ff-dm)',
            fontSize: '1.4rem',
            fontWeight: 500,
            color: 'var(--c-off-black)',
            letterSpacing: '-0.01em'
          }}>
            Lash_Lessa
          </span>
        </a>

        {/* ── Navigation Pill (Independent) ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(238, 238, 240, 0.45)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '5rem',
          padding: '0.6rem 0.6rem 0.6rem 2.4rem',
          border: '0.5px solid rgba(15, 16, 18, 0.05)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)',
          gap: '3.6rem',
          pointerEvents: 'auto',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }} className="nav-links-pill">
          <div className="nav-links-desktop" style={{ display: 'flex', gap: '3.2rem', alignItems: 'center' }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--ff-dm)',
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  color: 'var(--c-off-black)',
                  textDecoration: 'none',
                  opacity: 0.6,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={(e) => { 
              e.preventDefault(); 
              window.dispatchEvent(new CustomEvent('open-booking'));
            }}
            style={{
              background: 'var(--c-off-black)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5rem',
              padding: '0.9rem 2.2rem',
              fontSize: '1.3rem',
              fontFamily: 'var(--ff-dm)',
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Reserva
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-links-pill {
            padding: 0.6rem !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </>
  )
}
