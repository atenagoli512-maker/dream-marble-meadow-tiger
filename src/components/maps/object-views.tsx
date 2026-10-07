import { useState } from "react";
import { OBJECT_VIEWS } from "@/data/lesson";
import { cn } from "@/lib/utils";

function Glyph({ id, view }: { id: string; view: "front" | "top" }) {
  const stroke = "var(--color-ink)";
  const fill = "var(--color-sand)";
  if (id === "desk" && view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="8" y="22" width="64" height="10" fill={fill} stroke={stroke} />
        <rect x="12" y="32" width="6" height="28" fill={fill} stroke={stroke} />
        <rect x="62" y="32" width="6" height="28" fill={fill} stroke={stroke} />
      </svg>
    );
  }
  if (id === "desk" && view === "top") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="12" y="18" width="56" height="34" rx="2" fill={fill} stroke={stroke} />
      </svg>
    );
  }
  if (id === "chair" && view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="24" y="8" width="32" height="8" fill={fill} stroke={stroke} />
        <rect x="24" y="16" width="6" height="20" fill={fill} stroke={stroke} />
        <rect x="22" y="36" width="36" height="8" fill={fill} stroke={stroke} />
        <rect x="24" y="44" width="6" height="18" fill={fill} stroke={stroke} />
        <rect x="50" y="44" width="6" height="18" fill={fill} stroke={stroke} />
      </svg>
    );
  }
  if (id === "chair" && view === "top") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="22" y="22" width="36" height="28" fill={fill} stroke={stroke} />
        <rect x="22" y="16" width="36" height="6" fill={fill} stroke={stroke} />
      </svg>
    );
  }
  if (id === "door" && view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="24" y="6" width="32" height="58" fill={fill} stroke={stroke} />
        <circle cx="48" cy="36" r="3" fill={stroke} />
      </svg>
    );
  }
  if (id === "door" && view === "top") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="10" y="32" width="60" height="6" fill={fill} stroke={stroke} />
      </svg>
    );
  }
  if (id === "board" && view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="8" y="16" width="64" height="36" fill="#3f3a36" />
        <rect x="12" y="20" width="56" height="28" fill="#245e57" />
      </svg>
    );
  }
  if (id === "board" && view === "top") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="8" y="30" width="64" height="8" fill="#3f3a36" />
      </svg>
    );
  }
  if (id === "tree" && view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="36" y="40" width="8" height="22" fill="#6b4f38" />
        <circle cx="40" cy="30" r="18" fill="var(--color-forest)" />
      </svg>
    );
  }
  if (id === "tree" && view === "top") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <circle cx="40" cy="36" r="20" fill="var(--color-forest)" />
      </svg>
    );
  }
  if (id === "house" && view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <polygon points="12,32 40,10 68,32" fill="#9a4a2e" />
        <rect x="18" y="32" width="44" height="28" fill={fill} stroke={stroke} />
        <rect x="36" y="40" width="10" height="20" fill="#6e675f" />
      </svg>
    );
  }
  if (id === "house" && view === "top") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <rect x="16" y="20" width="48" height="32" fill="#9a4a2e" />
      </svg>
    );
  }
  if (id === "lake" && view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <path d="M8 44h64" stroke="var(--color-water)" strokeWidth="6" />
        <path d="M8 36c10 8 20-8 32 0s20-8 32 0" fill="none" stroke="var(--color-water)" strokeWidth="3" />
      </svg>
    );
  }
  if (id === "lake" && view === "top") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <ellipse cx="40" cy="36" rx="28" ry="16" fill="var(--color-water)" />
      </svg>
    );
  }
  if (view === "front") {
    return (
      <svg viewBox="0 0 80 70" className="h-20 w-24">
        <circle cx="40" cy="16" r="8" fill={fill} stroke={stroke} />
        <rect x="32" y="26" width="16" height="22" fill={fill} stroke={stroke} />
        <rect x="28" y="48" width="6" height="16" fill={fill} stroke={stroke} />
        <rect x="46" y="48" width="6" height="16" fill={fill} stroke={stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 70" className="h-20 w-24">
      <circle cx="40" cy="36" r="10" fill={fill} stroke={stroke} />
    </svg>
  );
}

export function ObjectViews() {
  const [id, setId] = useState(OBJECT_VIEWS[0].id);
  const item = OBJECT_VIEWS.find((x) => x.id === id) ?? OBJECT_VIEWS[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {OBJECT_VIEWS.map((obj) => (
          <button
            key={obj.id}
            type="button"
            onClick={() => setId(obj.id)}
            className={cn(
              "h-10 rounded-full px-3 text-sm",
              obj.id === id ? "bg-ink text-paper" : "bg-paper-deep text-ink-soft",
            )}
          >
            {obj.name}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--radius-lg)] border border-line bg-cream p-4">
          <p className="mb-3 text-xs text-muted">از روبرو</p>
          <Glyph id={item.id} view="front" />
          <p className="mt-3 text-sm leading-7 text-ink-soft">{item.front}</p>
        </div>
        <div className="rounded-[var(--radius-lg)] border border-line bg-cream p-4">
          <p className="mb-3 text-xs text-muted">از بالا</p>
          <Glyph id={item.id} view="top" />
          <p className="mt-3 text-sm leading-7 text-ink-soft">{item.top}</p>
        </div>
      </div>
    </div>
  );
}
