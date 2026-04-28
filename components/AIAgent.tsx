'use client'
import React, { useState, useEffect, useRef } from 'react'

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hola, soy Lessa, tu asistente de IA. ¿En qué puedo ayudarte hoy?' }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { role: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      let response = 'Lo siento, no entiendo esa pregunta. Pero puedo ayudarte a agendar una cita si lo deseas.'
      const lower = input.toLowerCase()
      
      if (lower.includes('precio') || lower.includes('costo')) {
        response = 'Nuestros servicios de extensiones comienzan desde $80. ¿Te gustaría ver la lista completa en la sección de servicios?'
      } else if (lower.includes('horario') || lower.includes('abre')) {
        response = 'Estamos abiertos de Lunes a Sábado, de 9:00 AM a 7:00 PM. Puedes ver la disponibilidad en tiempo real en nuestro sistema de reservas.'
      } else if (lower.includes('donde') || lower.includes('ubicacion')) {
        response = 'Estamos ubicados en el centro de la ciudad, en la zona de estética de lujo. ¿Te gustaría que te envíe la dirección exacta?'
      } else if (lower.includes('pestaña') || lower.includes('lifting')) {
        response = 'Somos especialistas en estética ocular. El lifting es uno de nuestros servicios más populares. ¡Tu mirada se verá increíble!'
      }

      setMessages(prev => [...prev, { role: 'assistant', text: response }])
    }, 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '3.2rem',
          right: '3.2rem',
          width: '6.4rem',
          height: '6.4rem',
          borderRadius: '50%',
          background: 'var(--c-off-black)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          fontSize: '2.4rem',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isOpen ? '✕' : '✦'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="glass"
          style={{
            position: 'fixed',
            bottom: '10.4rem',
            right: '3.2rem',
            width: '36rem',
            height: '48rem',
            borderRadius: '2.4rem',
            zIndex: 1500,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
            border: '0.5px solid rgba(15,16,18,0.1)'
          }}
        >
          {/* Header */}
          <div style={{ padding: '2rem', background: 'var(--c-off-black)', color: 'white' }}>
            <p style={{ fontFamily: 'var(--ff-dm)', fontSize: '1.4rem', fontWeight: 500 }}>Lessa · AI Agent</p>
            <p style={{ fontSize: '1.2rem', opacity: 0.6 }}>En línea para ayudarte</p>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            style={{ 
              flex: 1, 
              overflowY: 'auto', 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.2rem' 
            }}
          >
            {messages.map((m, i) => (
              <div 
                key={i}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  padding: '1.2rem 1.6rem',
                  borderRadius: m.role === 'user' ? '1.6rem 1.6rem 0 1.6rem' : '1.6rem 1.6rem 1.6rem 0',
                  background: m.role === 'user' ? 'var(--c-off-black)' : 'var(--c-bg)',
                  color: m.role === 'user' ? 'white' : 'var(--c-off-black)',
                  fontSize: '1.4rem',
                  lineHeight: 1.4
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form 
            onSubmit={handleSend}
            style={{ padding: '1.6rem', borderTop: '0.5px solid var(--c-grey-light)', display: 'flex', gap: '0.8rem' }}
          >
            <input 
              type="text" 
              placeholder="Escribe un mensaje..."
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: '1rem 1.6rem',
                borderRadius: '5rem',
                border: '1px solid var(--c-grey-light)',
                fontSize: '1.4rem',
                outline: 'none'
              }}
            />
            <button 
              type="submit"
              style={{
                width: '3.6rem',
                height: '3.6rem',
                borderRadius: '50%',
                background: 'var(--c-off-black)',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              →
            </button>
          </form>
        </div>
      )}
    </>
  )
}
