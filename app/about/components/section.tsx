export default function Section({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container py-20">
      <div className="text-center space-y-6 mb-20">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-muted-foreground">{subTitle}</p>
      </div>
      {children}
    </section>
  );
}
