import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./shell-BhOx4eJP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-C1a7gkDl.js
var import_jsx_runtime = require_jsx_runtime();
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-[var(--radius-xl)] border border-line bg-cream shadow-[var(--shadow-page)]", className),
		...props
	});
}
function CardBody({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-5 sm:p-6", className),
		...props
	});
}
//#endregion
export { CardBody as n, Card as t };
