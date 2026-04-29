'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ExperiencePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [tilt1, setTilt1] = useState({ x: 0, y: 0 })
  const [tilt2, setTilt2] = useState({ x: 0, y: 0 })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Page load reveal
    gsap.from('.exp-title', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2
    })

    // Scroll reveals
    gsap.utils.toArray<Element>('.reveal-section').forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  const handleTilt = (e: React.MouseEvent, setter: any, ref: any) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    setter({ x: x * 15, y: y * -15 })
  }

  const cardRef1 = useRef<HTMLDivElement>(null)
  const cardRef2 = useRef<HTMLDivElement>(null)

  return (
    <div style={{ 
      background: '#ffffff', 
      color: '#0f1012', 
      minHeight: '100vh', 
      width: '100%',
      position: 'relative',
      zIndex: 1
    }}>
      {/* ── Back Nav ── */}
      <nav style={{ 
        position: 'fixed', 
        top: '4rem', 
        left: '4rem', 
        zIndex: 100,
        mixBlendMode: 'difference' 
      }}>
        <Link 
          href="/" 
          style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontFamily: 'var(--ff-dm)', 
            fontSize: '1.2rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <span style={{ fontSize: '1.6rem' }}>←</span> Volver
        </Link>
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} style={{ 
        height: '75vh', 
        width: '100%',
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#fcfcfd'
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image 
            src="/images/experience_hero_hd.png" 
            alt="Experience Hero HD" 
            fill 
            priority
            style={{ objectFit: 'cover', opacity: 0.9 }} 
          />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), #ffffff 100%)' 
          }} />
        </div>
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center', 
          maxWidth: '100rem', 
          padding: '0 2rem'
        }}>
          <h1 className="exp-title" style={{ 
            fontFamily: 'var(--ff-cormorant)', 
            fontSize: 'clamp(4rem, 8vw, 8rem)', 
            fontWeight: 300, 
            lineHeight: 1,
            color: '#0f1012',
            letterSpacing: '-0.03em'
          }}>
            La ciencia del detalle, <br /> 
            <span style={{ fontStyle: 'italic' }}>el arte de la mirada.</span>
          </h1>
        </div>
      </section>

      {/* ── Content Sections ── */}
      <div style={{ maxWidth: '120rem', margin: '0 auto', padding: '12rem 4rem' }}>
        
        {/* Section 1: Lifting */}
        <section className="reveal-section" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '10rem', 
          alignItems: 'center', 
          marginBottom: '20rem' 
        }}>
          <div 
            ref={cardRef1}
            onMouseMove={(e) => handleTilt(e, setTilt1, cardRef1)}
            onMouseLeave={() => setTilt1({ x: 0, y: 0 })}
            style={{ 
              position: 'relative', 
              height: '55rem', 
              borderRadius: '0.2rem', 
              overflow: 'hidden', 
              background: '#f8f8f8',
              boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
              transform: `perspective(1000px) rotateX(${tilt1.y}deg) rotateY(${tilt1.x}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
          >
            <Image src="/images/experience_lifting_hd.png" alt="Lifting Detail HD" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ maxWidth: '48rem' }}>
            <p style={{ 
              fontFamily: 'var(--ff-dm)', 
              fontSize: '1.2rem', 
              letterSpacing: '0.25em', 
              textTransform: 'uppercase', 
              color: '#999999', 
              marginBottom: '2.4rem' 
            }}>01 · Eyelash Lifting</p>
            <h2 style={{ 
              fontFamily: 'var(--ff-cormorant)', 
              fontSize: 'clamp(3.2rem, 4vw, 5rem)', 
              fontWeight: 300, 
              marginBottom: '3.2rem',
              lineHeight: 1.1
            }}>Curvatura que redefine la esencia.</h2>
            <p style={{ 
              fontFamily: 'var(--ff-dm)', 
              fontSize: '1.8rem', 
              lineHeight: 1.8, 
              color: '#6b6b6b', 
              fontWeight: 300 
            }}>
              No es solo un levantamiento, es una arquitectura personalizada para tus pestañas naturales. Utilizamos fórmulas botánicas que protegen la fibra mientras crean una elevación permanente que dura hasta 8 semanas. 
            </p>
          </div>
        </section>

        {/* Section 2: Skin Care */}
        <section className="reveal-section" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '10rem', 
          alignItems: 'center', 
          marginBottom: '12rem' 
        }}>
          <div style={{ order: 2, maxWidth: '48rem', justifySelf: 'end' }}>
            <p style={{ 
              fontFamily: 'var(--ff-dm)', 
              fontSize: '1.2rem', 
              letterSpacing: '0.25em', 
              textTransform: 'uppercase', 
              color: '#999999', 
              marginBottom: '2.4rem' 
            }}>02 · Skin Ritual</p>
            <h2 style={{ 
              fontFamily: 'var(--ff-cormorant)', 
              fontSize: 'clamp(3.2rem, 4vw, 5rem)', 
              fontWeight: 300, 
              marginBottom: '3.2rem',
              lineHeight: 1.1
            }}>Luz que nace desde el interior.</h2>
            <p style={{ 
              fontFamily: 'var(--ff-dm)', 
              fontSize: '1.8rem', 
              lineHeight: 1.8, 
              color: '#6b6b6b', 
              fontWeight: 300 
            }}>
              Nuestros tratamientos faciales no son simples limpiezas. Son rituales de regeneración celular donde la tecnología de activos puros se encuentra con técnicas de masaje manual que esculpen y revitalizan tu rostro.
            </p>
          </div>
          <div 
            ref={cardRef2}
            onMouseMove={(e) => handleTilt(e, setTilt2, cardRef2)}
            onMouseLeave={() => setTilt2({ x: 0, y: 0 })}
            style={{ 
              position: 'relative', 
              height: '55rem', 
              borderRadius: '0.2rem', 
              overflow: 'hidden', 
              order: 1, 
              background: '#f8f8f8',
              boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
              transform: `perspective(1000px) rotateX(${tilt2.y}deg) rotateY(${tilt2.x}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
          >
            <Image src="/images/experience_skincare_hd.png" alt="Skincare Detail HD" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reveal-section {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .reveal-section > div {
            order: initial !important;
            justify-self: start !important;
            height: 40rem !important;
          }
        }
      `}</style>
    </div>
  )
}
