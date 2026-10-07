import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TeacherNote } from "@/components/teacher-note";
import { AltitudeScene } from "@/components/maps/altitude-scene";
import { ObjectViews } from "@/components/maps/object-views";
import { ClassroomMap } from "@/components/maps/classroom-map";
import { AerialCompare } from "@/components/maps/aerial-compare";
import { LegendLab } from "@/components/maps/legend-lab";
import { LetterLab } from "@/components/maps/letter-lab";
import { RouteLab } from "@/components/maps/route-lab";
import { TownMap } from "@/components/maps/town-map";
import { TEACH_STEPS, type TeachStepId } from "@/data/lesson";
import { useAppStore } from "@/lib/store";
import { faNum } from "@/lib/utils";

const STEP_IDS: TeachStepId[] = TEACH_STEPS.map((s) => s.id);

type TeachSearch = { step?: TeachStepId };

export const Route = createFileRoute("/teach")({
  validateSearch: (s: Record<string, unknown>): TeachSearch => {
    if (STEP_IDS.includes(s.step as TeachStepId)) {
      return { step: s.step as TeachStepId };
    }
    return {};
  },
  component: TeachPage,
});

function TeachPage() {
  const search = Route.useSearch();
  const step = search.step ?? "hook";
  const navigate = Route.useNavigate();
  const teacherMode = useAppStore((s) => s.teacherMode);
  const setTeacherMode = useAppStore((s) => s.setTeacherMode);
  const index = TEACH_STEPS.findIndex((s) => s.id === step);
  const meta = TEACH_STEPS[index] ?? TEACH_STEPS[0];
  const safeIndex = index < 0 ? 0 : index;

  function go(next: number) {
    const target = TEACH_STEPS[Math.max(0, Math.min(TEACH_STEPS.length - 1, next))];
    if (target) void navigate({ search: { step: target.id } });
  }

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs text-muted">
              پردهٔ {faNum(safeIndex + 1)} از {faNum(TEACH_STEPS.length)} · {meta.phase}{" "}
              · {faNum(meta.minutes)} دقیقه
            </p>
            <h1 className="font-display text-4xl">{meta.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTeacherMode(!teacherMode)}
            >
              {teacherMode ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              {teacherMode ? "حالت تخته" : "یادداشت معلم"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => go(safeIndex - 1)}
              disabled={safeIndex === 0}
            >
              <ChevronRight className="size-4" />
              قبلی
            </Button>
            <Button
              size="sm"
              onClick={() => go(safeIndex + 1)}
              disabled={safeIndex === TEACH_STEPS.length - 1}
            >
              بعدی
              <ChevronLeft className="size-4" />
            </Button>
          </div>
        </div>
        <ol className="no-print mb-6 flex gap-1 overflow-x-auto">
          {TEACH_STEPS.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => go(i)}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  s.id === step ? "bg-ink text-paper" : "bg-paper-deep text-muted"
                }`}
              >
                {s.title}
              </button>
            </li>
          ))}
        </ol>
        <StepBody id={step} />
      </div>
    </Shell>
  );
}

function StepBody({ id }: { id: TeachStepId }) {
  if (id === "hook") {
    return (
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="font-display text-3xl leading-snug">
            سارا کیفش را گم کرده. فقط چیزهایی را که دیده و شنیده به خاطر دارد.
          </p>
          <ul className="space-y-2 text-base leading-8">
            <li>اول بوی نانوایی آمد.</li>
            <li>بعد صدای آب شنید.</li>
            <li>بعد رسید جایی که بچه‌ها توپ می‌زدند. کیف آنجا ماند.</li>
          </ul>
          <TeacherNote>
            <p>تعریف نقشه را نگو. بپرس: رد حرف سارا روی نقشه کجاست؟</p>
            <p>مسابقه نگذار. از اولین انگشت دلیل بخواه.</p>
          </TeacherNote>
        </div>
        <TownMap highlights={["bakery", "lake", "soccer"]} />
      </div>
    );
  }
  if (id === "altitude") {
    return (
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <AltitudeScene />
        <TeacherNote>
          <p>حرف «نقشه یعنی از بالا» را نگو. بپرس پاهای میز کجا رفت.</p>
          <p>اگر جعبهٔ کفش داری، اول از بغل نشان بده، بعد از سقف.</p>
        </TeacherNote>
      </div>
    );
  }
  if (id === "views") {
    return (
      <div className="space-y-5">
        <p className="text-base leading-8 text-ink-soft">
          تصویر اشیا از روبرو با تصویر آن‌ها از بالا چه تفاوتی دارد؟ اول صندلی واقعی کلاس را
          وسط بگذار، بعد این شکل‌ها را ببین.
        </p>
        <ObjectViews />
        <TeacherNote>
          <p>فقط چهار نفر خم شوند و از بالا به صندلی نگاه کنند. بقیه از جا می‌بینند.</p>
        </TeacherNote>
      </div>
    );
  }
  if (id === "classroom") {
    return (
      <div className="space-y-5">
        <p className="text-base leading-8 text-ink-soft">
          تصور کنید از سقف به کلاس نگاه می‌کنید. هر کس مسئول یک قطعه است؛ کل کلاس را یک‌نفره
          نقاشی نکنید.
        </p>
        <ClassroomMap />
        <TeacherNote>
          <p>اگر میز پا داشت، نگو غلط است. بپرس مگس روی سقف پا را می‌بیند؟</p>
        </TeacherNote>
      </div>
    );
  }
  if (id === "aerial") {
    return (
      <div className="space-y-5">
        <p className="text-base leading-8 text-ink-soft">
          برای تهیهٔ نقشه از عکس هوایی استفاده می‌کنند. اما عکس، نقشه نیست. ببین چه چیزهایی
          حذف می‌شوند.
        </p>
        <AerialCompare />
        <TeacherNote>
          <p>از کلاس بخواه دو چیز نام ببرند که در عکس هست و در نقشه نیست.</p>
        </TeacherNote>
      </div>
    );
  }
  if (id === "legend") {
    return (
      <div className="space-y-8">
        <div>
          <Badge className="mb-3">مرحلهٔ اول</Badge>
          <h2 className="font-display text-3xl">دوستت را به قایق‌رانی بفرست</h2>
          <p className="mt-2 mb-4 text-sm leading-8 text-ink-soft">
            راهنمای این نقشه دروغ می‌گوید. ببین مشکل از دوستت است یا از راهنما.
          </p>
          <LegendLab lying />
        </div>
        <div>
          <Badge tone="pine" className="mb-3">
            مرحلهٔ دوم
          </Badge>
          <h2 className="font-display text-3xl">راهنما را خودتان بسازید</h2>
          <div className="mt-4">
            <LegendLab />
          </div>
        </div>
        <TeacherNote>
          <p>کاربرگ شمارهٔ ۴ را بعد از این دو مرحله بده، نه قبل از آن.</p>
        </TeacherNote>
      </div>
    );
  }
  if (id === "letter") {
    return (
      <div className="grid gap-8 lg:grid-cols-2">
        <LetterLab />
        <div className="space-y-4">
          <h2 className="font-display text-3xl">مسیریاب خاموش</h2>
          <RouteLab />
          <TeacherNote>
            <p>دو مسیر مختلف را نگه دار. بپرس چرا این را انتخاب کردی.</p>
          </TeacherNote>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="space-y-4">
        <p className="font-display text-3xl leading-snug">
          جمله را خود کلاس بسازد. تو از قبل روی تخته ننویس.
        </p>
        <ul className="space-y-3 text-base leading-8">
          <li>نقشه نگاه از بالاست، نه نقاشی روبرو.</li>
          <li>نقشه ساده است؛ عکس هوایی پر از جزئیات است.</li>
          <li>بدون راهنما نقشه گمراه‌کننده است.</li>
          <li>نقشه برای پیدا کردن جا و راه است.</li>
        </ul>
        <TeacherNote>
          <p>
            تکلیف: مسیر خانه تا مدرسه را از بالا بکشند و سه علامت راهنما بگذارند. مسیریاب را
            فقط نگاه کنند.
          </p>
          <p>
            تراکمی: خانهٔ نامه را نشان بدهد و یک جمله بگوید نقشه چه کمکی کرد که عکس نمی‌کرد.
          </p>
        </TeacherNote>
      </div>
      <TownMap />
    </div>
  );
}
