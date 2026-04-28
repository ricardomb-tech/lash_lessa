'use client'
import { useState, useEffect } from 'react'

export interface Booking {
  id: string
  service: string
  date: string // YYYY-MM-DD
  time: string // HH:MM
  clientName: string
  clientPhone: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: number
}

// Mock initial data
const MOCK_BOOKINGS: Booking[] = [
  {
    id: '1',
    service: 'Volumen Tecnológico',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    clientName: 'Maria Garcia',
    clientPhone: '123456789',
    status: 'confirmed',
    createdAt: Date.now()
  }
]

export function useBookingStore() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('lash_lessa_bookings')
    if (saved) {
      setBookings(JSON.parse(saved))
    } else {
      setBookings(MOCK_BOOKINGS)
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('lash_lessa_bookings', JSON.stringify(bookings))
    }
  }, [bookings, isLoaded])

  const addBooking = (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: Date.now()
    }
    setBookings(prev => [...prev, newBooking])
    return newBooking
  }

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b))
  }

  const deleteBooking = (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id))
  }

  const getAvailableTimes = (date: string) => {
    const allTimes = [
      '09:00', '10:00', '11:00', '12:00', '13:00', 
      '14:00', '15:00', '16:00', '17:00', '18:00'
    ]
    const bookedTimes = bookings
      .filter(b => b.date === date && b.status !== 'cancelled')
      .map(b => b.time)
    
    return allTimes.filter(t => !bookedTimes.includes(t))
  }

  return {
    bookings,
    addBooking,
    updateBookingStatus,
    deleteBooking,
    getAvailableTimes,
    isLoaded
  }
}
