'use client'
import React, { useState } from 'react'
import { useBookingStore, Booking } from '@/hooks/useBookingStore'

export default function AdminDashboard() {
  const { bookings, updateBookingStatus, deleteBooking, isLoaded } = useBookingStore()
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all')

  if (!isLoaded) return <div style={{ padding: '4rem', textAlign: 'center' }}>Cargando panel...</div>

  const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter)
  
  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f8f8fa', color: '#0f1012', padding: '4rem' }}>
      <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--ff-cormorant)', fontSize: '4rem', marginBottom: '0.8rem' }}>Admin Dashboard</h1>
            <p style={{ color: '#6b6b6b', fontSize: '1.6rem' }}>Gestión de citas y disponibilidad de Lash_Lessa</p>
          </div>
          <a href="/" style={{ fontSize: '1.4rem', color: '#6b6b6b', textDecoration: 'none' }}>← Volver al sitio</a>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { label: 'Total Reservas', value: stats.total, color: '#0f1012' },
            { label: 'Pendientes', value: stats.pending, color: '#f59e0b' },
            { label: 'Confirmadas', value: stats.confirmed, color: '#10b981' }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', padding: '2.4rem', borderRadius: '1.6rem', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <p style={{ fontSize: '1.4rem', color: '#6b6b6b', marginBottom: '0.8rem' }}>{stat.label}</p>
              <p style={{ fontSize: '3.2rem', fontWeight: 500, color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.4rem' }}>
          {['all', 'pending', 'confirmed', 'cancelled'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              style={{
                padding: '0.8rem 1.6rem',
                borderRadius: '5rem',
                border: 'none',
                background: filter === f ? '#0f1012' : 'white',
                color: filter === f ? 'white' : '#6b6b6b',
                cursor: 'pointer',
                fontSize: '1.4rem',
                textTransform: 'capitalize',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}
            >
              {f === 'all' ? 'Todos' : f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: 'white', borderRadius: '1.6rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: '#fcfcfd', borderBottom: '1px solid #f0f0f2' }}>
              <tr>
                {['Cliente', 'Servicio', 'Fecha/Hora', 'Estado', 'Acciones'].map(h => (
                  <th key={h} style={{ padding: '2rem', fontSize: '1.3rem', fontWeight: 500, color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? filteredBookings.sort((a,b) => b.createdAt - a.createdAt).map(b => (
                <tr key={b.id} style={{ borderBottom: '1px solid #f0f0f2' }}>
                  <td style={{ padding: '2rem' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 500 }}>{b.clientName}</p>
                    <p style={{ fontSize: '1.3rem', color: '#6b6b6b' }}>{b.clientPhone}</p>
                  </td>
                  <td style={{ padding: '2rem', fontSize: '1.4rem' }}>{b.service}</td>
                  <td style={{ padding: '2rem' }}>
                    <p style={{ fontSize: '1.4rem' }}>{b.date}</p>
                    <p style={{ fontSize: '1.3rem', color: '#6b6b6b' }}>{b.time}</p>
                  </td>
                  <td style={{ padding: '2rem' }}>
                    <span style={{
                      padding: '0.4rem 1.2rem',
                      borderRadius: '5rem',
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      background: b.status === 'confirmed' ? '#ecfdf5' : b.status === 'pending' ? '#fffbeb' : '#fef2f2',
                      color: b.status === 'confirmed' ? '#059669' : b.status === 'pending' ? '#d97706' : '#dc2626'
                    }}>
                      {b.status}
                    </span>
                  </td>
                  <td style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                      {b.status === 'pending' && (
                        <button 
                          onClick={() => updateBookingStatus(b.id, 'confirmed')}
                          style={{ padding: '0.6rem 1rem', background: '#0f1012', color: 'white', border: 'none', borderRadius: '0.4rem', cursor: 'pointer', fontSize: '1.2rem' }}
                        >
                          Confirmar
                        </button>
                      )}
                      <button 
                        onClick={() => deleteBooking(b.id)}
                        style={{ padding: '0.6rem 1rem', background: 'transparent', color: '#dc2626', border: '1px solid #dc2626', borderRadius: '0.4rem', cursor: 'pointer', fontSize: '1.2rem' }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>No hay reservas para mostrar.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
