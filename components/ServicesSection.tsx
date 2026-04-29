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
    <div 
      className="service-card" 
      role="article"
      style={{
        textAlign: 'center', // Center text
        alignItems: 'center', // Center flex items
      }}
    >
      {/* Card bottom line (animates on hover via CSS) */}
      <div className="card-line" aria-hidden="true" />

      {/* Icon - Centered */}
      <div style={{ height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.4rem' }}>
        {icon}
      </div>

      {/* Number - Centered */}
      <p
        style={{
          fontFamily: 'var(--ff-dm)',
          fontSize: '1.2rem',
          fontWeight: 400,
          color: 'var(--c-grey-mid)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
        }}
      >
        {number}
      </p>

      {/* Title - Centered */}
      <h3
        style={{
          fontFamily: 'var(--ff-cormorant)',
          fontSize: '2.6rem',
          fontWeight: 300,
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          color: 'var(--c-off-black)',
          marginBottom: '2rem',
          minHeight: '6.4rem', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {title}
      </h3>

      {/* Description - Centered */}
      <p
        style={{
          fontFamily: 'var(--ff-dm)',
          fontWeight: 300,
          fontSize: '1.5rem',
          lineHeight: 1.7,
          color: '#666666',
          marginBottom: '4rem',
          flexGrow: 1,
          maxWidth: '30rem',
          margin: '0 auto 4rem auto'
        }}
      >
        {description}
      </p>

      {/* Bottom row - Centered */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <span className="tag-pill">{tag}</span>
      </div>
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
        {/* Section header - Centered for perfect alignment with cards */}
        <div
          style={{
            marginBottom: '8rem',
            textAlign: 'center'
          }}
        >
          <span
            className="copy-reveal"
            style={{
              display: 'block',
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.2rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--c-grey-mid)',
              marginBottom: '1.6rem'
            }}
          >
            03 · Especialización
          </span>
          <h2
            className="title-reveal"
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontSize: 'clamp(4rem, 6vw, 6rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: 'var(--c-off-black)',
              margin: '0 auto',
              maxWidth: '60rem'
            }}
          >
            Nuestros Servicios
          </h2>
        </div>

        {/* Grid - Guaranteed alignment */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3.2rem',
            alignItems: 'stretch',
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
