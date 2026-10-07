import { useState } from "react";
import { TownMap } from "@/components/maps/town-map";
import { faNum } from "@/lib/utils";

export function AerialCompare() {
  const [blend, setBlend] = useState(0);

  return (
    <div className="space-y-4">
      <TownMap mode="blend" blend={blend} showLabels={blend > 0.55} />
      <div>
        <div className="mb-2 flex justify-between text-sm text-muted">
          <span>عکس هوایی</span>
          <span className="tabular-nums">{faNum(Math.round(blend * 100))}</span>
          <span>نقشه</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(blend * 100)}
          onChange={(e) => setBlend(Number(e.target.value) / 100)}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-paper-deep accent-pine"
          aria-label="تبدیل عکس هوایی به نقشه"
        />
      </div>
      <ul className="grid gap-2 text-sm leading-7 text-ink-soft sm:grid-cols-2">
        <li className="rounded-[var(--radius-md)] border border-line bg-cream px-3 py-2">
          در عکس: ماشین، سایه، آدم، پنجره.
        </li>
        <li className="rounded-[var(--radius-md)] border border-line bg-cream px-3 py-2">
          در نقشه: رنگ، علامت، نام. جزئیات حذف شده‌اند.
        </li>
      </ul>
    </div>
  );
}
