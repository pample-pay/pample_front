export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto flex ${className}`}>{children}</div>
  );
}
