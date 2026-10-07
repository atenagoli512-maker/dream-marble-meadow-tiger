import { useAppStore } from "@/lib/store";
import { faNum } from "@/lib/utils";

function Building({
  x,
  width,
  facadeH,
  color,
  windows,
  altitude,
}: {
  x: number;
  width: number;
  facadeH: number;
  color: string;
  windows: number;
  altitude: number;
}) {
  const t = altitude / 100;
  const roofH = 18 + (1 - t) * 8;
  const wallH = facadeH * (1 - t * 0.86);
  const y = 210 - wallH;
  const facadeOpacity = 1 - t * 0.92;
  const roofY = y - 2 * (1 - t);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={Math.max(10, wallH)}
        fill={color}
        opacity={Math.max(0.12, facadeOpacity)}
      />
      {Array.from({ length: windows }).map((_, i) => (
        <rect
          key={i}
          x={x + 8 + i * ((width - 12) / windows)}
          y={y + Math.max(8, wallH * 0.25)}
          width={10}
          height={Math.max(4, 14 * (1 - t))}
          fill="#efe8da"
          opacity={facadeOpacity}
        />
      ))}
      <rect
        x={x - 4 * t}
        y={roofY - (t > 0.55 ? 0 : 6)}
        width={width + 8 * t}
        height={t > 0.62 ? Math.max(16, width * 0.42) : roofH}
        rx={t > 0.7 ? 4 : 1}
        fill={t > 0.55 ? "#c4b39a" : "#8a5a3c"}
      />
    </g>
  );
}

export function AltitudeScene() {
  const altitude = useAppStore((s) => s.altitude);
  const setAltitude = useAppStore((s) => s.setAltitude);
  const t = altitude / 100;
  const birdY = 36 + (1 - t) * 70;
  const label =
    altitude < 22
      ? "روی زمین؛ دیوار و در دیده می‌شود"
      : altitude < 55
        ? "در حال بالا رفتن؛ پاها و پنجره‌ها کم می‌شوند"
        : altitude < 82
          ? "پشت‌بام‌ها؛ شکل‌ها ساده‌تر شده‌اند"
          : "چشم پرنده؛ این همان نگاه نقشه است";

  return (
    <div className="space-y-4">
      <svg viewBox="0 0 640 280" className="h-auto w-full">
        <rect width="640" height="280" rx="16" fill="var(--color-paper-deep)" />
        <rect x="0" y="210" width="640" height="70" fill="#cbbd9e" />
        <ellipse
          cx="470"
          cy={200 + t * 8}
          rx={70 - t * 8}
          ry={18 + t * 22}
          fill="var(--color-water)"
        />
        <rect
          x="430"
          y="168"
          width="10"
          height={42 * (1 - t)}
          fill="#6b4f38"
          opacity={1 - t}
        />
        <circle cx="435" cy={158 + t * 20} r={16 + t * 8} fill="var(--color-forest)" />
        <rect
          x="520"
          y="150"
          width="12"
          height={60 * (1 - t)}
          fill="#6b4f38"
          opacity={1 - t}
        />
        <circle cx="526" cy={142 + t * 24} r={20 + t * 6} fill="#3d5c48" />
        <Building x={40} width={70} facadeH={110} color="#8d6a4a" windows={3} altitude={altitude} />
        <Building x={122} width={56} facadeH={86} color="#a67c52" windows={2} altitude={altitude} />
        <Building x={196} width={96} facadeH={124} color="#7d5a3c" windows={4} altitude={altitude} />
        <Building x={308} width={64} facadeH={92} color="#9a7353" windows={2} altitude={altitude} />
        <circle cx={80 + t * 240} cy={birdY} r="8" fill="var(--color-ink)" />
        <path
          d={`M${70 + t * 240} ${birdY} q 10 -10 22 0`}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="3"
        />
        {t > 0.78 && (
          <g fill="var(--color-ink)" fontFamily="Vazirmatn, sans-serif" fontSize="11">
            <text x="54" y="168">
              خانه
            </text>
            <text x="214" y="132">
              مدرسه
            </text>
            <text x="452" y="188">
              دریاچه
            </text>
          </g>
        )}
      </svg>
      <div>
        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
          <span className="text-muted">ارتفاع نگاه</span>
          <span className="tabular-nums text-ink-soft">{faNum(altitude)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={altitude}
          onChange={(e) => setAltitude(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-paper-deep accent-pine"
          aria-label="ارتفاع نگاه پرنده"
        />
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>روی زمین</span>
          <span>نقشه</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-ink-soft">{label}</p>
      </div>
    </div>
  );
}
