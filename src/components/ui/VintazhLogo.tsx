import React from 'react';

interface VintazhLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const VintazhLogo: React.FC<VintazhLogoProps> = ({
  className = '',
  size = 'medium'
}) => {
  // Define text sizes based on the size prop
  const textSizes = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-[3rem]',
  };

  return (
    <div className={`flex items-center justify-center h-[40px] ${className}`}>
      <div
        className={`vintazhnaia-logo ${textSizes[size]} text-black tracking-wide whitespace-nowrap`}
        style={{
          fontFamily: 'Georgia, Times New Roman, serif',
          fontWeight: 300,
          letterSpacing: '0.05em',
          lineHeight: 1
        }}
      >
        vintazhnaia
      </div>
    </div>
  );
};

export default VintazhLogo;
