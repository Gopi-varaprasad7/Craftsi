type DividerProps = {
  className?: string;
};

function Divider({ className = '' }: DividerProps) {
  return <div className={`h-px w-full bg-(--color-border) ${className}`} />;
}

export default Divider;
