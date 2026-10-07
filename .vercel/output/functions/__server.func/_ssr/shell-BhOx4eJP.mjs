import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, t as X, u as Compass } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-BhOx4eJP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
function faNum(value) {
	return String(value).replace(/\d/g, (digit) => FA_DIGITS[Number(digit)] ?? digit);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/40", {
	variants: {
		variant: {
			default: "bg-pine text-pine-fg hover:bg-pine-deep",
			invert: "bg-ink text-paper hover:bg-ink-soft",
			outline: "border border-line bg-cream text-ink hover:bg-paper-deep",
			ghost: "text-ink-soft hover:bg-paper-deep hover:text-ink",
			warn: "bg-clay text-paper hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var defaultClassroom = [
	{
		id: "board-1",
		kind: "board",
		x: 38,
		y: 6,
		rotation: 0
	},
	{
		id: "teacher-1",
		kind: "teacher-desk",
		x: 42,
		y: 22,
		rotation: 0
	},
	{
		id: "door-1",
		kind: "door",
		x: 4,
		y: 70,
		rotation: 0
	},
	{
		id: "window-1",
		kind: "window",
		x: 20,
		y: 2,
		rotation: 0
	},
	{
		id: "window-2",
		kind: "window",
		x: 62,
		y: 2,
		rotation: 0
	},
	{
		id: "shelf-1",
		kind: "shelf",
		x: 84,
		y: 18,
		rotation: 0
	},
	{
		id: "plant-1",
		kind: "plant",
		x: 86,
		y: 78,
		rotation: 0
	},
	{
		id: "bin-1",
		kind: "bin",
		x: 8,
		y: 18,
		rotation: 0
	},
	{
		id: "desk-1",
		kind: "desk",
		x: 18,
		y: 42,
		rotation: 0
	},
	{
		id: "desk-2",
		kind: "desk",
		x: 42,
		y: 42,
		rotation: 0
	},
	{
		id: "desk-3",
		kind: "desk",
		x: 66,
		y: 42,
		rotation: 0
	},
	{
		id: "desk-4",
		kind: "desk",
		x: 18,
		y: 62,
		rotation: 0
	},
	{
		id: "desk-5",
		kind: "desk",
		x: 42,
		y: 62,
		rotation: 0
	},
	{
		id: "desk-6",
		kind: "desk",
		x: 66,
		y: 62,
		rotation: 0
	}
];
var itemSeq = 0;
var useAppStore = create()(persist((set) => ({
	teacherMode: true,
	setTeacherMode: (value) => set({ teacherMode: value }),
	profile: {
		name: "",
		className: "چهارم",
		studentCount: "",
		date: "",
		duration: "۴۵ دقیقه",
		place: "کلاس درس",
		lessonNo: ""
	},
	setProfile: (patch) => set((state) => ({ profile: {
		...state.profile,
		...patch
	} })),
	classroomItems: defaultClassroom,
	addClassroomItem: (kind) => set((state) => {
		itemSeq += 1;
		return { classroomItems: [...state.classroomItems, {
			id: `${kind}-${itemSeq}`,
			kind,
			x: 40,
			y: 40,
			rotation: 0
		}] };
	}),
	moveClassroomItem: (id, x, y) => set((state) => ({ classroomItems: state.classroomItems.map((item) => item.id === id ? {
		...item,
		x,
		y
	} : item) })),
	rotateClassroomItem: (id) => set((state) => ({ classroomItems: state.classroomItems.map((item) => item.id === id ? {
		...item,
		rotation: (item.rotation + 90) % 360
	} : item) })),
	removeClassroomItem: (id) => set((state) => ({ classroomItems: state.classroomItems.filter((item) => item.id !== id) })),
	resetClassroom: () => set({ classroomItems: defaultClassroom }),
	selectedPlace: null,
	setSelectedPlace: (id) => set({ selectedPlace: id }),
	legendAssignments: {},
	setLegendAssignment: (slot, placeId) => set((state) => ({ legendAssignments: {
		...state.legendAssignments,
		[slot]: placeId
	} })),
	resetLegend: () => set({ legendAssignments: {} }),
	routeStops: [],
	toggleRouteStop: (id) => set((state) => {
		return { routeStops: state.routeStops.includes(id) ? state.routeStops.filter((stop) => stop !== id) : [...state.routeStops, id] };
	}),
	resetRoute: () => set({ routeStops: [] }),
	altitude: 18,
	setAltitude: (value) => set({ altitude: value })
}), {
	name: "bird-eye-lesson",
	skipHydration: true,
	partialize: (state) => ({ profile: state.profile })
}));
var NAV = [
	{
		to: "/",
		label: "خانه"
	},
	{
		to: "/teach",
		label: "اجرای کلاس"
	},
	{
		to: "/plan",
		label: "طرح درس"
	},
	{
		to: "/analysis",
		label: "تحلیل"
	},
	{
		to: "/ideas",
		label: "ایده‌ها"
	},
	{
		to: "/tools",
		label: "ابزارها"
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const teach = pathname.startsWith("/teach");
	(0, import_react.useEffect)(() => {
		useAppStore.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 items-center justify-center rounded-[var(--radius-md)] bg-pine text-pine-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-semibold",
								children: "چشم‌پرنده"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[11px] text-muted",
								children: "درس نقشه · چهارم"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: NAV.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors", active ? "bg-pine/10 text-pine-deep" : "text-ink-soft hover:bg-paper-deep hover:text-ink"),
								children: item.label
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [!teach && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/teach",
							className: cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex"),
							children: "شروع کلاس"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] border border-line md:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": open ? "بستن منو" : "باز کردن منو",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-t border-line px-4 py-3 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-1",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-[var(--radius-md)] px-3 py-3 text-sm hover:bg-paper-deep",
						children: item.label
					}, item.to))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children })]
	});
}
//#endregion
export { faNum as a, cn as i, Shell as n, useAppStore as o, buttonVariants as r, Button as t };
