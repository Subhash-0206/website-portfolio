import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Texas Tech University',
      location: 'TX, USA',
      gpa: 'GPA: 3.7 / 4.0',
      period: 'Graduated',
      highlights: [
        'Advanced courses in Algorithmic Analysis, Software Engineering, and Cloud Architecture.',
        'Collaborated on data analysis and distributed systems project architectures.'
      ],
      color: 'var(--primary)'
    },
    {
      degree: 'Bachelor of Technology in Electronics & Communication Engineering',
      school: 'IIIT RK Valley',
      location: 'AP, India',
      gpa: 'GPA: 8.5 / 10',
      period: 'Graduated',
      highlights: [
        'Rigorous training in computer systems, programming fundamentals, and communication circuits.',
        'Completed major project in real-time signals analysis.'
      ],
      color: 'var(--secondary)'
    }
  ];

  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          maxWidth: '960px',
          margin: '0 auto'
        }} className="education-grid">
          {educations.map((edu, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Corner Decorative Icon */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                opacity: 0.08,
                color: edu.color
              }}>
                <GraduationCap size={72} />
              </div>

              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '16px'
                }}>
                  <Calendar size={12} />
                  <span>{edu.period}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-main)' }}>
                  {edu.degree}
                </h3>
                
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: edu.color, marginBottom: '4px' }}>
                  {edu.school}
                </h4>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {edu.location}
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '20px'
                }}>
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <BookOpen size={16} style={{ color: edu.color, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GPA Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '24px',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-color)',
                width: 'fit-content'
              }}>
                <Award size={16} style={{ color: '#f59e0b' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {edu.gpa}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
