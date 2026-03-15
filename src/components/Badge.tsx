import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  tone?: 'violet' | 'pink' | 'mid';
  showDot?: boolean;
  className?: string;
};

export default function Badge({
  children,
  tone = 'violet',
  showDot = true,
  className = '',
}: BadgeProps) {
  const toneClass = tone === 'pink' ? 'badge--pink' : tone === 'mid' ? 'badge--mid' : '';
  return (
    <span className={`badge ${toneClass} ${className}`.trim()}>
      {showDot ? <span className="badge__dot" /> : null}
      {children}
    </span>
  );
}
