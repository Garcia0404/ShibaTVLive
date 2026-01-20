'use client'

import { memo } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time. There are no long-term contracts or hidden fees. Simply go to your account settings and request cancellation.',
  },
  {
    question: 'How many devices can watch simultaneously?',
    answer:
      'It depends on your plan. Basic plan allows 1 device, Standard plan allows 4 devices, and Premium plan allows 6 devices to stream at the same time.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes, all new members get a 7-day free trial. You can explore all features risk-free before committing to a paid plan.',
  },
  {
    question: 'Can I download content offline?',
    answer:
      'Download for offline viewing is available on Standard and Premium plans. You can download unlimited titles and watch them anytime without an internet connection.',
  },
  {
    question: 'How often is new content added?',
    answer:
      'We add new movies and series every week. Our content library is constantly updated with the latest releases and exclusive original productions.',
  },
  {
    question: 'Do you have ads on the Basic plan?',
    answer:
      'The Basic plan includes ads to keep the price affordable. Standard and Premium plans offer ad-free viewing for an uninterrupted experience.',
  },
]

const FAQ = memo(function FAQ() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-white/60">
            Encuentra respuestas a preguntas comunes sobre StreamHub
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4" defaultValue='item-0'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg "
            >
              <AccordionTrigger className="w-full px-6 py-4 flex items-center justify-between text-left">
                <span className="font-semibold text-white">{faq.question}</span>
              </AccordionTrigger>

              <AccordionContent className="px-6 py-4 text-balance">
                <p className="text-white/70">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
});

export default FAQ;