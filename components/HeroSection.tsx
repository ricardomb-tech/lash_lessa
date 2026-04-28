'use client'
import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* ── Background Image Container ── */}
      <div
        className="hero-image-container"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '140rem' }}>
          <Image
            src="/images/hero.png"
            alt="Lash_Lessa Luxury Aesthetic"
            fill
            priority
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
          {/* Soft mask fade to white at the bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35%',
              background: 'linear-gradient(to top, #ffffff, transparent)',
              zIndex: 2,
            }}
          />
          {/* Optional side masks for extreme immersion */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '15%',
              background: 'linear-gradient(to right, #ffffff, transparent)',
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '15%',
              background: 'linear-gradient(to left, #ffffff, transparent)',
              zIndex: 2,
            }}
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          width: '100%',
          maxWidth: '120rem',
          margin: '0 auto',
          padding: '0 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '8rem',
        }}
      >
        {/* Bottom Content Group (augen.pro style) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
          {/* Title group */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
             <p
              className="hero-eyebrow"
              style={{
                fontFamily: 'var(--ff-dm)',
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
                textTransform: 'lowercase',
                color: 'var(--c-off-black)',
                fontWeight: 400,
                opacity: 0.8,
              }}
            >
              lash_lessa
            </p>
            <h1
              style={{
                fontFamily: 'var(--ff-dm)',
                fontWeight: 400,
                fontSize: 'clamp(4rem, 6vw, 6.4rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'var(--c-off-black)',
              }}
            >
              <span className="word">
                <span className="word-inner">Donde la mirada</span>
              </span>
              <br />
              <span className="word">
                <span className="word-inner">se convierte en arte.</span>
              </span>
            </h1>
          </div>

          {/* Actions & Explore */}
          <div
            className="hero-actions"
            style={{
              display: 'flex',
              gap: '1.6rem',
              alignItems: 'center',
            }}
          >
             <span style={{ 
               fontFamily: 'var(--ff-dm)', 
               fontSize: '1.4rem', 
               color: 'var(--c-grey-mid)',
               marginRight: '0.8rem'
             }}>
               Explora
             </span>
            <a
              href="#servicios"
              className="tag-pill"
              style={{ 
                padding: '0.8rem 2rem', 
                fontSize: '1.3rem', 
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderColor: 'rgba(15,16,18,0.3)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(15,16,18,0.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Lifting
            </a>
            <a
              href="#servicios"
              className="tag-pill"
              style={{ 
                padding: '0.8rem 2rem', 
                fontSize: '1.3rem', 
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderColor: 'rgba(15,16,18,0.3)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(15,16,18,0.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Volumen
            </a>
            <a
              href="#servicios"
              className="tag-pill"
              style={{ 
                padding: '0.8rem 2rem', 
                fontSize: '1.3rem', 
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderColor: 'rgba(15,16,18,0.3)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(15,16,18,0.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Skin Care
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator (Bottom Left) ── */}
      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '8rem',
          left: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
        }}
      >
        <div 
          style={{ 
            width: '3rem', 
            height: '3rem', 
            borderRadius: '50%', 
            background: 'var(--c-bg)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '1.4rem'
          }}
        >
          ↓
        </div>
      </div>

       {/* ── Floating Badge (Top Center-ish) ── */}
       <div 
        style={{
          position: 'absolute',
          top: '12rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
        className="hero-float-cta"
       >
          <div className="glass" style={{ 
            padding: '0.8rem 2rem', 
            borderRadius: '5rem', 
            fontSize: '1.2rem', 
            color: 'var(--c-grey-mid)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            Descubre el futuro de tu mirada
            <div style={{ 
              width: '2rem', 
              height: '2rem', 
              borderRadius: '50%', 
              border: '0.5px solid var(--c-grey-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>→</div>
          </div>
       </div>

    </section>
  )
}
