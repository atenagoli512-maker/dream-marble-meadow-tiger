import { o as OBJECTIVES } from "./lesson-BTWavtR3.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Printer } from "../_libs/lucide-react.mjs";
import { n as Shell, o as useAppStore, t as Button } from "./shell-BhOx4eJP.mjs";
import { n as CardBody, t as Card } from "./card-C1a7gkDl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plan-yaK-J08_.js
var import_jsx_runtime = require_jsx_runtime();
function Field({ label, value, onChange, readOnly }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			readOnly,
			onChange: (e) => onChange?.(e.target.value),
			className: "h-11 rounded-[var(--radius-md)] border border-line bg-cream px-3"
		})]
	});
}
function PlanPage() {
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mb-6 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-pine-deep",
					children: "فرم طرح درس روزانه"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-4xl",
					children: "طرح درس درس نقشه"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "چاپ"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm font-medium",
						children: "دبیرخانه کشوری راهبری درس مطالعات اجتماعی"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center font-display text-3xl",
						children: "طرح درس روزانه درس نقشه"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "شماره طرح درس",
								value: profile.lessonNo,
								onChange: (v) => setProfile({ lessonNo: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "موضوع درس",
								value: "نقشه",
								readOnly: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "تاریخ اجرا",
								value: profile.date,
								onChange: (v) => setProfile({ date: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "مدت اجرا",
								value: profile.duration,
								onChange: (v) => setProfile({ duration: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "مجری",
								value: profile.name,
								onChange: (v) => setProfile({ name: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "کلاس",
								value: profile.className,
								onChange: (v) => setProfile({ className: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "تعداد فراگیران",
								value: profile.studentCount,
								onChange: (v) => setProfile({ studentCount: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "مکان",
								value: profile.place,
								onChange: (v) => setProfile({ place: v })
							})
						]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "الف. قبل از تدریس"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, {
						className: "space-y-3 text-sm leading-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "هدف کلی:" }), " دانش‌آموز بفهمد نقشه بازنمایی ساده‌شدهٔ یک مکان از بالاست و بتواند با راهنما مکان و مسیر را پیدا کند."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "اهداف مرحله‌ای:" }), " تشخیص تفاوت نگاه روبرو و بالا؛ ترسیم نقشهٔ کلاس؛ تمایز عکس هوایی و نقشه؛ خواندن راهنما؛ به‌کارگیری نقشه در یک موقعیت واقعی."] })]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-[var(--radius-xl)] border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] text-right text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-paper-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "هدف رفتاری"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "حیطه بلوم"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "عنصر ملی"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "عرصه"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: OBJECTIVES.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3 leading-7",
										children: row.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: row.bloom
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: row.element
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: row.arena
									})
								]
							}, row.text)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-4 text-sm leading-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "رئوس مطالب"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "نگاه پرنده؛ تفاوت تصویر روبرو و بالا؛ نقشهٔ کلاس؛ عکس هوایی و تهیهٔ نقشه؛ کاربرد نقشه در پیدا کردن مکان؛ راهنمای نقشه؛ مسیر خانه تا مدرسه."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "مواد و رسانه‌ها"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "کتاب مطالعات اجتماعی چهارم، کاربرگ ۳ و ۴، کاغذ بزرگ برای نقشهٔ کلاس، جعبهٔ کفش یا یک صندلی واقعی، این استودیو روی تخته هوشمند یا لپ‌تاپ، ماژیک."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "پیش‌بینی رفتار ورودی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "سال گذشته با نقشهٔ خانه و مدرسه و وجود راهنما آشنا شده‌اند. احتمالاً نقشه را نقاشی می‌دانند و ساختمان را با در و پنجره می‌کشند."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "ایجاد ارتباط اولیه · ۴ دقیقه"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "داستان کیف گمشدهٔ سارا. معلم تعریف نقشه را نمی‌گوید. کلاس رد بو و صدا را روی نقشه دنبال می‌کند."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "ساختار کلاس"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "دایرهٔ کوتاه برای داستان. جفت مشاهده برای صندلی از سقف (چهار نفر ایستاده، بقیه نشسته). ترسیم نقشهٔ کلاس فردی است که قطعه‌ها بعداً سرهم می‌شوند. از گروه رقابتی استفاده نمی‌شود."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "روش ایجاد و تداوم انگیزه · متناوب"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "موقعیت مسئله، نه جایزه. هر بار که نگاه عوض می‌شود یا راهنما دروغ می‌گوید، انگیزه از خود مسئله می‌آید."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "ارزشیابی آغازین · ۳ دقیقه"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "یک صندلی را نشان بده و بپرس: اگر بخواهیم جای این صندلی را روی کاغذ به کسی بگوییم که اینجا نیست، کدام نگاه را باید بکشیم؟ پاسخ را ننویس؛ بعداً به آن برگرد."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "روش تدریس"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "اکتشافی تسهیل‌گرانه. معلم سخنرانی نمی‌کند، موقعیت می‌سازد، صبر می‌کند، سؤال را به مشاهده برمی‌گرداند."
					})] }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-4 text-sm leading-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "ب. حین تدریس"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "آماده‌سازی · ۳ دقیقه"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "معلم: اسلایدر ارتفاع را نشان می‌دهد. دانش‌آموز: یک شیء کلاس را انتخاب می‌کند تا هنگام بالا رفتن نگاه آن را دنبال کند."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "ارائهٔ درس جدید"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "فعالیت‌ها تلفیقی است. معلم نگاه را بالا می‌برد، صندلی واقعی را وسط می‌گذارد، کاغذ دیوارهای کلاس را پهن می‌کند، نقشهٔ دروغگو را می‌آورد. دانش‌آموز شکل ازبالا را می‌سازد، قطعهٔ خودش را می‌چسباند، راهنمای غلط را لو می‌دهد، نامه را رمزگشایی می‌کند. تفکیک معلم/دانش‌آموز به‌صورت دو ستون جدا معنا ندارد."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "فعالیت خلاقانه"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "«من یک قطعهٔ نقشه‌ام» و «نامه بدون پلاک». دانش‌آموز شکل را اختراع نمی‌کند از روی خیال؛ قرارداد نگاه از بالا را روی مکان واقعی خودش اعمال می‌کند."
					})] }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-4 text-sm leading-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "ج. فعالیت‌های تکمیلی"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "ارزشیابی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "تکوینی در طول تدریس: آیا میز هنوز پا دارد؟ آیا مسیر از روی دریاچه می‌رود؟ تراکمی در پایان: با راهنما خانهٔ نامه را پیدا کند و یک جمله بگوید نقشه چه کمکی کرد که عکس نمی‌کرد."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "جمع‌بندی و ساخت دانش جدید"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "جمله را خود کلاس بسازد: نقشه نگاه از بالاست، ساده است، و بدون راهنما کار نمی‌کند. معلم جمع‌بندی را از قبل روی تخته ننویسد."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "تکلیف و اقدام بعدی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "با کمک بزرگ‌تر، مسیر خانه تا مدرسه را روی یک کاغذ از بالا بکشند؛ سه علامت راهنما بگذارند. اگر مسیریاب دارند فقط نگاه کنند، کپی نکنند. فردا بگویند مسیریاب چه چیزی اضافه می‌کند که کاغذ ندارد."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: "معرفی منابع"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "کتاب مطالعات اجتماعی چهارم؛ کاربرگ ۳ و ۴؛ نقشهٔ سادهٔ محله؛ گفت‌وگو با خانواده دربارهٔ مسیر روزانه."
					})] }) })
				]
			})
		]
	}) });
}
//#endregion
export { PlanPage as component };
