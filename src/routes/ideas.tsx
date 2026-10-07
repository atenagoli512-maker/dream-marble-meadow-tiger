import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IDEAS } from "@/data/lesson";
import { cn, faNum } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/ideas")({ component: IdeasPage });

function IdeasPage() {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-pine-deep">قابل اجرا در کلاس معمولی</p>
        <h1 className="mt-2 font-display text-4xl">ایده‌های تدریس</h1>
        <p className="mt-4 text-base leading-8 text-ink-soft">
          هیچ‌کدام مسابقه، گروه تزئینی یا «از دانش‌آموز سؤال بپرسید» نیستند. هر ایده
          یک موقعیت است که دانش‌آموز باید مشاهده کند، حذف کند، تصمیم بگیرد یا شکل را
          عوض کند.
        </p>
        <div className="mt-8 space-y-6">
          {IDEAS.map((idea, index) => (
            <Card key={idea.id}>
              <CardBody className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="ink">{faNum(index + 1)}</Badge>
                  <Badge>{idea.minutes}</Badge>
                </div>
                <h2 className="font-display text-3xl">{idea.title}</h2>
                <p className="text-sm leading-8 text-ink-soft">{idea.why}</p>
                <dl className="grid gap-3 text-sm leading-7">
                  <div>
                    <dt className="text-xs text-muted">وسایل</dt>
                    <dd>{idea.materials}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">آماده‌سازی</dt>
                    <dd>{idea.setup}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">چه بگو</dt>
                    <dd>{idea.say}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">دانش‌آموز چه کند</dt>
                    <dd>{idea.do}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">چه نکن</dt>
                    <dd>{idea.avoid}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">به چه گوش بده</dt>
                    <dd>{idea.listen}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">مدیریت کلاس</dt>
                    <dd>{idea.manage}</dd>
                  </div>
                </dl>
              </CardBody>
            </Card>
          ))}
        </div>
        <Link to="/teach" className={cn(buttonVariants(), "mt-8")}>
          همین‌ها را در اجرای کلاس ببین
        </Link>
      </article>
    </Shell>
  );
}
