import { useMemo, useState } from "react";
import { TownMap } from "@/components/maps/town-map";
import { Button } from "@/components/ui/button";
import type { PlaceId } from "@/data/town";

const CLUES = [
  "خانه کنار دریاچه است.",
  "بین زمین فوتبال و رستوران است.",
  "روبه‌روی پمپ بنزین است.",
];

export function LetterLab() {
  const [step, setStep] = useState(0);
  const [guess, setGuess] = useState<PlaceId | null>(null);
  const revealed = CLUES.slice(0, step + 1);
  const highlights = useMemo(() => {
    if (step === 0) return ["lake", "target-house", "soccer", "boat"];
    if (step === 1) return ["soccer", "restaurant", "target-house"];
    return ["target-house", "gas"];
  }, [step]);

  return (
    <div className="space-y-4">
      <div className="rounded-[var(--radius-lg)] border border-line bg-cream p-4">
        <p className="text-xs text-muted">نامه بدون پلاک</p>
        <p className="mt-2 font-display text-2xl leading-snug">
          خانهٔ ما کنار دریاچه است، بین زمین فوتبال و رستوران، روبه‌روی پمپ بنزین.
        </p>
      </div>
      <TownMap
        selected={guess}
        onSelect={(id) => setGuess(id)}
        highlights={highlights}
      />
      <ol className="grid gap-2 sm:grid-cols-3">
        {CLUES.map((clue, i) => (
          <li
            key={clue}
            className={`rounded-[var(--radius-md)] border px-3 py-2 text-sm leading-7 ${
              i <= step ? "border-pine bg-pine/8" : "border-line bg-cream text-muted"
            }`}
          >
            {i + 1}. {clue}
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={step >= CLUES.length - 1}
          onClick={() => setStep((s) => Math.min(CLUES.length - 1, s + 1))}
        >
          نشانهٔ بعدی را بخوان
        </Button>
        <Button variant="ghost" size="sm" onClick={() => { setStep(0); setGuess(null); }}>
          از نو
        </Button>
      </div>
      {guess && (
        <p className="text-sm leading-7 text-ink-soft">
          {guess === "target-house"
            ? "این همان خانه است. هر نشانه خانه‌های دیگر را حذف کرد."
            : "این خانه همهٔ نشانه‌های نامه را با هم ندارد. دوباره حذف کن."}
        </p>
      )}
      <p className="text-xs text-muted">{revealed.length} نشانه خوانده شده</p>
    </div>
  );
}
