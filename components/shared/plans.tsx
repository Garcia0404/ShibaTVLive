'use client'

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '9.99 PEN',
    billing: '/mes',
    description: 'Perfect for individual viewers',
    features: [
      'HD quality (720p)',
      'One device at a time',
      'Ad-supported content',
      'Cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: '15.99 PEN',
    billing: '/mes',
    description: 'For the whole family',
    features: [
      '4K quality (Ultra HD)',
      'Four devices simultaneously',
      'Ad-free experience',
      'Exclusive content',
      'Download for offline viewing',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '22.99 PEN',
    billing: '/mes',
    description: 'Ultimate streaming experience',
    features: [
      '4K + HDR quality',
      'Six devices simultaneously',
      'Ad-free experience',
      'All exclusive content',
      'Download for offline viewing',
      'Priority customer support',
    ],
    popular: false,
  },
]

export default function Plans() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
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
      if (observer && cardsRef.current[index]) {
        observer.observe(cardsRef.current[index]!)
      }
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="plans" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Escoge tu plan
          </h2>
          <p className="text-lg text-white/60">
            Selecciona el plan perfecto para tus necesidades de entretenimiento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`relative transition-all duration-700 ${visibleCards[index]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
            >
              <div
                className={`relative h-full rounded-2xl bg-white/20 border border-white/10 transition-all duration-300 p-8 hover:shadow-xl group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary from-primary to-primary/60 text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white">{plan.billing}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-200 transform hover:scale-103 active:scale-95 bg-main text-white`}
                >
                  Subscríbeme
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 transition-all duration-500"
                      style={{
                        transitionDelay: visibleCards[index]
                          ? `${featureIndex * 50}ms`
                          : '0ms',
                        opacity: visibleCards[index] ? 1 : 0,
                        transform: visibleCards[index]
                          ? 'translateX(0)'
                          : 'translateX(-10px)',
                      }}
                    >
                      <Check className="text-blue-400 shrink-0 mt-1" size={20} />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/70 text-sm mt-12">
          Todos los planes incluyen una prueba gratuita de 7 días. Cancela en cualquier momento, sin preguntas.
        </p>
      </div>
    </section>
  )
}
