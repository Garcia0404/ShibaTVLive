'use client'

import { useEffect, useRef, useState } from 'react'
import { Tv, Smartphone, Zap, Users } from 'lucide-react'

const benefits = [
  {
    icon: Tv,
    title: 'Stream on Any Device',
    description: 'Watch on your TV, phone, tablet, or laptop. Your content follows you everywhere.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description: 'Experience smooth, uninterrupted streaming with our advanced technology.',
  },
  {
    icon: Users,
    title: 'Share with Family',
    description: 'Create separate profiles for each family member with personalized recommendations.',
  },
  {
    icon: Smartphone,
    title: 'Download & Watch',
    description: 'Download your favorite content to watch offline whenever you want.',
  },
]

export default function Benefits() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false])
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemsRef.current.map((item, index) => {
      if (!item) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 100)
          }
        },
        { threshold: 0.1 }
      )
    })

    observers.forEach((observer, index) => {
      if (observer && itemsRef.current[index]) {
        observer.observe(itemsRef.current[index]!)
      }
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="benefits" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿Por qué elegir Shiba TV Live?
            
          </h2>
          <p className="text-lg text-white/60">
            Todo lo que necesitas para la mejor experiencia de streaming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                className={`transition-all duration-700 ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="p-6 rounded-xl bg-white/10 hover:border-accent/50 hover:shadow-lg transition-all group h-full">
                  <div className="border border-black/20 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
