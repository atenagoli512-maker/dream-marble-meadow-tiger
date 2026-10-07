import { TOWN_PLACES, type PlaceId } from "@/data/town";
import { cn } from "@/lib/utils";

interface TownMapProps {
  selected?: string | null;
  onSelect?: (id: PlaceId) => void;
  highlights?: string[];
  route?: string[];
  mode?: "map" | "photo" | "blend";
  blend?: number;
  lying?: boolean;
  showLabels?: boolean;
  className?: string;
}

function fillFor(id: PlaceId, lying: boolean, base: string) {
  if (!lying) return base;
  if (id === "lake") return "var(--color-forest)";
  if (id === "forest") return "var(--color-water)";
  if (id === "soccer") return "var(--color-roof)";
  if (id === "restaurant") return "var(--color-field)";
  return base;
}

export function TownMap({
  selected,
  onSelect,
  highlights = [],
  route = [],
  mode = "map",
  blend = 1,
  lying = false,
  showLabels = true,
  className,
}: TownMapProps) {
  const photoOpacity = mode === "photo" ? 1 : mode === "blend" ? 1 - blend : 0;
  const mapOpacity = mode === "map" ? 1 : mode === "blend" ? blend : 0;

  return (
    <svg
      viewBox="0 0 760 480"
      className={cn("h-auto w-full overflow-visible", className)}
      role="img"
      aria-label="نقشهٔ محلهٔ بهار"
    >
      <rect width="760" height="480" rx="18" fill="var(--color-sand)" />
      <rect x="12" y="12" width="736" height="456" rx="14" fill="#efe4d0" />
      <rect x="12" y="154" width="736" height="26" fill="#cfc3ad" />
      <rect x="12" y="340" width="736" height="20" fill="#cfc3ad" />
      <rect x="448" y="12" width="22" height="456" fill="#cfc3ad" />
      <rect x="12" y="164" width="736" height="6" fill="#efe8da" opacity="0.45" />

      {mode !== "map" && (
        <g opacity={photoOpacity} pointerEvents="none">
          <circle cx="70" cy="56" r="11" fill="#2f4a38" />
          <circle cx="94" cy="48" r="13" fill="#35563f" />
          <circle cx="112" cy="70" r="12" fill="#2c4736" />
          <ellipse cx="236" cy="52" rx="72" ry="28" fill="#3d6c7d" />
          <rect x="40" y="200" width="70" height="40" fill="#b08968" />
          <rect x="48" y="208" width="12" height="14" fill="#efe8da" />
          <rect x="268" y="196" width="90" height="48" fill="#a67c52" />
          <rect x="80" y="176" width="22" height="10" fill="#6b7280" />
          <rect x="300" y="176" width="26" height="10" fill="#7c2d12" />
          <circle cx="88" cy="120" r="3" fill="#1c1917" />
          <circle cx="400" cy="130" r="3" fill="#1c1917" />
        </g>
      )}

      {mode !== "photo" && (
        <g opacity={mapOpacity}>
          {TOWN_PLACES.map((place) => {
            const active = selected === place.id || highlights.includes(place.id);
            const inRoute = route.includes(place.id);
            const isLake = place.id === "lake";
            const hideText = place.id === "boat";
            return (
              <g key={place.id}>
                {isLake ? (
                  <ellipse
                    cx={place.x + place.w / 2}
                    cy={place.y + place.h / 2}
                    rx={place.w / 2}
                    ry={place.h / 2}
                    fill={fillFor(place.id, lying, place.fill)}
                    stroke={active ? "var(--color-ink)" : "transparent"}
                    strokeWidth={active ? 3 : 0}
                    className={onSelect ? "cursor-pointer" : undefined}
                    onClick={() => onSelect?.(place.id)}
                  />
                ) : (
                  <rect
                    x={place.x}
                    y={place.y}
                    width={place.w}
                    height={place.h}
                    rx={place.id === "boat" ? 10 : 7}
                    fill={fillFor(place.id, lying, place.fill)}
                    stroke={
                      active || inRoute ? "var(--color-ink)" : "rgb(28 25 23 / 0.16)"
                    }
                    strokeWidth={active ? 3 : inRoute ? 2 : 1}
                    className={onSelect ? "cursor-pointer" : undefined}
                    onClick={() => onSelect?.(place.id)}
                  />
                )}
                {place.id === "soccer" && (
                  <ellipse
                    cx={place.x + place.w / 2}
                    cy={place.y + place.h / 2}
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke="#efe8da"
                    strokeWidth="2"
                    pointerEvents="none"
                  />
                )}
                {place.id === "boat" && (
                  <polygon
                    points={`${place.x + 10},${place.y + 5} ${place.x + 46},${place.y + 10} ${place.x + 10},${place.y + 15}`}
                    fill="#efe8da"
                    pointerEvents="none"
                  />
                )}
                {showLabels && !hideText && (
                  <text
                    x={place.x + place.w / 2}
                    y={isLake ? place.y + 22 : place.y + place.h / 2 + 4}
                    textAnchor="middle"
                    fill={place.id === "bus" ? "#f4efe6" : "var(--color-ink)"}
                    fontSize="11"
                    fontFamily="Vazirmatn, sans-serif"
                    pointerEvents="none"
                  >
                    {place.label}
                  </text>
                )}
              </g>
            );
          })}
          <rect x="28" y="444" width="180" height="5" fill="var(--color-ink-soft)" />
          <text
            x="28"
            y="462"
            fill="var(--color-muted)"
            fontSize="11"
            fontFamily="Vazirmatn, sans-serif"
          >
            خط آهن
          </text>
        </g>
      )}

      {route.length > 1 && (
        <polyline
          fill="none"
          stroke="var(--color-clay)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={route
            .map((id) => {
              const p = TOWN_PLACES.find((x) => x.id === id);
              return p ? `${p.x + p.w / 2},${p.y + p.h / 2}` : "";
            })
            .join(" ")}
        />
      )}
    </svg>
  );
}
