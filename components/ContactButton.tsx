'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

type ContactButtonProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
};

export default function ContactButton({ icon: Icon, label, href, onClick }: ContactButtonProps) {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-xs transition-all duration-300"
      style={{
        background: 'rgba(0, 0, 0, 0.9)',
        border: '1px solid #0f0',
        color: '#0f0',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#0f0';
        e.currentTarget.style.color = '#000';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
        e.currentTarget.style.color = '#0f0';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Icon size={14} />
      <span>{label}</span>
    </Component>
  );
}
