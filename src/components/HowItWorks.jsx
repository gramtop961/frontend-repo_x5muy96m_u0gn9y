import { motion } from 'framer-motion'
import { Scan, ClipboardCheck, Bell } from 'lucide-react'

const steps = [
  {
    title: 'Scan your home',
    description: 'Add rooms, systems, and appliances. Snap photos of receipts and warranties — Avi organizes them for you.',
    icon: Scan,
  },
  {
    title: 'Track tasks',
    description: 'From air filters to roof checks, keep everything in one place with clear priorities and due dates.',
    icon: ClipboardCheck,
  },
  {
    title: 'Get reminders',
    description: 'Smart schedules and gentle nudges help you stay ahead — no more last-minute surprises.',
    icon: Bell,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-[#002B5B] md:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-600">Three simple steps to a happier, healthier home.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#F4F6F8] to-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6DA8FF]/15 text-[#002B5B]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#002B5B]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
