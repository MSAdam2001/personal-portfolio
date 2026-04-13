'use client'

export default function Hero() {
  const stats = [
    { icon: '🖥️', value: '2+', label: 'Live Projects' },
    { icon: '⚡', value: '100%', label: 'On-Time Delivery' },
    { icon: '🛠️', value: '10+', label: 'Technologies' },
    { icon: '🎯', value: '1+', label: 'Years Building' },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '8rem 2.5rem 4rem',
      maxWidth: 1100, margin: '0 auto'
    }}>

      {/* Available Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
        color: '#22c55e', fontSize: '0.8rem', fontWeight: 500,
        padding: '0.4rem 1rem', borderRadius: 100,
        marginBottom: '2.5rem', width: 'fit-content'
      }}>
        <span style={{
          width: 7, height: 7, background: '#22c55e',
          borderRadius: '50%', display: 'inline-block',
          animation: 'pulse 2s infinite'
        }}/>
        Available for New Projects
      </div>

      {/* Main Heading */}
      <h1 className="hero-title" style={{
        fontWeight: 800, lineHeight: 1.05,
        marginBottom: '1.5rem', letterSpacing: '-0.02em'
      }}>
        Reliable Web Solutions<br/>
        <span style={{ color: 'var(--accent2)' }}>Under Real Constraints.</span>
      </h1>

      {/* Subtext */}
      <p className="hero-sub" style={{
        color: 'var(--muted)', lineHeight: 1.8,
        maxWidth: 620, marginBottom: '1rem'
      }}>
        I build functional and scalable web applications, solving real problems
        with clean code, consistent delivery, and a strong focus on growth
        and performance.
      </p>

      <p style={{
        fontSize: '1rem', fontWeight: 600,
        color: 'var(--text)', marginBottom: '3rem',
        letterSpacing: '0.01em'
      }}>
        Real constraints. Real pressure. Real results.
      </p>

      {/* CTA Buttons */}
     {/* CTA Buttons */}
      <div className="hero-btns" style={{
        display: 'flex', gap: '1rem',
        flexWrap: 'wrap', marginBottom: '5rem'
      }}>
        <a href="#work" onClick={e => {
          e.preventDefault()
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
        }} style={{
          background: 'var(--accent)', color: '#fff',
          fontSize: '0.95rem', fontWeight: 700,
          padding: '0.9rem 2.25rem', borderRadius: 10,
          textDecoration: 'none', display: 'inline-flex',
          alignItems: 'center', gap: '0.6rem',
          transition: 'all 0.2s', letterSpacing: '0.01em',
          boxShadow: '0 0 20px rgba(59,130,246,0.4)'
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.4)'
          }}
        >
          View My Work
          <span style={{
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 6, padding: '0.1rem 0.4rem',
            fontSize: '1rem'
          }}>→</span>
        </a>

        <a href="#contact" onClick={e => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }} style={{
          background: 'transparent', color: 'var(--text)',
          fontSize: '0.95rem', fontWeight: 700,
          padding: '0.9rem 2.25rem', borderRadius: 10,
          textDecoration: 'none', display: 'inline-flex',
          alignItems: 'center', gap: '0.6rem',
          border: '1px solid var(--border)',
          transition: 'all 0.2s', letterSpacing: '0.01em',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent2)'
            e.currentTarget.style.color = 'var(--accent2)'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,160,0.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Get In Touch
          <span style={{
            background: 'rgba(0,245,160,0.1)',
            border: '1px solid rgba(0,245,160,0.3)',
            borderRadius: 6, padding: '0.1rem 0.4rem',
            fontSize: '0.85rem', color: 'var(--accent2)'
          }}>✉</span>
        </a>
      </div>

      {/* Stats Row */}
      <div className="stats-grid">
        {stats.map(s => (
          <div key={s.label} style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 12, padding: '1.25rem',
          }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{s.icon}</div>
            <div style={{
              fontSize: '1.75rem', fontWeight: 800,
              color: 'var(--accent2)', marginBottom: '0.25rem',
              letterSpacing: '-0.02em'
            }}>{s.value}</div>
            <div style={{
              fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 500
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

        .hero-title { font-size: clamp(2.5rem, 6vw, 5rem); }
        .hero-sub { font-size: 1.05rem; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem; }
          .hero-sub { font-size: 0.95rem; }
          .hero-btns a { width: 100%; justify-content: center; }
        }

        @media (max-width: 400px) {
          .hero-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  )
}