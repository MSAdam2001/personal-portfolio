import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer style={{
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1rem, 5vw, 2rem)',
        fontFamily: "'Space Mono', monospace",
        fontSize: 'clamp(0.68rem, 2vw, 0.75rem)',
        color: 'var(--muted)',
      }}>
        Built with 💚 by <span style={{ color: 'var(--neon)' }}>Mujaheed Said Adam</span>
      </footer>
    </>
  )
}