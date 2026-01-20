'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/shared/header'
import Hero from '@/components/shared/hero'
import Plans from '@/components/shared/plans'
import FAQ from '@/components/shared/faq'
import Footer from '@/components/shared/footer'
import { toast } from "sonner"

// Lazy load componentes que no son críticos
const Sports = dynamic(() => import('@/components/shared/sports').then(mod => ({ default: mod.Sports })), {
  loading: () => null,
  ssr: true,
});

const Extras = dynamic(() => import('@/components/shared/extras').then(mod => ({ default: mod.Extras })), {
  loading: () => null,
  ssr: true,
});

const Subscription = dynamic(() => import('@/components/shared/subscription').then(mod => ({ default: mod.Subscription })), {
  loading: () => null,
  ssr: true,
});

const AndroidBox = dynamic(() => import('@/components/shared/androidbox'), {
  loading: () => null,
  ssr: true,
});

const Platforms = dynamic(() => import('@/components/shared/platforms'), {
  loading: () => null,
  ssr: true,
});

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
      <Suspense fallback={null}>
        <Extras />
      </Suspense>
      <Suspense fallback={null}>
        <Sports/>
      </Suspense>
      <Suspense fallback={null}>
        <Platforms />
      </Suspense>
      <Suspense fallback={null}>
        <AndroidBox />
      </Suspense>
      <FAQ />
      <Suspense fallback={null}>
        <Subscription />
      </Suspense>
      <Footer />
      <a href="https://wa.me/51931399867" target="_blank" className='animate-bounce fixed flex items-center pe-3 bottom-0 right-0 m-4 z-50 cursor-pointer bg-green-700 rounded-md' rel="noopener noreferrer">
        <img src="/ws-btn.png" width={40} height={40} alt="WhatsApp" loading="lazy" decoding="async"></img>
        <div>
          <span className="text-white font-semibold text-sm">Contacta con Shiba</span>
        </div>
      </a>
    </main>
  )
}
