'use client'
import { PlanFeatures } from './plan-features'

type Props = {
  plan: any
  visible: boolean
  innerRef: (el: HTMLDivElement | null) => void
}

export function PlanCard({ plan, visible, innerRef }: Props) {
  return (
    <div
      ref={innerRef}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative h-full rounded-2xl bg-white/10 p-8">
        {plan.popular && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-bold">
            Más Popular
          </span>
        )}

        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-white/70 mb-6">{plan.description}</p>

        <div className="mb-8">
          <span className="text-5xl font-bold text-white">{plan.price}</span>
          <span className="text-white">{plan.billing}</span>
        </div>

        <button className="w-full py-3 rounded-lg font-bold mb-8 bg-main text-white">
          Subscríbeme
        </button>

        <PlanFeatures features={plan.features} visible={visible} />
      </div>
    </div>
  )
}
