export default function HomeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex justify-evenly">{children}</div>
  );
}
