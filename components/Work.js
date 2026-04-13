'use client'

const projects = [
  {
    badge: 'LIVE',
    badgeColor: '#22c55e',
    title: 'E-Commerce Platform',
    client: 'Personal Project • 2024',
    desc: 'A full stack e-commerce web application with product listings, shopping cart, user authentication and a clean modern UI.',
    metrics: [
      { label: 'Frontend', value: 'React.js' },
      { label: 'Backend', value: 'Node.js' },
      { label: 'Database', value: 'MongoDB' },
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://ecommerce-frontend-cvs.vercel.app',
    github: 'https://github.com/MSAdam2001',
    comingSoon: false
  },
  {
    badge: 'LIVE',
    badgeColor: '#22c55e',
    title: 'Attendance System',
    client: 'Personal Project • 2024',
    desc: 'A web-based attendance management system that tracks student and employee attendance with an easy-to-use form interface.',
    metrics: [
      { label: 'Type', value: 'Web App' },
      { label: 'Stack', value: 'JS + Node' },
      { label: 'Status', value: 'Active' },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    demo: 'https://attendance-system-pvc5.vercel.app',
    github: 'https://github.com/MSAdam2001',
    comingSoon: false
  },
  {
    badge: 'IN PROGRESS',
    badgeColor: '#f59e0b',
    title: 'School Management System',
    client: 'Personal Project • 2025',
    desc: 'A full featured school management system with student records, grades, attendance tracking and a complete admin dashboard.',
    metrics: [
      { label: 'Frontend', value: 'Next.js' },
      { label: 'Backend', value: 'Node.js' },
      { label: 'Status', value: 'Building' },
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
    demo: '#',
    github: '#',
    comingSoon: true
  },
]

export default function Projects() {
  return (
    <section id="work" style={{
      padding: '7rem 2.5rem',
      maxWidth: 1100, margin: '0 auto'
    }}>

      {/* Section Header */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: '0.75rem', marginBottom: '1rem'
        }}>
          <div style={{
            width: 40, height: 2,
            background: 'linear-gradient(90deg, #3b82f6, #00f5a0)'
          }}/>
          <span style={{
            fontSize: '0.75rem', fontWeight: 600,
            color: '#3b82f6', letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>FEATURED WORK</span>
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800, color: '#ffffff',
          letterSpacing: '-0.02em', marginBottom: '1rem'
        }}>Real Projects. Real Impact.</h2>
        <p style={{
          fontSize: '1rem', color: '#888888',
          maxWidth: 550, lineHeight: 1.7
        }}>
          Every project here is a real working application — built,
          deployed and accessible online.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.title} className="project-card" style={{
            background: '#111111',
            border: '1px solid #2a2a2a',
            borderRadius: 14, overflow: 'hidden',
            transition: 'all 0.25s', position: 'relative'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#3b82f6'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(59,130,246,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2a2a2a'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ padding: '1.75rem' }}>

              {/* Top Row — Client + Badge */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '0.78rem', color: '#888888', fontWeight: 500
                }}>{p.client}</span>
                <span style={{
                  background: `${p.badgeColor}18`,
                  border: `1px solid ${p.badgeColor}40`,
                  color: p.badgeColor, fontSize: '0.65rem',
                  fontWeight: 700, padding: '0.2rem 0.65rem',
                  borderRadius: 100, letterSpacing: '0.08em'
                }}>{p.badge}</span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.2rem', fontWeight: 800,
                color: '#ffffff', marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
              }}>{p.title}</h3>

              {/* Description */}
              <p style={{
                fontSize: '0.85rem', color: '#888888',
                lineHeight: 1.7, marginBottom: '1.5rem'
              }}>{p.desc}</p>

              {/* Metrics */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                gap: '0.75rem', marginBottom: '1.5rem'
              }}>
                {p.metrics.map(m => (
                  <div key={m.label} style={{
                    background: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    borderRadius: 8, padding: '0.65rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '0.65rem', color: '#888888',
                      marginBottom: '0.2rem', textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>{m.label}</div>
                    <div style={{
                      fontSize: '0.85rem', fontWeight: 700,
                      color: '#60a5fa'
                    }}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{
                display: 'flex', flexWrap: 'wrap',
                gap: '0.4rem', marginBottom: '1.5rem'
              }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(0,245,160,0.06)',
                    border: '1px solid rgba(0,245,160,0.15)',
                    color: '#00f5a0', fontSize: '0.72rem',
                    fontWeight: 500, padding: '0.25rem 0.65rem',
                    borderRadius: 100
                  }}>{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {p.comingSoon ? (
                  <span style={{
                    fontSize: '0.82rem', color: '#888888',
                    border: '1px solid #2a2a2a',
                    padding: '0.5rem 1rem', borderRadius: 8,
                    fontWeight: 500
                  }}>🚧 In Progress...</span>
                ) : (
                  <>
                    <a href={p.demo} target="_blank" rel="noreferrer" style={{
                      background: '#3b82f6', color: '#fff',
                      fontSize: '0.82rem', fontWeight: 600,
                      padding: '0.55rem 1.25rem', borderRadius: 8,
                      textDecoration: 'none', display: 'inline-flex',
                      alignItems: 'center', gap: '0.4rem',
                      transition: 'opacity 0.2s'
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >🔗 Live Demo</a>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{
                      background: '#1a1a1a', color: '#ffffff',
                      fontSize: '0.82rem', fontWeight: 600,
                      padding: '0.55rem 1.25rem', borderRadius: 8,
                      textDecoration: 'none', border: '1px solid #2a2a2a',
                      display: 'inline-flex', alignItems: 'center',
                      gap: '0.4rem', transition: 'border-color 0.2s'
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#888888'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2a'}
                    >GitHub</a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}