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

  const handleSend = (textInput?: string) => {
    const finalInput = textInput || input
    if (!finalInput.trim()) return

    const userMsg = { role: 'user', text: finalInput }
    setMessages(prev => [...prev, userMsg])
    if (!textInput) setInput('')

    // Simulate AI response
    setTimeout(() => {
      let response = 'Lo siento, no entiendo esa pregunta. Pero puedo ayudarte a agendar una cita si lo deseas.'
      const lower = finalInput.toLowerCase()
      
      if (lower.includes('recomienda') || lower.includes('sugerencia')) {
        response = '¡Con gusto! Si buscas una transformación total, nuestro "Volumen Tecnológico" es el favorito para una mirada de impacto. Si prefieres realzar tu belleza natural sin extensiones, te sugiero el "Efecto Rímel" (Lifting). Y para una piel radiante, el "Skin Care Ritual" es imprescindible. ¿Cuál te llama más la atención?'
      } else if (lower.includes('disponibilidad') || lower.includes('cuando hay') || lower.includes('libre')) {
        if (lower.includes('no hay') || lower.includes('ocupado')) {
          response = 'Por lo general, los Sábados y las tardes a partir de las 5:00 PM se agotan rápido. Si buscas una cita pronto, te recomiendo los Martes o Miércoles por la mañana.'
        } else {
          response = 'Tenemos algunos espacios disponibles para esta semana. El horario más próximo es el Miércoles a las 11:00 AM o el Jueves a las 4:00 PM. ¿Te gustaría bloquear alguno?'
        }
      } else if (lower.includes('requiere') || lower.includes('requisito') || lower.includes('preparacion')) {
        response = 'Para garantizar la mejor retención: 1. Ven con los ojos libres de maquillaje y aceites. 2. No uses rizador mecánico 24h antes. 3. Trae ropa cómoda, ¡el ritual de Skin Care es muy relajante!'
      } else if (lower.includes('precio') || lower.includes('costo')) {
        response = 'Nuestros servicios premium inician así: Efecto Rímel desde $65, Skin Care Ritual desde $75 y Volumen Tecnológico desde $95. ¿Deseas que agendemos una valoración gratuita?'
      } else if (lower.includes('horario') || lower.includes('abre')) {
        response = 'Atendemos de Lunes a Viernes de 10:00 AM a 8:00 PM, y Sábados de 9:00 AM a 5:00 PM. Los Domingos descansamos para recargar energías.'
      } else if (lower.includes('donde') || lower.includes('ubicacion')) {
        response = 'Nuestro estudio exclusivo se encuentra en el Edificio Luxury Suites, Piso 4, Oficina 402. Es un espacio diseñado para tu total relajación. ¿Necesitas indicaciones para llegar?'
      }

      setMessages(prev => [...prev, { role: 'assistant', text: response }])
    }, 1000)
  }

  const suggestions = [
    '¿Qué me recomiendas?',
    '¿Qué disponibilidad hay?',
    '¿Qué se requiere para el servicio?',
    'Ubicación y horarios'
  ]

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '4rem',
          right: '4rem',
          width: '6.4rem',
          height: '6.4rem',
          borderRadius: '50%',
          background: 'var(--c-off-black)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          fontSize: '2.4rem',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          animation: 'floatAgent 3s ease-in-out infinite'
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
            bottom: '11.2rem',
            right: '4rem',
            width: '36rem',
            height: '48rem',
            borderRadius: '2.4rem',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
            border: '0.5px solid rgba(15,16,18,0.1)',
            animation: 'slideUpAgent 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
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

          {/* Suggestions */}
          <div style={{ 
            padding: '1rem 2rem', 
            display: 'flex', 
            gap: '0.8rem', 
            overflowX: 'auto', 
            borderTop: '0.5px solid rgba(15,16,18,0.05)',
            scrollbarWidth: 'none'
          }}>
            {suggestions.map((s, i) => (
              <button 
                key={i}
                onClick={() => handleSend(s)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '5rem',
                  border: '0.5px solid var(--c-off-black)',
                  background: 'transparent',
                  color: 'var(--c-off-black)',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--ff-dm)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--c-off-black)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--c-off-black)'
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
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

      <style>{`
        @keyframes floatAgent {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideUpAgent {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
