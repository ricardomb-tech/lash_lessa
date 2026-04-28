import React from 'react'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  tag: string
  icon: React.ReactNode
}

function ServiceCard({ number, title, description, tag, icon }: ServiceCardProps) {
  return (
    <div className="service-card" role="article">
      {/* Card bottom line (animates on hover via CSS) */}
      <div className="card-line" aria-hidden="true" />

      {/* Icon */}
      <div style={{ marginBottom: '3.2rem' }}>{icon}</div>

      {/* Number */}
      <p
        style={{
          fontFamily: 'var(--ff-cormorant)',
          fontSize: '1.4rem',
          fontWeight: 300,
          color: 'var(--c-grey-mid)',
          letterSpacing: '0.1em',
          marginBottom: '1.2rem',
        }}
      >
        {number}
      </p>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--ff-cormorant)',
          fontSize: '2.8rem',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'var(--c-off-black)',
          marginBottom: '1.6rem',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--ff-dm)',
          fontWeight: 300,
          fontSize: '1.5rem',
          lineHeight: 1.7,
          color: 'var(--c-grey-mid)',
          marginBottom: '3.2rem',
          flexGrow: 1,
        }}
      >
        {description}
      </p>

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="tag-pill">{tag}</span>
        <span
          style={{
            fontFamily: 'var(--ff-dm)',
            fontSize: '1.3rem',
            color: 'var(--c-grey-mid)',
            opacity: 0,
            transform: 'translateX(-8px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
          className="card-see-more"
        >
          Ver más →
        </span>
      </div>

      <style>{`
        .service-card:hover .card-see-more {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  )
}

/* ── SVG Icons ── */
const IconSquare = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#0f1012" />
  </svg>
)

const IconDot = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="14" fill="#0f1012" />
  </svg>
)

const IconRing = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="13" stroke="#0f1012" strokeWidth="2" />
  </svg>
)

const services: ServiceCardProps[] = [
  {
    number: '01',
    title: 'Volumen Tecnológico',
    description:
      'Extensiones que combinan materiales premium con técnicas de aplicación milimétrica. El resultado: una mirada de impacto que dura semanas sin perder naturalidad.',
    tag: 'Pestañas',
    icon: <IconSquare />,
  },
  {
    number: '02',
    title: 'Efecto Rímel',
    description:
      'Lifting de pestañas de curvatura perfecta. Abre la mirada sin extensiones, con un resultado que dura hasta 8 semanas. Ideal para quienes buscan belleza sin mantenimiento.',
    tag: 'Lifting',
    icon: <IconDot />,
  },
  {
    number: '03',
    title: 'Skin Care Ritual',
    description:
      'Protocolos faciales personalizados que unen ingredientes activos de última generación con el toque humano de nuestra especialista. Tu piel, en su mejor versión.',
    tag: 'Facial',
    icon: <IconRing />,
  },
]

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="section-padding"
      style={{ background: 'var(--c-bg)' }}
    >
      <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '2rem',
            marginBottom: '6.4rem',
          }}
        >
          <span
            className="copy-reveal"
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontSize: '1.4rem',
              fontWeight: 300,
              color: 'var(--c-grey-mid)',
              letterSpacing: '0.1em',
            }}
          >
            0.1
          </span>
          <h2
            className="title-reveal"
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontSize: 'clamp(3.6rem, 5vw, 5.6rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: 'var(--c-off-black)',
            }}
          >
            Nuestros Servicios
          </h2>
        </div>

        {/* Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.4rem',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
