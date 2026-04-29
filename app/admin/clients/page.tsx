'use client'
import React, { useState } from 'react'

const initialClients = [
  { id: 1, name: 'Lucía Fernández', phone: '+57 300 123 4567', visits: 5, lastVisit: '2026-04-20', totalSpent: '$240', history: ['Volumen Tecnológico (20/04)', 'Lifting (10/02)'] },
  { id: 2, name: 'María García', phone: '+57 311 987 6543', visits: 3, lastVisit: '2026-04-22', totalSpent: '$150', history: ['Skin Care (22/04)', 'Diseño Cejas (05/03)'] },
  { id: 3, name: 'Ana Martínez', phone: '+57 315 444 2222', visits: 1, lastVisit: '2026-04-25', totalSpent: '$60', history: ['Lifting Botánico (25/04)'] },
  { id: 4, name: 'Sofía Rodríguez', phone: '+57 310 000 1111', visits: 12, lastVisit: '2026-04-15', totalSpent: '$720', history: ['Volumen Ruso (15/04)', 'Skin Care (20/03)'] },
]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClient, setSelectedClient] = useState<any>(null)

  const filteredClients = initialClients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.phone.includes(searchTerm)
  )

  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hola ${name}, te escribimos de Lash_Lessa para...`)
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.2rem' }}>
      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 600, marginBottom: '0.8rem' }}>Gestión de Clientes</h1>
          <p style={{ color: '#666' }}>Historial, comunicación y fidelización.</p>
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
          + Nuevo Cliente
        </button>
      </div>

      {/* ── Search & Filter ── */}
      <div style={{
        background: '#ffffff',
        padding: '1.6rem 2.4rem',
        borderRadius: '1.2rem',
        border: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        gap: '1.6rem'
      }}>
        <span style={{ fontSize: '1.8rem' }}>🔍</span>
        <input 
          type="text" 
          placeholder="Buscar por nombre o teléfono..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            fontSize: '1.4rem',
            background: 'transparent'
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selectedClient ? '1fr 35rem' : '1fr', gap: '3.2rem', transition: 'all 0.3s' }}>
        {/* ── Clients List ── */}
        <div style={{
          background: '#ffffff',
          borderRadius: '1.6rem',
          border: '1px solid #f0f0f0',
          padding: '2.4rem',
          overflowX: 'auto'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                <th style={{ padding: '1.2rem', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Nombre</th>
                <th style={{ padding: '1.2rem', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Teléfono</th>
                <th style={{ padding: '1.2rem', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Visitas</th>
                <th style={{ padding: '1.2rem', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Última vez</th>
                <th style={{ padding: '1.2rem', color: '#999', fontWeight: 400, fontSize: '1.3rem' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr 
                  key={client.id} 
                  onClick={() => setSelectedClient(client)}
                  style={{ 
                    borderBottom: '1px solid #fafafa', 
                    cursor: 'pointer',
                    background: selectedClient?.id === client.id ? '#f9f9fb' : 'transparent'
                  }}
                >
                  <td style={{ padding: '1.6rem 1.2rem', fontWeight: 500, fontSize: '1.4rem' }}>{client.name}</td>
                  <td style={{ padding: '1.6rem 1.2rem', color: '#666', fontSize: '1.4rem' }}>{client.phone}</td>
                  <td style={{ padding: '1.6rem 1.2rem', color: '#666', fontSize: '1.4rem' }}>{client.visits}</td>
                  <td style={{ padding: '1.6rem 1.2rem', color: '#666', fontSize: '1.4rem' }}>{client.lastVisit}</td>
                  <td style={{ padding: '1.6rem 1.2rem' }}>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openWhatsApp(client.phone, client.name); }}
                      style={{ 
                        background: '#25D366', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '0.6rem', 
                        padding: '0.6rem 1.2rem',
                        fontSize: '1.2rem',
                        cursor: 'pointer'
                      }}
                    >
                      WhatsApp
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Client Detail Sidebar ── */}
        {selectedClient && (
          <div style={{
            background: '#ffffff',
            borderRadius: '1.6rem',
            border: '1px solid #f0f0f0',
            padding: '3.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.4rem',
            position: 'sticky',
            top: '4rem',
            height: 'fit-content'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>{selectedClient.name}</h2>
              <button onClick={() => setSelectedClient(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.6rem' }}>✕</button>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem' }}>
               <div style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '1rem', flex: 1, textAlign: 'center' }}>
                  <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '0.4rem' }}>Inversión Total</p>
                  <p style={{ fontWeight: 600 }}>{selectedClient.totalSpent}</p>
               </div>
               <div style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '1rem', flex: 1, textAlign: 'center' }}>
                  <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '0.4rem' }}>Frecuencia</p>
                  <p style={{ fontWeight: 600 }}>{selectedClient.visits} veces</p>
               </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.6rem' }}>Historial de Tratamientos</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {selectedClient.history.map((h: string, idx: number) => (
                  <li key={idx} style={{ 
                    padding: '1.2rem', 
                    borderRadius: '0.8rem', 
                    background: '#fcfcfc', 
                    border: '1px solid #f5f5f5',
                    fontSize: '1.3rem',
                    color: '#666'
                  }}>
                    ✨ {h}
                  </li>
                ))}
              </ul>
            </div>

            <button style={{
              width: '100%',
              padding: '1.4rem',
              borderRadius: '1rem',
              background: '#0f1012',
              color: 'white',
              border: 'none',
              fontWeight: 500,
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Ver Ficha Completa
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
