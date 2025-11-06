import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#6DA8FF] text-white font-bold">A</div>
            <div className="leading-tight">
              <div className="font-semibold text-[#002B5B]">Avi</div>
              <div className="text-xs text-slate-500">Home Assistant</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#002B5B] md:flex">
            <a href="#how" className="hover:text-[#6DA8FF]">How it works</a>
            <a href="#features" className="hover:text-[#6DA8FF]">Features</a>
            <a href="#join" className="rounded-full bg-[#002B5B] px-4 py-2 text-white transition hover:brightness-110">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="how"><HowItWorks /></div>
        <div id="features"><Features /></div>
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
