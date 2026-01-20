"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { plans } from "./plans.data";
import { PlanCard } from "./plan-card";

export default function Plans() {
  const { visibleItems, itemsRef } = useRevealOnScroll<HTMLDivElement>(
    plans.length,
    { threshold: 0.1 },
  );
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
            <PlanCard
              key={plan.name}
              plan={plan}
              visible={visibleItems[index]}
              innerRef={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
