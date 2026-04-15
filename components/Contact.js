'use client'

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>

      <h2 style={{
        fontSize: 'clamp(2rem, 6vw, 3.6rem)',
        fontWeight: 800,
        color: '#ffffff',
        letterSpacing: '-0.03em',
        lineHeight: 1.08,
        marginBottom: '1.4rem',
      }}>
        Ready to Build<br />Something Real?
      </h2>

      <p style={{
        fontSize: 'clamp(13px, 2.5vw, 15px)',
        color: '#888888',
        lineHeight: 1.8,
        maxWidth: 520,
        marginBottom: '3rem',
      }}>
        Taking on select projects for businesses and startups that need fast,
        clean, and reliable web applications — built to last.
      </p>

      {/* Buttons */}
      <div className="contact-btns" style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '2.5rem',
        width: '100%',
        maxWidth: 560,
      }}>

        <a href="mailto:mujaheedsaid8003@gmail.com"
          className="cbtn cbtn-primary">
          <EmailIcon />
          <span className="cbtn-email-text">mujaheedsaid8003@gmail.com</span>
          <em className="cbtn-arrow">→</em>
        </a>

        <a href="https://linkedin.com/in/mujaheed-said-adam"
          target="_blank" rel="noopener noreferrer"
          className="cbtn cbtn-dark">
          <LinkedInIcon />
          LinkedIn
        </a>

        <a href="https://github.com/MSAdam2001"
          target="_blank" rel="noopener noreferrer"
          className="cbtn cbtn-dark">
          <GitHubIcon />
          GitHub
        </a>
      </div>

      {/* Footer line */}
      <p className="contact-footer">
        <span>Response time: Within 24 hours</span>
        <span className="contact-dot">•</span>
        <span>Located: Kano State, Nigeria</span>
      </p>

      <style>{`
        .cbtn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 26px;
          border-radius: 10px;
          font-size: clamp(12px, 2.5vw, 14px);
          font-weight: 700;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          transition: transform 0.18s cubic-bezier(.34,1.56,.64,1), opacity 0.18s, border-color 0.18s;
          cursor: pointer;
        }
        .cbtn:hover { transform: translateY(-3px); }
        .cbtn-primary { background: #3b82f6; color: #fff; }
        .cbtn-primary:hover { opacity: 0.88; }
        .cbtn-dark { background: #1a1a1a; color: #fff; border: 1px solid #2a2a2a; }
        .cbtn-dark:hover { border-color: #555555; }
        .cbtn-arrow { font-style: normal; transition: transform 0.18s ease; }
        .cbtn:hover .cbtn-arrow { transform: translateX(4px); }

        .contact-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 4px 8px;
          font-size: clamp(11px, 2vw, 12px);
          color: #444444;
          letter-spacing: 0.03em;
        }
        .contact-dot {
          color: #2a2a2a;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .cbtn-email-text {
            /* Shorten displayed text on tablet if needed */
            max-width: 220px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .cbtn {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
          }
          .cbtn-email-text {
            max-width: 100%;
            overflow: visible;
            text-overflow: unset;
            white-space: normal;
            word-break: break-all;
          }
          .contact-dot {
            display: none;
          }
          .contact-footer {
            flex-direction: column;
            gap: 4px;
          }
        }
      `}</style>
    </section>
  )
}

function EmailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
}

function LinkedInIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
}

function GitHubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
}