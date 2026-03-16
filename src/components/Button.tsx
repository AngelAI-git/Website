import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
};

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  style,
}: ButtonProps) {
  const sizeClass = size === 'lg' ? 'btn--lg' : size === 'sm' ? 'btn--sm' : '';
  return (
    <a href={href} className={`btn btn--${variant} ${sizeClass} ${className}`.trim()} style={style}>
      {children}
    </a>
  );
}
