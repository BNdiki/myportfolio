'use client';

import React from 'react';
import { Award, Calendar } from 'lucide-react';

type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div
      className="p-5 rounded-lg transition-all duration-300 group"
      style={{
        background: 'rgba(0, 0, 0, 0.85)',
        border: '1px solid #0ff',
        boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.4)';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.2)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="flex items-start gap-4">
        <div 
          className="p-2 rounded-lg flex-shrink-0"
          style={{ 
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #0ff'
          }}
        >
          <Award className="w-6 h-6" style={{ color: '#0ff' }} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 
            className="font-mono text-sm font-bold mb-1 truncate"
            style={{ color: '#0ff' }}
          >
            {cert.name}
          </h4>
          <p 
            className="font-mono text-xs mb-2"
            style={{ color: '#0f0' }}
          >
            {cert.issuer}
          </p>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" style={{ color: '#0f0', opacity: 0.7 }} />
            <span 
              className="font-mono text-xs"
              style={{ color: '#0f0', opacity: 0.7 }}
            >
              {cert.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
