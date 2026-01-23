interface StateCardProps {
  title: string;
  count: number;
  status: string | null;
  description: string | null;
}

export default function StateCard({
  title,
  count,
  status,
  description,
}: StateCardProps) {
  return (
    <div className="bg-card p-5 border border-border rounded-2xl flex-1 flex flex-col font-bold gap-2">
      <h3 className="text-text-color ">{title}</h3>
      <div className="flex gap-4 items-center">
        <p className="text-[30px] text-text-color">{count}</p>
        {status && <p className="text-[12px] text-text-secondary">{status}</p>}
      </div>
      {description && (
        <p className="text-[12px] text-text-secondary">{description}</p>
      )}
    </div>
  );
}
