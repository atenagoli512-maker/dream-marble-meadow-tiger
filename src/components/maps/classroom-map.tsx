import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { FURNITURE } from "@/data/lesson";
import { useAppStore, type FurnitureId } from "@/lib/store";
import { Button } from "@/components/ui/button";

const SHAPE: Record<
  FurnitureId,
  { w: number; h: number; label: string; fill: string }
> = {
  board: { w: 24, h: 6, label: "تخته", fill: "#3f3a36" },
  "teacher-desk": { w: 16, h: 10, label: "میز معلم", fill: "#9a4a2e" },
  desk: { w: 14, h: 10, label: "میز", fill: "#c4b39a" },
  door: { w: 4, h: 12, label: "در", fill: "#6e675f" },
  window: { w: 14, h: 4, label: "پنجره", fill: "#4a7a8a" },
  shelf: { w: 8, h: 16, label: "قفسه", fill: "#8a6a4a" },
  plant: { w: 8, h: 8, label: "گلدان", fill: "#3d5c48" },
  bin: { w: 7, h: 7, label: "سطل", fill: "#6e675f" },
};

export function ClassroomMap() {
  const items = useAppStore((s) => s.classroomItems);
  const add = useAppStore((s) => s.addClassroomItem);
  const move = useAppStore((s) => s.moveClassroomItem);
  const rotate = useAppStore((s) => s.rotateClassroomItem);
  const remove = useAppStore((s) => s.removeClassroomItem);
  const reset = useAppStore((s) => s.resetClassroom);
  const board = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  function onPointerDown(id: string, event: ReactPointerEvent) {
    event.preventDefault();
    setActive(id);
    const node = board.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();

    function onMove(e: PointerEvent) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      move(id, Math.min(92, Math.max(2, x)), Math.min(90, Math.max(2, y)));
    }
    function onUp() {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  const selected = items.find((i) => i.id === active);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_16rem]">
      <div>
        <div
          ref={board}
          className="relative aspect-[4/3] touch-none overflow-hidden rounded-[var(--radius-lg)] border border-line bg-sand"
        >
          <div className="absolute inset-2 rounded-[var(--radius-md)] border-2 border-dashed border-ink/15" />
          <span className="absolute top-3 right-1/2 translate-x-1/2 text-[10px] text-muted">
            دیوار تخته
          </span>
          {items.map((item) => {
            const shape = SHAPE[item.kind];
            const rotated = item.rotation === 90 || item.rotation === 270;
            return (
              <button
                key={item.id}
                type="button"
                onPointerDown={(e) => onPointerDown(item.id, e)}
                onClick={() => setActive(item.id)}
                className="absolute flex items-center justify-center rounded-sm text-[9px] text-paper"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  width: `${rotated ? shape.h : shape.w}%`,
                  height: `${rotated ? shape.w : shape.h}%`,
                  background: shape.fill,
                  outline: active === item.id ? "2px solid var(--color-ink)" : "none",
                }}
              >
                {shape.label}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs leading-6 text-muted">
          بکشید جابه‌جا شود. این نما از بالاست؛ میز یعنی مستطیل، در یعنی نوار باریک.
        </p>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium">افزودن قطعه</p>
        <div className="grid grid-cols-2 gap-2">
          {FURNITURE.map((f) => (
            <Button key={f.id} variant="outline" size="sm" onClick={() => add(f.id)}>
              {f.label}
            </Button>
          ))}
        </div>
        {selected && (
          <div className="rounded-[var(--radius-lg)] border border-line bg-paper-deep p-3 text-sm">
            <p className="mb-2 font-medium">{SHAPE[selected.kind].label}</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => rotate(selected.id)}>
                چرخش
              </Button>
              <Button size="sm" variant="ghost" onClick={() => remove(selected.id)}>
                حذف
              </Button>
            </div>
          </div>
        )}
        <Button variant="ghost" size="sm" onClick={reset}>
          برگشت به چیدمان نمونه
        </Button>
      </div>
    </div>
  );
}
