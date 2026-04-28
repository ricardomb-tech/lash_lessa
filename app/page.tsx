'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import ServicesSection from '@/components/ServicesSection'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const ctx = useRef<gsap.Context | null>(null)

  useEffect(() => {
    // ── 1. Lenis smooth scroll ──────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    // ── 2. GSAP Context ─────────────────────────────────────────
    ctx.current = gsap.context(() => {
      // Page load — quitar blur del body
      gsap.to('body', {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        delay: 0.2,
      })

      // Nav reveal
      gsap.to('nav', {
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.5,
      })

      // Hero H1 — split lines slide up
      gsap.from('.word-inner', {
        y: '105%',
        opacity: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: 'power4.out',
        delay: 0.7,
      })

      // Hero Image Reveal
      gsap.to('.hero-image-container', {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.4,
      })

      // Hero elementos secundarios
      gsap.from('.hero-eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.9,
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
        delay: 1.1,
      })

      gsap.from('.hero-actions', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
        delay: 1.3,
      })

      gsap.from('.hero-float-cta', {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: 'power2.out',
        delay: 1.6,
      })

      gsap.from('.hero-scroll', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 2.0,
      })

      // ── Scroll reveals — .title-reveal ──────────────────────────
      gsap.utils.toArray<Element>('.title-reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          visibility: 'visible',
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── Scroll reveals — .copy-reveal ───────────────────────────
      gsap.utils.toArray<Element>('.copy-reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          visibility: 'visible',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── Service cards — stagger reveal ──────────────────────────
      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 75%',
        },
      })

      // ── Divider lines — expand desde left ───────────────────────
      gsap.utils.toArray<Element>('.divider-line').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })
      })
    })

    return () => {
      ctx.current?.revert()
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Nav />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
