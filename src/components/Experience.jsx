import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [filterType, setFilterType] = useState('All');

  const jobs = [
    {
      role: 'Software Developer',
      company: 'Infosys',
      location: 'TX, USA',
      duration: 'September 2024 – Present',
      summary: 'Developed billing and data ingestion services leveraging AWS serverless technologies and robust security frameworks.',
      categories: ['Backend', 'Cloud', 'DevOps'],
      bullets: [
        'Developed an end-to-end Billing Service encompassing invoice and statement generation, automated report creation, and cross-service integrations to retrieve billing configurations.',
        'Leveraged AWS Lambda, S3, and SQS to automate large-scale data ingestion and event-driven processing, reducing manual interventions by 90%.',
        'Implemented JWT and OAuth2-based security for API authentication and authorization, ensuring secure service-to-service communication.',
        'Automated CI/CD pipelines using Jenkins, integrated JUnit and integration tests, and established on-call runbooks.',
        'Utilized Splunk for real-time production monitoring, incident debugging, and dashboard visualizations to track performance latency and availability.'
      ],
      techs: ['Java', 'Spring Boot', 'AWS Lambda', 'S3', 'SQS', 'JWT', 'OAuth2', 'Splunk', 'Jenkins', 'JUnit']
    },
    {
      role: 'Java Software Developer',
      company: 'Capgemini',
      location: 'TX, USA',
      duration: 'February 2024 – September 2024',
      summary: 'Engineered financial rebilling services and serverless data ingestions using Azure and JDBC optimized layers.',
      categories: ['Backend', 'Cloud'],
      bullets: [
        'Built a Reverse and Rebill Service using Spring Boot and REST APIs, deployed through API Gateway for secure and scalable communication.',
        'Implemented serverless workflows using Azure Functions with Blob Storage and Service Bus, enabling automated data ingestion and event-driven processing.',
        'Developed robust database interaction layers using JDBC, optimizing query execution, transaction management, and batch processing.',
        'Automated CI/CD pipelines in Jenkins with integrated Mockito-based unit and integration testing to accelerate delivery cycles.',
        'Leveraged Azure Monitor to track application performance, detect anomalies in real time, and expedite incident resolution.'
      ],
      techs: ['Spring Boot', 'REST APIs', 'Azure Functions', 'Blob Storage', 'Service Bus', 'JDBC', 'Jenkins', 'Mockito', 'Azure Monitor']
    },
    {
      role: 'Software Engineer Intern',
      company: 'The Occunet Company',
      location: 'TX, USA',
      duration: 'June 2023 – August 2023',
      summary: 'Built automated market signal and sentiment analyzer streaming Yahoo Finance APIs and Twitter trends.',
      categories: ['Backend', 'Data Science'],
      bullets: [
        'Built a data analysis application to identify trending currencies from Twitter streams, applying NLTK-based sentiment analysis to extract market signals.',
        'Integrated Yahoo Finance APIs to surface real-time insights on market-moving currencies.',
        'Utilized Pandas for data manipulation, cleaning, and complex transformations of social media streams.'
      ],
      techs: ['Python', 'NLTK (NLP)', 'Pandas', 'Yahoo Finance API', 'RESTful APIs']
    },
    {
      role: 'Software Developer',
      company: 'Siemens',
      location: 'Bangalore, India',
      duration: 'October 2021 – August 2022',
      summary: 'Developed industrial hardware automation schedulers with DevOps pipeline integrations.',
      categories: ['Backend', 'DevOps'],
      bullets: [
        'Built an application to schedule and assign tasks to industrial hardware machines, featuring a real-time dashboard monitoring health and operational readiness.',
        'Integrated performance monitoring module displaying machine efficiency metrics and resource utilization, enabling data-driven decisions.',
        'Integrated SonarQube for static code analysis, improving overall code quality and reducing technical debt.',
        'Built Azure DevOps pipelines for automated builds, releases, and multi-environment deployments, reducing delivery cycles.'
      ],
      techs: ['Java', 'Azure DevOps', 'SonarQube', 'Azure Monitor', 'DevOps', 'HTML/JS']
    },
    {
      role: 'Senior Project Engineer',
      company: 'Wipro Limited',
      location: 'Bangalore, India',
      duration: 'December 2016 – October 2021',
      summary: 'Built cloud-native oil & gas operation services on Azure, with heavy database optimization.',
      categories: ['Backend', 'Cloud', 'Database'],
      bullets: [
        'Developed Spring Boot-based web applications for upstream Oil & Gas operations hosted on Azure Cloud.',
        'Optimized complex SQL queries, stored procedures, and triggers, achieving 30% faster execution times.',
        'Automated VM patching using shell scripts, scheduled maintenance workflows, and engineered application uptime monitoring scripts.',
        'Built a real-time monitoring dashboard using JavaScript, HTML, and Java APIs, with automated email alerts.',
        'Engineered Excel data comparison tools with color-coded outputs, eliminating manual reconciliation efforts.'
      ],
      techs: ['Java', 'Spring Boot', 'Azure Cloud', 'SQL Server', 'Stored Procedures', 'Shell Scripting', 'JavaScript']
    }
  ];

  const filteredJobs = filterType === 'All' 
    ? jobs 
    : jobs.filter(job => job.categories.includes(filterType));

  return (
    <section id="experience" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        {/* Filter Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '50px',
          flexWrap: 'wrap'
        }}>
          {['All', 'Backend', 'Cloud', 'DevOps', 'Database'].map((category) => (
            <button
              key={category}
              onClick={() => setFilterType(category)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: filterType === category ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                background: filterType === category ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: filterType === category ? 'var(--text-main)' : 'var(--text-muted)',
                transition: 'all 0.3s'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div style={{
          position: 'relative',
          maxWidth: '850px',
          margin: '0 auto',
          padding: '20px 0'
        }} className="timeline-container">
          
          {/* Vertical Center Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--primary), var(--secondary), transparent)',
            transform: 'translateX(-50%)',
            opacity: 0.6
          }} className="timeline-line" />

          {filteredJobs.map((job, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '48px',
                  width: '100%',
                  position: 'relative'
                }}
                className={`timeline-item ${isEven ? 'even' : 'odd'}`}
              >
                {/* Connector Node Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '28px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-dark)',
                  border: '3px solid var(--primary)',
                  boxShadow: '0 0 10px var(--primary)',
                  transform: 'translateX(-50%)',
                  zIndex: 5
                }} className="timeline-node" />

                {/* Left Block spacer or content */}
                <div 
                  style={{
                    width: '45%',
                    display: isEven ? 'block' : 'none'
                  }}
                  className="timeline-spacer"
                />

                {/* Main Experience Card */}
                <div 
                  className="glass-card timeline-card"
                  style={{
                    width: '45%',
                    padding: '24px',
                    position: 'relative'
                  }}
                >
                  {/* Job Metadata */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>{job.role}</h3>
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--secondary)',
                        background: 'rgba(6, 182, 212, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        border: '1px solid rgba(6, 182, 212, 0.15)'
                      }}>{job.company}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.8rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} /> {job.duration}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '14px', fontStyle: 'italic' }}>
                    {job.summary}
                  </p>

                  {/* Bullet points listing */}
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '16px'
                  }}>
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'flex-start'
                      }}>
                        <ChevronRight size={14} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-color)'
                  }}>
                    {job.techs.map((tech) => (
                      <span key={tech} style={{
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-color)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Block spacer or content */}
                <div 
                  style={{
                    width: '45%',
                    display: !isEven ? 'block' : 'none'
                  }}
                  className="timeline-spacer"
                />

              </div>
            );
          })}
        </div>
      </div>

      {/* CSS responsiveness and timeline positioning adjustments */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-node {
            left: 20px !important;
          }
          .timeline-item {
            flex-direction: column !important;
            padding-left: 40px;
          }
          .timeline-spacer {
            display: none !important;
          }
          .timeline-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
