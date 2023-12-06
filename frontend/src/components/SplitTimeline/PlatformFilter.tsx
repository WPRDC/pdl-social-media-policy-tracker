import { Platform, TrackerRecord } from "@/types/model";
import { ContentCard } from "@/components/ContentCard";

export interface PlatformFilterProps {
  platform: Platform;
  records?: TrackerRecord[];
  split?: boolean;
}

export function PlatformFilter({
  platform,
  records,
  split = false,
}: PlatformFilterProps) {
  const filteredRecords = records?.filter(
    (r) => r.platform.slug === platform.slug,
  );

  return (
    <div className="flex h-full w-full flex-col justify-center">
      {!!filteredRecords &&
        filteredRecords.map((record, i) => (
          <ContentCard key={`${i}`} record={record} split={split} />
        ))}
    </div>
  );
}
