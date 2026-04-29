'use client'
import React, { useState } from 'react'

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
]

const initialAppointments = [
  { id: 1, client: 'Lucía Fernández', service: 'Volumen Tecnológico', time: '10:00 AM', duration: '2h', color: '#eef2ff', status: 'Confirmado' },
  { id: 2, client: 'María García', service: 'Lifting Botánico', time: '12:00 PM', duration: '1h', color: '#f0fdf4', status: 'Pendiente' },
  { id: 3, client: 'Ana Martínez', service: 'Skin Care Ritual', time: '02:00 PM', duration: '1.5h', color: '#fffbeb', status: 'Confirmado' },
  { id: 4, client: 'Sofía Rodríguez', service: 'Volumen Ruso', time: '04:00 PM', duration: '2h', color: '#fff1f2', status: 'Confirmado' },
]

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState('Hoy, 29 de Abril')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.2rem' }}>
      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 600, marginBottom: '0.8rem' }}>Agenda de Citas</h1>
          <p style={{ color: '#666' }}>Gestiona tu tiempo y servicios.</p>
        </div>
        <div style={{ display: 'flex', gap: '1.2rem' }}>
           <div style={{ background: '#ffffff', padding: '0.8rem 1.6rem', borderRadius: '0.8rem', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.4rem' }}>📅</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 500 }}>{selectedDate}</span>
           </div>
           <button style={{
             background: '#0f1012',
             color: 'white',
             border: 'none',
             padding: '1.2rem 2.4rem',
             borderRadius: '0.8rem',
             fontWeight: 500,
             cursor: 'pointer'
           }}>
             + Nueva Cita
           </button>
        </div>
      </div>

      {/* ── Calendar View ── */}
      <div style={{
        background: '#ffffff',
        borderRadius: '2rem',
        border: '1px solid #f0f0f0',
        padding: '3.2rem',
        overflowX: 'auto'
      }}>
        <div style={{ minWidth: '80rem' }}>
          {timeSlots.map((slot) => {
            const appointment = initialAppointments.find(a => a.time === slot)
            
            return (
              <div key={slot} style={{ 
                display: 'grid', 
                gridTemplateColumns: '12rem 1fr', 
                borderBottom: '1px solid #f5f5f5',
                minHeight: '8rem'
              }}>
                <div style={{ 
                  padding: '2rem 0', 
                  color: '#999', 
                  fontSize: '1.3rem',
                  fontFamily: 'var(--ff-dm)'
                }}>
                  {slot}
                </div>
                
                <div style={{ padding: '1rem', position: 'relative' }}>
                  {appointment && (
                    <div style={{
                      background: appointment.color,
                      borderRadius: '1.2rem',
                      padding: '1.6rem 2.4rem',
                      borderLeft: `4px solid #0f1012`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                      animation: 'fadeIn 0.3s ease-out'
                    }}>
                      <div>
                        <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f1012', marginBottom: '0.4rem' }}>
                          {appointment.client}
                        </p>
                        <p style={{ fontSize: '1.3rem', color: '#666' }}>
                          ✨ {appointment.service} · {appointment.duration}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ 
                          fontSize: '1.1rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.05em',
                          background: 'rgba(255,255,255,0.6)',
                          padding: '0.4rem 1rem',
                          borderRadius: '5rem',
                          color: '#0f1012',
                          fontWeight: 500
                        }}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
