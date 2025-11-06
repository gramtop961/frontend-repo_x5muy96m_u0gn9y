import { motion } from 'framer-motion'
import { CalendarClock, Lightbulb, Wrench, LayoutDashboard, PlugZap } from 'lucide-react'

const features = [
  {
    title: 'Smart scheduling',
    description: 'Automatic reminders for filters, AC tune-ups, roof checks, and more — tailored to your home.',
    icon: CalendarClock,
  },
  {
    title: 'AI insights',
    description: 'Spot patterns early and avoid costly repairs with Avi’s proactive recommendations.',
    icon: Lightbulb,
  },
  {
    title: 'Connected services',
    description: 'Find trusted local pros when you need them, with context from your home profile.',
    icon: PlugZap,
  },
  {
    title: 'Dashboard overview',
    description: 'Your home’s health at a glance with tasks, budgets, and warranties neatly organized.',
    icon: LayoutDashboard,
  },
]

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F4F6F8]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-[#002B5B] md:text-4xl">What Avi Can Do</h2>
          <p className="mt-3 text-slate-600">Warm guidance meets smart technology.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B]/5 text-[#002B5B]">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#002B5B]">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
