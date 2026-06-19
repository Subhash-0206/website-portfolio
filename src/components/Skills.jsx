import React, { useState } from 'react';
import { Layers, Database, Cloud, Terminal, Code2, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { name: 'All', icon: Layers },
    { name: 'Languages', icon: Code2 },
    { name: 'Frameworks', icon: Terminal },
    { name: 'Cloud & Database', icon: Cloud },
    { name: 'DevOps & Testing', icon: Database }
  ];

  const skillData = [
    // Languages
    { name: 'Java', level: 'Expert', category: 'Languages', color: 'var(--primary)' },
    { name: 'Python', level: 'Advanced', category: 'Languages', color: 'var(--secondary)' },
    { name: 'SQL', level: 'Expert', category: 'Languages', color: 'var(--accent)' },
    { name: 'C#', level: 'Advanced', category: 'Languages', color: '#10b981' },
    { name: 'JavaScript', level: 'Advanced', category: 'Languages', color: '#f59e0b' },
    
    // Frameworks & Libraries
    { name: 'Spring Boot', level: 'Expert', category: 'Frameworks', color: 'var(--primary)' },
    { name: 'Spring MVC', level: 'Expert', category: 'Frameworks', color: 'var(--primary)' },
    { name: 'Hibernate / JPA', level: 'Expert', category: 'Frameworks', color: 'var(--secondary)' },
    { name: 'JDBC', level: 'Expert', category: 'Frameworks', color: 'var(--secondary)' },
    { name: '.NET Core / Framework', level: 'Advanced', category: 'Frameworks', color: 'var(--accent)' },
    { name: 'Entity Framework', level: 'Advanced', category: 'Frameworks', color: 'var(--accent)' },
    { name: 'ADO.NET', level: 'Advanced', category: 'Frameworks', color: '#10b981' },
    { name: 'Selenium', level: 'Intermediate', category: 'Frameworks', color: '#f59e0b' },
    { name: 'RESTful APIs', level: 'Expert', category: 'Frameworks', color: '#ec4899' },
    { name: 'SOAP Web Services', level: 'Advanced', category: 'Frameworks', color: '#6366f1' },

    // Cloud & Databases
    { name: 'AWS (Lambda, S3, SQS)', level: 'Advanced', category: 'Cloud & Database', color: 'var(--primary)' },
    { name: 'AWS CloudWatch & Step Functions', level: 'Advanced', category: 'Cloud & Database', color: 'var(--primary)' },
    { name: 'Azure Functions & Service Bus', level: 'Expert', category: 'Cloud & Database', color: 'var(--secondary)' },
    { name: 'Azure App Service & Blob Storage', level: 'Expert', category: 'Cloud & Database', color: 'var(--secondary)' },
    { name: 'Azure Monitor', level: 'Expert', category: 'Cloud & Database', color: '#10b981' },
    { name: 'Azure Data Factory (ADF)', level: 'Advanced', category: 'Cloud & Database', color: '#10b981' },
    { name: 'MS SQL Server', level: 'Expert', category: 'Cloud & Database', color: 'var(--accent)' },
    { name: 'MySQL / Oracle', level: 'Advanced', category: 'Cloud & Database', color: 'var(--accent)' },
    { name: 'DynamoDB / Cosmos DB', level: 'Advanced', category: 'Cloud & Database', color: '#f59e0b' },

    // DevOps, Testing & Tools
    { name: 'Docker', level: 'Advanced', category: 'DevOps & Testing', color: 'var(--primary)' },
    { name: 'Jenkins CI/CD', level: 'Expert', category: 'DevOps & Testing', color: 'var(--primary)' },
    { name: 'Azure DevOps Pipelines', level: 'Expert', category: 'DevOps & Testing', color: 'var(--secondary)' },
    { name: 'Git & GitHub', level: 'Expert', category: 'DevOps & Testing', color: 'var(--secondary)' },
    { name: 'Kafka', level: 'Advanced', category: 'DevOps & Testing', color: 'var(--accent)' },
    { name: 'JUnit / Mockito', level: 'Expert', category: 'DevOps & Testing', color: '#10b981' },
    { name: 'Postman', level: 'Expert', category: 'DevOps & Testing', color: '#f59e0b' },
    { name: 'SonarQube', level: 'Advanced', category: 'DevOps & Testing', color: '#ec4899' },
    { name: 'Jira / Swagger', level: 'Advanced', category: 'DevOps & Testing', color: '#6366f1' }
  ];

  const filteredSkills = activeTab === 'All' 
    ? skillData 
    : skillData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }} className="tabs-container">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  background: isActive ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  color: isActive ? 'var(--text-main)' : 'var(--text-secondary)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isActive ? '0 0 15px rgba(99, 102, 241, 0.15)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                  }
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--primary)' : 'inherit' }} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
          minHeight: '320px'
        }} className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="glass-card animate-fade-in"
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px',
                animationDelay: `${idx * 0.03}s`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {skill.name}
                </h4>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: skill.color,
                  boxShadow: `0 0 8px ${skill.color}`
                }} />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '3px 8px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)'
                }}>
                  {skill.category}
                </span>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: skill.color
                }}>
                  {skill.level}
                </span>
              </div>
              
              {/* Micro-indicator Bar */}
              <div style={{
                height: '3px',
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '75%' : '55%',
                  backgroundColor: skill.color,
                  borderRadius: '10px'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
