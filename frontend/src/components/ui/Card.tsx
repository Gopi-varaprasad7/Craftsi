import type { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-(--color-border) bg-(--color-surface) ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
