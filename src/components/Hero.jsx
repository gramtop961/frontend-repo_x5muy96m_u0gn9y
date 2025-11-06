import { motion } from 'framer-motion'
import { Home, Shield, Wrench } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F6F8] to-white">
      {/* soft backdrop shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#6DA8FF]/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#F2EDE6] blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#002B5B]/5 px-3 py-1 text-sm text-[#002B5B]"
            >
              <Shield className="h-4 w-4" /> Secure & private by design
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl font-semibold leading-tight text-[#002B5B] md:text-6xl"
            >
              Your Home’s Best Friend.
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              Avi helps you track, plan, and care for your home — effortlessly. A wise, dependable guide blending human warmth with smart technology.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-[#6DA8FF] px-6 py-3 text-white shadow-md transition hover:shadow-lg hover:brightness-95"
              >
                Get Started
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-[#002B5B] transition hover:border-[#6DA8FF]"
              >
                See How Avi Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex items-center gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2"><Home className="h-4 w-4 text-[#6DA8FF]"/> Whole-home view</div>
              <div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-[#6DA8FF]"/> Pro-ready tips</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#6DA8FF]"/> Peace of mind</div>
            </motion.div>
          </div>

          {/* illustrative card stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-[#F4F6F8] p-6 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-[#002B5B]">Home Health</div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-600">Good</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { title: 'Air Filter', status: 'Due in 12 days' },
                    { title: 'Roof Check', status: 'All clear' },
                    { title: 'Water Heater', status: 'Service next month' },
                    { title: 'Smoke Alarms', status: 'Test this week' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-sm font-semibold text-[#002B5B]">{item.title}</div>
                      <div className="mt-1 text-xs text-slate-500">{item.status}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-[#002B5B] p-4 text-white">
                  <div className="text-sm">Avi Tip</div>
                  <div className="mt-1 text-xs text-white/90">Swapping to a MERV-11 filter can boost air quality without straining your HVAC.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
