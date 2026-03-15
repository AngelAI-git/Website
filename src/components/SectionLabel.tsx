import type { ReactNode } from 'react';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function SectionLabel({ children, className = '', style }: SectionLabelProps) {
  return <span className={`label ${className}`.trim()} style={style}>{children}</span>;
}

