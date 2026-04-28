import React from 'react'

const steps = [
  {
    num: '0.1',
    title: 'Elige tu servicio',
    desc: 'Selecciona entre nuestro catálogo especializado',
  },
  {
    num: '0.2',
    title: 'Selecciona fecha y hora',
    desc: 'Disponibilidad en tiempo real, sin esperas',
  },
  {
    num: '0.3',
    title: 'Confirmación inmediata',
    desc: 'Recibe tu cita confirmada al instante',
  },
]

interface BookingSectionProps {
  onOpenBooking: () => void
}

export default function BookingSection({ onOpenBooking }: BookingSectionProps) {
  return (
    <section
      id="booking"
      className="section-padding"
      style={{ background: 'var(--c-grey-dark)' }}
    >
      <div
        style={{
          maxWidth: '120rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8rem',
          alignItems: 'center',
        }}
        className="booking-grid"
      >
        {/* Columna izquierda */}
        <div>
          {/* Número decorativo */}
          <p
            aria-hidden="true"
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontSize: '10rem',
              fontWeight: 300,
              lineHeight: 1,
              color: 'rgba(242,242,244,0.15)',
              marginBottom: '2.4rem',
              userSelect: 'none',
            }}
          >
            1.0
          </p>

          {/* Etiqueta */}
          <p
            className="copy-reveal"
            style={{
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.2rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(242,242,244,0.4)',
              marginBottom: '1.6rem',
            }}
          >
            02 · Centro Especializado
          </p>

          <h2
            className="title-reveal"
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontSize: 'clamp(3.2rem, 4.5vw, 5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'rgba(242,242,244,0.92)',
              marginBottom: '2rem',
            }}
          >
            Reserva inteligente <br />
            disponible 24/7
          </h2>

          <p
            className="copy-reveal"
            style={{
              fontFamily: 'var(--ff-dm)',
              fontWeight: 300,
              fontSize: '1.6rem',
              lineHeight: 1.7,
              color: 'rgba(242,242,244,0.55)',
              marginBottom: '4rem',
              maxWidth: '44rem',
            }}
          >
            Hemos eliminado las barreras entre tú y tu bienestar. Nuestro sistema
            de agendamiento autónomo te permite gestionar tu cita en segundos,
            con confirmación inmediata y recordatorios automáticos.
          </p>

          {/* CTA */}
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); onOpenBooking(); }}
            id="booking-cta"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.5rem',
              fontWeight: 400,
              letterSpacing: '0.03em',
              color: 'var(--c-off-black)',
              background: 'var(--c-white)',
              padding: '1.8rem 4rem',
              borderRadius: '0.4rem',
              textDecoration: 'none',
              border: '0.5px solid var(--c-white)',
              transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.color = 'var(--c-white)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'var(--c-white)'
              el.style.color = 'var(--c-off-black)'
            }}
          >
            Agendar Ahora
          </a>
        </div>

        {/* Columna derecha — Pasos */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((step, i) => (
            <div key={step.num}>
              <div
                className="copy-reveal"
                style={{
                  padding: i === 0 ? '0 0 3.6rem' : '3.6rem 0',
                  display: 'flex',
                  gap: '2.4rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: 'var(--ff-cormorant)',
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    color: 'rgba(242,242,244,0.35)',
                    minWidth: '4rem',
                    paddingTop: '0.2rem',
                  }}
                >
                  {step.num}
                </span>

                {/* Content */}
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--ff-dm)',
                      fontSize: '1.6rem',
                      fontWeight: 400,
                      color: 'rgba(242,242,244,0.88)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--ff-dm)',
                      fontWeight: 300,
                      fontSize: '1.4rem',
                      color: 'rgba(242,242,244,0.45)',
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Divider (not after last item) */}
              {i < steps.length - 1 && (
                <div
                  className="divider-line"
                  style={{ color: 'rgba(255,255,255,0.1)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
            gap: 6rem !important;
          }
        }
      `}</style>
    </section>
  )
}
