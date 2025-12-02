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
    title: 'Hybrid Defense Framework for Federated Learning IoT IDS',
    subtitle: 'Adversarial ML Security Research',
    tech: ['Python', 'TensorFlow Federated', 'MITRE ATT&CK', 'IoT Security'],
    details: [
      'Conducting comprehensive security analysis of data poisoning attacks in federated learning-based IoT IDS through systematic review of 150+ research papers (2020-2025) using PRISMA methodology',
      'Analyzing attack vectors including model poisoning, gradient manipulation, and backdoor injection techniques affecting distributed IoT security architectures',
      'Designing hybrid defense framework combining anomaly detection, Byzantine-robust aggregation, and differential privacy to mitigate adaptive adversarial attacks',
      'Addressing critical research gaps in real-time poisoning detection under IoT resource constraints',
    ],
    metrics: [
      { value: '40%+', label: 'Detection Improvement' },
      { value: '150+', label: 'Papers Analyzed' },
      { value: 'Real-time', label: 'Detection' },
    ],
  },
  {
    icon: 'activity',
    title: 'Automated Firmware Vulnerability Detection System',
    subtitle: 'IoMT Security & ML Engineering Research',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'CVE/NVD APIs', 'CVSS 3.1', 'Docker'],
    details: [
      'Co-Engineered ML-based vulnerability scanner for connected medical device firmware using FirmSec dataset containing 10,000+ firmware samples',
      'Co-Developed automated feature extraction pipeline processing 50,000+ firmware components to identify CVE patterns and security anomalies',
      'Assisted in the implementation of end-to-end scanning architecture with automated CVSS scoring and structured vulnerability reporting',
    ],
    metrics: [
      { value: '92%', label: 'Accuracy' },
      { value: '89%', label: 'Precision' },
      { value: '10K+', label: 'Samples' },
    ],
  },
  {
    icon: 'lock',
    title: 'Secure Student Information Management System',
    subtitle: 'Application Security & Compliance',
    tech: ['Python', 'PostgreSQL', 'OWASP Top 10', 'FERPA Compliance', 'RBAC'],
    details: [
      'Developing secure workflow automation platform managing sensitive PII for 500+ international students',
      'Architected role-based access control (RBAC) system with multi-factor authentication',
      'Implemented encrypted data storage, secure session management, and audit logging',
    ],
    metrics: [
      { value: '500+', label: 'Students' },
      { value: '100%', label: 'FERPA Compliant' },
      { value: 'Zero', label: 'Incidents' },
    ],
  },
];

const skillCategories = [
  {
    name: 'Security Tools',
    skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'John the Ripper'],
  },
  {
    name: 'Programming',
    skills: ['Python', 'Bash', 'SQL', 'PowerShell'],
  },
  {
    name: 'ML/Data Analysis',
    skills: ['Scikit-learn', 'TensorFlow', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS (IAM, CloudWatch, GuardDuty etc)'],
  },
  {
    name: 'SIEM & Monitoring',
    skills: ['AnyRun', 'Wazuh'],
  },
  {
    name: 'Frameworks',
    skills: ['NIST CSF', 'OWASP Top 10', 'CVE/CVSS', 'MITRE ATT&CK'],
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
                CYBERSECURITY ENGINEER | AI/ML SECURITY SPECIALIST
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
                  Cybersecurity engineer specializing in AI/ML security, IoT threat detection, and adversarial machine learning defense. 
                  Expertise in vulnerability assessment, penetration testing, and automated security monitoring for medical IoT devices 
                  and federated learning architectures. Proven experience in incident response, threat intelligence, and secure application 
                  development. Research focus on data poisoning attacks, firmware security analysis, and ML-driven intrusion detection 
                  systems. Skilled in risk management, compliance frameworks (NIST, OWASP, MITRE ATT&CK), and cloud security.
                </p>
                <p className="mt-4" style={{ color: '#0ff' }}>$ echo $FOCUS_AREAS</p>
                <p>
                  <span className="px-2 py-1 mr-2 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    Adversarial ML Defense
                  </span>
                  <span className="px-2 py-1 mr-2 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    IoT Security
                  </span>
                  <span className="px-2 py-1 mr-2 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    Vulnerability Assessment
                  </span>
                  <span className="px-2 py-1 rounded" style={{ background: 'rgba(0, 255, 0, 0.2)' }}>
                    Threat Intelligence
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