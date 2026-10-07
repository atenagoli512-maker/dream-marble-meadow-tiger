import { i as IDEAS } from "./lesson-BTWavtR3.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as faNum, i as cn, n as Shell, r as buttonVariants } from "./shell-BhOx4eJP.mjs";
import { n as CardBody, t as Card } from "./card-C1a7gkDl.mjs";
import { t as Badge } from "./badge-8wJVUaE2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ideas-D47i8Uyj.js
var import_jsx_runtime = require_jsx_runtime();
function IdeasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-pine-deep",
				children: "قابل اجرا در کلاس معمولی"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "ایده‌های تدریس"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-8 text-ink-soft",
				children: "هیچ‌کدام مسابقه، گروه تزئینی یا «از دانش‌آموز سؤال بپرسید» نیستند. هر ایده یک موقعیت است که دانش‌آموز باید مشاهده کند، حذف کند، تصمیم بگیرد یا شکل را عوض کند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-6",
				children: IDEAS.map((idea, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "ink",
								children: faNum(index + 1)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: idea.minutes })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: idea.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-8 text-ink-soft",
							children: idea.why
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-3 text-sm leading-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "وسایل"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: idea.materials })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "آماده‌سازی"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: idea.setup })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "چه بگو"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: idea.say })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "دانش‌آموز چه کند"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: idea.do })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "چه نکن"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: idea.avoid })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "به چه گوش بده"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: idea.listen })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "مدیریت کلاس"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: idea.manage })] })
							]
						})
					]
				}) }, idea.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/teach",
				className: cn(buttonVariants(), "mt-8"),
				children: "همین‌ها را در اجرای کلاس ببین"
			})
		]
	}) });
}
//#endregion
export { IdeasPage as component };
