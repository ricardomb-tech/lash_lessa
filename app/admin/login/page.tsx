'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login
    if (email === 'admin@lashlessa.com' && password === 'admin123') {
      router.push('/admin')
    } else {
      alert('Credenciales incorrectas (Usa admin@lashlessa.com / admin123)')
    }
  }

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f2f2f4'
    }}>
      <div style={{
        background: '#ffffff',
        padding: '4.8rem',
        borderRadius: '2.4rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '44rem',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '3.2rem' }}>
          <h1 style={{ fontFamily: 'var(--ff-dm)', fontWeight: 600, fontSize: '2.4rem', marginBottom: '0.8rem' }}>
            Lash_Lessa
          </h1>
          <p style={{ color: '#666', fontSize: '1.4rem' }}>Panel de Administración</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', fontSize: '1.3rem', marginBottom: '0.8rem', color: '#666' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@lashlessa.com"
              style={{
                width: '100%',
                padding: '1.2rem 1.6rem',
                borderRadius: '0.8rem',
                border: '1px solid #eee',
                fontSize: '1.4rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', fontSize: '1.3rem', marginBottom: '0.8rem', color: '#666' }}>Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '1.2rem 1.6rem',
                borderRadius: '0.8rem',
                border: '1px solid #eee',
                fontSize: '1.4rem',
                outline: 'none'
              }}
            />
          </div>

          <button type="submit" style={{
            background: '#0f1012',
            color: 'white',
            border: 'none',
            padding: '1.4rem',
            borderRadius: '0.8rem',
            fontSize: '1.5rem',
            fontWeight: 500,
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'opacity 0.2s'
          }}>
            Entrar al Panel
          </button>
        </form>

        <p style={{ marginTop: '3.2rem', fontSize: '1.2rem', color: '#999' }}>
          Solo personal autorizado
        </p>
      </div>
    </div>
  )
}
