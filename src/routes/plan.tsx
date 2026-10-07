import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { OBJECTIVES } from "@/data/lesson";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/plan")({ component: PlanPage });

function Field({
  label,
  value,
  onChange,
  readOnly,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  readOnly?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-xs text-muted">{label}</span>
      <input
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-11 rounded-[var(--radius-md)] border border-line bg-cream px-3"
      />
    </label>
  );
}

function PlanPage() {
  const profile = useAppStore((s) => s.profile);
  const setProfile = useAppStore((s) => s.setProfile);

  return (
    <Shell>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <div className="no-print mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm text-pine-deep">فرم طرح درس روزانه</p>
            <h1 className="mt-1 font-display text-4xl">طرح درس درس نقشه</h1>
          </div>
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="size-4" />
            چاپ
          </Button>
        </div>

        <Card>
          <CardBody className="space-y-4">
            <p className="text-center text-sm font-medium">
              دبیرخانه کشوری راهبری درس مطالعات اجتماعی
            </p>
            <p className="text-center font-display text-3xl">طرح درس روزانه درس نقشه</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Field label="شماره طرح درس" value={profile.lessonNo} onChange={(v) => setProfile({ lessonNo: v })} />
              <Field label="موضوع درس" value="نقشه" readOnly />
              <Field label="تاریخ اجرا" value={profile.date} onChange={(v) => setProfile({ date: v })} />
              <Field label="مدت اجرا" value={profile.duration} onChange={(v) => setProfile({ duration: v })} />
              <Field label="مجری" value={profile.name} onChange={(v) => setProfile({ name: v })} />
              <Field label="کلاس" value={profile.className} onChange={(v) => setProfile({ className: v })} />
              <Field label="تعداد فراگیران" value={profile.studentCount} onChange={(v) => setProfile({ studentCount: v })} />
              <Field label="مکان" value={profile.place} onChange={(v) => setProfile({ place: v })} />
            </div>
          </CardBody>
        </Card>

        <section className="mt-8 space-y-4">
          <h2 className="font-display text-3xl">الف. قبل از تدریس</h2>
          <Card>
            <CardBody className="space-y-3 text-sm leading-8">
              <p>
                <strong>هدف کلی:</strong> دانش‌آموز بفهمد نقشه بازنمایی ساده‌شدهٔ یک مکان از
                بالاست و بتواند با راهنما مکان و مسیر را پیدا کند.
              </p>
              <p>
                <strong>اهداف مرحله‌ای:</strong> تشخیص تفاوت نگاه روبرو و بالا؛ ترسیم نقشهٔ
                کلاس؛ تمایز عکس هوایی و نقشه؛ خواندن راهنما؛ به‌کارگیری نقشه در یک موقعیت واقعی.
              </p>
            </CardBody>
          </Card>
          <div className="overflow-x-auto rounded-[var(--radius-xl)] border border-line">
            <table className="w-full min-w-[640px] text-right text-sm">
              <thead className="bg-paper-deep">
                <tr>
                  <th className="p-3 font-medium">هدف رفتاری</th>
                  <th className="p-3 font-medium">حیطه بلوم</th>
                  <th className="p-3 font-medium">عنصر ملی</th>
                  <th className="p-3 font-medium">عرصه</th>
                </tr>
              </thead>
              <tbody>
                {OBJECTIVES.map((row) => (
                  <tr key={row.text} className="border-t border-line align-top">
                    <td className="p-3 leading-7">{row.text}</td>
                    <td className="p-3">{row.bloom}</td>
                    <td className="p-3">{row.element}</td>
                    <td className="p-3">{row.arena}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-4 text-sm leading-8">
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">رئوس مطالب</h3>
              <p className="mt-2">
                نگاه پرنده؛ تفاوت تصویر روبرو و بالا؛ نقشهٔ کلاس؛ عکس هوایی و تهیهٔ نقشه؛
                کاربرد نقشه در پیدا کردن مکان؛ راهنمای نقشه؛ مسیر خانه تا مدرسه.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">مواد و رسانه‌ها</h3>
              <p className="mt-2">
                کتاب مطالعات اجتماعی چهارم، کاربرگ ۳ و ۴، کاغذ بزرگ برای نقشهٔ کلاس، جعبهٔ
                کفش یا یک صندلی واقعی، این استودیو روی تخته هوشمند یا لپ‌تاپ، ماژیک.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">پیش‌بینی رفتار ورودی</h3>
              <p className="mt-2">
                سال گذشته با نقشهٔ خانه و مدرسه و وجود راهنما آشنا شده‌اند. احتمالاً نقشه را
                نقاشی می‌دانند و ساختمان را با در و پنجره می‌کشند.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">ایجاد ارتباط اولیه · ۴ دقیقه</h3>
              <p className="mt-2">
                داستان کیف گمشدهٔ سارا. معلم تعریف نقشه را نمی‌گوید. کلاس رد بو و صدا را روی
                نقشه دنبال می‌کند.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">ساختار کلاس</h3>
              <p className="mt-2">
                دایرهٔ کوتاه برای داستان. جفت مشاهده برای صندلی از سقف (چهار نفر ایستاده، بقیه
                نشسته). ترسیم نقشهٔ کلاس فردی است که قطعه‌ها بعداً سرهم می‌شوند. از گروه رقابتی
                استفاده نمی‌شود.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">روش ایجاد و تداوم انگیزه · متناوب</h3>
              <p className="mt-2">
                موقعیت مسئله، نه جایزه. هر بار که نگاه عوض می‌شود یا راهنما دروغ می‌گوید، انگیزه
                از خود مسئله می‌آید.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">ارزشیابی آغازین · ۳ دقیقه</h3>
              <p className="mt-2">
                یک صندلی را نشان بده و بپرس: اگر بخواهیم جای این صندلی را روی کاغذ به کسی بگوییم
                که اینجا نیست، کدام نگاه را باید بکشیم؟ پاسخ را ننویس؛ بعداً به آن برگرد.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">روش تدریس</h3>
              <p className="mt-2">
                اکتشافی تسهیل‌گرانه. معلم سخنرانی نمی‌کند، موقعیت می‌سازد، صبر می‌کند، سؤال را به
                مشاهده برمی‌گرداند.
              </p>
            </CardBody>
          </Card>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-8">
          <h2 className="font-display text-3xl">ب. حین تدریس</h2>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">آماده‌سازی · ۳ دقیقه</h3>
              <p className="mt-2">
                معلم: اسلایدر ارتفاع را نشان می‌دهد. دانش‌آموز: یک شیء کلاس را انتخاب می‌کند تا
                هنگام بالا رفتن نگاه آن را دنبال کند.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">ارائهٔ درس جدید</h3>
              <p className="mt-2">
                فعالیت‌ها تلفیقی است. معلم نگاه را بالا می‌برد، صندلی واقعی را وسط می‌گذارد، کاغذ
                دیوارهای کلاس را پهن می‌کند، نقشهٔ دروغگو را می‌آورد. دانش‌آموز شکل ازبالا را
                می‌سازد، قطعهٔ خودش را می‌چسباند، راهنمای غلط را لو می‌دهد، نامه را رمزگشایی می‌کند.
                تفکیک معلم/دانش‌آموز به‌صورت دو ستون جدا معنا ندارد.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">فعالیت خلاقانه</h3>
              <p className="mt-2">
                «من یک قطعهٔ نقشه‌ام» و «نامه بدون پلاک». دانش‌آموز شکل را اختراع نمی‌کند از روی
                خیال؛ قرارداد نگاه از بالا را روی مکان واقعی خودش اعمال می‌کند.
              </p>
            </CardBody>
          </Card>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-8">
          <h2 className="font-display text-3xl">ج. فعالیت‌های تکمیلی</h2>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">ارزشیابی</h3>
              <p className="mt-2">
                تکوینی در طول تدریس: آیا میز هنوز پا دارد؟ آیا مسیر از روی دریاچه می‌رود؟ تراکمی
                در پایان: با راهنما خانهٔ نامه را پیدا کند و یک جمله بگوید نقشه چه کمکی کرد که عکس
                نمی‌کرد.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">جمع‌بندی و ساخت دانش جدید</h3>
              <p className="mt-2">
                جمله را خود کلاس بسازد: نقشه نگاه از بالاست، ساده است، و بدون راهنما کار نمی‌کند.
                معلم جمع‌بندی را از قبل روی تخته ننویسد.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">تکلیف و اقدام بعدی</h3>
              <p className="mt-2">
                با کمک بزرگ‌تر، مسیر خانه تا مدرسه را روی یک کاغذ از بالا بکشند؛ سه علامت راهنما
                بگذارند. اگر مسیریاب دارند فقط نگاه کنند، کپی نکنند. فردا بگویند مسیریاب چه چیزی
                اضافه می‌کند که کاغذ ندارد.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-display text-2xl">معرفی منابع</h3>
              <p className="mt-2">
                کتاب مطالعات اجتماعی چهارم؛ کاربرگ ۳ و ۴؛ نقشهٔ سادهٔ محله؛ گفت‌وگو با خانواده دربارهٔ
                مسیر روزانه.
              </p>
            </CardBody>
          </Card>
        </section>
      </article>
    </Shell>
  );
}
