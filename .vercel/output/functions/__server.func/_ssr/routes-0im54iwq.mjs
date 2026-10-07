import { c as TEACH_STEPS } from "./lesson-BTWavtR3.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Play, o as Map, p as BookOpen, s as Lightbulb, u as Compass } from "../_libs/lucide-react.mjs";
import { a as faNum, i as cn, n as Shell, r as buttonVariants } from "./shell-BhOx4eJP.mjs";
import { n as CardBody, t as Card } from "./card-C1a7gkDl.mjs";
import { i as TownMap } from "./town-map-C6fkojUH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0im54iwq.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-pine-deep",
						children: "مطالعات اجتماعی · پایه چهارم ابتدایی"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl leading-none sm:text-6xl",
						children: "چشم‌پرنده"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-8 text-ink-soft",
						children: "استودیوی تدریس درس «نقشه». معلم تسهیل‌گر است، دانش‌آموز مکان را از بالا کشف می‌کند. طرح درس رسمی پر شده، فعالیت‌ها غیرکلیشه‌ای است، و ابزارها برای همان زنگ ۴۵ دقیقه‌ای روی تخته کار می‌کنند."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/teach",
							className: cn(buttonVariants({ size: "lg" })),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "اجرای کلاس از روی تخته"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/plan",
							className: cn(buttonVariants({
								variant: "outline",
								size: "lg"
							})),
							children: "طرح درس آماده"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownMap, { showLabels: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-6 text-muted",
						children: "محلهٔ بهار؛ همان نقشه‌ای که در کلاس برای نامه، راهنما و مسیر استفاده می‌شود."
					})]
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						to: "/teach",
						icon: Play,
						title: "اجرای کلاس",
						text: "نه پرده، به ترتیب کشف. هر پرده زمان، حرف معلم و ابزار دارد."
					},
					{
						to: "/plan",
						icon: BookOpen,
						title: "طرح درس روزانه",
						text: "فرم دبیرخانه پر شده: اهداف بلوم، عناصر ملی، مراحل قبل و حین و بعد."
					},
					{
						to: "/analysis",
						icon: Compass,
						title: "تحلیل درس",
						text: "مفاهیم اصلی، بخش‌های سخت، سوءبرداشت‌ها و نوع فعالیت مؤثر."
					},
					{
						to: "/ideas",
						icon: Lightbulb,
						title: "ایده‌های خلاق",
						text: "هفت موقعیت واقعی؛ بدون مسابقه و گروه‌بندی تزئینی."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "h-full transition-colors hover:border-pine/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-5 text-pine",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-2xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7 text-ink-soft",
								children: item.text
							})
						] })
					})
				}, item.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { className: "size-4" }),
						"سکانس پیشنهادی جلسهٔ ",
						faNum(45),
						" دقیقه‌ای"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
					children: TEACH_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-[var(--radius-lg)] border border-line bg-cream px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								faNum(i + 1),
								" · ",
								step.phase,
								" · ",
								faNum(step.minutes),
								" دقیقه"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: step.title
						})]
					}, step.id))
				})]
			})
		]
	}) });
}
//#endregion
export { Home as component };
