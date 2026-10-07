import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Compass, Lightbulb, Map, Play } from "lucide-react";
import { Shell } from "@/components/shell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { TownMap } from "@/components/maps/town-map";
import { TEACH_STEPS } from "@/data/lesson";
import { faNum, cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm text-pine-deep">مطالعات اجتماعی · پایه چهارم ابتدایی</p>
            <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">
              چشم‌پرنده
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink-soft">
              استودیوی تدریس درس «نقشه». معلم تسهیل‌گر است، دانش‌آموز مکان را از بالا
              کشف می‌کند. طرح درس رسمی پر شده، فعالیت‌ها غیرکلیشه‌ای است، و ابزارها
              برای همان زنگ ۴۵ دقیقه‌ای روی تخته کار می‌کنند.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/teach" className={cn(buttonVariants({ size: "lg" }))}>
                <Play className="size-4" />
                اجرای کلاس از روی تخته
              </Link>
              <Link
                to="/plan"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                طرح درس آماده
              </Link>
            </div>
          </div>
          <Card>
            <CardBody className="p-4">
              <TownMap />
              <p className="mt-3 text-xs leading-6 text-muted">
                محلهٔ بهار؛ همان نقشه‌ای که در کلاس برای نامه، راهنما و مسیر استفاده می‌شود.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              to: "/teach",
              icon: Play,
              title: "اجرای کلاس",
              text: "نه پرده، به ترتیب کشف. هر پرده زمان، حرف معلم و ابزار دارد.",
            },
            {
              to: "/plan",
              icon: BookOpen,
              title: "طرح درس روزانه",
              text: "فرم دبیرخانه پر شده: اهداف بلوم، عناصر ملی، مراحل قبل و حین و بعد.",
            },
            {
              to: "/analysis",
              icon: Compass,
              title: "تحلیل درس",
              text: "مفاهیم اصلی، بخش‌های سخت، سوءبرداشت‌ها و نوع فعالیت مؤثر.",
            },
            {
              to: "/ideas",
              icon: Lightbulb,
              title: "ایده‌های خلاق",
              text: "هفت موقعیت واقعی؛ بدون مسابقه و گروه‌بندی تزئینی.",
            },
          ].map((item) => (
            <Link key={item.to} to={item.to}>
              <Card className="h-full transition-colors hover:border-pine/30">
                <CardBody>
                  <item.icon className="size-5 text-pine" strokeWidth={1.75} />
                  <h2 className="mt-4 font-display text-2xl">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{item.text}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted">
            <Map className="size-4" />
            سکانس پیشنهادی جلسهٔ {faNum(45)} دقیقه‌ای
          </div>
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {TEACH_STEPS.map((step, i) => (
              <li
                key={step.id}
                className="rounded-[var(--radius-lg)] border border-line bg-cream px-4 py-3"
              >
                <p className="text-xs text-muted">
                  {faNum(i + 1)} · {step.phase} · {faNum(step.minutes)} دقیقه
                </p>
                <p className="mt-1 font-medium">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Shell>
  );
}
