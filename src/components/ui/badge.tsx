import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "muted" | "pine" | "ink";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tone === "muted" && "bg-paper-deep text-muted",
        tone === "pine" && "bg-pine text-pine-fg",
        tone === "ink" && "bg-ink text-paper",
        className,
      )}
      {...props}
    />
  );
}
