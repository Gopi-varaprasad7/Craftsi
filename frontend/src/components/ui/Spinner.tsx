type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-7 w-7',
};

function Spinner({ size = 'md' }: SpinnerProps) {
  return (
    <span
      className={`inline-block animate-spin rounded-full border-2 border-neutral-200 border-t-(--color-primary) ${sizeClasses[size]}`}
      aria-label='Loading'
    />
  );
}

export default Spinner;
