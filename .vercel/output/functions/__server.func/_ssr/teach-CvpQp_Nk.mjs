import { i as __toESM } from "../_runtime.mjs";
import { c as TEACH_STEPS, n as FURNITURE, s as OBJECT_VIEWS } from "./lesson-BTWavtR3.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Eye, d as ChevronRight, f as ChevronLeft, l as EyeOff } from "../_libs/lucide-react.mjs";
import { a as faNum, i as cn, n as Shell, o as useAppStore, t as Button } from "./shell-BhOx4eJP.mjs";
import { t as Badge } from "./badge-8wJVUaE2.mjs";
import { n as Route$1 } from "./router-LwJiVSR5.mjs";
import { i as TownMap, n as LYING_LEGEND, r as TOWN_PLACES, t as LEGEND_SLOTS } from "./town-map-C6fkojUH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teach-CvpQp_Nk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TeacherNote({ title = "در گوش معلم", children }) {
	if (!useAppStore((s) => s.teacherMode)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-[var(--radius-lg)] border border-pine/20 bg-pine/10 p-4 text-sm leading-7 text-ink-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 text-xs font-medium text-pine-deep",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children
		})]
	});
}
function Building({ x, width, facadeH, color, windows, altitude }) {
	const t = altitude / 100;
	const roofH = 18 + (1 - t) * 8;
	const wallH = facadeH * (1 - t * .86);
	const y = 210 - wallH;
	const facadeOpacity = 1 - t * .92;
	const roofY = y - 2 * (1 - t);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x,
			y,
			width,
			height: Math.max(10, wallH),
			fill: color,
			opacity: Math.max(.12, facadeOpacity)
		}),
		Array.from({ length: windows }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: x + 8 + i * ((width - 12) / windows),
			y: y + Math.max(8, wallH * .25),
			width: 10,
			height: Math.max(4, 14 * (1 - t)),
			fill: "#efe8da",
			opacity: facadeOpacity
		}, i)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: x - 4 * t,
			y: roofY - (t > .55 ? 0 : 6),
			width: width + 8 * t,
			height: t > .62 ? Math.max(16, width * .42) : roofH,
			rx: t > .7 ? 4 : 1,
			fill: t > .55 ? "#c4b39a" : "#8a5a3c"
		})
	] });
}
function AltitudeScene() {
	const altitude = useAppStore((s) => s.altitude);
	const setAltitude = useAppStore((s) => s.setAltitude);
	const t = altitude / 100;
	const birdY = 36 + (1 - t) * 70;
	const label = altitude < 22 ? "روی زمین؛ دیوار و در دیده می‌شود" : altitude < 55 ? "در حال بالا رفتن؛ پاها و پنجره‌ها کم می‌شوند" : altitude < 82 ? "پشت‌بام‌ها؛ شکل‌ها ساده‌تر شده‌اند" : "چشم پرنده؛ این همان نگاه نقشه است";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 640 280",
			className: "h-auto w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "640",
					height: "280",
					rx: "16",
					fill: "var(--color-paper-deep)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "210",
					width: "640",
					height: "70",
					fill: "#cbbd9e"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "470",
					cy: 200 + t * 8,
					rx: 70 - t * 8,
					ry: 18 + t * 22,
					fill: "var(--color-water)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "430",
					y: "168",
					width: "10",
					height: 42 * (1 - t),
					fill: "#6b4f38",
					opacity: 1 - t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "435",
					cy: 158 + t * 20,
					r: 16 + t * 8,
					fill: "var(--color-forest)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "520",
					y: "150",
					width: "12",
					height: 60 * (1 - t),
					fill: "#6b4f38",
					opacity: 1 - t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "526",
					cy: 142 + t * 24,
					r: 20 + t * 6,
					fill: "#3d5c48"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
					x: 40,
					width: 70,
					facadeH: 110,
					color: "#8d6a4a",
					windows: 3,
					altitude
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
					x: 122,
					width: 56,
					facadeH: 86,
					color: "#a67c52",
					windows: 2,
					altitude
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
					x: 196,
					width: 96,
					facadeH: 124,
					color: "#7d5a3c",
					windows: 4,
					altitude
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
					x: 308,
					width: 64,
					facadeH: 92,
					color: "#9a7353",
					windows: 2,
					altitude
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: 80 + t * 240,
					cy: birdY,
					r: "8",
					fill: "var(--color-ink)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M${70 + t * 240} ${birdY} q 10 -10 22 0`,
					fill: "none",
					stroke: "var(--color-ink)",
					strokeWidth: "3"
				}),
				t > .78 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "var(--color-ink)",
					fontFamily: "Vazirmatn, sans-serif",
					fontSize: "11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "54",
							y: "168",
							children: "خانه"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "214",
							y: "132",
							children: "مدرسه"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "452",
							y: "188",
							children: "دریاچه"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "ارتفاع نگاه"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-ink-soft",
					children: faNum(altitude)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 100,
				value: altitude,
				onChange: (e) => setAltitude(Number(e.target.value)),
				className: "h-2 w-full cursor-pointer appearance-none rounded-full bg-paper-deep accent-pine",
				"aria-label": "ارتفاع نگاه پرنده"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex justify-between text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "روی زمین" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نقشه" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-7 text-ink-soft",
				children: label
			})
		] })]
	});
}
function Glyph({ id, view }) {
	const stroke = "var(--color-ink)";
	const fill = "var(--color-sand)";
	if (id === "desk" && view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "22",
				width: "64",
				height: "10",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "32",
				width: "6",
				height: "28",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "62",
				y: "32",
				width: "6",
				height: "28",
				fill,
				stroke
			})
		]
	});
	if (id === "desk" && view === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "12",
			y: "18",
			width: "56",
			height: "34",
			rx: "2",
			fill,
			stroke
		})
	});
	if (id === "chair" && view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "8",
				width: "32",
				height: "8",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "16",
				width: "6",
				height: "20",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "36",
				width: "36",
				height: "8",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "44",
				width: "6",
				height: "18",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "50",
				y: "44",
				width: "6",
				height: "18",
				fill,
				stroke
			})
		]
	});
	if (id === "chair" && view === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "22",
			y: "22",
			width: "36",
			height: "28",
			fill,
			stroke
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "22",
			y: "16",
			width: "36",
			height: "6",
			fill,
			stroke
		})]
	});
	if (id === "door" && view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "24",
			y: "6",
			width: "32",
			height: "58",
			fill,
			stroke
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "48",
			cy: "36",
			r: "3",
			fill: stroke
		})]
	});
	if (id === "door" && view === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "10",
			y: "32",
			width: "60",
			height: "6",
			fill,
			stroke
		})
	});
	if (id === "board" && view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "16",
			width: "64",
			height: "36",
			fill: "#3f3a36"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "12",
			y: "20",
			width: "56",
			height: "28",
			fill: "#245e57"
		})]
	});
	if (id === "board" && view === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "30",
			width: "64",
			height: "8",
			fill: "#3f3a36"
		})
	});
	if (id === "tree" && view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "36",
			y: "40",
			width: "8",
			height: "22",
			fill: "#6b4f38"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "40",
			cy: "30",
			r: "18",
			fill: "var(--color-forest)"
		})]
	});
	if (id === "tree" && view === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "40",
			cy: "36",
			r: "20",
			fill: "var(--color-forest)"
		})
	});
	if (id === "house" && view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "12,32 40,10 68,32",
				fill: "#9a4a2e"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "32",
				width: "44",
				height: "28",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "36",
				y: "40",
				width: "10",
				height: "20",
				fill: "#6e675f"
			})
		]
	});
	if (id === "house" && view === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "16",
			y: "20",
			width: "48",
			height: "32",
			fill: "#9a4a2e"
		})
	});
	if (id === "lake" && view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 44h64",
			stroke: "var(--color-water)",
			strokeWidth: "6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 36c10 8 20-8 32 0s20-8 32 0",
			fill: "none",
			stroke: "var(--color-water)",
			strokeWidth: "3"
		})]
	});
	if (id === "lake" && view === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "40",
			cy: "36",
			rx: "28",
			ry: "16",
			fill: "var(--color-water)"
		})
	});
	if (view === "front") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "16",
				r: "8",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "32",
				y: "26",
				width: "16",
				height: "22",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "28",
				y: "48",
				width: "6",
				height: "16",
				fill,
				stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "46",
				y: "48",
				width: "6",
				height: "16",
				fill,
				stroke
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 80 70",
		className: "h-20 w-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "40",
			cy: "36",
			r: "10",
			fill,
			stroke
		})
	});
}
function ObjectViews() {
	const [id, setId] = (0, import_react.useState)(OBJECT_VIEWS[0].id);
	const item = OBJECT_VIEWS.find((x) => x.id === id) ?? OBJECT_VIEWS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: OBJECT_VIEWS.map((obj) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setId(obj.id),
				className: cn("h-10 rounded-full px-3 text-sm", obj.id === id ? "bg-ink text-paper" : "bg-paper-deep text-ink-soft"),
				children: obj.name
			}, obj.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-line bg-cream p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs text-muted",
						children: "از روبرو"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
						id: item.id,
						view: "front"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-7 text-ink-soft",
						children: item.front
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-line bg-cream p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs text-muted",
						children: "از بالا"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
						id: item.id,
						view: "top"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-7 text-ink-soft",
						children: item.top
					})
				]
			})]
		})]
	});
}
var SHAPE = {
	board: {
		w: 24,
		h: 6,
		label: "تخته",
		fill: "#3f3a36"
	},
	"teacher-desk": {
		w: 16,
		h: 10,
		label: "میز معلم",
		fill: "#9a4a2e"
	},
	desk: {
		w: 14,
		h: 10,
		label: "میز",
		fill: "#c4b39a"
	},
	door: {
		w: 4,
		h: 12,
		label: "در",
		fill: "#6e675f"
	},
	window: {
		w: 14,
		h: 4,
		label: "پنجره",
		fill: "#4a7a8a"
	},
	shelf: {
		w: 8,
		h: 16,
		label: "قفسه",
		fill: "#8a6a4a"
	},
	plant: {
		w: 8,
		h: 8,
		label: "گلدان",
		fill: "#3d5c48"
	},
	bin: {
		w: 7,
		h: 7,
		label: "سطل",
		fill: "#6e675f"
	}
};
function ClassroomMap() {
	const items = useAppStore((s) => s.classroomItems);
	const add = useAppStore((s) => s.addClassroomItem);
	const move = useAppStore((s) => s.moveClassroomItem);
	const rotate = useAppStore((s) => s.rotateClassroomItem);
	const remove = useAppStore((s) => s.removeClassroomItem);
	const reset = useAppStore((s) => s.resetClassroom);
	const board = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(null);
	function onPointerDown(id, event) {
		event.preventDefault();
		setActive(id);
		const node = board.current;
		if (!node) return;
		const rect = node.getBoundingClientRect();
		function onMove(e) {
			const x = (e.clientX - rect.left) / rect.width * 100;
			const y = (e.clientY - rect.top) / rect.height * 100;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1fr_16rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: board,
			className: "relative aspect-[4/3] touch-none overflow-hidden rounded-[var(--radius-lg)] border border-line bg-sand",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2 rounded-[var(--radius-md)] border-2 border-dashed border-ink/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 right-1/2 translate-x-1/2 text-[10px] text-muted",
					children: "دیوار تخته"
				}),
				items.map((item) => {
					const shape = SHAPE[item.kind];
					const rotated = item.rotation === 90 || item.rotation === 270;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onPointerDown: (e) => onPointerDown(item.id, e),
						onClick: () => setActive(item.id),
						className: "absolute flex items-center justify-center rounded-sm text-[9px] text-paper",
						style: {
							left: `${item.x}%`,
							top: `${item.y}%`,
							width: `${rotated ? shape.h : shape.w}%`,
							height: `${rotated ? shape.w : shape.h}%`,
							background: shape.fill,
							outline: active === item.id ? "2px solid var(--color-ink)" : "none"
						},
						children: shape.label
					}, item.id);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs leading-6 text-muted",
			children: "بکشید جابه‌جا شود. این نما از بالاست؛ میز یعنی مستطیل، در یعنی نوار باریک."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "افزودن قطعه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: FURNITURE.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => add(f.id),
						children: f.label
					}, f.id))
				}),
				selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[var(--radius-lg)] border border-line bg-paper-deep p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-medium",
						children: SHAPE[selected.kind].label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => rotate(selected.id),
							children: "چرخش"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => remove(selected.id),
							children: "حذف"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: reset,
					children: "برگشت به چیدمان نمونه"
				})
			]
		})]
	});
}
function AerialCompare() {
	const [blend, setBlend] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownMap, {
				mode: "blend",
				blend,
				showLabels: blend > .55
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex justify-between text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "عکس هوایی" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: faNum(Math.round(blend * 100))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نقشه" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 100,
				value: Math.round(blend * 100),
				onChange: (e) => setBlend(Number(e.target.value) / 100),
				className: "h-2 w-full cursor-pointer appearance-none rounded-full bg-paper-deep accent-pine",
				"aria-label": "تبدیل عکس هوایی به نقشه"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "grid gap-2 text-sm leading-7 text-ink-soft sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-[var(--radius-md)] border border-line bg-cream px-3 py-2",
					children: "در عکس: ماشین، سایه، آدم، پنجره."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-[var(--radius-md)] border border-line bg-cream px-3 py-2",
					children: "در نقشه: رنگ، علامت، نام. جزئیات حذف شده‌اند."
				})]
			})
		]
	});
}
function LegendLab({ lying = false }) {
	const selected = useAppStore((s) => s.selectedPlace);
	const setSelected = useAppStore((s) => s.setSelectedPlace);
	const assignments = useAppStore((s) => s.legendAssignments);
	const setAssignment = useAppStore((s) => s.setLegendAssignment);
	const reset = useAppStore((s) => s.resetLegend);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.4fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownMap, {
			selected,
			onSelect: (id) => setSelected(id),
			lying
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: lying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "راهنمای این نقشه"
					}),
					LYING_LEGEND.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-[var(--radius-md)] border border-line bg-cream px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.fake }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: "علامت روی نقشه"
						})]
					}, row.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-7 text-clay",
						children: "این راهنما دروغ می‌گوید. اگر دوستت را به قایق‌رانی بفرستی، کجا می‌رود؟"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-7 text-ink-soft",
					children: "جایی را روی نقشه بزن، بعد اسم درستش را در راهنما انتخاب کن."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: LEGEND_SLOTS.map((slot) => {
						const chosen = assignments[slot.id];
						const ok = chosen === slot.answer;
						const chosenLabel = TOWN_PLACES.find((p) => p.id === chosen)?.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => selected && setAssignment(slot.id, selected),
							className: cn("rounded-[var(--radius-md)] border px-3 py-2 text-right text-xs leading-6", ok ? "border-pine bg-pine/10" : chosen ? "border-clay/40 bg-clay/10" : "border-line bg-cream"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: slot.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: chosenLabel ? `انتخاب: ${chosenLabel}` : "خالی"
							})]
						}, slot.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: reset,
					children: "پاک کردن راهنما"
				})
			] })
		})]
	});
}
var CLUES = [
	"خانه کنار دریاچه است.",
	"بین زمین فوتبال و رستوران است.",
	"روبه‌روی پمپ بنزین است."
];
function LetterLab() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [guess, setGuess] = (0, import_react.useState)(null);
	const revealed = CLUES.slice(0, step + 1);
	const highlights = (0, import_react.useMemo)(() => {
		if (step === 0) return [
			"lake",
			"target-house",
			"soccer",
			"boat"
		];
		if (step === 1) return [
			"soccer",
			"restaurant",
			"target-house"
		];
		return ["target-house", "gas"];
	}, [step]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-line bg-cream p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "نامه بدون پلاک"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl leading-snug",
					children: "خانهٔ ما کنار دریاچه است، بین زمین فوتبال و رستوران، روبه‌روی پمپ بنزین."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownMap, {
				selected: guess,
				onSelect: (id) => setGuess(id),
				highlights
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-2 sm:grid-cols-3",
				children: CLUES.map((clue, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `rounded-[var(--radius-md)] border px-3 py-2 text-sm leading-7 ${i <= step ? "border-pine bg-pine/8" : "border-line bg-cream text-muted"}`,
					children: [
						i + 1,
						". ",
						clue
					]
				}, clue))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					disabled: step >= CLUES.length - 1,
					onClick: () => setStep((s) => Math.min(CLUES.length - 1, s + 1)),
					children: "نشانهٔ بعدی را بخوان"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => {
						setStep(0);
						setGuess(null);
					},
					children: "از نو"
				})]
			}),
			guess && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-7 text-ink-soft",
				children: guess === "target-house" ? "این همان خانه است. هر نشانه خانه‌های دیگر را حذف کرد." : "این خانه همهٔ نشانه‌های نامه را با هم ندارد. دوباره حذف کن."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [revealed.length, " نشانه خوانده شده"]
			})
		]
	});
}
var GOAL = [
	"home",
	"bakery",
	"school"
];
function RouteLab() {
	const stops = useAppStore((s) => s.routeStops);
	const toggle = useAppStore((s) => s.toggleRouteStop);
	const reset = useAppStore((s) => s.resetRoute);
	const ok = stops[0] === "home" && stops.includes("bakery") && stops[stops.length - 1] === "school";
	const labels = stops.map((id) => TOWN_PLACES.find((p) => p.id === id)?.label ?? id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-7 text-ink-soft",
				children: "موبایل مادر شارژ ندارد. از خانهٔ سارا باید نان بخرید و به مدرسه برسید. روی نقشه به ترتیب جاها را بزنید."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownMap, {
				route: stops,
				selected: stops.at(-1) ?? null,
				onSelect: (id) => toggle(id),
				highlights: [...GOAL]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ink-soft",
				children: ["مسیر شما: ", labels.length ? labels.join(" ← ") : "هنوز نقطه‌ای انتخاب نشده"]
			}),
			ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-[var(--radius-md)] bg-pine/10 px-3 py-2 text-sm leading-7",
				children: "این مسیر شرط نانوایی را دارد. اگر مسیر دیگری هم از نانوایی بگذرد، آن هم می‌تواند درست باشد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: reset,
				children: "پاک کردن مسیر"
			})
		]
	});
}
function TeachPage() {
	const step = Route$1.useSearch().step ?? "hook";
	const navigate = Route$1.useNavigate();
	const teacherMode = useAppStore((s) => s.teacherMode);
	const setTeacherMode = useAppStore((s) => s.setTeacherMode);
	const index = TEACH_STEPS.findIndex((s) => s.id === step);
	const meta = TEACH_STEPS[index] ?? TEACH_STEPS[0];
	const safeIndex = index < 0 ? 0 : index;
	function go(next) {
		const target = TEACH_STEPS[Math.max(0, Math.min(TEACH_STEPS.length - 1, next))];
		if (target) navigate({ search: { step: target.id } });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-6 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						"پردهٔ ",
						faNum(safeIndex + 1),
						" از ",
						faNum(TEACH_STEPS.length),
						" · ",
						meta.phase,
						" ",
						"· ",
						faNum(meta.minutes),
						" دقیقه"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl",
					children: meta.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setTeacherMode(!teacherMode),
							children: [teacherMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), teacherMode ? "حالت تخته" : "یادداشت معلم"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => go(safeIndex - 1),
							disabled: safeIndex === 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" }), "قبلی"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => go(safeIndex + 1),
							disabled: safeIndex === TEACH_STEPS.length - 1,
							children: ["بعدی", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "no-print mb-6 flex gap-1 overflow-x-auto",
				children: TEACH_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(i),
					className: `rounded-full px-3 py-1.5 text-xs ${s.id === step ? "bg-ink text-paper" : "bg-paper-deep text-muted"}`,
					children: s.title
				}) }, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBody, { id: step })
		]
	}) });
}
function StepBody({ id }) {
	if (id === "hook") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl leading-snug",
					children: "سارا کیفش را گم کرده. فقط چیزهایی را که دیده و شنیده به خاطر دارد."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-base leading-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "اول بوی نانوایی آمد." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "بعد صدای آب شنید." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "بعد رسید جایی که بچه‌ها توپ می‌زدند. کیف آنجا ماند." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TeacherNote, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "تعریف نقشه را نگو. بپرس: رد حرف سارا روی نقشه کجاست؟" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "مسابقه نگذار. از اولین انگشت دلیل بخواه." })] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownMap, { highlights: [
			"bakery",
			"lake",
			"soccer"
		] })]
	});
	if (id === "altitude") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AltitudeScene, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TeacherNote, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "حرف «نقشه یعنی از بالا» را نگو. بپرس پاهای میز کجا رفت." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "اگر جعبهٔ کفش داری، اول از بغل نشان بده، بعد از سقف." })] })]
	});
	if (id === "views") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-8 text-ink-soft",
				children: "تصویر اشیا از روبرو با تصویر آن‌ها از بالا چه تفاوتی دارد؟ اول صندلی واقعی کلاس را وسط بگذار، بعد این شکل‌ها را ببین."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectViews, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherNote, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "فقط چهار نفر خم شوند و از بالا به صندلی نگاه کنند. بقیه از جا می‌بینند." }) })
		]
	});
	if (id === "classroom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-8 text-ink-soft",
				children: "تصور کنید از سقف به کلاس نگاه می‌کنید. هر کس مسئول یک قطعه است؛ کل کلاس را یک‌نفره نقاشی نکنید."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassroomMap, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherNote, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "اگر میز پا داشت، نگو غلط است. بپرس مگس روی سقف پا را می‌بیند؟" }) })
		]
	});
	if (id === "aerial") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-8 text-ink-soft",
				children: "برای تهیهٔ نقشه از عکس هوایی استفاده می‌کنند. اما عکس، نقشه نیست. ببین چه چیزهایی حذف می‌شوند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AerialCompare, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherNote, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "از کلاس بخواه دو چیز نام ببرند که در عکس هست و در نقشه نیست." }) })
		]
	});
	if (id === "legend") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "mb-3",
					children: "مرحلهٔ اول"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "دوستت را به قایق‌رانی بفرست"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 mb-4 text-sm leading-8 text-ink-soft",
					children: "راهنمای این نقشه دروغ می‌گوید. ببین مشکل از دوستت است یا از راهنما."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendLab, { lying: true })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "pine",
					className: "mb-3",
					children: "مرحلهٔ دوم"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "راهنما را خودتان بسازید"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendLab, {})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherNote, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "کاربرگ شمارهٔ ۴ را بعد از این دو مرحله بده، نه قبل از آن." }) })
		]
	});
	if (id === "letter") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterLab, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "مسیریاب خاموش"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteLab, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherNote, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "دو مسیر مختلف را نگه دار. بپرس چرا این را انتخاب کردی." }) })
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl leading-snug",
					children: "جمله را خود کلاس بسازد. تو از قبل روی تخته ننویس."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-base leading-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "نقشه نگاه از بالاست، نه نقاشی روبرو." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "نقشه ساده است؛ عکس هوایی پر از جزئیات است." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "بدون راهنما نقشه گمراه‌کننده است." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "نقشه برای پیدا کردن جا و راه است." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TeacherNote, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "تکلیف: مسیر خانه تا مدرسه را از بالا بکشند و سه علامت راهنما بگذارند. مسیریاب را فقط نگاه کنند." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "تراکمی: خانهٔ نامه را نشان بدهد و یک جمله بگوید نقشه چه کمکی کرد که عکس نمی‌کرد." })] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownMap, {})]
	});
}
//#endregion
export { TeachPage as component };
