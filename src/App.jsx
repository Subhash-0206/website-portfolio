import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Background Decorative Mesh grid lines (subtle overlay) */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Main navigation */}
      <Navbar />

      {/* Page Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-color)',
        padding: '30px 24px',
        textAlign: 'center',
        background: 'rgba(5, 7, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }} className="footer-container">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Subhashchandra Bose Goud Muchchunoor. All rights reserved.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Designed & Engineered with React + Vanilla CSS
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 576px) {
          .footer-container {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
