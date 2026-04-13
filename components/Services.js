'use client'

const skills = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    desc: 'Building pixel-perfect, responsive interfaces that work on every device.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery']
  },
  {
    icon: '⚛️',
    title: 'Modern Frameworks',
    desc: 'Building fast, scalable UIs with the latest frontend technologies.',
    tags: ['React.js', 'Next.js', 'Component Design']
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Designing and building robust server-side systems and REST APIs.',
    tags: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    desc: 'Structuring and managing data for performance and reliability.',
    tags: ['SQL', 'NoSQL', 'MongoDB', 'MySQL']
  },
  {
    icon: '🔐',
    title: 'Security & Auth',
    desc: 'Implementing secure authentication and protecting user data.',
    tags: ['JWT', 'OAuth', 'Sessions', 'bcrypt']
  },
  {
    icon: '🛠️',
    title: 'Tools & Workflow',
    desc: 'Professional development workflow with industry-standard tools.',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman']
  },
]

export default function Skills() {
  return (
    <section id="services" style={{
      padding: '7rem 2.5rem',
      maxWidth: 1100, margin: '0 auto'
    }}>

      {/* Section Header */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: 40, height: 2,
            background: 'linear-gradient(90deg, #3b82f6, #00f5a0)'
          }}/>
          <span style={{
            fontSize: '0.75rem', fontWeight: 600,
            color: '#3b82f6', letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>WHAT I KNOW</span>
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800, color: '#ffffff',
          letterSpacing: '-0.02em', marginBottom: '1rem'
        }}>Skills Built on Practice</h2>
        <p style={{
          fontSize: '1rem', color: '#888888',
          maxWidth: 550, lineHeight: 1.7
        }}>
          Not just theory. Every skill here has been applied in real projects
          with real users and real deadlines.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map(s => (
          <div key={s.title} className="skill-card" style={{
            background: '#111111',
            border: '1px solid #2a2a2a',
            borderRadius: 12, padding: '1.75rem',
            transition: 'all 0.25s',
            cursor: 'default'
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
            {/* Icon */}
            <div style={{
              width: 48, height: 48,
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 10, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', marginBottom: '1.25rem'
            }}>{s.icon}</div>

            {/* Title */}
            <h3 style={{
              fontSize: '1rem', fontWeight: 700,
              color: '#ffffff', marginBottom: '0.5rem'
            }}>{s.title}</h3>

            {/* Description */}
            <p style={{
              fontSize: '0.82rem', color: '#888888',
              lineHeight: 1.6, marginBottom: '1.25rem'
            }}>{s.desc}</p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {s.tags.map(tag => (
                <span key={tag} style={{
                  background: 'rgba(0,245,160,0.06)',
                  border: '1px solid rgba(0,245,160,0.15)',
                  color: '#00f5a0', fontSize: '0.72rem',
                  fontWeight: 500, padding: '0.25rem 0.65rem',
                  borderRadius: 100
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 550px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}