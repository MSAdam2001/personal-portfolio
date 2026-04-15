'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
  ]

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0.85rem 2rem',
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? '#2a2a2a' : 'transparent'}`,
        transition: 'all 0.3s'
      }}>

        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
          <svg width="38" height="42" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="shieldGrad" x1="4" y1="2" x2="38" y2="43" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#00f5a0"/>
              </linearGradient>
            </defs>
            <path d="M21 2L4 9V22C4 31.5 11.5 40.2 21 43C30.5 40.2 38 31.5 38 22V9L21 2Z" fill="url(#shieldGrad)"/>
            <text x="21" y="28" textAnchor="middle" fill="white" fontSize="11" fontWeight="800"
              fontFamily="Inter, sans-serif" letterSpacing="-0.5">MSA</text>
          </svg>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              Mujaheed Said Adam
            </div>
            <div style={{ fontSize: '0.65rem', color: '#00f5a0', lineHeight: 1.2, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="desktop-nav" style={{
          display: 'flex', gap: '0.25rem',
          listStyle: 'none', alignItems: 'center',
          margin: 0, padding: 0
        }}>
          {links.map(link => (
            <li key={link.label}>
              <a href={link.href}
                onClick={e => { setActive(link.label); handleNav(e, link.href) }}
                style={{
                  color: active === link.label ? '#ffffff' : '#888888',
                  textDecoration: 'none', fontSize: '0.875rem',
                  fontWeight: 500, padding: '0.5rem 1rem',
                  borderRadius: 8, transition: 'all 0.2s',
                  background: active === link.label ? '#1a1a1a' : 'transparent',
                  display: 'inline-block'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.background = '#1a1a1a'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = active === link.label ? '#ffffff' : '#888888'
                  e.currentTarget.style.background = active === link.label ? '#1a1a1a' : 'transparent'
                }}
              >{link.label}</a>
            </li>
          ))}

          <li style={{ width: 1, height: 20, background: '#2a2a2a', margin: '0 0.5rem' }} />

          <li>
            <a href="#contact"
              onClick={e => handleNav(e, '#contact')}
              style={{
                background: '#3b82f6', color: '#fff',
                fontSize: '0.875rem', fontWeight: 600,
                padding: '0.55rem 1.35rem', borderRadius: 8,
                textDecoration: 'none', display: 'inline-flex',
                alignItems: 'center', gap: '0.4rem',
                transition: 'all 0.2s',
                boxShadow: '0 0 15px rgba(59,130,246,0.3)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 0 25px rgba(59,130,246,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 0 15px rgba(59,130,246,0.3)'
              }}
            >
              Contact <span style={{ fontSize: '0.8rem' }}>✉</span>
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Toggle menu"
          style={{
            display: 'none', flexDirection: 'column',
            gap: 5, background: 'none', border: 'none',
            cursor: 'pointer', padding: 6,
            borderRadius: 8
          }}
        >
          <span style={{
            display: 'block', width: 22, height: 2,
            background: menuOpen ? '#00f5a0' : '#fff',
            transition: 'all 0.3s', borderRadius: 2,
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: '#fff', transition: 'all 0.3s',
            borderRadius: 2, opacity: menuOpen ? 0 : 1
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: menuOpen ? '#00f5a0' : '#fff',
            transition: 'all 0.3s', borderRadius: 2,
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }} />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div style={{
        position: 'fixed', top: '62px', left: 0, right: 0, zIndex: 99,
        background: 'rgba(10,10,10,0.98)',
        backdropFilter: 'blur(16px)',
        borderBottom: menuOpen ? '1px solid #2a2a2a' : 'none',
        maxHeight: menuOpen ? '320px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease, border-bottom 0.35s ease'
      }}>
        <ul style={{
          listStyle: 'none', margin: 0,
          padding: '1.25rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.15rem'
        }}>
          {[...links, { label: 'Contact', href: '#contact' }].map(link => (
            <li key={link.label}>
              <a href={link.href}
                onClick={e => handleNav(e, link.href)}
                style={{
                  color: link.label === 'Contact' ? '#00f5a0' : '#aaaaaa',
                  textDecoration: 'none', fontSize: '1rem',
                  fontWeight: 500, display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #1a1a1a',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = link.label === 'Contact' ? '#00f5a0' : '#aaaaaa'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (max-width: 480px) {
          nav { padding: 0.85rem 1.25rem !important; }
        }
      `}</style>
    </>
  )
}