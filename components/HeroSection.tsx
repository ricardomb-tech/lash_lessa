import React from 'react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-grid"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        overflow: 'hidden',
        padding: '0 4rem',
      }}
    >
      {/* ── Decorative background blobs ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10rem',
          right: '-10rem',
          width: '60rem',
          height: '60rem',
          borderRadius: '50%',
          background: 'rgba(15,16,18,0.03)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-8rem',
          left: '-12rem',
          width: '55rem',
          height: '55rem',
          borderRadius: '50%',
          background: 'rgba(15,16,18,0.04)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '40rem',
          height: '40rem',
          borderRadius: '50%',
          background: 'rgba(15,16,18,0.02)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '3.2rem',
          maxWidth: '100rem',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          className="hero-eyebrow"
          style={{
            fontFamily: 'var(--ff-dm)',
            fontSize: '1.2rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--c-grey-mid)',
            fontWeight: 300,
          }}
        >
          Estética Ocular · Since 2024
        </p>

        {/* H1 — split lines */}
        <h1
          style={{
            fontFamily: 'var(--ff-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(8rem, 12vw, 15rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: 'var(--c-off-black)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span className="word">
            <span className="word-inner">Lash</span>
          </span>
          <span className="word">
            <span className="word-inner">_Lessa</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-subtitle"
          style={{
            fontFamily: 'var(--ff-dm)',
            fontWeight: 300,
            fontSize: '1.8rem',
            lineHeight: 1.6,
            color: 'var(--c-grey-mid)',
            maxWidth: '48rem',
          }}
        >
          Donde la precisión técnica y el arte
          <br />
          transforman tu mirada en tu firma.
        </p>

        {/* Actions */}
        <div
          className="hero-actions"
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '0.8rem',
          }}
        >
          <a
            href="#booking"
            id="hero-cta-primary"
            style={{
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.5rem',
              fontWeight: 400,
              letterSpacing: '0.03em',
              color: 'var(--c-white)',
              background: 'var(--c-off-black)',
              padding: '1.8rem 4rem',
              borderRadius: '0.4rem',
              textDecoration: 'none',
              border: '0.5px solid var(--c-off-black)',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.color = 'var(--c-off-black)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'var(--c-off-black)'
              el.style.color = 'var(--c-white)'
            }}
          >
            Agendar Cita
          </a>
          <a
            href="#servicios"
            id="hero-cta-secondary"
            className="arrow-link-plain"
            style={{ fontSize: '1.5rem' }}
          >
            Ver Servicios →
          </a>
        </div>
      </div>

      {/* ── Floating Badge glassmorphism ── */}
      <div
        className="glass hero-float-cta"
        style={{
          position: 'absolute',
          bottom: '8rem',
          right: '4rem',
          borderRadius: '1.6rem',
          padding: '1.6rem 2.4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
        }}
      >
        <span className="pulse-dot" aria-hidden="true" />
        <span
          style={{
            fontFamily: 'var(--ff-dm)',
            fontSize: '1.3rem',
            fontWeight: 400,
            color: 'var(--c-off-black)',
            letterSpacing: '0.02em',
          }}
        >
          Disponibilidad 24/7
        </span>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--ff-dm)',
            fontSize: '1.1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--c-grey-mid)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          Scroll
        </span>
        <span className="scroll-line" aria-hidden="true" />
      </div>
    </section>
  )
}
