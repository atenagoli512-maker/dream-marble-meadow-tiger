import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { Card, CardBody } from "@/components/ui/card";
import { CONCEPTS, HARD_PARTS, MISCONCEPTIONS } from "@/data/lesson";
import { faNum } from "@/lib/utils";

export const Route = createFileRoute("/analysis")({ component: AnalysisPage });

function AnalysisPage() {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-pine-deep">خوانش درس از روی کتاب و فرم</p>
        <h1 className="mt-2 font-display text-4xl">تحلیل درس نقشه</h1>
        <p className="mt-4 text-base leading-8 text-ink-soft">
          کتاب چهارم از پرنده شروع می‌کند، به کلاس می‌رسد، عکس هوایی را نشان می‌دهد
          و با راهنما و کاربرد نقشه تمام می‌کند. اگر این مسیر را با تعریف و کاربرگ
          طی کنید، دانش‌آموز شکل را حفظ می‌کند و نگاه را عوض نمی‌کند.
        </p>

        <h2 className="mt-10 font-display text-3xl">آنچه باید واقعاً یاد بگیرد</h2>
        <div className="mt-4 grid gap-3">
          {CONCEPTS.map((item, i) => (
            <Card key={item.title}>
              <CardBody>
                <p className="text-xs text-muted">مفهوم {faNum(i + 1)}</p>
                <h3 className="mt-1 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-8 text-ink-soft">{item.text}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <h2 className="mt-10 font-display text-3xl">کجا سخت یا خسته‌کننده می‌شود</h2>
        <div className="mt-4 space-y-3">
          {HARD_PARTS.map((item) => (
            <Card key={item.title}>
              <CardBody>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-8 text-ink-soft">{item.text}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <h2 className="mt-10 font-display text-3xl">سوءبرداشت‌های رایج</h2>
        <div className="mt-4 space-y-3">
          {MISCONCEPTIONS.map((item) => (
            <div
              key={item.wrong}
              className="grid gap-2 rounded-[var(--radius-xl)] border border-line bg-cream p-4 sm:grid-cols-2"
            >
              <p className="text-sm leading-7">
                <span className="block text-xs text-clay">گمان می‌کند</span>
                {item.wrong}
              </p>
              <p className="text-sm leading-7">
                <span className="block text-xs text-pine-deep">باید برسد به</span>
                {item.right}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-display text-3xl">چه نوع فعالیتی می‌گیرد</h2>
        <Card className="mt-4">
          <CardBody className="space-y-3 text-sm leading-8 text-ink-soft">
            <p>
              بیشترین اثر را فعالیتی دارد که نگاه را جابه‌جا کند، بعد دانش‌آموز را
              مجبور کند با نقشه تصمیم بگیرد. تعریف نقشه، مسابقه، و «بچه‌ها را گروه
              کنید» این کار را نمی‌کنند.
            </p>
            <p>
              ترتیب مؤثر همان ترتیب کتاب است اما با تجربه: اول ارتفاع نگاه، بعد تبدیل
              شیء واقعی به شکل ازبالا، بعد ساخت نقشهٔ کلاس قطعه به قطعه، بعد دیدن اینکه
              عکس هوایی نقشه نیست، بعد شکست روی راهنمای غلط، بعد پیدا کردن مکان و مسیر.
            </p>
            <p>
              معلم در این درس پاسخ نمی‌دهد. موقعیت می‌سازد، هفت ثانیه صبر می‌کند، و
              سؤال را به مشاهده برمی‌گرداند: «از سقف پا را می‌بینی؟»
            </p>
          </CardBody>
        </Card>
      </article>
    </Shell>
  );
}
