'use client'
import React, { useState } from 'react'
import { useBookingStore } from '@/hooks/useBookingStore'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { addBooking, getAvailableTimes } = useBookingStore()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  })

  if (!isOpen) return null

  const services = ['Volumen Tecnológico', 'Efecto Rímel', 'Skin Care Ritual']
  const availableTimes = formData.date ? getAvailableTimes(formData.date) : []

  const handleNext = () => setStep(prev => prev + 1)
  const handleBack = () => setStep(prev => prev - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addBooking({
      service: formData.service,
      date: formData.date,
      time: formData.time,
      clientName: formData.name,
      clientPhone: formData.phone
    })
    setStep(4) // Success step
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15,16,18,0.6)',
        backdropFilter: 'blur(12px)',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass"
        style={{
          width: '100%',
          maxWidth: '56rem',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '2.4rem',
          padding: '4rem',
          position: 'relative',
          boxShadow: '0 32px 64px rgba(0,0,0,0.12)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '2.4rem',
            right: '2.4rem',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'var(--c-grey-mid)'
          }}
        >
          ✕
        </button>

        {/* Progress header */}
        {step < 4 && (
          <div style={{ marginBottom: '3.2rem' }}>
            <p style={{ 
              fontFamily: 'var(--ff-dm)', 
              fontSize: '1.2rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              color: 'var(--c-grey-mid)',
              marginBottom: '0.8rem'
            }}>
              Paso {step} de 3
            </p>
            <div style={{ width: '100%', height: '0.2rem', background: 'var(--c-grey-light)' }}>
              <div style={{ 
                width: `${(step / 3) * 100}%`, 
                height: '100%', 
                background: 'var(--c-off-black)',
                transition: 'width 0.4s ease'
              }} />
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* STEP 1: Servicio */}
          {step === 1 && (
            <div className="fade-in">
              <h2 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '3.2rem', marginBottom: '2.4rem' }}>
                Selecciona tu servicio
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {services.map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => { setFormData({ ...formData, service: s }); handleNext(); }}
                    style={{
                      padding: '1.8rem',
                      borderRadius: '1.2rem',
                      border: formData.service === s ? '1px solid var(--c-off-black)' : '1px solid var(--c-grey-light)',
                      background: formData.service === s ? 'var(--c-off-black)' : 'transparent',
                      color: formData.service === s ? 'white' : 'var(--c-off-black)',
                      textAlign: 'left',
                      fontFamily: 'var(--ff-dm)',
                      fontSize: '1.6rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Fecha y Hora */}
          {step === 2 && (
            <div className="fade-in">
              <h2 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '3.2rem', marginBottom: '2.4rem' }}>
                ¿Cuándo te gustaría venir?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '1.4rem', color: 'var(--c-grey-mid)' }}>Fecha</label>
                  <input 
                    type="date" 
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '1.4rem',
                      borderRadius: '0.8rem',
                      border: '1px solid var(--c-grey-light)',
                      fontFamily: 'var(--ff-dm)',
                      fontSize: '1.6rem'
                    }}
                  />
                </div>
                
                {formData.date && (
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '1.4rem', color: 'var(--c-grey-mid)' }}>Horarios Disponibles</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr))', gap: '1rem' }}>
                      {availableTimes.length > 0 ? availableTimes.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: t })}
                          style={{
                            padding: '1rem',
                            borderRadius: '0.6rem',
                            border: formData.time === t ? '1px solid var(--c-off-black)' : '1px solid var(--c-grey-light)',
                            background: formData.time === t ? 'var(--c-off-black)' : 'transparent',
                            color: formData.time === t ? 'white' : 'var(--c-off-black)',
                            fontSize: '1.4rem',
                            cursor: 'pointer'
                          }}
                        >
                          {t}
                        </button>
                      )) : <p style={{ gridColumn: '1/-1', color: 'var(--c-grey-mid)' }}>No hay horarios disponibles para esta fecha.</p>}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '1.2rem', marginTop: '3.2rem' }}>
                <button type="button" onClick={handleBack} className="arrow-link-plain">Volver</button>
                <button 
                  type="button" 
                  disabled={!formData.date || !formData.time}
                  onClick={handleNext}
                  style={{ 
                    flex: 1, 
                    background: 'var(--c-off-black)', 
                    color: 'white', 
                    padding: '1.6rem', 
                    borderRadius: '0.8rem',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: (!formData.date || !formData.time) ? 0.5 : 1
                  }}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Datos de contacto */}
          {step === 3 && (
            <div className="fade-in">
              <h2 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '3.2rem', marginBottom: '1.2rem' }}>
                Datos de contacto
              </h2>
              <p style={{ color: 'var(--c-grey-mid)', marginBottom: '2.4rem', fontSize: '1.4rem' }}>
                Confirma tu cita para {formData.service} el día {formData.date} a las {formData.time}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '1.4rem', borderRadius: '0.8rem', border: '1px solid var(--c-grey-light)' }}
                />
                <input 
                  type="tel" 
                  placeholder="Teléfono móvil" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '1.4rem', borderRadius: '0.8rem', border: '1px solid var(--c-grey-light)' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '1.2rem', marginTop: '3.2rem' }}>
                <button type="button" onClick={handleBack} className="arrow-link-plain">Volver</button>
                <button 
                  type="submit" 
                  style={{ 
                    flex: 1, 
                    background: 'var(--c-off-black)', 
                    color: 'white', 
                    padding: '1.6rem', 
                    borderRadius: '0.8rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Confirmar Reserva
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Éxito */}
          {step === 4 && (
            <div className="fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ 
                width: '6.4rem', 
                height: '6.4rem', 
                background: '#4ade80', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 2.4rem',
                color: 'white',
                fontSize: '3.2rem'
              }}>✓</div>
              <h2 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '3.6rem', marginBottom: '1.6rem' }}>
                ¡Cita Reservada!
              </h2>
              <p style={{ color: 'var(--c-grey-mid)', fontSize: '1.6rem', lineHeight: 1.6, marginBottom: '3.2rem' }}>
                Hemos recibido tu solicitud. Te hemos enviado un mensaje de confirmación a tu teléfono.
              </p>
              <button 
                type="button"
                onClick={onClose}
                style={{ 
                  background: 'var(--c-off-black)', 
                  color: 'white', 
                  padding: '1.6rem 4rem', 
                  borderRadius: '0.8rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Cerrar
              </button>
            </div>
          )}
        </form>
      </div>

      <style>{`
        .fade-in {
          animation: fadeIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
