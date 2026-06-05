'use client';

import React from 'react';
import { Mail, Linkedin, Github, MapPin, Terminal, Briefcase, GraduationCap } from 'lucide-react';
import MatrixRain from '@/components/MatrixRain';
import GlitchText from '@/components/GlitchText';
import TerminalBox from '@/components/TerminalBox';
import ProjectCard from '@/components/ProjectCard';
import SkillGrid from '@/components/SkillGrid';
import CertificationCard from '@/components/CertificationCard';
import ContactButton from '@/components/ContactButton';

type ProjectIcon = 'shield' | 'activity' | 'lock';

type Project = {
  icon: ProjectIcon;
  title: string;
  subtitle: string;
  tech: string[];
  details: string[];
  metrics: { value: string; label: string }[];
};

const projects: Project[] = [
  {
    icon: 'shield',
    title: 'HADF: Hybrid Adaptive Defense Framework for Federated Learning IoT IDS',
    subtitle: "Master's Thesis — Defended Spring 2026 | Morgan State University",
    tech: ['Python', 'TensorFlow', 'Federated Learning', 'MITRE ATT&CK for ICS', 'N-BaIoT Dataset', 'IoT Security'],
    details: [
      'Architected HADF: a multi-layered defense system for federated learning-based IDS targeting four adversarial attack classes — label flipping, backdoor injection, Byzantine, and Sybil attacks — within simulated IoT network environments.',
      'Engineered a multi-layered ML security architecture combining anomaly-based client scoring, Byzantine-robust gradient aggregation, and calibrated differential privacy, directly addressing critical research gaps in real-time poisoning detection under IoT resource constraints.',
      'Designed, implemented, and defended the framework validating its effectiveness against all four adversarial attack classes across simulated IoT network environments.',
    ],
    metrics: [],
  },
];

const skillCategories = [
  {
    name: 'AI/ML Security',
    skills: ['Adversarial ML', 'Data Poisoning Defense', 'Federated Learning Security', 'Anomaly Detection', 'Byzantine-Fault Tolerance', 'Differential Privacy'],
  },
  {
    name: 'Security Tools',
    skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Wazuh SIEM', 'AnyRun', 'Kali Linux'],
  },
  {
    name: 'ML & Data Stack',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS VPC', 'Least-Privilege Hardening'],
  },
  {
    name: 'Security Domains',
    skills: ['Threat Modeling', 'Vulnerability Assessment', 'Penetration Testing', 'Incident Response', 'Risk Assessment', 'SIEM Monitoring', 'Secure SDLC'],
  },
  {
    name: 'Frameworks',
    skills: ['NIST CSF', 'OWASP Top 10', 'CVE/CVSS', 'MITRE ATT&CK for ICS'],
  },
];

const certifications = [
  {
    name: 'ISC2 Certified in Cybersecurity (CC)',
    issuer: 'ISC²',
    date: 'November 2022',
  },
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: 'September 2023',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    date: 'August 2015',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ background: '#000' }}>
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <style>{`
                @keyframes pulse-dot {
                  0%, 100% { opacity: 1; box-shadow: 0 0 10px #0f0; }
                  50% { opacity: 0.5; box-shadow: 0 0 20px #0f0; }
                }
              `}</style>
              <span 
                className="w-2 h-2 rounded-full"
                style={{ 
                  background: '#0f0',
                  animation: 'pulse-dot 1.5s ease-in-out infinite'
                }}
              />
              <span className="font-mono text-xs tracking-widest" style={{ color: '#0f0' }}>
                SYSTEM ONLINE
              </span>
            </div>
            
            {/* Name */}
            <GlitchText 
              text="BRIAN N. NJENGA" 
              className="text-4xl md:text-6xl lg:text-7xl mb-6"
            />
            
            {/* Title */}
            <div className="mb-8">
              <p
                className="font-mono text-sm md:text-base tracking-wider mb-2"
                style={{ color: '#0ff' }}
              >
                CYBERSECURITY RESEARCHER | AI/ML SECURITY SPECIALIST | M.S. ADVANCED COMPUTING
              </p>
              <style>{`
                @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
                }
              `}</style>
              <span 
                className="font-mono text-xs"
                style={{ color: '#0f0' }}
              >
                &gt; Securing the future through intelligent defense
                <span style={{ animation: 'blink 1s infinite' }}>_</span>
              </span>
            </div>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <ContactButton 
                icon={Mail} 
                label="bnjeynga2@gmail.com"
                href="mailto:bnjeynga2@gmail.com"
              />
              <ContactButton 
                icon={Linkedin} 
                label="LinkedIn"
                href="https://linkedin.com/in/briannjenga"
              />
              <ContactButton 
                icon={Github} 
                label="GitHub"
                href="https://github.com/BNdiki"
              />
              <ContactButton 
                icon={MapPin} 
                label="Available Worldwide"
              />
            </div>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <span className="font-mono text-xs" style={{ color: '#0f0' }}>
                [ SCROLL TO ACCESS ]
              </span>
            </div>
          </div>
        </header>

        {/* Main Sections */}
        <main className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
          
          {/* System Overview */}
          <section>
            <SectionTitle icon={Terminal} title="SYSTEM_OVERVIEW" />
            <TerminalBox title="~/brian/profile.sh">
              <div className="space-y-3">
                <p style={{ color: '#0ff' }}>$ cat professional_summary.txt</p>
                <p className="leading-relaxed">
                  Cybersecurity and AI/ML Security researcher (M.S. Advanced Computing, Morgan State University, 2026) specializing in
                  adversarial machine learning defense, federated learning security, and IoT intrusion detection systems.
                  Seeking cybersecurity and AI/ML security roles where hands-on research in threat detection, ML-based vulnerability analysis,
                  and federated learning defense translates directly into protecting enterprise infrastructure.
                </p>
                <p className="mt-4" style={{ color: '#0ff' }}>$ echo $FOCUS_AREAS</p>
                <p>
                  <span className="px-2 py-1 mr-2 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    Adversarial ML Defense
                  </span>
                  <span className="px-2 py-1 mr-2 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    Federated Learning Security
                  </span>
                  <span className="px-2 py-1 mr-2 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    IoT IDS
                  </span>
                  <span className="px-2 py-1 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    Vulnerability Assessment
                  </span>
                </p>
              </div>
            </TerminalBox>
          </section>

          {/* Security Research & Projects */}
          <section>
            <SectionTitle icon={Terminal} title="SECURITY_RESEARCH" />
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <SectionTitle icon={Briefcase} title="EXPERIENCE" />
            <div className="space-y-6">
              {[
                {
                  role: 'Graduate Assistant & Teaching Assistant',
                  org: 'Morgan State University — CS Dept. & Office of International Affairs',
                  location: 'Baltimore, MD',
                  period: 'Oct 2024 – May 2026',
                  bullets: [
                    'Designed, implemented, and defended HADF — a hybrid adaptive defense framework for federated learning-based IoT IDS — validating its effectiveness against four adversarial attack classes across simulated IoT network environments using Python and TensorFlow.',
                    'Engineered a multi-layered ML security architecture combining anomaly-based client scoring, Byzantine-robust gradient aggregation, and calibrated differential privacy, addressing critical research gaps in real-time poisoning detection under IoT resource constraints.',
                  ],
                },
                {
                  role: 'Network Systems, Cloud & Cybersecurity Trainee',
                  org: 'Ripplewave Ltd',
                  location: 'Mombasa, Kenya',
                  period: 'Oct 2023 – Jul 2024',
                  bullets: [
                    'Deployed and hardened AWS cloud infrastructure (EC2, S3, IAM, VPC) for enterprise clients, implementing least-privilege IAM policies and security group rules that eliminated over-privileged access across 3 client environments.',
                    'Executed vulnerability assessments and network security audits across hybrid cloud deployments, documenting findings with CVE/CVSS severity scoring and delivering actionable remediation roadmaps.',
                    'Delivered structured security awareness training to 50+ end users, covering phishing identification, password hygiene, and secure data handling to reduce human-layer attack surface.',
                  ],
                },
                {
                  role: 'Service Point Advisor',
                  org: 'DHL Kenya Ltd',
                  location: 'Mombasa, Kenya',
                  period: 'Oct 2018 – Aug 2023',
                  bullets: [
                    'Processed 100+ inbound and outbound shipments daily maintaining on-time performance targets and full compliance with transit and customs safety standards.',
                    'Mentored youth career readiness skills through DHL\'s GoTeach partnership with SOS Children\'s Villages International, coaching 20+ young people on professional development.',
                  ],
                },
                {
                  role: 'Computer Systems & Software Technician Intern',
                  org: 'Kenya Ports Authority',
                  location: 'Mombasa, Kenya',
                  period: 'Jun 2016 – Aug 2016',
                  bullets: [
                    'Deployed and configured enterprise software (MS Office, SAP, KWATOS, Microsoft Forefront Endpoint Protection) across 50+ endpoints, supporting authority-wide IT infrastructure rollout.',
                    'Installed UTP and fiber optic structured cabling and diagnosed RJ45/VHF network connectivity failures, minimizing operational downtime across port authority IT systems.',
                  ],
                },
              ].map((exp, i) => (
                <TerminalBox key={i} title={`~/experience/${exp.role.toLowerCase().replace(/\s+/g, '_')}.log`}>
                  <div className="space-y-2">
                    <div className="flex flex-wrap justify-between gap-2">
                      <span style={{ color: '#0ff' }} className="font-mono font-bold">{exp.role}</span>
                      <span style={{ color: 'rgba(0,255,0,0.6)' }} className="font-mono text-xs">{exp.period}</span>
                    </div>
                    <p style={{ color: 'rgba(0,255,0,0.7)' }} className="font-mono text-xs">{exp.org} | {exp.location}</p>
                    <ul className="mt-3 space-y-2 list-none">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span style={{ color: '#0f0' }}>›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TerminalBox>
              ))}
            </div>
          </section>

          {/* Technical Arsenal */}
          <section>
            <SectionTitle icon={Terminal} title="TECHNICAL_ARSENAL" />
            <SkillGrid categories={skillCategories} />
          </section>

          {/* Certifications */}
          <section>
            <SectionTitle icon={Terminal} title="CERTIFICATIONS" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </section>
          {/* Education */}
          <section>
            <SectionTitle icon={GraduationCap} title="EDUCATION" />
            <TerminalBox title="~/education/morgan_state.log">
              <div className="space-y-3">
                <div className="flex flex-wrap justify-between gap-2">
                  <span style={{ color: '#0ff' }} className="font-mono font-bold">M.S., Advanced Computing — Cybersecurity &amp; AI/ML Security</span>
                  <span style={{ color: 'rgba(0,255,0,0.6)' }} className="font-mono text-xs">Fall 2024 – Spring 2026</span>
                </div>
                <p style={{ color: 'rgba(0,255,0,0.7)' }} className="font-mono text-xs">Morgan State University | Baltimore, MD</p>
                <div className="mt-2 space-y-1">
                  <p><span style={{ color: '#0ff' }}>Thesis:</span> A Hybrid Adaptive Defense Framework Against Poisoning and Identity-Based Attacks in Federated Learning-Based IoT Intrusion Detection Systems</p>
                  <p><span style={{ color: '#0ff' }}>Award:</span> 2026 Academic Trailblazer Award (SOS Awards)</p>
                  <p><span style={{ color: '#0ff' }}>Roles:</span> Graduate Research Assistant · Teaching Assistant</p>
                </div>
              </div>
            </TerminalBox>
          </section>

        </main>

        {/* Footer */}
        <footer className="py-12 text-center border-t" style={{ borderColor: '#0f0' }}>
          <div 
            className="inline-block font-mono text-sm tracking-widest"
            style={{ color: '#0f0' }}
          >
            <span className="px-4 py-2 rounded" style={{ background: 'rgba(0, 255, 0, 0.1)', border: '1px solid #0f0' }}>
              ▓▓▓ SYSTEM ACCESS GRANTED ▓▓▓
            </span>
          </div>
          <p 
            className="mt-6 font-mono text-xs"
            style={{ color: 'rgba(0, 255, 0, 0.5)' }}
          >
            © {new Date().getFullYear()} Brian N. Njenga | All systems operational
          </p>
        </footer>
      </div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <Icon size={20} style={{ color: '#0ff' }} />
      <h2 
        className="font-mono text-xl tracking-wider font-bold"
        style={{ color: '#0ff' }}
      >
        {title}
      </h2>
      <div 
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(to right, #0ff, transparent)' }}
      />
    </div>
  );
}