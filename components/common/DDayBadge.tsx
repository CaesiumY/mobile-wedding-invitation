import { calculateDDay } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import data from "@/data.json";

interface DDayBadgeProps {
  className?: string;
}

const DDayBadge = ({ className }: DDayBadgeProps) => {
  const dDayDate = data.greeting["d-day"];
  const dDay = calculateDDay(dDayDate);

  return (
    <Badge
      variant="outline"
      className={cn(
        "border-transparent bg-[#F9EAE1] px-4 py-1.5 text-lg font-semibold text-[#2F2120] shadow-sm",
        className,
      )}
    >
      {dDay === "0" ? "D-DAY!" : `D${dDay}`}
    </Badge>
  );
};

export default DDayBadge;
