import { cn } from "@/lib/utils";

type Status = "on-track" | "delayed" | "critical" | "completed" | "pending" | "in-progress";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  "on-track": { label: "On Track", className: "bg-success/10 text-success border-success/20" },
  "delayed": { label: "Delayed", className: "bg-warning/10 text-warning border-warning/20" },
  "critical": { label: "Critical", className: "bg-destructive/10 text-destructive border-destructive/20" },
  "completed": { label: "Completed", className: "bg-success/10 text-success border-success/20" },
  "pending": { label: "Pending", className: "bg-muted text-muted-foreground border-border" },
  "in-progress": { label: "In Progress", className: "bg-primary/10 text-primary border-primary/20" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      config.className,
      className
    )}>
      {config.label}
    </span>
  );
}
