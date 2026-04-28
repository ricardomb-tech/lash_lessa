'use client'
import React from 'react'

interface NavProps {
  onOpenBooking: () => void
}

export default function Nav({ onOpenBooking }: NavProps) {
  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Portafolio', href: '#portafolio' },

  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: '3.2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '1.2rem',
        opacity: 0, // GSAP will animate this
      }}
      className="nav-container"
    >
      {/* ── Circular/Oval Logo ── */}
      <a
        href="/"
        style={{
          height: '4.8rem',
          padding: '0 2.4rem',
          borderRadius: '5rem',
          background: 'rgba(242, 242, 244, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '0.5px solid rgba(15, 16, 18, 0.05)',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#ffffff')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(242, 242, 244, 0.8)')}
      >
        <span style={{
          fontFamily: 'var(--ff-cormorant)',
          fontSize: '1.6rem',
          fontWeight: 400,
          color: 'var(--c-off-black)',
          letterSpacing: '-0.01em'
        }}>
          Lash_Lessa
        </span>
      </a>

      {/* ── Pill Nav Links ── */}
      <div
        style={{
          background: 'rgba(242, 242, 244, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1.6rem',
          padding: '0.8rem 3.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '4.8rem',
          border: '0.5px solid rgba(15, 16, 18, 0.05)',
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.4rem',
              fontWeight: 400,
              color: 'var(--c-off-black)',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {link.label}
          </a>
        ))}
        {/* CTAs */}
        <div style={{ width: '0.5px', height: '1.6rem', background: 'rgba(15,16,18,0.1)' }} />
        <a
          href="#booking"
          onClick={(e) => { e.preventDefault(); onOpenBooking(); }}
          style={{
            fontFamily: 'var(--ff-dm)',
            fontSize: '1.4rem',
            fontWeight: 500,
            color: 'var(--c-off-black)',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Reserva
        </a>
      </div>
    </nav>
  )
}
