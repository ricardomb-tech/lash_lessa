'use client'
import React from 'react'

export default function Nav() {
  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Search', href: '#' }
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
      {/* ── Circular Logo ── */}
      <div
        style={{
          width: '4.8rem',
          height: '4.8rem',
          borderRadius: '50%',
          background: 'rgba(242, 242, 244, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '0.5px solid rgba(15, 16, 18, 0.05)',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#ffffff')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(242, 242, 244, 0.8)')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17" />
        </svg>
      </div>

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
      </div>
    </nav>
  )
}
