import { Dot } from "@/components/marks";

export function SectionRail({
  index,
  total,
  label,
}: {
  index: string;
  total: string;
  label: string;
}) {
  return (
    <div className="grid grid-cols-3 items-center border-y border-line px-5 py-4 md:px-8">
      <span className="micro text-center text-ink">
        {index}-{total}
      </span>
      <span className="flex justify-center">
        <Dot />
      </span>
      <span className="micro text-center text-ink">{label}</span>
    </div>
  );
}
