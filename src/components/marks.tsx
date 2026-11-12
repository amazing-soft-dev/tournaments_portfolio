export function Hairline({ className = "" }: { className?: string }) {
  return <hr className={`m-0 border-0 border-t border-line ${className}`} />;
}

export function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block size-1.5 rounded-full bg-ink ${className}`}
      aria-hidden="true"
    />
  );
}
