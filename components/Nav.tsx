import React from 'react'

export default function Nav() {
  return (
    <nav
      aria-label="Navegación principal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(242,242,244,0.72)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '0.5px solid rgba(15,16,18,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4rem',
        height: '7rem',
      }}
    >
      {/* Logo */}
      <a
        href="/"
        id="nav-logo"
        style={{
          fontFamily: 'var(--ff-cormorant)',
          fontSize: '2rem',
          fontWeight: 400,
          color: 'var(--c-off-black)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        Lash_Lessa
      </a>

      {/* Centro — links */}
      <div
        style={{
          display: 'flex',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="hidden md:flex"
      >
        {['Servicios', 'Portafolio', 'Contacto'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            id={`nav-link-${item.toLowerCase()}`}
            style={{
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.3rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--c-grey-mid)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-off-black)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-grey-mid)')
            }
          >
            {item}
          </a>
        ))}
      </div>

      {/* Derecha — CTA */}
      <a
        href="#booking"
        id="nav-cta"
        style={{
          fontFamily: 'var(--ff-dm)',
          fontSize: '1.3rem',
          fontWeight: 400,
          letterSpacing: '0.05em',
          color: 'var(--c-off-black)',
          textDecoration: 'none',
          border: '0.5px solid var(--c-off-black)',
          borderRadius: '0.4rem',
          padding: '0.9rem 2.4rem',
          transition: 'background 0.3s ease, color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.background = 'var(--c-off-black)'
          el.style.color = 'var(--c-white)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.background = 'transparent'
          el.style.color = 'var(--c-off-black)'
        }}
      >
        Agendar
      </a>
    </nav>
  )
}
