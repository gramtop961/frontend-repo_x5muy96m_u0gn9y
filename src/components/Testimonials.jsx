import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Avi made home maintenance stress-free.',
    name: 'Jordan M.',
  },
  {
    quote: 'I save money by catching issues early — the reminders are spot on.',
    name: 'Priya K.',
  },
  {
    quote: 'Feels like having a wise friend looking out for my home.',
    name: 'Chris L.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-[#002B5B] md:text-4xl">Trusted by Homeowners</h2>
          <p className="mt-3 text-slate-600">Real stories from people who made peace with maintenance.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#F4F6F8] to-white p-6"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700">“{t.quote}”</p>
              <div className="mt-3 text-xs font-medium text-[#002B5B]">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
