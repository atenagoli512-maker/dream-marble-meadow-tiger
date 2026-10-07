import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./shell-BhOx4eJP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-8wJVUaE2.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", tone === "muted" && "bg-paper-deep text-muted", tone === "pine" && "bg-pine text-pine-fg", tone === "ink" && "bg-ink text-paper", className),
		...props
	});
}
//#endregion
export { Badge as t };
