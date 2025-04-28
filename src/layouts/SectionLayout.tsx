export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='min-h-[80vh] font-sans relative bg-primary text-primary-content isolate'>
      {children}
    </section>
  );
}
