interface Props { title: string; lead?: string; id?: string }

export default function SectionHeading({ title, lead, id }: Props) {
  return (
    <div>
      <h2 id={id} className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-[62ch] text-slate-600">{lead}</p>}
    </div>
  );
}
