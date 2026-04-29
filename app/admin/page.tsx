'use client'
import React from 'react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Citas Hoy', value: '8', icon: '📅', color: '#eef2ff' },
    { label: 'Clientes Nuevos', value: '12', icon: '👥', color: '#fff1f2' },
    { label: 'Pendientes WhatsApp', value: '5', icon: '💬', color: '#f0fdf4' },
    { label: 'Ingresos Mes', value: '$2,450', icon: '✨', color: '#fffbeb' },
  ]

  const recentAppointments = [
    { id: 1, client: 'Lucía Fernández', service: 'Volumen Tecnológico', time: '10:30 AM', status: 'Confirmado' },
    { id: 2, client: 'María García', service: 'Lifting Botánico', time: '12:00 PM', status: 'Pendiente' },
    { id: 3, client: 'Ana Martínez', service: 'Skin Care Ritual', time: '02:30 PM', status: 'En camino' },
    { id: 4, client: 'Sofía Rodríguez', service: 'Volumen Tecnológico', time: '04:00 PM', status: 'Confirmado' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {/* ── Header ── */}
      <div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 600, color: '#0f1012', marginBottom: '0.8rem' }}>
          Hola, Administrador 👋
        </h1>
        <p style={{ color: '#666', fontSize: '1.6rem' }}>Esto es lo que está pasando hoy en Lash_Lessa.</p>
      </div>

      {/* ── Stats Grid ── */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))', 
        gap: '2.4rem' 
      }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{
            background: '#ffffff',
            padding: '2.4rem',
            borderRadius: '1.6rem',
            border: '1px solid #f0f0f0',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <div style={{ 
              fontSize: '2.4rem', 
              width: '5.6rem', 
              height: '5.6rem', 
              borderRadius: '1.2rem', 
              background: stat.color, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              {stat.icon}
            </div>
            <div>
              <p style={{ color: '#666', fontSize: '1.3rem', marginBottom: '0.4rem' }}>{stat.label}</p>
              <p style={{ fontSize: '2rem', fontWeight: 600, color: '#0f1012' }}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Content Rows ── */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr', 
        gap: '3.2rem' 
      }} className="dashboard-content-grid">
        
        {/* Recent Appointments */}
        <div style={{
          background: '#ffffff',
          borderRadius: '2rem',
          border: '1px solid #f0f0f0',
          padding: '2.8rem',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600 }}>Citas Recientes</h2>
            <button style={{ color: '#0066ff', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer' }}>Ver todas</button>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <th style={{ padding: '1.2rem 0', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Cliente</th>
                  <th style={{ padding: '1.2rem 0', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Servicio</th>
                  <th style={{ padding: '1.2rem 0', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Hora</th>
                  <th style={{ padding: '1.2rem 0', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Estado</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.map((app) => (
                  <tr key={app.id} style={{ borderBottom: '1px solid #fafafa' }}>
                    <td style={{ padding: '1.6rem 0', fontWeight: 500, fontSize: '1.4rem' }}>{app.client}</td>
                    <td style={{ padding: '1.6rem 0', color: '#666', fontSize: '1.4rem' }}>{app.service}</td>
                    <td style={{ padding: '1.6rem 0', color: '#666', fontSize: '1.4rem' }}>{app.time}</td>
                    <td style={{ padding: '1.6rem 0' }}>
                      <span style={{ 
                        padding: '0.4rem 1rem', 
                        borderRadius: '2rem', 
                        fontSize: '1.2rem', 
                        background: app.status === 'Confirmado' ? '#f0fdf4' : '#fff7ed',
                        color: app.status === 'Confirmado' ? '#16a34a' : '#ea580c'
                      }}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / WhatsApp */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
          <div style={{
            background: '#0f1012',
            color: 'white',
            borderRadius: '2rem',
            padding: '2.8rem',
            backgroundImage: 'linear-gradient(135deg, #0f1012 0%, #2d2e30 100%)'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 500, marginBottom: '1.2rem' }}>WhatsApp Marketing</h3>
            <p style={{ fontSize: '1.3rem', opacity: 0.8, marginBottom: '2.4rem', lineHeight: 1.5 }}>
              Envía recordatorios automáticos o promociones a tus clientes con un clic.
            </p>
            <button style={{
              width: '100%',
              padding: '1.2rem',
              borderRadius: '1rem',
              background: '#25D366',
              color: 'white',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <span>💬</span> Ir a Clientes
            </button>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: '2rem',
            border: '1px solid #f0f0f0',
            padding: '2.8rem'
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '2rem' }}>Acciones Rápidas</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {['Nueva Cita', 'Registrar Pago', 'Añadir Cliente'].map(action => (
                <button key={action} style={{
                  padding: '1.2rem',
                  borderRadius: '0.8rem',
                  border: '1px solid #eee',
                  background: 'none',
                  textAlign: 'left',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }} onMouseEnter={e => e.currentTarget.style.background = '#f9f9f9'} onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                  + {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .dashboard-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
