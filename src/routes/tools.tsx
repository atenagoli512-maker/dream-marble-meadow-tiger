import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { Card, CardBody } from "@/components/ui/card";
import type { TeachStepId } from "@/data/lesson";

export const Route = createFileRoute("/tools")({ component: ToolsPage });

const TOOLS: { step: TeachStepId; title: string; text: string }[] = [
  {
    step: "altitude",
    title: "آسانسور نگاه",
    text: "ارتفاع را بالا ببر تا دیوار تبدیل به سقف و سقف تبدیل به نقشه شود.",
  },
  {
    step: "views",
    title: "دو نگاه",
    text: "میز، در، درخت و آدم از روبرو و از بالا.",
  },
  {
    step: "classroom",
    title: "نقشهٔ کلاس",
    text: "چیدمان از بالا؛ بکش، بچرخان، قطعه اضافه کن.",
  },
  {
    step: "aerial",
    title: "عکس هوایی / نقشه",
    text: "همان مکان؛ جزئیات عکس حذف می‌شود و علامت می‌ماند.",
  },
  {
    step: "legend",
    title: "نقشهٔ دروغگو",
    text: "راهنمای غلط، بعد ساختن راهنمای درست.",
  },
  {
    step: "letter",
    title: "نامه و مسیر",
    text: "پیدا کردن خانه بدون پلاک و مسیر خانه تا مدرسه.",
  },
];

function ToolsPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-sm text-pine-deep">برای نمایش روی تخته</p>
        <h1 className="mt-2 font-display text-4xl">ابزارهای تعاملی</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-ink-soft">
          هر ابزار داخل اجرای کلاس هم هست. از اینجا مستقیم سراغ همان پرده برو.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link key={tool.step} to="/teach" search={{ step: tool.step }}>
              <Card className="h-full transition-colors hover:border-pine/30">
                <CardBody>
                  <h2 className="font-display text-2xl">{tool.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{tool.text}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}
