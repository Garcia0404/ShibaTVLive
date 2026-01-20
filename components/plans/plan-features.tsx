'use client'

import { Check } from '@/components/icons'

type Props = {
  features: string[]
  visible: boolean
}

export function PlanFeatures({ features, visible }: Props) {
  return (
    <div className="space-y-4">
      {features.map((feature, i) => (
        <div
          key={feature}
          className="flex gap-3 transition-all duration-500"
          style={{
            transitionDelay: visible ? `${i * 50}ms` : '0ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-10px)',
          }}
        >
          <Check className="text-blue-400 mt-1" size={20} />
          <span className="text-white">{feature}</span>
        </div>
      ))}
    </div>
  )
}
