import React from 'react'

export default function Footer() {
  const links = ['Servicios', 'Portafolio', 'Blog', 'Contacto']
  const socials = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'WhatsApp', href: 'https://wa.me' },
  ]

  return (
    <footer
      id="footer"
      style={{
        background: 'var(--c-off-black)',
        color: 'rgba(242,242,244,0.6)',
        fontFamily: 'var(--ff-dm)',
      }}
    >
      {/* Main grid */}
      <div
        style={{
          maxWidth: '120rem',
          margin: '0 auto',
          padding: '8rem 4rem 6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '6rem',
        }}
        className="footer-grid"
      >
        {/* Col 1 — Logo + tagline */}
        <div>
          <p
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontSize: '2.2rem',
              fontWeight: 400,
              color: 'rgba(242,242,244,0.9)',
              marginBottom: '1.6rem',
              letterSpacing: '-0.01em',
            }}
          >
            Lash_Lessa
          </p>
          <p style={{ fontSize: '1.4rem', lineHeight: 1.7, maxWidth: '26rem' }}>
            Centro de estética ocular de lujo. Donde cada mirada cuenta una
            historia inolvidable.
          </p>
        </div>

        {/* Col 2 — Links */}
        <div>
          <p
            style={{
              fontSize: '1.1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(242,242,244,0.4)',
              marginBottom: '2.4rem',
            }}
          >
            Navegación
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={{
                    fontSize: '1.4rem',
                    color: 'rgba(242,242,244,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(242,242,244,0.95)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(242,242,244,0.6)')
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Redes */}
        <div>
          <p
            style={{
              fontSize: '1.1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(242,242,244,0.4)',
              marginBottom: '2.4rem',
            }}
          >
            Redes
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.4rem',
                    color: 'rgba(242,242,244,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(242,242,244,0.95)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(242,242,244,0.6)')
                  }
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          maxWidth: '120rem',
          margin: '0 auto',
          padding: '2.4rem 4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ fontSize: '1.3rem' }}>© 2024 Lash_Lessa</p>
        <div style={{ display: 'flex', gap: '3.2rem' }}>
          {['Privacy Policy', 'Terms'].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: '1.3rem',
                color: 'rgba(242,242,244,0.4)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  'rgba(242,242,244,0.8)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  'rgba(242,242,244,0.4)')
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </footer>
  )
}
