export default function SectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='min-h-screen'>
      <div className='max-w-7xl m-auto'>{children}</div>
    </section>
  );
}
