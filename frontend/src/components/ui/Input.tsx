import type { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  leadingIcon?: ReactNode;
};

function Input({
  label,
  error,
  leadingIcon,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className='w-full'>
      {label && (
        <label className='mb-2 block text-xs font-semibold text-(--color-text-secondary)'>
          {label}
        </label>
      )}
      <div
        className={`flex h-12 items-center gap-3 rounded-xl border bg-white px-3 transition focus-within:border-(--color-primary) ${
          error ? 'border-(--color-danger)' : 'border-(--color-border)'
        }`}
      >
        {leadingIcon && (
          <span className='shrink-0 text-[var(--color-text-muted)'>
            {leadingIcon}
          </span>
        )}

        <input
          className={`min-w-0 flex-1 bg-transparent text-sm text-(--color-text) outline-none placeholder:text-(--color-text-muted) ${className}`}
          {...props}
        />
      </div>

      {error && <p className='mt-1.5 text-xs text-(--color-danger)'>{error}</p>}
    </div>
  );
}

export default Input;