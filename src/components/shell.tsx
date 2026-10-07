import { Link, useRouterState } from "@tanstack/react-router";
import { Compass, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";

const NAV = [
  { to: "/", label: "خانه" },
  { to: "/teach", label: "اجرای کلاس" },
  { to: "/plan", label: "طرح درس" },
  { to: "/analysis", label: "تحلیل" },
  { to: "/ideas", label: "ایده‌ها" },
  { to: "/tools", label: "ابزارها" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const teach = pathname.startsWith("/teach");

  useEffect(() => {
    void useAppStore.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-[var(--radius-md)] bg-pine text-pine-fg">
              <Compass className="size-5" strokeWidth={1.75} />
            </span>
            <span className="leading-none">
              <span className="font-display text-xl font-semibold">چشم‌پرنده</span>
              <span className="mt-0.5 block text-[11px] text-muted">درس نقشه · چهارم</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-pine/10 text-pine-deep"
                      : "text-ink-soft hover:bg-paper-deep hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            {!teach && (
              <Link
                to="/teach"
                className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
              >
                شروع کلاس
              </Link>
            )}
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] border border-line md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "بستن منو" : "باز کردن منو"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-line px-4 py-3 md:hidden">
            <div className="grid gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-[var(--radius-md)] px-3 py-3 text-sm hover:bg-paper-deep"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
