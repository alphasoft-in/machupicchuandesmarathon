import React from 'react';

interface Props {
  icon: string;
  size?: number;
  className?: string;
}

export default function SocialIcon({ icon, size = 18, className = "" }: Props) {
  return (
    <div 
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'currentColor',
        maskImage: `url('/icons/social/${icon}.svg')`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskImage: `url('/icons/social/${icon}.svg')`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
        contain: 'paint layout'
      }}
    />
  );
}
