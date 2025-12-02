'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Activity, Lock } from 'lucide-react';

const icons = {
  shield: Shield,
  activity: Activity,
  lock: Lock,
};

type Project = {
  icon: keyof typeof icons;
  title: string;
  subtitle: string;
  tech: string[];
  details: string[];
  metrics: { value: string; label: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = icons[project.icon] || Shield;

  return (
    <div
      className="group relative p-6 rounded-lg cursor-pointer transition-all duration-500"
      style={{
        background: 'rgba(0, 0, 0, 0.85)',
        border: '1px solid #0f0',
        boxShadow: '0 0 15px rgba(0, 255, 0, 0.2)',
      }}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(10px)';
        e.currentTarget.style.borderColor = '#0ff';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.borderColor = '#0f0';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.2)';
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div 
            className="p-3 rounded-lg"
            style={{ 
              background: 'rgba(0, 255, 0, 0.1)',
              border: '1px solid #0f0'
            }}
          >
            <Icon className="w-6 h-6" style={{ color: '#0f0' }} />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#0ff' }}>
              {project.title}
            </h3>
            <p className="text-xs font-mono" style={{ color: '#f0f' }}>
              {project.subtitle}
            </p>
          </div>
        </div>
        <button className="p-2 rounded transition-colors">
          {expanded ? (
            <ChevronUp className="w-5 h-5" style={{ color: '#0ff' }} />
          ) : (
            <ChevronDown className="w-5 h-5" style={{ color: '#0ff' }} />
          )}
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {project.metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="text-center p-3 rounded"
            style={{ background: 'rgba(0, 255, 0, 0.05)', border: '1px solid #0f020' }}
          >
            <div className="text-2xl font-bold mb-1" style={{ color: '#0ff' }}>
              {metric.value}
            </div>
            <div className="text-xs font-mono" style={{ color: '#0f0' }}>
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Expandable Details */}
      {expanded && (
        <div className="mt-6 space-y-4 animate-in">
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: '#0ff' }}>
              Key Achievements:
            </h4>
            <ul className="space-y-2">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span style={{ color: '#0ff' }}>▹</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: '#0ff' }}>
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded"
                  style={{
                    background: 'rgba(0, 255, 0, 0.1)',
                    border: '1px solid #0f0',
                    color: '#0f0',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
