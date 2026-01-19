'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/shared/header'
import Hero from '@/components/shared/hero'
import Plans from '@/components/shared/plans'
import FAQ from '@/components/shared/faq'
import Footer from '@/components/shared/footer'
import { Sports } from '@/components/shared/sports'
import { Extras } from '@/components/shared/extras'
import { Subscription } from '@/components/shared/subscription'
import AndroidBox from '@/components/shared/androidbox'
import Platforms from '@/components/shared/platforms'
import { toast } from "sonner"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const showRandomToast = () => {
      const messages = [
        "Un suscriptor acaba de unirse al plan Básico",
        "Un suscriptor ha comprado el plan Premium",
        "Nuevo usuario registrado en la plataforma",
        "Se ha completado una nueva suscripción anual",
        "Un cliente renovó su membresía",
      ]
      const toastTypes = ['success', 'info', 'warning'] as const
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      const randomType = toastTypes[Math.floor(Math.random() * toastTypes.length)]
      toast[randomType](randomMessage)
    }

    const scheduleNextToast = () => {
      const randomDelay = Math.random() * 6000 + 4000 // 4 a 10 segundos
      const timer = setTimeout(() => {
        showRandomToast()
        scheduleNextToast()
      }, randomDelay)

      return timer
    }

    const timer = scheduleNextToast()

    return () => clearTimeout(timer)
  }, [])

  return (
    <main
      className="min-h-screen bg-black"
    >
      <Header />
      <Hero />
      <Plans />
      {/* <Benefits /> */}
      <Extras />
      <Sports/>
      <Platforms />
      <AndroidBox />
      <FAQ />
      <Subscription />
      <Footer />
      <a href="https://wa.me/51931399867" target="_blank" className='animate-bounce fixed flex items-center pe-3 bottom-0 right-0 m-4 z-50 cursor-pointer bg-green-600 rounded-md'>
        <img src="/ws-btn.png" width={40} height={40}></img>
        <div>
          <span className="text-white font-semibold text-sm">Contacta con Shiba</span>
        </div>
      </a>
    </main>
  )
}
