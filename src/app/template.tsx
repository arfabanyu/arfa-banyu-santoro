export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="scrollbar-hidden">{children}</div>;
}
