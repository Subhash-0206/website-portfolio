import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight, Server, Cloud, Cpu, Terminal } from 'lucide-react';

const Linkedin = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [terminalStep, setTerminalStep] = useState(0);
  const terminalLogs = [
    { text: 'Initializing portfolio-service...', type: 'info' },
    { text: 'Loading profile data for Subhashchandra...', type: 'info' },
    { text: 'Resolving skills: Java, Spring Boot, AWS, Azure, SQL...', type: 'success' },
    { text: 'Establishing secure communication with cloud providers...', type: 'info' },
    { text: 'Configuring billing-service invoice automations...', type: 'success' },
    { text: 'Connecting to database clusters (MS SQL, MySQL, DynamoDB)...', type: 'info' },
    { text: 'Uptime monitoring dashboard: ACTIVE [Azure Monitor]', type: 'success' },
    { text: 'Subhashchandra Bose Goud profile loaded successfully! (8 years XP)', type: 'success' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => {
        if (prev < terminalLogs.length - 1) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '130px',
      paddingBottom: '80px',
      overflow: 'hidden'
    }}>
      {/* Background Glowing Orbs */}
      <div className="animate-pulse-glow" style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div className="animate-pulse-glow" style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
        animationDelay: '2s'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Heading and Details */}
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '30px',
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              width: 'fit-content'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }} className="pulse" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em' }}>
                AVAILABLE FOR NEW ROLES
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, fontWeight: 800 }}>
              Hi, I'm <span className="gradient-text">Subhashchandra</span>
              <br />
              <span className="gradient-text-accent" style={{ fontSize: '0.8em' }}>Full Stack Java & Cloud Developer</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '560px' }}>
              8 years of experience engineering secure, scalable enterprise applications, event-driven systems, and microservices on AWS and Azure. Proficient in Spring Boot, REST APIs, and DevOps automation.
            </p>

            {/* Quick Contact & Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
              <a href="#experience" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Contact Quick Links */}
            <div style={{
              display: 'flex',
              gap: '24px',
              marginTop: '16px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="mailto:subhashchandra.muchchunoor@gmail.com" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
              }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'}
                 onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                <Mail size={18} style={{ color: 'var(--primary)' }} />
                <span>subhashchandra.muchchunoor@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/subhash-muchchunoor" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
              }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'}
                 onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                <Linkedin size={18} style={{ color: 'var(--secondary)' }} />
                <span>linkedin.com/in/subhash-muchchunoor</span>
              </a>

              <a href="tel:+18068051501" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
              }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'}
                 onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                <Phone size={18} style={{ color: 'var(--accent)' }} />
                <span>+1-(806)-805-1501</span>
              </a>
            </div>

            {/* Headline metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-color)',
              maxWidth: '500px'
            }} className="metrics-grid">
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>8+</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Years Experience</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>20+</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tech Libraries</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--accent)' }}>2</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Major Clouds</p>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal / Visual Graphic */}
          <div className="animate-float" style={{ zIndex: 2 }}>
            <div className="glass-card" style={{
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Terminal Window Header */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '12px 20px',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Terminal size={12} />
                  <span>subhash@cloud-terminal:~</span>
                </div>
                <div style={{ width: '40px' }} /> {/* Spacer */}
              </div>

              {/* Terminal Window Body */}
              <div style={{
                padding: '24px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: 'rgba(5, 7, 18, 0.95)',
                color: '#34d399',
                overflowY: 'auto'
              }}>
                <div style={{ color: 'var(--text-muted)' }}>
                  $ java -jar portfolio-v8.0.0.jar --spring.profiles.active=cloud-prod
                </div>
                {terminalLogs.slice(0, terminalStep + 1).map((log, idx) => (
                  <div key={idx} style={{
                    color: log.type === 'success' ? '#34d399' : '#94a3b8',
                    transition: 'all 0.3s ease',
                    opacity: 1,
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <span style={{ color: log.type === 'success' ? '#22c55e' : '#6366f1' }}>
                      {log.type === 'success' ? '✔' : 'ℹ'}
                    </span>
                    <span>{log.text}</span>
                  </div>
                ))}
                {terminalStep === terminalLogs.length - 1 && (
                  <div className="cursor" style={{
                    width: '8px',
                    height: '15px',
                    backgroundColor: '#34d399',
                    display: 'inline-block',
                    animation: 'pulse-glow 1s infinite',
                    marginTop: '4px'
                  }} />
                )}
              </div>
              
              {/* Bottom Details Info overlay */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                padding: '16px 24px',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Server size={14} style={{ color: 'var(--primary)' }} /> Spring Boot APIs
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Cloud size={14} style={{ color: 'var(--secondary)' }} /> AWS / Azure
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Cpu size={14} style={{ color: 'var(--accent)' }} /> Microservices
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* CSS Pulse & Grid Responsiveness Styling */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .pulse {
          animation: pulse 1.5s infinite;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid > div {
            align-items: center !important;
            margin: 0 auto;
          }
          .metrics-grid {
            margin: 24px auto 0 !important;
          }
          .hero-grid p {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
