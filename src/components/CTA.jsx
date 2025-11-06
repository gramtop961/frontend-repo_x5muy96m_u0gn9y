import { motion } from 'framer-motion'
import { Download, Rocket } from 'lucide-react'

export default function CTA() {
  return (
    <section id="join" className="relative overflow-hidden bg-gradient-to-b from-[#002B5B] to-[#001E3F]">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #6DA8FF 0, transparent 40%), radial-gradient(circle at 80% 30%, #F2EDE6 0, transparent 40%)' }} />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-semibold text-white md:text-4xl">Join the Beta</h3>
            <p className="mt-3 text-white/80">Be one of the first to try Avi and help shape a calmer, smarter way to care for your home.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#002B5B] shadow transition hover:shadow-md"><Rocket className="h-5 w-5"/>Join the Beta</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"><Download className="h-5 w-5"/>Download the App</a>
          </div>
        </div>
      </div>
    </section>
  )
}
