import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Shell } from "./shell-BhOx4eJP.mjs";
import { n as CardBody, t as Card } from "./card-C1a7gkDl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-CHhPF9YW.js
var import_jsx_runtime = require_jsx_runtime();
var TOOLS = [
	{
		step: "altitude",
		title: "آسانسور نگاه",
		text: "ارتفاع را بالا ببر تا دیوار تبدیل به سقف و سقف تبدیل به نقشه شود."
	},
	{
		step: "views",
		title: "دو نگاه",
		text: "میز، در، درخت و آدم از روبرو و از بالا."
	},
	{
		step: "classroom",
		title: "نقشهٔ کلاس",
		text: "چیدمان از بالا؛ بکش، بچرخان، قطعه اضافه کن."
	},
	{
		step: "aerial",
		title: "عکس هوایی / نقشه",
		text: "همان مکان؛ جزئیات عکس حذف می‌شود و علامت می‌ماند."
	},
	{
		step: "legend",
		title: "نقشهٔ دروغگو",
		text: "راهنمای غلط، بعد ساختن راهنمای درست."
	},
	{
		step: "letter",
		title: "نامه و مسیر",
		text: "پیدا کردن خانه بدون پلاک و مسیر خانه تا مدرسه."
	}
];
function ToolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-pine-deep",
				children: "برای نمایش روی تخته"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "ابزارهای تعاملی"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-8 text-ink-soft",
				children: "هر ابزار داخل اجرای کلاس هم هست. از اینجا مستقیم سراغ همان پرده برو."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: TOOLS.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/teach",
					search: { step: tool.step },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "h-full transition-colors hover:border-pine/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: tool.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-7 text-ink-soft",
							children: tool.text
						})] })
					})
				}, tool.step))
			})
		]
	}) });
}
//#endregion
export { ToolsPage as component };
