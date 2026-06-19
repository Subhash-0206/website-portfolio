import React from 'react';
import { Shield, Database, Cpu, Compass, Layers, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Backend Architecture',
      desc: 'Expertise in Java, Spring Boot, microservices, REST APIs, multithreading, and performance tuning. Strong foundation in OOP, SOLID, and structural design patterns.',
      color: 'var(--primary)'
    },
    {
      icon: Layers,
      title: 'Enterprise Integration & Security',
      desc: 'Design and implementation of secure service-to-service communication with JWT, OAuth2, API Gateway integration, Kafka messaging, and RESTful/SOAP APIs.',
      color: 'var(--secondary)'
    },
    {
      icon: Compass,
      title: 'Cloud & Serverless Systems',
      desc: 'Architecting event-driven and automated services using AWS (Lambda, SQS, S3, Step Functions) and Azure (Functions, Service Bus, Blob Storage, App Services).',
      color: 'var(--accent)'
    },
    {
      icon: Shield,
      title: 'Reliability & CI/CD',
      desc: 'End-to-end automation with Jenkins and Azure DevOps, static analysis using SonarQube, robust unit/integration testing (JUnit, Mockito), and Splunk/Azure Monitor observability.',
      color: '#10b981'
    }
  ];

  const designPatterns = [
    'DAO & DTO Patterns',
    'Singleton & Factory',
    'MVC Architecture',
    'SOLID Principles',
    'Multithreading',
    'Database Indexing & Triggers'
  ];

  return (
    <section id="about" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '56px',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Left Side: Summary text and philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>
              Crafting <span className="gradient-text-accent">Production-Grade</span> Enterprise Systems
            </h3>
            
            <p style={{ color: 'var(--text-secondary)' }}>
              I am a Full Stack Java Developer with 8 years of experience designing, developing, and maintaining scalable systems. My primary focus is on engineering microservices, integrating robust databases, and leveraging cloud platforms (AWS and Azure) to eliminate manual workflows.
            </p>
            
            <p style={{ color: 'var(--text-secondary)' }}>
              I believe in clean code, robust monitoring, and automation. By applying SOLID principles, design patterns, and comprehensive unit tests, I ensure codebases are maintainable, testable, and optimized for performance.
            </p>

            <div style={{ marginTop: '12px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-main)' }}>
                Core Software Engineering Principles:
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px'
              }} className="principles-grid">
                {designPatterns.map((pattern, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{pattern}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Grid of Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }} className="pillars-grid">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '24px', height: '100%' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: '16px',
                    color: pillar.color
                  }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{pillar.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 576px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
          .principles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
