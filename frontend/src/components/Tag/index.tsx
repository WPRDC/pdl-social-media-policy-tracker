export interface TagProps {
  label: string;
  url?: string;
  color?: string;
}

export function Tag({ label, color }: TagProps) {
  return (
    <div className="font-medium" style={{ background: color }}>
      {label}
    </div>
  );
}
