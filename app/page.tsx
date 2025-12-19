'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/shared/header'
import Hero from '@/components/shared/hero'
import Plans from '@/components/shared/plans'
import Benefits from '@/components/shared/benefits'
import FAQ from '@/components/shared/faq'
import Footer from '@/components/shared/footer'
import { Sports } from '@/components/shared/sports'
import { Extras } from '@/components/shared/extras'
import { Subscription } from '@/components/shared/subscription'
import AndroidBox from '@/components/shared/androidbox'
import Platforms from '@/components/shared/platforms'


export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
    </main>
  )
}
