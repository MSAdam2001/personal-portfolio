'use client'

const stack = [
  { category: 'Frontend', icon: '🎨', tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'] },
  { category: 'Frameworks', icon: '⚛️', tags: ['React.js', 'Next.js'] },
  { category: 'Backend', icon: '⚙️', tags: ['Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Database', icon: '🗄️', tags: ['MongoDB', 'MySQL', 'SQL', 'NoSQL'] },
  { category: 'Security', icon: '🔐', tags: ['JWT', 'OAuth', 'bcrypt', 'Sessions'] },
  { category: 'Tools', icon: '🛠️', tags: ['Git', 'GitHub', 'VS Code', 'Postman'] },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 2.5rem',
      maxWidth: 1100,
      margin: '0 auto'
    }}>

      {/* Section Label */}
      <div style={{
        display: 'flex', alignItems: 'center',
        gap: '0.75rem', marginBottom: '1rem'
      }}>
        <div style={{
          width: 40, height: 2,
          background: 'linear-gradient(90deg, #3b82f6, #00f5a0)'
        }} />
        <span style={{
          fontSize: '0.75rem', fontWeight: 600,
          color: '#3b82f6', letterSpacing: '0.15em',
          textTransform: 'uppercase'
        }}>ABOUT</span>
      </div>

      {/* Heading */}
      <h2 style={{
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 800, color: '#ffffff',
        letterSpacing: '-0.02em', marginBottom: '4rem'
      }}>Built on Reliability.</h2>

      {/* Two Column Layout */}
      <div className="about-grid">

        {/* Left — About Text */}
        <div>
          {/* Big Quote */}
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 700, color: '#ffffff',
            lineHeight: 1.6, marginBottom: '2rem',
            borderLeft: '3px solid #3b82f6',
            paddingLeft: '1.25rem'
          }}>
            I don&apos;t just write code — I build solutions that work under real conditions.
          </p>

          {/* Paragraphs */}
          <p style={{
            fontSize: '0.95rem', color: '#888888',
            lineHeight: 1.8, marginBottom: '1.25rem'
          }}>
            I am a <strong style={{ color: '#ffffff' }}>Software Engineer</strong> focused
            on building reliable and scalable web applications that solve real-world problems.
          </p>

          <p style={{
            fontSize: '0.95rem', color: '#888888',
            lineHeight: 1.8, marginBottom: '1.25rem'
          }}>
            I work with modern web technologies to create efficient, user-friendly, and{' '}
            <strong style={{ color: '#ffffff' }}>performance-driven digital solutions</strong> that
            deliver real value.
          </p>

          <p style={{
            fontSize: '0.95rem', color: '#888888',
            lineHeight: 1.8, marginBottom: '2.5rem'
          }}>
            I am constantly growing my skills in{' '}
            <strong style={{ color: '#ffffff' }}>full-stack development</strong> and software
            engineering best practices, with a strong focus on writing clean and maintainable code.
          </p>

          {/* Stats Row */}
          <div className="about-stats">
            {[
              { num: '2+', label: 'Live Projects' },
              { num: '10+', label: 'Technologies' },
              { num: '100%', label: 'Commitment' },
            ].map(s => (
              <div key={s.label} style={{
                background: '#111111',
                border: '1px solid #2a2a2a',
                borderRadius: 10, padding: '1.25rem',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
                  fontWeight: 800, color: '#00f5a0',
                  letterSpacing: '-0.02em', marginBottom: '0.25rem'
                }}>{s.num}</div>
                <div style={{
                  fontSize: '0.75rem', color: '#888888', fontWeight: 500
                }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact"
            onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="about-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#3b82f6', color: '#fff',
              fontSize: '0.9rem', fontWeight: 600,
              padding: '0.8rem 1.75rem', borderRadius: 10,
              textDecoration: 'none', transition: 'all 0.2s',
              boxShadow: '0 0 20px rgba(59,130,246,0.3)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.3)'
            }}
          >
            Let&apos;s Work Together →
          </a>
        </div>

        {/* Right — Tech Stack */}
        <div>
          <h3 style={{
            fontSize: '1rem', fontWeight: 700,
            color: '#ffffff', marginBottom: '1.5rem',
            letterSpacing: '-0.01em'
          }}>Tech Stack</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {stack.map(s => (
              <div key={s.category} style={{
                background: '#111111',
                border: '1px solid #2a2a2a',
                borderRadius: 10, padding: '1rem 1.25rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'border-color 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#3b82f6'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2a'}
              >
                {/* Icon */}
                <div style={{
                  width: 36, height: 36, flexShrink: 0,
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  borderRadius: 8, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem'
                }}>{s.icon}</div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: '0.75rem', color: '#888888',
                    fontWeight: 600, marginBottom: '0.4rem',
                    textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}>{s.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(0,245,160,0.06)',
                        border: '1px solid rgba(0,245,160,0.15)',
                        color: '#00f5a0', fontSize: '0.7rem',
                        fontWeight: 500, padding: '0.15rem 0.55rem',
                        borderRadius: 100
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .about-cta {
          width: fit-content;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .about-grid {
            gap: 2.5rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          section#about {
            padding: 5rem 1.5rem;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          section#about {
            padding: 4rem 1.25rem;
          }

          .about-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.65rem;
          }

          .about-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}