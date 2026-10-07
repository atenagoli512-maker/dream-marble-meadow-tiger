import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./shell-BhOx4eJP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/town-map-C6fkojUH.js
var import_jsx_runtime = require_jsx_runtime();
var TOWN_PLACES = [
	{
		id: "forest",
		label: "جنگل",
		legend: "پارک جنگلی",
		x: 28,
		y: 22,
		w: 108,
		h: 88,
		fill: "var(--color-forest)"
	},
	{
		id: "lake",
		label: "دریاچه",
		legend: "دریاچه",
		x: 154,
		y: 20,
		w: 168,
		h: 70,
		fill: "var(--color-water)"
	},
	{
		id: "boat",
		label: "قایق",
		legend: "ایستگاه قایق‌رانی",
		x: 210,
		y: 52,
		w: 56,
		h: 20,
		fill: "var(--color-pine-deep)"
	},
	{
		id: "soccer",
		label: "فوتبال",
		legend: "زمین فوتبال",
		x: 154,
		y: 100,
		w: 92,
		h: 42,
		fill: "var(--color-field)"
	},
	{
		id: "target-house",
		label: "خانهٔ نامه",
		legend: "خانه",
		x: 258,
		y: 100,
		w: 78,
		h: 42,
		fill: "#c9a57a"
	},
	{
		id: "restaurant",
		label: "رستوران",
		legend: "رستوران",
		x: 348,
		y: 100,
		w: 86,
		h: 42,
		fill: "#cbb59a"
	},
	{
		id: "marsh",
		label: "باتلاق",
		legend: "باتلاق",
		x: 484,
		y: 24,
		w: 90,
		h: 54,
		fill: "#5d6b52"
	},
	{
		id: "grass",
		label: "چمن",
		legend: "چمن‌زار",
		x: 588,
		y: 24,
		w: 140,
		h: 54,
		fill: "#8aa266"
	},
	{
		id: "shop",
		label: "فروشگاه",
		legend: "فروشگاه",
		x: 28,
		y: 196,
		w: 92,
		h: 50,
		fill: "var(--color-roof)"
	},
	{
		id: "library",
		label: "کتابخانه",
		legend: "کتابخانه",
		x: 136,
		y: 196,
		w: 92,
		h: 50,
		fill: "#d7c4a3"
	},
	{
		id: "gas",
		label: "بنزین",
		legend: "پمپ بنزین",
		x: 258,
		y: 196,
		w: 78,
		h: 50,
		fill: "#b9a48a"
	},
	{
		id: "school",
		label: "مدرسه",
		legend: "مدرسه",
		x: 360,
		y: 188,
		w: 120,
		h: 62,
		fill: "#c9b48a"
	},
	{
		id: "clinic",
		label: "درمانگاه",
		legend: "درمانگاه",
		x: 500,
		y: 196,
		w: 92,
		h: 50,
		fill: "#d2c0aa"
	},
	{
		id: "fire",
		label: "آتش‌نشانی",
		legend: "آتش‌نشانی",
		x: 612,
		y: 196,
		w: 116,
		h: 50,
		fill: "#c4a690"
	},
	{
		id: "post",
		label: "پست",
		legend: "اداره پست",
		x: 28,
		y: 276,
		w: 92,
		h: 46,
		fill: "#d4c6b0"
	},
	{
		id: "bus",
		label: "اتوبوس",
		legend: "ایستگاه اتوبوس",
		x: 140,
		y: 284,
		w: 72,
		h: 30,
		fill: "var(--color-ink-soft)"
	},
	{
		id: "bakery",
		label: "نانوایی",
		legend: "نانوایی",
		x: 360,
		y: 276,
		w: 92,
		h: 46,
		fill: "#d8c2a0"
	},
	{
		id: "rail",
		label: "راه‌آهن",
		legend: "ایستگاه راه‌آهن",
		x: 28,
		y: 384,
		w: 140,
		h: 46,
		fill: "#a89880"
	},
	{
		id: "house-a",
		label: "خانه",
		legend: "خانه",
		x: 188,
		y: 384,
		w: 92,
		h: 46,
		fill: "#d6c3a8"
	},
	{
		id: "house-b",
		label: "خانه",
		legend: "خانه",
		x: 300,
		y: 384,
		w: 92,
		h: 46,
		fill: "#d6c3a8"
	},
	{
		id: "home",
		label: "خانهٔ سارا",
		legend: "خانه",
		x: 612,
		y: 384,
		w: 116,
		h: 46,
		fill: "#d2b48c"
	}
];
var LEGEND_SLOTS = [
	{
		id: "lake",
		label: "دریاچه",
		answer: "lake"
	},
	{
		id: "boat",
		label: "ایستگاه قایق‌رانی",
		answer: "boat"
	},
	{
		id: "soccer",
		label: "زمین فوتبال",
		answer: "soccer"
	},
	{
		id: "forest",
		label: "پارک جنگلی",
		answer: "forest"
	},
	{
		id: "gas",
		label: "پمپ بنزین",
		answer: "gas"
	},
	{
		id: "restaurant",
		label: "رستوران",
		answer: "restaurant"
	},
	{
		id: "shop",
		label: "فروشگاه",
		answer: "shop"
	},
	{
		id: "library",
		label: "کتابخانه",
		answer: "library"
	},
	{
		id: "fire",
		label: "آتش‌نشانی",
		answer: "fire"
	},
	{
		id: "bus",
		label: "ایستگاه اتوبوس",
		answer: "bus"
	},
	{
		id: "post",
		label: "اداره پست",
		answer: "post"
	},
	{
		id: "rail",
		label: "ایستگاه راه‌آهن",
		answer: "rail"
	}
];
var LYING_LEGEND = [
	{
		id: "lake",
		fake: "پارک جنگلی",
		truth: "دریاچه"
	},
	{
		id: "forest",
		fake: "دریاچه",
		truth: "پارک جنگلی"
	},
	{
		id: "soccer",
		fake: "رستوران",
		truth: "زمین فوتبال"
	},
	{
		id: "restaurant",
		fake: "زمین فوتبال",
		truth: "رستوران"
	}
];
function fillFor(id, lying, base) {
	if (!lying) return base;
	if (id === "lake") return "var(--color-forest)";
	if (id === "forest") return "var(--color-water)";
	if (id === "soccer") return "var(--color-roof)";
	if (id === "restaurant") return "var(--color-field)";
	return base;
}
function TownMap({ selected, onSelect, highlights = [], route = [], mode = "map", blend = 1, lying = false, showLabels = true, className }) {
	const photoOpacity = mode === "photo" ? 1 : mode === "blend" ? 1 - blend : 0;
	const mapOpacity = mode === "map" ? 1 : mode === "blend" ? blend : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 760 480",
		className: cn("h-auto w-full overflow-visible", className),
		role: "img",
		"aria-label": "نقشهٔ محلهٔ بهار",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "760",
				height: "480",
				rx: "18",
				fill: "var(--color-sand)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "12",
				width: "736",
				height: "456",
				rx: "14",
				fill: "#efe4d0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "154",
				width: "736",
				height: "26",
				fill: "#cfc3ad"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "340",
				width: "736",
				height: "20",
				fill: "#cfc3ad"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "448",
				y: "12",
				width: "22",
				height: "456",
				fill: "#cfc3ad"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "164",
				width: "736",
				height: "6",
				fill: "#efe8da",
				opacity: "0.45"
			}),
			mode !== "map" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				opacity: photoOpacity,
				pointerEvents: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "70",
						cy: "56",
						r: "11",
						fill: "#2f4a38"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "94",
						cy: "48",
						r: "13",
						fill: "#35563f"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "112",
						cy: "70",
						r: "12",
						fill: "#2c4736"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "236",
						cy: "52",
						rx: "72",
						ry: "28",
						fill: "#3d6c7d"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "40",
						y: "200",
						width: "70",
						height: "40",
						fill: "#b08968"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "48",
						y: "208",
						width: "12",
						height: "14",
						fill: "#efe8da"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "268",
						y: "196",
						width: "90",
						height: "48",
						fill: "#a67c52"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "80",
						y: "176",
						width: "22",
						height: "10",
						fill: "#6b7280"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "300",
						y: "176",
						width: "26",
						height: "10",
						fill: "#7c2d12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "88",
						cy: "120",
						r: "3",
						fill: "#1c1917"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "400",
						cy: "130",
						r: "3",
						fill: "#1c1917"
					})
				]
			}),
			mode !== "photo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				opacity: mapOpacity,
				children: [
					TOWN_PLACES.map((place) => {
						const active = selected === place.id || highlights.includes(place.id);
						const inRoute = route.includes(place.id);
						const isLake = place.id === "lake";
						const hideText = place.id === "boat";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
							isLake ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: place.x + place.w / 2,
								cy: place.y + place.h / 2,
								rx: place.w / 2,
								ry: place.h / 2,
								fill: fillFor(place.id, lying, place.fill),
								stroke: active ? "var(--color-ink)" : "transparent",
								strokeWidth: active ? 3 : 0,
								className: onSelect ? "cursor-pointer" : void 0,
								onClick: () => onSelect?.(place.id)
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: place.x,
								y: place.y,
								width: place.w,
								height: place.h,
								rx: place.id === "boat" ? 10 : 7,
								fill: fillFor(place.id, lying, place.fill),
								stroke: active || inRoute ? "var(--color-ink)" : "rgb(28 25 23 / 0.16)",
								strokeWidth: active ? 3 : inRoute ? 2 : 1,
								className: onSelect ? "cursor-pointer" : void 0,
								onClick: () => onSelect?.(place.id)
							}),
							place.id === "soccer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: place.x + place.w / 2,
								cy: place.y + place.h / 2,
								rx: "12",
								ry: "12",
								fill: "none",
								stroke: "#efe8da",
								strokeWidth: "2",
								pointerEvents: "none"
							}),
							place.id === "boat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
								points: `${place.x + 10},${place.y + 5} ${place.x + 46},${place.y + 10} ${place.x + 10},${place.y + 15}`,
								fill: "#efe8da",
								pointerEvents: "none"
							}),
							showLabels && !hideText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: place.x + place.w / 2,
								y: isLake ? place.y + 22 : place.y + place.h / 2 + 4,
								textAnchor: "middle",
								fill: place.id === "bus" ? "#f4efe6" : "var(--color-ink)",
								fontSize: "11",
								fontFamily: "Vazirmatn, sans-serif",
								pointerEvents: "none",
								children: place.label
							})
						] }, place.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "28",
						y: "444",
						width: "180",
						height: "5",
						fill: "var(--color-ink-soft)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "28",
						y: "462",
						fill: "var(--color-muted)",
						fontSize: "11",
						fontFamily: "Vazirmatn, sans-serif",
						children: "خط آهن"
					})
				]
			}),
			route.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
				fill: "none",
				stroke: "var(--color-clay)",
				strokeWidth: "4",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				points: route.map((id) => {
					const p = TOWN_PLACES.find((x) => x.id === id);
					return p ? `${p.x + p.w / 2},${p.y + p.h / 2}` : "";
				}).join(" ")
			})
		]
	});
}
//#endregion
export { TownMap as i, LYING_LEGEND as n, TOWN_PLACES as r, LEGEND_SLOTS as t };
