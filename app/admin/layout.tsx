'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // Avoid layout on login page
  if (pathname === '/admin/login') return <>{children}</>

  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: '📊' },
    { label: 'Citas', href: '/admin/appointments', icon: '📅' },
    { label: 'Clientes', href: '/admin/clients', icon: '👥' },
    { label: 'Configuración', href: '/admin/settings', icon: '⚙️' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* ── Sidebar ── */}
      <aside style={{
        width: isSidebarOpen ? '28rem' : '8rem',
        background: '#ffffff',
        borderRight: '1px solid #eee',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 100
      }}>
        {/* Logo Area */}
        <div style={{ padding: '3.2rem 2.4rem', borderBottom: '1px solid #f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {isSidebarOpen && (
            <span style={{ fontFamily: 'var(--ff-dm)', fontWeight: 600, fontSize: '1.6rem', color: '#0f1012' }}>
              Lash_Lessa Admin
            </span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.8rem' }}
          >
            {isSidebarOpen ? '←' : '→'}
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ padding: '2.4rem 1.2rem', flexGrow: 1 }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.6rem',
                    padding: '1.2rem 1.6rem',
                    borderRadius: '0.8rem',
                    textDecoration: 'none',
                    color: isActive ? '#0f1012' : '#666',
                    background: isActive ? '#f4f4f6' : 'transparent',
                    fontFamily: 'var(--ff-dm)',
                    fontSize: '1.4rem',
                    fontWeight: isActive ? 500 : 400,
                    transition: 'all 0.2s ease'
                  }}>
                    <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                    {isSidebarOpen && <span>{item.label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div style={{ padding: '2.4rem 1.2rem', borderTop: '1px solid #f5f5f5' }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.6rem',
            padding: '1.2rem 1.6rem',
            color: '#ff4d4f',
            textDecoration: 'none',
            fontFamily: 'var(--ff-dm)',
            fontSize: '1.4rem'
          }}>
            <span>🚪</span>
            {isSidebarOpen && <span>Cerrar Sesión</span>}
          </Link>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main style={{ flexGrow: 1, padding: '4rem', maxWidth: '140rem', margin: '0 auto', width: '100%' }}>
        {children}
      </main>

      <style jsx global>{`
        body { background: #f8f9fa !important; }
        @media (max-width: 768px) {
          aside {
            position: fixed !important;
            left: ${isSidebarOpen ? '0' : '-28rem'} !important;
            box-shadow: 20px 0 40px rgba(0,0,0,0.05);
          }
          main {
            padding: 2.4rem !important;
          }
        }
      `}</style>
    </div>
  )
}
