'use client';

import React from 'react';
import { Shield, Code, Brain, Cloud, Monitor, FileCheck } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Security Tools': Shield,
  'Programming': Code,
  'ML/Data Analysis': Brain,
  'Cloud & DevOps': Cloud,
  'SIEM & Monitoring': Monitor,
  'Frameworks': FileCheck,
};

type SkillCategory = {
  name: string;
  skills: string[];
};

export default function SkillGrid({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => {
        const Icon = iconMap[category.name] || Shield;
        
        return (
          <div
            key={index}
            className="group p-5 rounded-lg transition-all duration-300"
            style={{
              background: 'rgba(0, 0, 0, 0.85)',
              border: '1px solid #0f0',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0ff';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#0f0';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.15)';
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-5 h-5" style={{ color: '#0ff' }} />
              <h3 
                className="font-mono text-sm font-bold tracking-wider"
                style={{ color: '#0ff' }}
              >
                {category.name}
              </h3>
            </div>
            
            {/* Skills List */}
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center gap-2 text-sm font-mono transition-all duration-200 hover:translate-x-2"
                  style={{ color: '#0f0' }}
                >
                  <span style={{ color: '#0ff' }}>▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
