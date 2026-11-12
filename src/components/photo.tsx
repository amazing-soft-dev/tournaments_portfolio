export function Photo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const stem = src.replace(/-960\.webp$/, "");

  return (
    <img
      src={src}
      srcSet={`${stem}-640.webp 640w, ${src} 960w, ${stem}-1400.webp 1400w`}
      sizes="(min-width: 1200px) 640px, 100vw"
      alt={alt}
      className={className}
    />
  );
}
