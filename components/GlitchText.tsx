'use client';

import React from 'react';

export default function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="glitch-wrapper">
        <span className="glitch-text" data-text={text}>
          {text}
        </span>
      </div>
    </div>
  );
}
