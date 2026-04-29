'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: 'Lifting Botánico',
    category: 'Lifting',
    image: '/images/portfolio/lifting_1.png',
    size: 'large'
  },
  {
    id: 2,
    title: 'Volumen Ruso Premium',
    category: 'Extensiones',
    image: '/images/portfolio/extensions_1.png',
    size: 'small'
  },
  {
    id: 3,
    title: 'Ritual de Luminosidad',
    category: 'Skin Care',
    image: '/images/portfolio/skincare_1.png',
    size: 'small'
  },
  {
    id: 4,
    title: 'Estudio Lash_Lessa',
    category: 'Lifestyle',
    image: '/images/portfolio/studio_1.png',
    size: 'medium'
  },
  {
    id: 5,
    title: 'Mirada Ébano',
    category: 'Extensiones',
    image: '/images/portfolio/extensions_2.png',
    size: 'medium'
  },
  {
    id: 6,
    title: 'Esencia Latina',
    category: 'Skin Care',
    image: '/images/portfolio/skincare_2.png',
    size: 'small'
  },
  {
    id: 7,
    title: 'Elegancia Oriental',
    category: 'Lifting',
    image: '/images/portfolio/lifting_2.png',
    size: 'large'
  },
  {
    id: 8,
    title: 'Híbridas de Lujo',
    category: 'Extensiones',
    image: '/images/portfolio/extensions_3.png',
    size: 'small'
  }
]

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="section-padding" style={{ background: 'var(--c-bg)' }}>
      <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
          <p className="copy-reveal" style={{ 
            fontSize: '1.2rem', 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase', 
            color: 'var(--c-grey-mid)',
            marginBottom: '1.6rem'
          }}>
            Curaduría Visual
          </p>
          <h2 className="title-reveal" style={{ fontSize: 'clamp(3.2rem, 5vw, 5.4rem)' }}>
            El arte de la precisión.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="portfolio-grid" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(25rem, auto)',
          gap: '3.2rem'
        }}>
          {portfolioItems.map((item, idx) => (
            <PortfolioItem key={item.id} item={item} idx={idx} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '8rem', textAlign: 'center' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="arrow-link-plain">
            Ver más en Instagram ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .portfolio-item-container {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 40rem !important;
          }
        }
        @media (max-width: 600px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function PortfolioItem({ item, idx }: { item: typeof portfolioItems[0], idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    
    // Calculate rotation: max 15 degrees
    const rotateY = (x - 0.5) * 15
    const rotateX = (y - 0.5) * -15
    
    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const gridStyles = getGridStyles(item.size, idx)

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="portfolio-item-container"
      style={{
        ...gridStyles,
        position: 'relative',
        borderRadius: '0.8rem',
        perspective: '1000px',
        opacity: 0, // Animated by GSAP
        transform: 'translateY(30px)',
        zIndex: isHovered ? 10 : 1
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
      }}>
        {/* Inner Card */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '0.8rem',
          background: '#e0e0e0',
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
            : '0 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'box-shadow 0.4s ease'
        }}>
          <Image 
            src={item.image} 
            alt={item.title}
            fill
            style={{ 
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          
          {/* Floating Overlay Content */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 16, 18, 0.6), transparent 60%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '3.2rem',
            transform: 'translateZ(40px)', // Depth effect
            pointerEvents: 'none'
          }}>
            <span style={{ 
              fontFamily: 'var(--ff-dm)', 
              fontSize: '1.1rem', 
              color: 'rgba(255,255,255,0.8)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em',
              marginBottom: '0.8rem',
              transform: 'translateZ(20px)'
            }}>
              {item.category}
            </span>
            <h3 style={{ 
              fontFamily: 'var(--ff-cormorant)', 
              fontSize: '2.8rem', 
              color: '#ffffff', 
              fontWeight: 300,
              transform: 'translateZ(50px)' // More depth for the title
            }}>
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

function getGridStyles(size: string, idx: number) {
  if (size === 'large') {
    return { gridColumn: 'span 7', gridRow: 'span 2' }
  }
  if (size === 'medium') {
    return { gridColumn: 'span 5', gridRow: 'span 2' }
  }
  if (size === 'small') {
    return { gridColumn: 'span 4', gridRow: 'span 1' }
  }
  return { gridColumn: 'span 4' }
}
