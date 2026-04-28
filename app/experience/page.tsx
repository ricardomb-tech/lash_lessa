'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.exp-hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5
      })

      // Section Reveals
      gsap.utils.toArray<Element>('.exp-section').forEach((section) => {
        gsap.from(section.querySelector('.exp-img'), {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        })
        gsap.from(section.querySelector('.exp-text'), {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          }
        })
      })
    }, containerRef)

    return () => {
      ctx.revert()
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} style={{ background: '#ffffff', color: '#0f1012' }}>
      <Nav onOpenBooking={() => window.location.href = '/#booking'} />

      {/* ── Hero ── */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image 
            src="/images/experience_hero.png" 
            alt="Experience Hero" 
            fill 
            priority
            style={{ objectFit: 'cover', opacity: 0.9 }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), #ffffff)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '80rem', padding: '0 2rem' }}>
          <h1 className="exp-hero-title" style={{ fontFamily: 'var(--ff-cormorant)', fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 300, lineHeight: 1.1 }}>
            La ciencia del detalle, <br /> el arte de la mirada.
          </h1>
        </div>
      </section>

      {/* ── Content Sections ── */}
      <div style={{ maxWidth: '120rem', margin: '0 auto', padding: '12rem 4rem' }}>
        
        {/* Section 1: Lifting */}
        <section className="exp-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center', marginBottom: '20rem' }}>
          <div className="exp-img" style={{ position: 'relative', height: '60rem', borderRadius: '1rem', overflow: 'hidden' }}>
            <Image src="/images/experience_lifting.png" alt="Lifting Detail" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="exp-text">
            <p style={{ fontFamily: 'var(--ff-dm)', fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-grey-mid)', marginBottom: '2.4rem' }}>01 · Eyelash Lifting</p>
            <h2 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '4.8rem', fontWeight: 300, marginBottom: '2.4rem' }}>Curvatura que redefine.</h2>
            <p style={{ fontFamily: 'var(--ff-dm)', fontSize: '1.8rem', lineHeight: 1.7, color: 'var(--c-grey-mid)', fontWeight: 300 }}>
              No es solo un levantamiento, es una arquitectura personalizada para tus pestañas naturales. Utilizamos fórmulas botánicas que protegen la fibra mientras crean una elevación permanente que dura hasta 8 semanas. 
            </p>
          </div>
        </section>

        {/* Section 2: Skin Care */}
        <section className="exp-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center', marginBottom: '20rem' }}>
          <div className="exp-text" style={{ order: 2 }}>
            <p style={{ fontFamily: 'var(--ff-dm)', fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-grey-mid)', marginBottom: '2.4rem' }}>02 · Skin Ritual</p>
            <h2 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '4.8rem', fontWeight: 300, marginBottom: '2.4rem' }}>Luz desde el interior.</h2>
            <p style={{ fontFamily: 'var(--ff-dm)', fontSize: '1.8rem', lineHeight: 1.7, color: 'var(--c-grey-mid)', fontWeight: 300 }}>
              Nuestros tratamientos faciales no son simples limpiezas. Son rituales de regeneración celular donde la tecnología de activos puros se encuentra con técnicas de masaje manual que esculpen y revitalizan tu rostro.
            </p>
          </div>
          <div className="exp-img" style={{ position: 'relative', height: '60rem', borderRadius: '1rem', overflow: 'hidden', order: 1 }}>
            <Image src="/images/experience_skincare.png" alt="Skincare Detail" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>

      </div>

      {/* ── Call to Action ── */}
      <section style={{ padding: '16rem 4rem', textAlign: 'center', background: 'var(--c-bg)' }}>
        <h2 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '5.6rem', fontWeight: 300, marginBottom: '4rem' }}>¿Lista para transformar tu mirada?</h2>
        <a 
          href="/#booking" 
          style={{ 
            display: 'inline-block',
            background: 'var(--c-off-black)', 
            color: 'white', 
            padding: '2.4rem 6.4rem', 
            borderRadius: '5rem', 
            fontSize: '1.6rem', 
            textDecoration: 'none',
            fontFamily: 'var(--ff-dm)'
          }}
        >
          Agendar ahora
        </a>
      </section>

      <Footer />
    </div>
  )
}
