'use client'

import { Check } from '@/components/icons'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

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
  const { visibleItems, itemsRef } = useRevealOnScroll<HTMLDivElement>(3, {
    threshold: 0.1,
  })

  return (
    <section id="plans" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Escoge tu plan
          </h2>
          <p className="text-lg text-white/60">
            Selecciona el plan perfecto para tus necesidades de entretenimiento
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={(el) => {
                if (el) itemsRef.current[index] = el
              }}
              className={`transition-all duration-700 ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative h-full rounded-2xl bg-white/10 p-8">

                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                <p className="text-white/70 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white">{plan.billing}</span>
                </div>

                <button className="w-full py-3 rounded-lg font-bold mb-8 bg-main text-white">
                  Subscríbeme
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div
                      key={feature}
                      className="flex gap-3 transition-all duration-500"
                      style={{
                        transitionDelay: visibleItems[index]
                          ? `${i * 50}ms`
                          : '0ms',
                        opacity: visibleItems[index] ? 1 : 0,
                        transform: visibleItems[index]
                          ? 'translateX(0)'
                          : 'translateX(-10px)',
                      }}
                    >
                      <Check className="text-blue-400 mt-1" size={20} />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
