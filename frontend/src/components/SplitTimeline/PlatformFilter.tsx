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

      {(!filteredRecords || !filteredRecords.length) && (
        <div className="flex min-h-12 items-center md:min-h-32 ">
          <div className="flex items-center">
            <div className="text-xs font-medium italic text-gray-700 lg:text-sm">
              No activity this month for <b>{platform.name}</b> using the
              selected filter criteria.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
