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
      <footer style={{ borderTop: '1px solid var(--border)', textAlign: 'center', padding: '2rem', fontFamily: "'Space Mono',monospace", fontSize: '0.75rem', color: 'var(--muted)' }}>
        Built with 💚 by <span style={{ color: 'var(--neon)' }}>Mujaheed Said Adam</span>
      </footer>
    </>
  )
}