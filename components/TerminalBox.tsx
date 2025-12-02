'use client';

import React from 'react';

export default function TerminalBox({ 
  title, 
  children, 
  variant = 'green' 
}: { 
  title: string; 
  children: React.ReactNode; 
  variant?: 'green' | 'cyan' 
}) {
  const borderColor = variant === 'cyan' ? '#0ff' : '#0f0';
  const glowColor = variant === 'cyan' ? 'rgba(0, 255, 255, 0.3)' : 'rgba(0, 255, 0, 0.3)';
  
  return (
    <div 
      className="relative p-6 rounded-lg transition-all duration-300 hover:scale-[1.01]"
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        border: `1px solid ${borderColor}`,
        boxShadow: `0 0 20px ${glowColor}, inset 0 0 20px rgba(0, 0, 0, 0.5)`,
      }}
    >
      {/* Terminal Header */}
      <div 
        className="flex items-center gap-2 mb-4 pb-3"
        style={{ borderBottom: `1px solid ${borderColor}40` }}
      >
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-80"></span>
        </div>
        <span 
          className="ml-4 font-mono text-sm tracking-wider"
          style={{ color: borderColor }}
        >
          {title}
        </span>
        <span 
          className="ml-auto font-mono text-xs animate-pulse"
          style={{ color: borderColor }}
        >
          ●
        </span>
      </div>
      
      {/* Content */}
      <div className="font-mono text-sm leading-relaxed" style={{ color: '#0f0' }}>
        {children}
      </div>
    </div>
  );
}
