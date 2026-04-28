import React from 'react'

export default function IntroSection() {
  return (
    <section
      id="filosofia"
      className="section-padding"
      style={{ background: 'var(--c-bg)' }}
    >
      <div
        style={{
          maxWidth: '120rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '8rem',
          alignItems: 'start',
        }}
        className="intro-grid"
      >
        {/* Columna izquierda */}
        <div style={{ position: 'relative' }}>
          {/* Número decorativo */}
          <p
            aria-hidden="true"
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontSize: '16rem',
              fontWeight: 300,
              lineHeight: 1,
              color: 'var(--c-off-black)',
              opacity: 0.06,
              position: 'absolute',
              top: '-4rem',
              left: '-2rem',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            01
          </p>

          {/* Etiqueta */}
          <p
            className="copy-reveal"
            style={{
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.2rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--c-grey-mid)',
              marginTop: '12rem',
              position: 'relative',
            }}
          >
            01 · Filosofía
          </p>

          {/* Línea decorativa */}
          <div
            className="divider-line copy-reveal"
            style={{
              marginTop: '2.4rem',
              color: 'var(--c-grey-light)',
            }}
          />
        </div>

        {/* Columna derecha */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.2rem' }}>
          {/* Párrafo grande */}
          <h2
            className="title-reveal"
            style={{
              fontFamily: 'var(--ff-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(3.2rem, 4vw, 4.2rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--c-off-black)',
            }}
          >
            Cada mirada cuenta una historia.
            <br />
            Nosotras la hacemos inolvidable.
          </h2>

          {/* Párrafo body */}
          <p
            className="copy-reveal"
            style={{
              fontFamily: 'var(--ff-dm)',
              fontWeight: 300,
              fontSize: '1.6rem',
              lineHeight: 1.8,
              color: 'var(--c-grey-mid)',
              maxWidth: '56rem',
            }}
          >
            En Lash_Lessa fusionamos técnica de vanguardia con sensibilidad estética.
            Cada tratamiento es un ritual diseñado exclusivamente para ti: desde
            extensiones de volumen tecnológico hasta protocolos de skin care personalizados.
            Tu confianza es nuestra materia prima más valiosa.
          </p>

          {/* Link */}
          <div className="copy-reveal">
            <a href="#servicios" className="arrow-link">
              Conocer más →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
