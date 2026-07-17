import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Leaf,
  ShieldCheck,
  Lock,
  Check,
  Menu,
  Waves,
  Flame,
  Brain,
  Calendar,
  Activity,
  MessageCircle,
  Users,
  Eye,
  Fingerprint,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumid — An Emotional Operating System" },
      {
        name: "description",
        content:
          "Lumid is an Emotional Operating System — an AI that understands your patterns, builds recovery plans, and remembers your growth.",
      },
    ],
  }),
  component: Home,
});

/* ============================================================ */
/*  Primitives                                                   */
/* ============================================================ */

function Eyebrow({ children, tone = "forest" }: { children: React.ReactNode; tone?: "forest" | "amber" | "sky" | "coral" }) {
  const dot: Record<string, string> = {
    forest: "bg-leaf shadow-[0_0_0_5px_rgba(111,181,140,0.18)]",
    amber: "bg-amber shadow-[0_0_0_5px_rgba(244,184,96,0.22)]",
    sky: "bg-sky shadow-[0_0_0_5px_rgba(127,184,230,0.22)]",
    coral: "bg-coral shadow-[0_0_0_5px_rgba(240,138,110,0.22)]",
  };
  return (
    <div className="inline-flex items-center gap-2.5 eyebrow">
      <span className={`relative inline-block h-1.5 w-1.5 rounded-full ${dot[tone]}`} />
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  italic,
  sub,
  tone = "forest",
}: {
  eyebrow: string;
  title: React.ReactNode;
  italic?: React.ReactNode;
  sub?: React.ReactNode;
  tone?: "forest" | "amber" | "sky" | "coral";
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[32px] leading-[1.05] tracking-tight sm:text-[40px] md:text-[56px]">
        {title}
        {italic ? (
          <>
            {" "}
            <span className="font-editorial text-gradient-forest">{italic}</span>
          </>
        ) : null}
      </h2>
      {sub ? (
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-graphite/65 sm:text-[17px]">{sub}</p>
      ) : null}
    </div>
  );
}

function TrustPill({ icon: Icon, label }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/12 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-graphite/75 backdrop-blur">
      <Icon size={12} strokeWidth={1.75} className="text-forest" />
      {label}
    </span>
  );
}

/* ============================================================ */
/*  Nav                                                          */
/* ============================================================ */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:py-5">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-forest to-forest-deep text-warm shadow-[0_8px_18px_-8px_rgba(27,94,70,0.7)]">
            <Leaf size={14} strokeWidth={1.8} />
          </div>
          <span className="text-[18px] font-semibold tracking-tight text-graphite">Lumid</span>
        </a>
        <nav className="hidden items-center gap-8 text-[14px] text-graphite/70 md:flex">
          <a href="#product" className="hover:text-graphite">Product</a>
          <a href="#clinic" className="hover:text-graphite">Clinicians</a>
          <a href="#privacy" className="hover:text-graphite">Privacy</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#start" className="btn-primary shine text-[13px] md:text-[14px]">
            Try Lumid
            <ArrowUpRight size={14} strokeWidth={1.9} />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white/80 text-graphite md:hidden"
          >
            <Menu size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>
      {open ? (
        <div className="mx-4 mb-3 rounded-2xl border border-forest/10 bg-white/95 p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-3 text-[15px] text-graphite/80">
            <a href="#product" onClick={() => setOpen(false)}>Product</a>
            <a href="#clinic" onClick={() => setOpen(false)}>Clinicians</a>
            <a href="#privacy" onClick={() => setOpen(false)}>Privacy</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/* ============================================================ */
/*  1. HERO — live product experience                            */
/* ============================================================ */

const HERO_STEPS = [
  {
    tag: "You said",
    tagTone: "graphite",
    body: "I keep putting off the report. I don't know why.",
    hint: "Tuesday, 9:41",
  },
  {
    tag: "Lumid noticed",
    tagTone: "forest",
    body: "This is the third avoidance around evaluative tasks this month.",
    hint: "Pattern detected",
  },
  {
    tag: "Recovery plan",
    tagTone: "amber",
    body: "8 minutes. Open the doc. Write one messy paragraph. Close.",
    hint: "For today",
  },
  {
    tag: "One week later",
    tagTone: "sky",
    body: "You showed up 5 of 7 days. Avoidance dropped by 42%.",
    hint: "Progress",
  },
] as const;

function useAutoStep(length: number, delay = 2600) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % length), delay);
    return () => clearInterval(t);
  }, [length, delay]);
  return i;
}

function PhoneLive() {
  const step = useAutoStep(HERO_STEPS.length, 2800);
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* ambient halo */}
      <div className="pointer-events-none absolute -inset-14 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(199,231,199,0.6),transparent_70%)] blur-2xl breathe" />
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(47,163,122,0.22),transparent_70%)] blur-xl" />

      <div className="relative overflow-hidden rounded-[44px] border border-white/70 bg-[#0f1a17] p-2 shadow-[0_60px_130px_-40px_rgba(16,32,27,0.5),0_20px_40px_-20px_rgba(16,32,27,0.35)]">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#F8F6EF] to-[#EAF2E7] p-4">
          {/* status */}
          <div className="mb-3 flex items-center justify-between px-1 text-[10px] text-graphite/55">
            <span>9:41</span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-forest/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-forest/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-forest/50" />
            </span>
          </div>

          {/* greeting */}
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-graphite/45">Tuesday</p>
            <p className="mt-1 text-[19px] leading-tight text-graphite">
              Good morning, <span className="font-editorial text-forest">Ada</span>.
            </p>
          </div>

          {/* live storytelling cards */}
          <div className="relative h-[260px]">
            {HERO_STEPS.map((s, idx) => {
              const active = idx === step;
              return (
                <div
                  key={idx}
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0) scale(1)" : "translateY(10px) scale(.98)",
                    filter: active ? "blur(0)" : "blur(4px)",
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  <div className="rounded-2xl border border-forest/10 bg-white/90 p-3 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_36px_-18px_rgba(16,32,27,0.25)]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/70 px-2 py-0.5 text-[10px] font-medium text-forest-deep">
                        <Sparkles size={9} strokeWidth={2} />
                        {s.tag}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.18em] text-graphite/45">{s.hint}</span>
                    </div>
                    <p className="mt-2 text-[13px] leading-snug text-graphite/90">
                      {active ? (
                        <>
                          <span className="typewriter">{s.body}</span>
                        </>
                      ) : (
                        s.body
                      )}
                    </p>
                  </div>

                  {/* step-specific accent */}
                  {idx === 2 && (
                    <div className="mt-3 rounded-2xl bg-gradient-to-br from-forest to-forest-deep p-3 text-warm">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-warm/70">Micro commitment</p>
                        <Check size={12} className="text-mint" />
                      </div>
                      <p className="mt-1 text-[12.5px]">8 min · Open · One paragraph · Close.</p>
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="mt-3 rounded-2xl border border-forest/10 bg-white/80 p-3">
                      <p className="text-[10.5px] font-medium text-graphite">Avoidance ↓ 42%</p>
                      <div className="mt-2 h-1.5 rounded-full bg-graphite/8">
                        <div className="h-full rounded-full bg-gradient-to-r from-forest to-leaf grow-bar" style={{ width: "58%" }} />
                      </div>
                      <div className="mt-2 flex gap-0.5">
                        {["M","T","W","T","F","S","S"].map((d,i)=>(
                          <div key={i} className="flex-1 text-center">
                            <span className="mx-auto block h-4 w-full rounded-sm bg-gradient-to-t from-forest/70 to-leaf/70" style={{opacity: [0.9,0.6,0.9,0.4,0.95,0.3,0.85][i]}} />
                            <span className="text-[8px] text-graphite/40">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="mt-3 rounded-2xl border border-forest/10 bg-white/80 p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[10.5px] font-medium text-graphite">Pattern</p>
                        <span className="text-[9px] text-graphite/50">last 30 days</span>
                      </div>
                      <svg viewBox="0 0 240 44" className="mt-1 w-full">
                        <path d="M0,32 C30,30 45,20 70,24 C95,28 110,12 140,16 C170,20 190,8 240,6"
                          fill="none" stroke="#2FA37A" strokeWidth="1.6" strokeLinecap="round" className="draw-line"/>
                        <circle cx="70" cy="24" r="3" fill="#F08A6E" />
                        <circle cx="140" cy="16" r="3" fill="#F08A6E" />
                        <circle cx="200" cy="10" r="3" fill="#F08A6E" />
                      </svg>
                      <p className="mt-1 text-[10.5px] text-graphite/60">3 avoidance signals · evaluative tasks</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* step dots */}
          <div className="mt-3 flex justify-center gap-1.5">
            {HERO_STEPS.map((_, i) => (
              <span
                key={i}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  width: i === step ? 18 : 6,
                  background: i === step ? "#2FA37A" : "rgba(14,22,20,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="warm-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-faint" />
      <div className="pointer-events-none absolute inset-0 noise" />

      {/* floating ambient orbs */}
      <div className="orb-leaf pointer-events-none absolute -left-24 top-40 h-64 w-64 float-slower" />
      <div className="orb-leaf pointer-events-none absolute -right-16 top-10 h-56 w-56 float-slow" style={{ background: "radial-gradient(closest-side, rgba(127,184,230,0.35), transparent 70%)" }} />

      <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-20 md:px-6 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex fade-up">
            <span className="chip-leaf">
              <span className="h-1.5 w-1.5 rounded-full bg-forest pulse-dot" />
              An Emotional Operating System
            </span>
          </div>

          <h1 className="mt-6 fade-up text-[44px] font-semibold leading-[1.02] tracking-tight text-graphite sm:text-[64px] md:text-[88px]" style={{ animationDelay: "80ms" }}>
            You don't need <br className="hidden sm:block" />
            another <span className="font-editorial text-gradient-forest">chatbot.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl fade-up text-[17px] leading-relaxed text-graphite/70 sm:text-[19px]" style={{ animationDelay: "180ms" }}>
            Lumid understands what's keeping you stuck — and helps you actually move forward.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 fade-up sm:flex-row" style={{ animationDelay: "260ms" }}>
            <a href="#start" className="btn-primary shine w-full justify-center sm:w-auto">
              Start free · 2 min setup
              <ArrowRight size={15} strokeWidth={1.9} />
            </a>
            <a href="#product" className="btn-ghost w-full justify-center sm:w-auto">
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 fade-up" style={{ animationDelay: "340ms" }}>
            <TrustPill icon={Lock} label="End-to-end encrypted" />
            <TrustPill icon={ShieldCheck} label="Private by default" />
            <TrustPill icon={BookOpen} label="Research informed" />
          </div>
        </div>

        <div className="mt-14 fade-up" style={{ animationDelay: "440ms" }}>
          <PhoneLive />
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  2. Why do I procrastinate?                                   */
/* ============================================================ */

function WhyStuck() {
  const items = [
    { icon: Flame, label: "Avoidance", hint: "The task feels threatening", tone: "coral" },
    { icon: Waves, label: "Overwhelm", hint: "Too many open loops", tone: "sky" },
    { icon: Brain, label: "Identity", hint: "\"I'm not that kind of person\"", tone: "amber" },
  ];
  return (
    <section className="section-y warm-bg relative">
      <div className="mx-auto max-w-6xl container-x">
        <SectionHeader
          eyebrow="Why do we get stuck"
          title="Procrastination isn't"
          italic="laziness."
          sub="It's your nervous system asking for a smaller step. Lumid learns which of these patterns is holding you back — and softens it."
          tone="coral"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className={`card-premium card-${it.tone === "coral" ? "amber" : it.tone === "sky" ? "sky" : "mint"} p-6 sm:p-7`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-forest-deep shadow-sm">
                <it.icon size={18} strokeWidth={1.7} />
              </div>
              <p className="mt-5 text-[19px] font-semibold text-graphite">{it.label}</p>
              <p className="mt-1.5 text-[14.5px] text-graphite/65">{it.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  3. How Lumid understands you — chat demo                     */
/* ============================================================ */

function UnderstandDemo() {
  const messages = [
    { role: "you", text: "I skipped the gym again. I'm annoyed at myself." },
    { role: "ai", text: "That's four skips in three weeks — always on Tuesdays after your 4pm meeting." },
    { role: "ai", text: "It looks less like discipline, more like depletion." },
  ];
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible >= messages.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 900);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    const t = setInterval(() => setVisible(0), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="product" className="section-y relative">
      <div className="mx-auto max-w-6xl container-x">
        <SectionHeader
          eyebrow="How Lumid understands you"
          title="It doesn't just listen."
          italic="It remembers."
          sub="Every conversation becomes context. Patterns emerge that you'd never spot alone."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Chat */}
          <div className="card-premium relative overflow-hidden p-5 sm:p-7">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-forest to-forest-deep text-warm">
                  <Sparkles size={13} strokeWidth={1.8} />
                </div>
                <span className="text-[14px] font-medium text-graphite">Lumid</span>
              </div>
              <span className="chip-leaf">Live</span>
            </div>

            <div className="space-y-3 min-h-[280px]">
              {messages.map((m, i) => {
                const shown = i < visible;
                return (
                  <div
                    key={i}
                    className={`flex ${m.role === "you" ? "justify-end" : "justify-start"} transition-opacity duration-500`}
                    style={{ opacity: shown ? 1 : 0 }}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-snug ${
                        m.role === "you"
                          ? "bg-graphite text-warm"
                          : "border border-forest/12 bg-white text-graphite"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Insight card */}
          <div className="flex flex-col justify-center">
            <Eyebrow tone="amber">Emotional trigger detected</Eyebrow>
            <h3 className="mt-4 text-[26px] leading-tight sm:text-[32px]">
              Tuesdays aren't the problem. <span className="font-editorial text-gradient-forest">Your 4pm is.</span>
            </h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-graphite/70">
              Lumid connects behavior to context — the meetings, sleep, mood, and moments that predict how a day ends. Not to judge. To help you protect your energy.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <TrustPill icon={Lock} label="Your data stays yours" />
              <TrustPill icon={Eye} label="You control what's remembered" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  4. Recovery — timeline animation                             */
/* ============================================================ */

function RecoveryTimeline() {
  const days = [
    { d: "Mon", label: "Notice", copy: "Name the pattern out loud.", done: true },
    { d: "Tue", label: "Micro action", copy: "8 minutes. That's it.", done: true },
    { d: "Wed", label: "Reflect", copy: "What felt lighter?", done: true },
    { d: "Thu", label: "Repeat", copy: "Same window, smaller resistance.", done: true },
    { d: "Fri", label: "Extend", copy: "Add 4 minutes.", done: false },
  ];
  return (
    <section className="section-y warm-bg relative">
      <div className="mx-auto max-w-6xl container-x">
        <SectionHeader
          eyebrow="Recovery, step by step"
          title="A plan small enough"
          italic="to actually finish."
          sub="Recovery isn't a mountain. It's five soft steps you can take without needing motivation."
          tone="sky"
        />

        <div className="mt-14 space-y-3 md:space-y-4">
          {days.map((day, i) => (
            <div
              key={i}
              className="rise card-premium flex items-start gap-4 p-5 sm:items-center sm:p-6"
              style={{ animation: `fadeUp .8s cubic-bezier(.2,.7,.2,1) ${i * 120}ms both` }}
            >
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite/50">{day.d}</span>
                <span
                  className={`mt-1.5 grid h-9 w-9 place-items-center rounded-full text-[11px] font-semibold ${
                    day.done
                      ? "bg-gradient-to-br from-forest to-forest-deep text-warm shadow-[0_10px_24px_-10px_rgba(27,94,70,0.6)]"
                      : "border border-forest/15 bg-white text-graphite/60"
                  }`}
                >
                  {day.done ? <Check size={13} strokeWidth={2.5} /> : i + 1}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-semibold text-graphite sm:text-[17px]">{day.label}</p>
                <p className="text-[14px] text-graphite/65">{day.copy}</p>
              </div>

              <div className="hidden w-40 sm:block">
                <div className="h-1.5 rounded-full bg-graphite/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-forest to-leaf grow-bar"
                    style={{ width: day.done ? "100%" : "35%", animationDelay: `${300 + i * 120}ms` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#start" className="btn-primary shine">
            Build my first plan
            <ArrowRight size={15} strokeWidth={1.9} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  5. Memory — swipeable feature cards                          */
/* ============================================================ */

type FCard = {
  tag: string;
  title: string;
  copy: string;
  tone: "mint" | "sky" | "amber" | "cream";
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  visual: React.ReactNode;
};

const FEATURE_CARDS: FCard[] = [
  {
    tag: "Behavior memory",
    title: "Every mood, remembered.",
    copy: "Lumid keeps a soft, structured memory of what you've felt, tried, and grown through.",
    tone: "mint",
    icon: Brain,
    visual: (
      <div className="mt-5 grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => {
          const v = [0.15, 0.35, 0.55, 0.8, 1][i % 5];
          return <span key={i} className="aspect-square rounded-md" style={{ background: `rgba(47,163,122,${v * 0.55})` }} />;
        })}
      </div>
    ),
  },
  {
    tag: "Reflection",
    title: "Ask better questions.",
    copy: "Prompts tuned to what you just felt — not what a generic journal thinks you should ask.",
    tone: "sky",
    icon: MessageCircle,
    visual: (
      <div className="mt-5 space-y-2">
        {["What made today lighter?", "Where did you soften?", "What would you tell Monday-you?"].map((q, i) => (
          <div key={i} className="rounded-xl border border-forest/10 bg-white/80 px-3 py-2 text-[13px] text-graphite/80">
            {q}
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "Daily plan",
    title: "One small next step.",
    copy: "The plan is never the mountain. It's the size you'd actually attempt on a hard day.",
    tone: "amber",
    icon: Calendar,
    visual: (
      <div className="mt-5 rounded-2xl border border-white/70 bg-white/80 p-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-graphite/45">Today · 8 min</p>
        <p className="mt-1 text-[15px] font-semibold text-graphite">Open the doc. Read one line.</p>
        <div className="mt-3 flex gap-1.5">
          <span className="rounded-full bg-forest px-2.5 py-1 text-[10px] font-medium text-warm">Start</span>
          <span className="rounded-full border border-forest/15 bg-white px-2.5 py-1 text-[10px] text-graphite/70">Snooze 1h</span>
        </div>
      </div>
    ),
  },
  {
    tag: "Identity progress",
    title: "Watch yourself change.",
    copy: "Not streaks. Shifts. Lumid shows you the version of you that's slowly emerging.",
    tone: "cream",
    icon: Activity,
    visual: (
      <div className="mt-5 rounded-2xl border border-white/70 bg-white/80 p-4">
        <svg viewBox="0 0 220 60" className="w-full">
          <defs>
            <linearGradient id="idg" x1="0" x2="1">
              <stop offset="0%" stopColor="#F4B860" />
              <stop offset="100%" stopColor="#2FA37A" />
            </linearGradient>
          </defs>
          <path d="M0,50 C40,48 60,40 90,32 C120,24 150,18 220,8"
            fill="none" stroke="url(#idg)" strokeWidth="2" strokeLinecap="round" className="draw-line" />
        </svg>
        <p className="mt-2 text-[12px] text-graphite/60">"Someone who follows through, quietly." <span className="text-forest">+34%</span></p>
      </div>
    ),
  },
];

function FeatureRail() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className="section-y relative">
      <div className="mx-auto max-w-6xl container-x">
        <SectionHeader
          eyebrow="What lives inside Lumid"
          title="An operating system"
          italic="for your inner life."
          tone="amber"
        />

        {/* Mobile: horizontal snap rail */}
        <div
          ref={ref}
          className="mt-12 -mx-5 flex snap-rail gap-4 overflow-x-auto px-5 pb-4 md:hidden"
        >
          {FEATURE_CARDS.map((c, i) => (
            <FeatureCard key={i} card={c} />
          ))}
          <div className="w-2 shrink-0" />
        </div>

        {/* Desktop: grid */}
        <div className="mt-12 hidden gap-5 md:grid md:grid-cols-2">
          {FEATURE_CARDS.map((c, i) => (
            <FeatureCard key={i} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ card }: { card: FCard }) {
  const Icon = card.icon;
  return (
    <div className={`snap-card card-premium card-${card.tone} rise relative overflow-hidden p-6 sm:p-8 md:snap-start md:flex-none md:w-auto`}>
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/85 text-forest-deep shadow-sm">
          <Icon size={18} strokeWidth={1.75} />
        </div>
        <span className="chip-leaf">{card.tag}</span>
      </div>
      <h3 className="mt-6 text-[24px] leading-tight tracking-tight sm:text-[28px]">{card.title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-graphite/65">{card.copy}</p>
      {card.visual}
    </div>
  );
}

/* ============================================================ */
/*  6. What makes Lumid different                                */
/* ============================================================ */

function Compare() {
  const rows = [
    ["Remembers your growth", true, false],
    ["Detects emotional patterns", true, false],
    ["Builds recovery plans", true, false],
    ["Follows up between sessions", true, false],
    ["Private by design", true, "sometimes"],
  ] as const;

  return (
    <section className="section-y warm-bg relative">
      <div className="mx-auto max-w-6xl container-x">
        <SectionHeader
          eyebrow="Why Lumid isn't ChatGPT"
          title="One remembers your prompts."
          italic="One remembers you."
          tone="coral"
        />

        <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-3xl border border-forest/12 bg-white/85 shadow-[0_30px_80px_-40px_rgba(27,94,70,0.25)] backdrop-blur">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-forest/10 bg-gradient-to-r from-mint/60 to-white px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-graphite/70">
            <span></span>
            <span className="text-center text-forest-deep">Lumid</span>
            <span className="text-center text-graphite/50">Chatbots</span>
          </div>
          {rows.map(([label, a, b], i) => (
            <div key={i} className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-forest/8 px-5 py-4 text-[14.5px] last:border-b-0">
              <span className="text-graphite/85">{label}</span>
              <span className="flex justify-center">
                {a ? <Check size={16} strokeWidth={2.4} className="text-forest" /> : <span className="text-graphite/30">—</span>}
              </span>
              <span className="flex justify-center text-graphite/45">
                {b === "sometimes" ? "sometimes" : "—"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  7. Clinic dashboard — story                                  */
/* ============================================================ */

function ClinicStory() {
  const steps = [
    { icon: Fingerprint, tag: "1 · Consent", title: "Patient chooses to share.", copy: "Nothing is shared without an explicit, revocable opt-in." },
    { icon: Brain, tag: "2 · Summary", title: "Lumid summarizes behavior.", copy: "Trends, not transcripts. Signals, not raw messages." },
    { icon: Users, tag: "3 · Clinician view", title: "Better care between sessions.", copy: "Your psychologist sees what changed, and what needs attention." },
  ];
  return (
    <section id="clinic" className="section-y relative">
      <div className="mx-auto max-w-6xl container-x">
        <SectionHeader
          eyebrow="For clinicians"
          title="Extend care"
          italic="between sessions."
          sub="A private bridge between a patient's week and their psychologist — built entirely on consent."
          tone="sky"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="card-premium relative overflow-hidden p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-forest/12 to-mint/70 text-forest-deep">
                  <s.icon size={16} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite/55">{s.tag}</span>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-graphite">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-graphite/65">{s.copy}</p>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-graphite/12 bg-[#0F1614] p-2 shadow-[0_60px_130px_-40px_rgba(16,32,27,0.5)]">
          <div className="rounded-[22px] bg-[#111C19] p-5 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-warm/40">clinic.lumid.app</span>
              <span className="chip-leaf">consented</span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/[.04] p-5 md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-warm/45">Behavioral trend · Ada</p>
                <p className="mt-1 text-[16px] font-semibold text-warm">Avoidance ↓ 42% this month</p>
                <svg viewBox="0 0 500 120" className="mt-4 w-full">
                  <defs>
                    <linearGradient id="dg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#62C48A" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#62C48A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,90 C60,80 100,60 160,55 C220,50 260,70 320,50 C380,30 430,20 500,15 L500,120 L0,120 Z" fill="url(#dg)" />
                  <path d="M0,90 C60,80 100,60 160,55 C220,50 260,70 320,50 C380,30 430,20 500,15"
                    fill="none" stroke="#62C48A" strokeWidth="2" strokeLinecap="round" className="draw-line" />
                </svg>
              </div>
              <div className="space-y-3">
                {[
                  { l: "Mood variance", v: "steady" },
                  { l: "Sleep", v: "7h 06m avg" },
                  { l: "Micro actions", v: "18 / 21" },
                ].map((k, i) => (
                  <div key={i} className="rounded-2xl bg-white/[.04] p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-warm/40">{k.l}</p>
                    <p className="mt-1 text-[15px] font-semibold text-warm">{k.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-warm/10 bg-white/[.03] p-4 text-[12.5px] text-warm/70">
              <ShieldCheck size={14} className="text-leaf" />
              Only summarized signals are shared. Raw conversations remain private to the patient.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  8. Privacy                                                   */
/* ============================================================ */

function Privacy() {
  const items = [
    { icon: Lock, title: "End-to-end encrypted", copy: "Your conversations are encrypted before they leave your device." },
    { icon: Eye, title: "You control memory", copy: "Forget any moment. Export everything. Nothing hidden." },
    { icon: ShieldCheck, title: "Consent controlled", copy: "Nothing is shared with a clinician without your explicit opt-in." },
    { icon: BookOpen, title: "Research informed", copy: "Built on established behavioral science, not vibes." },
  ];
  return (
    <section id="privacy" className="section-y warm-bg relative">
      <div className="mx-auto max-w-6xl container-x">
        <SectionHeader
          eyebrow="Privacy, by design"
          title="Trust isn't a section."
          italic="It's the product."
          tone="forest"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <div key={i} className="rise card-premium flex items-start gap-4 p-6 sm:p-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest/12 to-mint/70 text-forest-deep">
                <it.icon size={16} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <p className="text-[17px] font-semibold text-graphite">{it.title}</p>
                <p className="mt-1 text-[14.5px] leading-relaxed text-graphite/65">{it.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  9. CTA + Footer                                              */
/* ============================================================ */

function CTA() {
  return (
    <section id="start" className="relative px-5 pb-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="gradient-ring">
          <div className="relative overflow-hidden rounded-[27px] bg-[#0E1B16] p-8 sm:p-14 md:p-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(111,181,140,0.35),transparent_70%)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(244,184,96,0.28),transparent_70%)] blur-2xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              <Eyebrow tone="amber">
                <span className="text-warm/70">Ready when you are</span>
              </Eyebrow>
              <h2 className="mt-5 text-[32px] leading-[1.05] tracking-tight text-warm sm:text-[44px] md:text-[60px]">
                Meet the version of you that <span className="font-editorial text-mint">follows through.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-warm/70 sm:text-[17px]">
                Two minutes to set up. Five minutes a day. A quieter mind by next week.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#" className="btn-primary shine w-full justify-center sm:w-auto">
                  Try Lumid free
                  <ArrowRight size={15} strokeWidth={1.9} />
                </a>
                <a href="#clinic" className="btn-ghost w-full justify-center bg-white/10 text-warm hover:bg-white/15 sm:w-auto" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                  For clinicians
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-forest/8 bg-white/60 px-5 py-10 backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-forest to-forest-deep text-warm">
            <Leaf size={14} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-graphite">Lumid</p>
            <p className="text-[12px] text-graphite/55">An Emotional Operating System</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-graphite/65">
          <a href="#product" className="hover:text-graphite">Product</a>
          <a href="#clinic" className="hover:text-graphite">Clinicians</a>
          <a href="#privacy" className="hover:text-graphite">Privacy</a>
          <a href="#" className="hover:text-graphite">Contact</a>
        </div>
        <p className="text-[12px] text-graphite/50">© {new Date().getFullYear()} Lumid</p>
      </div>
    </footer>
  );
}

/* ============================================================ */
/*  Page                                                         */
/* ============================================================ */

function Home() {
  return (
    <main className="min-h-screen text-graphite">
      <Nav />
      <Hero />
      <WhyStuck />
      <UnderstandDemo />
      <RecoveryTimeline />
      <FeatureRail />
      <Compare />
      <ClinicStory />
      <Privacy />
      <CTA />
      <Footer />
    </main>
  );
}
