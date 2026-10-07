import type { ReactNode } from "react";
import { useAppStore } from "@/lib/store";

export function TeacherNote({
  title = "در گوش معلم",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  const teacherMode = useAppStore((s) => s.teacherMode);
  if (!teacherMode) return null;
  return (
    <aside className="rounded-[var(--radius-lg)] border border-pine/20 bg-pine/10 p-4 text-sm leading-7 text-ink-soft">
      <p className="mb-1 text-xs font-medium text-pine-deep">{title}</p>
      <div className="space-y-2">{children}</div>
    </aside>
  );
}
