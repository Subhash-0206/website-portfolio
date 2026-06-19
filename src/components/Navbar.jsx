import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Briefcase, GraduationCap, Mail, User, Code } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', icon: User, id: 'about' },
    { label: 'Skills', href: '#skills', icon: Cpu, id: 'skills' },
    { label: 'Experience', href: '#experience', icon: Briefcase, id: 'experience' },
    { label: 'Education', href: '#education', icon: GraduationCap, id: 'education' },
    { label: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50 shadow-lg' 
        : 'py-6 bg-transparent'
    }`} style={{
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" className="logo" style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          fontFamily: 'var(--font-display)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'linear-gradient(to right, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          <Code size={24} style={{ stroke: 'url(#brand-grad)' }} />
          <span>Subhash.Dev</span>
          {/* SVG definitions for gradient stroke */}
          <svg width="0" height="0" className="absolute">
            <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </svg>
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', alignItems: 'center' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                      position: 'relative',
                      padding: '6px 0'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'}
                    onMouseLeave={(e) => {
                      if (!isActive) e.target.style.color = 'var(--text-muted)';
                    }}
                  >
                    <Icon size={16} style={{ color: isActive ? 'var(--primary)' : 'inherit' }} />
                    {item.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                        borderRadius: '2px'
                      }} />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            display: 'none', // Will be shown via responsive CSS
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          className="glass-panel" 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderTop: '1px solid var(--border-color)',
            animation: 'slide-in-up 0.3s ease-out'
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                      padding: '8px 0'
                    }}
                  >
                    <Icon size={20} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Inline styles for responsive menu styling */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
