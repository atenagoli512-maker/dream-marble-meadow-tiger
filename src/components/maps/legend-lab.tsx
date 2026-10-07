import { LEGEND_SLOTS, LYING_LEGEND, TOWN_PLACES } from "@/data/town";
import { TownMap } from "@/components/maps/town-map";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function LegendLab({ lying = false }: { lying?: boolean }) {
  const selected = useAppStore((s) => s.selectedPlace);
  const setSelected = useAppStore((s) => s.setSelectedPlace);
  const assignments = useAppStore((s) => s.legendAssignments);
  const setAssignment = useAppStore((s) => s.setLegendAssignment);
  const reset = useAppStore((s) => s.resetLegend);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      <TownMap
        selected={selected}
        onSelect={(id) => setSelected(id)}
        lying={lying}
      />
      <div className="space-y-3">
        {lying ? (
          <div className="space-y-2">
            <p className="text-sm font-medium">راهنمای این نقشه</p>
            {LYING_LEGEND.map((row) => (
              <div
                key={row.id}
                className="flex items-center justify-between rounded-[var(--radius-md)] border border-line bg-cream px-3 py-2 text-sm"
              >
                <span>{row.fake}</span>
                <span className="text-xs text-muted">علامت روی نقشه</span>
              </div>
            ))}
            <p className="text-sm leading-7 text-clay">
              این راهنما دروغ می‌گوید. اگر دوستت را به قایق‌رانی بفرستی، کجا می‌رود؟
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm leading-7 text-ink-soft">
              جایی را روی نقشه بزن، بعد اسم درستش را در راهنما انتخاب کن.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {LEGEND_SLOTS.map((slot) => {
                const chosen = assignments[slot.id];
                const ok = chosen === slot.answer;
                const chosenLabel = TOWN_PLACES.find((p) => p.id === chosen)?.label;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => selected && setAssignment(slot.id, selected)}
                    className={cn(
                      "rounded-[var(--radius-md)] border px-3 py-2 text-right text-xs leading-6",
                      ok
                        ? "border-pine bg-pine/10"
                        : chosen
                          ? "border-clay/40 bg-clay/10"
                          : "border-line bg-cream",
                    )}
                  >
                    <span className="block font-medium">{slot.label}</span>
                    <span className="text-muted">
                      {chosenLabel ? `انتخاب: ${chosenLabel}` : "خالی"}
                    </span>
                  </button>
                );
              })}
            </div>
            <Button variant="ghost" size="sm" onClick={reset}>
              پاک کردن راهنما
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
