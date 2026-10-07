import { TownMap } from "@/components/maps/town-map";
import { Button } from "@/components/ui/button";
import { TOWN_PLACES } from "@/data/town";
import { useAppStore } from "@/lib/store";
import type { PlaceId } from "@/data/town";

const GOAL = ["home", "bakery", "school"] as const;

export function RouteLab() {
  const stops = useAppStore((s) => s.routeStops);
  const toggle = useAppStore((s) => s.toggleRouteStop);
  const reset = useAppStore((s) => s.resetRoute);
  const ok =
    stops[0] === "home" &&
    stops.includes("bakery") &&
    stops[stops.length - 1] === "school";
  const labels = stops.map(
    (id) => TOWN_PLACES.find((p) => p.id === id)?.label ?? id,
  );

  return (
    <div className="space-y-4">
      <p className="text-sm leading-7 text-ink-soft">
        موبایل مادر شارژ ندارد. از خانهٔ سارا باید نان بخرید و به مدرسه برسید.
        روی نقشه به ترتیب جاها را بزنید.
      </p>
      <TownMap
        route={stops}
        selected={stops.at(-1) ?? null}
        onSelect={(id: PlaceId) => toggle(id)}
        highlights={[...GOAL]}
      />
      <p className="text-sm text-ink-soft">
        مسیر شما: {labels.length ? labels.join(" ← ") : "هنوز نقطه‌ای انتخاب نشده"}
      </p>
      {ok && (
        <p className="rounded-[var(--radius-md)] bg-pine/10 px-3 py-2 text-sm leading-7">
          این مسیر شرط نانوایی را دارد. اگر مسیر دیگری هم از نانوایی بگذرد، آن هم
          می‌تواند درست باشد.
        </p>
      )}
      <Button variant="ghost" size="sm" onClick={reset}>
        پاک کردن مسیر
      </Button>
    </div>
  );
}
