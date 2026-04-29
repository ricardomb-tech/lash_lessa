'use client'
import React from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  onOpenBooking: () => void
}
export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [processedImage, setProcessedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const img = new window.Image();
    img.src = '/images/hero_new.png';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Target white-ish background pixels
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // If the pixel is very close to white, make it transparent
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL('image/png'));
    };
  }, []);

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
      {/* ── Background Large Text (Behind Woman) ── */}
      <div
        className="hero-bg-text-left"
        style={{
          position: 'absolute',
          top: '42%',
          left: '15%', 
          transform: 'translateY(-50%)',
          fontSize: 'clamp(4rem, 11vw, 18rem)',
          fontWeight: 700,
          color: '#f4f4f6',
          whiteSpace: 'nowrap',
          zIndex: 0,
          userSelect: 'none',
          fontFamily: 'var(--ff-dm)',
          letterSpacing: '-0.02em',
          pointerEvents: 'none',
        }}
      >
        Lash
      </div>

      <div
        className="hero-bg-text-right"
        style={{
          position: 'absolute',
          top: '42%',
          right: '10%', 
          transform: 'translateY(-50%)',
          fontSize: 'clamp(4rem, 11vw, 18rem)',
          fontWeight: 700,
          color: '#f4f4f6',
          whiteSpace: 'nowrap',
          zIndex: 0,
          userSelect: 'none',
          fontFamily: 'var(--ff-dm)',
          letterSpacing: '-0.02em',
          pointerEvents: 'none',
        }}
      >
        Lessa
      </div>

      {/* ── Background Image Container ── */}
      <div
        className="hero-image-container"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: processedImage ? 1 : 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          transition: 'opacity 0.8s ease'
        }}
      >
        <div 
          className="hero-image-subcontainer"
          style={{
            position: 'relative',
            width: '85%',
            height: '85%',
            maxWidth: '140rem',
          }}
        >
          {processedImage && (
            <Image
              src={processedImage}
              alt="Lash_Lessa Luxury Aesthetic"
              fill
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                filter: 'contrast(1.1) brightness(1.02)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />
          )}
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
        </div>
      </div>

      {/* ── Content ── */}
      <div
        className="hero-content-container"
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
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
              className="hero-main-title"
              style={{
                fontFamily: 'var(--ff-dm)',
                fontWeight: 400,
                fontSize: 'clamp(3.6rem, 6vw, 6.4rem)',
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

          <div
            className="hero-actions"
            style={{
              display: 'flex',
              gap: '1.6rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <span className="explore-label" style={{
              fontFamily: 'var(--ff-dm)',
              fontSize: '1.4rem',
              color: 'var(--c-grey-mid)',
              marginRight: '0.8rem'
            }}>
              Explora
            </span>
            <div className="hero-tags-group" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              {['Lifting', 'Volumen', 'Skin Care'].map((tag) => (
                <a
                  key={tag}
                  href="#servicios"
                  className="tag-pill"
                  style={{
                    padding: '0.8rem 1.8rem',
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    borderColor: 'rgba(15,16,18,0.2)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(15,16,18,0.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {tag}
                </a>
              ))}
            </div>
            <button
              onClick={onOpenBooking}
              className="hero-cta-btn"
              style={{
                background: 'var(--c-off-black)',
                color: 'white',
                border: 'none',
                padding: '1.2rem 3.2rem',
                borderRadius: '5rem',
                fontSize: '1.4rem',
                fontFamily: 'var(--ff-dm)',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              Reserva ahora
            </button>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="hero-scroll-indicator" style={{
          position: 'absolute',
          bottom: '4rem',
          left: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
        }}
      >
        <div style={{
            width: '3.2rem',
            height: '3.2rem',
            borderRadius: '50%',
            background: '#f4f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            color: 'var(--c-off-black)'
          }}
        >
          ↓
        </div>
      </div>

      {/* ── Floating Badge ── */}
      <a
        href="/experience"
        className="hero-float-cta-container"
        style={{
          position: 'absolute',
          top: '10rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          textDecoration: 'none'
        }}
      >
        <div className="glass hero-float-badge" style={{
          padding: '0.8rem 2rem',
          borderRadius: '5rem',
          fontSize: '1.2rem',
          color: 'var(--c-grey-mid)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap'
        }}>
          Descubre el futuro de tu mirada
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            border: '0.5px solid rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>→</div>
        </div>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .hero-bg-text-left, .hero-bg-text-right {
            display: none !important;
          }
          .hero-image-subcontainer {
            width: 100% !important;
            height: 70% !important;
            bottom: 0;
          }
          .hero-content-container {
            padding: 0 2.4rem !important;
            padding-bottom: 4rem !important;
          }
          .hero-actions {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2.4rem !important;
          }
          .explore-label {
            display: none !important;
          }
          .hero-tags-group {
            width: 100%;
          }
          .hero-cta-btn {
            width: 100%;
            margin-left: 0 !important;
          }
          .hero-float-cta-container {
            top: 14rem !important;
          }
          .hero-scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
