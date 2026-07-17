import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Waves,
  Compass,
  ShieldCheck,
  LineChart,
  Clock,
  Leaf,
  BrainCircuit,
  HeartPulse,
  Lock,
  Check,
  Play,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumid — Emotional intelligence, quietly at work" },
      {
        name: "description",
        content:
          "Lumid is an AI companion for emotional recovery — private conversations, behavioral memory, and clinician insights that extend care beyond the session.",
      },
    ],
  }),
  component: Home,
});

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 eyebrow">
      <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-leaf shadow-[0_0_0_4px_rgba(111,181,140,0.18)]" />
      {children}
    </div>
  );
}


function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-5 md:px-6 md:pt-6">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-forest text-warm shadow-[0_6px_16px_-6px_rgba(16,32,27,0.6)]">
            <Leaf size={15} strokeWidth={1.6} />
          </div>
          <span className="text-[19px] font-medium tracking-tight text-graphite">Lumid</span>
        </div>
        <nav className="hidden items-center gap-9 text-[14px] text-graphite/75 md:flex">
          <a href="#product" className="hover:text-graphite">Product</a>
          <a href="#clinic" className="hover:text-graphite">For Clinicians</a>
          <a href="#privacy" className="hover:text-graphite">Privacy</a>
          <a href="#story" className="hover:text-graphite">Story</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#signin" className="hidden text-[14px] text-graphite/75 hover:text-graphite md:inline">Sign in</a>
          <a href="#start" className="btn-ghost">
            Get Lumid
            <ArrowUpRight size={14} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Phone mockup (SVG-driven, product-grade)                           */
/* ------------------------------------------------------------------ */

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px]">
      {/* Ambient halo */}
      <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(199,231,199,0.55),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(31,61,51,0.18),transparent_70%)] blur-xl" />

      <div
        className="relative overflow-hidden rounded-[42px] border border-white/60 bg-[#0f1a17] p-2 shadow-[0_50px_120px_-40px_rgba(16,32,27,0.45),0_20px_40px_-20px_rgba(16,32,27,0.35)]"
      >
        <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-b from-[#f7f5ef] to-[#eef2ea] p-4">
          {/* status */}
          <div className="mb-3 flex items-center justify-between px-1 text-[10px] text-graphite/60">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-forest/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-forest/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-forest/50" />
            </div>
          </div>

          {/* greeting */}
          <div className="mb-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-graphite/50">Tuesday, quiet morning</p>
            <p className="mt-1 text-[19px] leading-tight text-graphite">
              Good morning, <span className="text-forest">Ada</span>.
            </p>
            <p className="text-[12px] text-graphite/60">You slept 7h 12m. Yesterday felt heavier than usual.</p>
          </div>

          {/* AI conversation card */}
          <div className="mb-3 rounded-2xl border border-forest/10 bg-white/85 p-3 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_24px_-14px_rgba(16,32,27,0.25)]">
            <div className="flex items-center gap-2">
              <div className="grid h-6 w-6 place-items-center rounded-full bg-forest text-warm">
                <Sparkles size={11} strokeWidth={1.6} />
              </div>
              <p className="text-[11px] font-medium text-graphite">Lumid</p>
            </div>
            <p className="mt-2 text-[12.5px] leading-snug text-graphite/85">
              I noticed you postponed the writing block twice this week. Want to sit with what came up — or start with 8 quiet minutes?
            </p>
            <div className="mt-3 flex gap-1.5">
              <span className="rounded-full bg-mint/70 px-2.5 py-1 text-[10px] text-forest-deep">Sit with it</span>
              <span className="rounded-full border border-forest/15 bg-warm px-2.5 py-1 text-[10px] text-graphite/70">8 min</span>
            </div>
          </div>

          {/* mood chart */}
          <div className="mb-3 rounded-2xl border border-forest/10 bg-white/80 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[10.5px] font-medium text-graphite">Mood, this week</p>
              <p className="text-[10px] text-graphite/50">+ steadier</p>
            </div>
            <svg viewBox="0 0 240 60" className="w-full">
              <defs>
                <linearGradient id="mchart" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1F3D33" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#1F3D33" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,42 C30,38 45,28 70,30 C95,32 110,20 140,22 C170,24 190,14 240,10 L240,60 L0,60 Z" fill="url(#mchart)" />
              <path d="M0,42 C30,38 45,28 70,30 C95,32 110,20 140,22 C170,24 190,14 240,10"
                fill="none" stroke="#1F3D33" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="140" cy="22" r="2.6" fill="#1F3D33" />
              <circle cx="140" cy="22" r="5" fill="#1F3D33" fillOpacity="0.15" />
            </svg>
            <div className="mt-1 flex justify-between text-[9px] text-graphite/40">
              {["M","T","W","T","F","S","S"].map((d,i)=>(<span key={i}>{d}</span>))}
            </div>
          </div>

          {/* micro commitment */}
          <div className="rounded-2xl border border-forest/10 bg-gradient-to-br from-forest to-forest-deep p-3 text-warm shadow-[0_10px_30px_-14px_rgba(16,32,27,0.55)]">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-warm/70">Micro commitment</p>
              <Check size={12} strokeWidth={2} className="text-mint" />
            </div>
            <p className="mt-1.5 text-[13px] leading-snug">Open the doc. Read one sentence. Close it if that's enough.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating hero ecosystem cards                                      */
/* ------------------------------------------------------------------ */

function EcoCard({
  children,
  className = "",
  rotate = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`card-premium absolute p-4 ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </div>
  );
}

function HeroEcosystem() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-[1180px] md:mt-14 md:h-[720px]">
      {/* Connecting curves — desktop only */}
      <svg
        className="absolute inset-0 hidden h-full w-full md:block"
        viewBox="0 0 1180 720"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ln" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#14382C" stopOpacity="0" />
            <stop offset="0.5" stopColor="#14382C" stopOpacity="0.35" />
            <stop offset="1" stopColor="#14382C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="draw-line" d="M180,180 C 340,120 460,260 590,320" stroke="url(#ln)" strokeWidth="1.2" />
        <path className="draw-line" d="M220,520 C 360,560 470,470 590,410" stroke="url(#ln)" strokeWidth="1.2" />
        <path className="draw-line" d="M990,160 C 860,120 760,260 640,320" stroke="url(#ln)" strokeWidth="1.2" />
        <path className="draw-line" d="M980,540 C 860,560 760,470 640,410" stroke="url(#ln)" strokeWidth="1.2" />
      </svg>

      {/* Phone center — inline on mobile, absolute on desktop */}
      <div className="relative flex justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="float-slower">
          <PhoneMockup />
        </div>
      </div>

      {/* Mobile: satellite cards in a clean 2-col grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 px-1 md:hidden">
        <div className="card-premium p-4">
          <div className="flex items-center gap-2">
            <Clock size={13} strokeWidth={1.6} className="text-forest" />
            <p className="text-[11px] font-medium text-graphite">Timeline</p>
          </div>
          <div className="mt-3 space-y-1.5">
            {[
              { d: "Mon", t: "Noticed", tone: "bg-sage/50" },
              { d: "Wed", t: "Named it", tone: "bg-mint" },
              { d: "Fri", t: "10 min", tone: "bg-forest text-warm" },
            ].map((r) => (
              <div key={r.d} className="flex items-center gap-2 text-[11px]">
                <span className="w-6 text-graphite/50">{r.d}</span>
                <span className={`rounded-full px-2 py-0.5 ${r.tone}`}>{r.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-premium p-4">
          <div className="flex items-center gap-2">
            <MessageCircle size={13} strokeWidth={1.6} className="text-forest" />
            <p className="text-[11px] font-medium text-graphite">Reflection</p>
          </div>
          <p className="mt-2 text-[12px] leading-snug text-graphite/85">
            "I opened it. Read one line. Enough."
          </p>
        </div>
        <div className="card-premium p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium text-graphite">Pattern</p>
            <BrainCircuit size={13} strokeWidth={1.6} className="text-forest" />
          </div>
          <svg viewBox="0 0 200 60" className="mt-2 w-full">
            {[10, 22, 16, 30, 24, 40, 34, 46].map((h, i) => (
              <rect key={i} x={i * 24 + 4} y={60 - h} width="12" height={h} rx="3" fill={i === 5 ? "#14382C" : "#C7E7C7"} />
            ))}
          </svg>
          <p className="mt-1 text-[10px] text-graphite/55">Avoidance ↓ 34%</p>
        </div>
        <div className="card-premium p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium text-graphite">Identity</p>
            <HeartPulse size={13} strokeWidth={1.6} className="text-forest" />
          </div>
          <div className="mt-3 space-y-2">
            {[
              { l: "Begins", v: 74 },
              { l: "Returns", v: 58 },
            ].map((r) => (
              <div key={r.l}>
                <div className="mb-1 flex justify-between text-[10px] text-graphite/70">
                  <span>{r.l}</span><span>{r.v}%</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-forest/10">
                  <div className="h-full rounded-full bg-forest" style={{ width: `${r.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop-only floating cards */}
      <div className="hidden md:block">
        <EcoCard className="left-0 top-[70px] w-[260px] float-slow" rotate={-3}>
          <div className="flex items-center gap-2">
            <Clock size={14} strokeWidth={1.6} className="text-forest" />
            <p className="text-[11px] font-medium text-graphite">Recovery Timeline</p>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { d: "Mon", t: "Noticed avoidance", tone: "bg-sage/50" },
              { d: "Wed", t: "Named the fear", tone: "bg-mint" },
              { d: "Fri", t: "First 10 minutes", tone: "bg-forest text-warm" },
            ].map((r) => (
              <div key={r.d} className="flex items-center gap-2 text-[11.5px]">
                <span className="w-8 text-graphite/50">{r.d}</span>
                <span className={`rounded-full px-2.5 py-1 ${r.tone}`}>{r.t}</span>
              </div>
            ))}
          </div>
        </EcoCard>

        <EcoCard className="left-[40px] top-[410px] w-[230px] float-slower" rotate={2}>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium text-graphite">Behavior Pattern</p>
            <BrainCircuit size={13} strokeWidth={1.6} className="text-forest" />
          </div>
          <svg viewBox="0 0 200 60" className="mt-2 w-full">
            {[10, 22, 16, 30, 24, 40, 34, 46].map((h, i) => (
              <rect key={i} x={i * 24 + 4} y={60 - h} width="12" height={h} rx="3" fill={i === 5 ? "#14382C" : "#C7E7C7"} />
            ))}
          </svg>
          <p className="mt-1 text-[10.5px] text-graphite/55">Avoidance ↓ 34% since last cycle</p>
        </EcoCard>

        <EcoCard className="right-0 top-[60px] w-[260px] float-slower" rotate={3}>
          <div className="flex items-center gap-2">
            <MessageCircle size={14} strokeWidth={1.6} className="text-forest" />
            <p className="text-[11px] font-medium text-graphite">Daily Reflection</p>
          </div>
          <p className="mt-2 text-[12.5px] leading-snug text-graphite/85">
            "Today I chose to open the document. I read one line. It was enough."
          </p>
          <p className="mt-2 text-[10.5px] text-graphite/50">— saved to your private memory</p>
        </EcoCard>

        <EcoCard className="right-[40px] top-[420px] w-[240px] float-slow" rotate={-2}>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium text-graphite">Identity Progress</p>
            <HeartPulse size={13} strokeWidth={1.6} className="text-forest" />
          </div>
          <div className="mt-3 space-y-2">
            {[
              { l: "The kind who begins", v: 74 },
              { l: "The kind who returns", v: 58 },
            ].map((r) => (
              <div key={r.l}>
                <div className="mb-1 flex justify-between text-[10.5px] text-graphite/70">
                  <span>{r.l}</span><span>{r.v}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-forest/10">
                  <div className="h-full rounded-full bg-forest" style={{ width: `${r.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </EcoCard>

        <div className="card-premium float-slow absolute left-[45%] top-[10px] flex items-center gap-2 px-3 py-1.5">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-forest" />
          <span className="text-[11px] text-graphite/80">Listening quietly</span>
        </div>
        <div className="card-premium float-slower absolute right-[36%] bottom-[10px] flex items-center gap-2 px-3 py-1.5">
          <Lock size={11} strokeWidth={1.7} className="text-forest" />
          <span className="text-[11px] text-graphite/80">End-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

function Home() {
  return (
    <main className="relative page-bg overflow-hidden">
      {/* ambient background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-faint opacity-70" />
        <div className="absolute inset-0 noise" />
        <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-mint/40 blur-[110px]" />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-sage/40 blur-[120px]" />
      </div>

      <Nav />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-16 text-center md:px-6 md:pt-28">
          <Eyebrow>A companion for emotional recovery</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-4xl text-[42px] leading-[1.05] tracking-[-0.03em] text-graphite font-extralight sm:text-[56px] md:mt-6 md:text-[92px] md:leading-[1.02]">
            Emotional intelligence,
            <br />
            <span className="font-editorial text-gradient-forest">quietly at work.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-graphite/70 md:mt-7 md:text-[18px]">
            Lumid listens the way a thoughtful friend would — remembering, patterning, and gently returning you to the things that matter.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-9">
            <a href="#start" className="btn-primary group w-full justify-center sm:w-auto">
              Begin quietly
              <span className="grid h-7 w-7 place-items-center rounded-full bg-warm text-forest transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight size={13} strokeWidth={2} />
              </span>
            </a>
            <a href="#demo" className="btn-ghost w-full justify-center sm:w-auto">
              <Play size={12} strokeWidth={2} className="fill-graphite" />
              Watch the film · 68s
            </a>
          </div>
        </div>

        <HeroEcosystem />
      </section>


      {/* Trust strip */}
      <section className="relative mt-20 pb-20 md:-mt-4 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 text-center seed-divider">
            <div className="seed-divider-line" />
            <span className="seed-dot" />
            <p className="text-[12px] tracking-[0.22em] text-graphite/55 uppercase">Trusted in quiet corners of care</p>
            <span className="seed-dot" />
            <div className="seed-divider-line" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 opacity-70 md:grid-cols-6 md:gap-x-6">
            {["Ottia Health", "Northwell Mind", "Kestrel Clinic", "Ivy Psychology", "Bloomlab", "Solace Co."].map((n) => (
              <div key={n} className="flex items-center justify-center gap-2 text-graphite/55">
                <span className="h-1.5 w-1.5 rounded-full bg-forest/40" />
                <span className="text-[15px] tracking-tight">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / JOURNEY */}
      <section id="story" className="relative py-24 md:py-40">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="max-w-3xl">
            <Eyebrow>The journey Lumid holds</Eyebrow>
            <h2 className="mt-6 text-[34px] leading-[1.08] font-light tracking-[-0.025em] text-graphite sm:text-[46px] md:text-[64px] md:leading-[1.05]">
              From the first uncertain feeling
              <br />
              <span className="text-forest italic font-extralight">to the person you are becoming.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-graphite/70">
              Not a chatbot. A patient thread that keeps context, notices patterns, and returns
              your own words to you at the moments they help most.
            </p>
          </div>

          {/* Journey rail */}
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { i: <Waves size={16} strokeWidth={1.4} />, t: "Emotion", d: "Something arrives — a heaviness, a stall." },
              { i: <MessageCircle size={16} strokeWidth={1.4} />, t: "Conversation", d: "You put it into words, at your own pace." },
              { i: <Compass size={16} strokeWidth={1.4} />, t: "Understanding", d: "Lumid names the pattern beneath the moment." },
              { i: <LineChart size={16} strokeWidth={1.4} />, t: "Growth", d: "Small returns become who you are." },
            ].map((s, idx) => (
              <div key={s.t} className="card-premium relative p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-forest/8 text-forest">{s.i}</div>
                  <span className="text-[11px] text-graphite/40">0{idx + 1}</span>
                </div>
                <p className="mt-6 text-[22px] font-light tracking-tight text-graphite">{s.t}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-graphite/65">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES — each a small preview */}
      <section id="product" className="relative py-20 md:py-36">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Product</Eyebrow>
              <h2 className="mt-6 text-[32px] leading-[1.08] font-light tracking-[-0.025em] text-graphite sm:text-[44px] md:text-[60px] md:leading-[1.05]">
                A quiet operating system for the inner life.
              </h2>
            </div>
            <a href="#tour" className="btn-ghost">Take the tour <ArrowUpRight size={14} /></a>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-5">
            {/* Timeline preview */}
            <div className="card-premium col-span-12 overflow-hidden p-6 md:p-8 md:col-span-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="eyebrow">Timeline</p>
                  <h3 className="mt-3 text-[22px] md:text-[28px] font-light tracking-tight text-graphite">A memory of how you moved.</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-graphite/65">
                    Every reflection stitched into a soft chronology only you can read.
                  </p>
                </div>
                <Clock size={18} strokeWidth={1.4} className="text-forest/70" />
              </div>

              <div className="relative mt-8">
                <div className="absolute left-[10px] top-2 bottom-2 w-px bg-forest/15" />
                {[
                  { d: "Mar 12", t: "Named avoidance around writing.", tag: "insight" },
                  { d: "Mar 15", t: "Opened the doc, read one line.", tag: "commitment" },
                  { d: "Mar 21", t: "Wrote for eleven quiet minutes.", tag: "return" },
                  { d: "Apr 02", t: "Noticed the fear was smaller.", tag: "shift" },
                ].map((r) => (
                  <div key={r.d} className="relative flex items-start gap-4 py-3 pl-7">
                    <span className="absolute left-[6px] top-4 h-2 w-2 rounded-full bg-forest ring-4 ring-warm" />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <p className="text-[13px] font-medium text-graphite">{r.d}</p>
                        <span className="text-[10.5px] uppercase tracking-[0.18em] text-graphite/45">{r.tag}</span>
                      </div>
                      <p className="text-[15px] leading-snug text-graphite/80">{r.t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pattern recognition */}
            <div className="card-premium col-span-12 p-6 md:p-8 md:col-span-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="eyebrow">Pattern recognition</p>
                  <h3 className="mt-3 text-[22px] md:text-[28px] font-light tracking-tight text-graphite">The shape underneath the moment.</h3>
                </div>
                <BrainCircuit size={18} strokeWidth={1.4} className="text-forest/70" />
              </div>
              <div className="mt-6 rounded-2xl border border-forest/10 bg-warm/70 p-5">
                <svg viewBox="0 0 360 160" className="w-full">
                  <defs>
                    <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#1F3D33" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#1F3D33" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,120 C60,110 90,60 150,70 C210,80 240,30 300,40 L360,25 L360,160 L0,160 Z" fill="url(#g2)" />
                  <path d="M0,120 C60,110 90,60 150,70 C210,80 240,30 300,40 L360,25"
                    stroke="#1F3D33" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                  {[[60,105],[150,70],[240,52],[300,40]].map(([x,y],i)=>(
                    <g key={i}><circle cx={x} cy={y} r="3.2" fill="#1F3D33" /><circle cx={x} cy={y} r="7" fill="#1F3D33" fillOpacity="0.12" /></g>
                  ))}
                </svg>
                <p className="mt-3 text-[13px] text-graphite/65">Avoidance cycles are softening, weekly, with each small return.</p>
              </div>
            </div>

            {/* Memory */}
            <div className="card-premium col-span-12 p-6 md:p-8 md:col-span-5">
              <p className="eyebrow">Memory</p>
              <h3 className="mt-3 text-[22px] md:text-[28px] font-light tracking-tight text-graphite">Your words, kept safe.</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "The thing I keep circling is worth naming.",
                  "I don't need to feel ready to begin.",
                  "Rest is not the opposite of return.",
                  "My smallness is not a verdict.",
                ].map((q) => (
                  <div key={q} className="rounded-xl border border-forest/10 bg-warm/70 p-3 text-[13px] leading-snug text-graphite/80">
                    "{q}"
                  </div>
                ))}
              </div>
            </div>

            {/* Recovery Plan */}
            <div className="card-premium col-span-12 p-6 md:p-8 md:col-span-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="eyebrow">Recovery plan</p>
                  <h3 className="mt-3 text-[22px] md:text-[28px] font-light tracking-tight text-graphite">Small returns, gently scheduled.</h3>
                </div>
                <Sparkles size={18} strokeWidth={1.4} className="text-forest/70" />
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { t: "Open the document", s: "2 min · morning light", p: 100 },
                  { t: "Read one sentence aloud", s: "1 min · after coffee", p: 76 },
                  { t: "Write for eleven minutes", s: "before the day pulls", p: 42 },
                  { t: "Close with a single line", s: "reflection · saved to memory", p: 12 },
                ].map((r) => (
                  <div key={r.t} className="flex items-center gap-4 rounded-xl border border-forest/8 bg-warm/70 px-4 py-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-forest/8 text-forest">
                      <Check size={14} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] text-graphite">{r.t}</p>
                      <p className="text-[12.5px] text-graphite/55">{r.s}</p>
                    </div>
                    <div className="h-1.5 w-28 overflow-hidden rounded-full bg-forest/10">
                      <div className="h-full rounded-full bg-forest" style={{ width: `${r.p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCRASTINATION TIMELINE */}
      <section className="relative py-24 md:py-40">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="max-w-2xl">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="mt-6 text-[32px] leading-[1.08] font-light tracking-[-0.025em] text-graphite sm:text-[44px] md:text-[60px] md:leading-[1.05]">
              Not a productivity app.
              <br />
              <span className="italic text-forest font-extralight">A companion for emotional avoidance.</span>
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-graphite/70">
              Procrastination isn't laziness — it's a story about safety. Lumid follows the whole arc.
            </p>
          </div>

          <div className="card-premium mt-10 md:mt-14 overflow-hidden p-6 md:p-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-7">
              {[
                { t: "Task", d: "A block appears.", i: <Compass size={14} /> },
                { t: "Avoidance", d: "The mind drifts.", i: <Waves size={14} /> },
                { t: "Stress", d: "Weight in the chest.", i: <HeartPulse size={14} /> },
                { t: "Lumid detects", d: "The pattern surfaces.", i: <BrainCircuit size={14} /> },
                { t: "Recovery Plan", d: "Softly proposed.", i: <Sparkles size={14} /> },
                { t: "Action", d: "One small return.", i: <Check size={14} /> },
                { t: "Progress", d: "Identity, quietly shifting.", i: <LineChart size={14} /> },
              ].map((s, i, arr) => (
                <div key={s.t} className="relative">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-forest text-warm shadow-[0_10px_20px_-10px_rgba(16,32,27,0.6)]">
                    {s.i}
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-graphite/45">Step {i + 1}</p>
                  <p className="mt-1 text-[18px] font-light text-graphite">{s.t}</p>
                  <p className="mt-1 text-[13.5px] leading-snug text-graphite/60">{s.d}</p>
                  {i < arr.length - 1 && (
                    <div className="absolute -right-4 top-4 hidden h-px w-8 bg-gradient-to-r from-forest/40 to-transparent md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC DASHBOARD */}
      <section id="clinic" className="relative py-24 md:py-40">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="max-w-3xl">
            <Eyebrow>For clinicians</Eyebrow>
            <h2 className="mt-6 text-[52px] leading-[1.05] font-light tracking-[-0.025em] text-graphite md:text-[64px]">
              Extend care beyond every session.
            </h2>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-graphite/70">
              Patients keep full ownership of their conversations. Psychologists receive structured behavioral insights
              only with explicit consent. Raw conversations are never exposed.
            </p>
          </div>

          {/* Floating browser mockup */}
          <div className="relative mt-16">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(31,61,51,0.30),transparent_70%)] blur-3xl" />

            <div className="overflow-hidden rounded-[28px] border border-graphite/10 bg-graphite text-warm shadow-[0_60px_120px_-40px_rgba(16,32,27,0.55)]">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-warm/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-warm/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-warm/25" />
                <div className="ml-4 flex items-center gap-2 rounded-md bg-white/6 px-3 py-1 text-[11px] text-warm/60">
                  <Lock size={11} strokeWidth={1.6} /> clinic.lumid.app/patients/ada
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-12 md:p-8">
                {/* side nav — horizontal on mobile, vertical on desktop */}
                <div className="flex gap-1.5 overflow-x-auto md:col-span-3 md:flex-col md:space-y-1.5 md:overflow-visible">
                  {["Overview","Patients","Insights","Consent Log","Sessions","Settings"].map((n, i) => (
                    <div key={n} className={`shrink-0 rounded-lg px-3 py-2 text-[12.5px] whitespace-nowrap ${i===2 ? "bg-white/10 text-warm" : "text-warm/50"}`}>{n}</div>
                  ))}
                </div>

                {/* main */}
                <div className="space-y-4 md:col-span-9">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-warm/50">Patient · Consented insight</p>
                      <p className="mt-1 text-[17px] md:text-[22px] font-light">Ada M. — Behavioral summary, past 14 days</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-warm/70">
                      Consent renewed · Apr 10
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      { l: "Avoidance episodes", v: "↓ 34%", s: "vs. previous cycle" },
                      { l: "Micro-commitments kept", v: "18 / 21", s: "quiet consistency" },
                      { l: "Sleep window", v: "7h 04m", s: "±22m variance" },
                    ].map((k) => (
                      <div key={k.l} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-warm/50">{k.l}</p>
                        <p className="mt-2 text-[26px] font-light">{k.v}</p>
                        <p className="text-[11.5px] text-warm/50">{k.s}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-3">

                      <p className="text-[11.5px] uppercase tracking-[0.2em] text-warm/50">Behavioral trend</p>
                      <svg viewBox="0 0 360 120" className="mt-3 w-full">
                        <defs>
                          <linearGradient id="dg" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" stopColor="#C7E7C7" stopOpacity="0.5" />
                            <stop offset="1" stopColor="#C7E7C7" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,100 C60,90 90,60 150,55 C210,50 240,30 300,25 L360,15 L360,120 L0,120 Z" fill="url(#dg)" />
                        <path d="M0,100 C60,90 90,60 150,55 C210,50 240,30 300,25 L360,15"
                          stroke="#C7E7C7" strokeWidth="1.6" fill="none"/>
                      </svg>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-2">
                      <p className="text-[11.5px] uppercase tracking-[0.2em] text-warm/50">Themes surfaced</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {["avoidance", "self-worth", "return", "quiet consistency", "identity"].map((t)=>(
                          <span key={t} className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-warm/75">{t}</span>
                        ))}
                      </div>
                      <p className="mt-4 text-[12px] leading-snug text-warm/55">
                        Raw conversations remain with the patient. You receive only structured, consented signals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="relative py-24 md:py-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>Privacy is the product</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl text-[32px] leading-[1.08] font-light tracking-[-0.025em] text-graphite sm:text-[44px] md:text-[60px] md:leading-[1.05]">
            Your inner life belongs to you.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[18px] leading-relaxed text-graphite/70">
            Conversations are encrypted, ownership never transfers, and any clinician insight requires an explicit,
            reversible consent — one moment at a time.
          </p>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { i: <Lock size={16} strokeWidth={1.5} />, t: "End-to-end encrypted", d: "Only you hold the key to your words." },
              { i: <ShieldCheck size={16} strokeWidth={1.5} />, t: "Granular consent", d: "Share a signal, not a sentence." },
              { i: <Leaf size={16} strokeWidth={1.5} />, t: "Sovereign memory", d: "Export or erase — anytime, everything." },
            ].map((c) => (
              <div key={c.t} className="card-premium p-6 text-left">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-forest/8 text-forest">{c.i}</div>
                <p className="mt-5 text-[18px] font-light text-graphite">{c.t}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-graphite/60">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="relative py-20 md:py-36">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-forest/15 bg-gradient-to-br from-forest to-forest-deep p-7 md:p-14 text-warm shadow-[0_60px_120px_-40px_rgba(16,32,27,0.6)]">
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-mint/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 md:flex-row md:flex-wrap md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow text-warm/60">Begin, quietly</p>
                <h3 className="mt-5 text-[30px] leading-[1.08] font-light tracking-tight sm:text-[38px] md:text-[56px] md:leading-[1.05]">
                  A companion that returns you to yourself.
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-warm/70">
                  Free for the first thirty days. No noise. No streaks. Just the thread.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <a href="#download" className="btn-primary bg-warm text-forest-deep hover:btn-primary-hover" style={{ background: "linear-gradient(180deg, #ffffff 0%, #EDECE4 100%)", color: "#10201B" }}>
                  Download Lumid
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-warm">
                    <ArrowUpRight size={13} strokeWidth={2} />
                  </span>
                </a>
                <p className="text-[12px] text-warm/50">iOS · Android · macOS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-graphite/10 pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:justify-between">
            <div className="max-w-md">
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-forest text-warm">
                  <Leaf size={15} strokeWidth={1.6} />
                </div>
                <span className="text-[19px] font-medium tracking-tight text-graphite">Lumid</span>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-graphite/60">
                Built with care in small rooms. For the quiet work of becoming.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-[14px] sm:grid-cols-3 sm:gap-14">
              {[
                { h: "Product", l: ["Timeline","Memory","Recovery Plan","Clinic"] },
                { h: "Company", l: ["Story","Manifesto","Careers","Press"] },
                { h: "Trust", l: ["Privacy","Security","Consent Log","Contact"] },
              ].map((c) => (
                <div key={c.h}>
                  <p className="mb-4 eyebrow">{c.h}</p>
                  <ul className="space-y-2 text-graphite/65">
                    {c.l.map((x) => <li key={x}><a href="#" className="hover:text-graphite">{x}</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-graphite/10 pt-6">
            <p className="text-[12.5px] text-graphite/50">© 2026 Lumid, PBC — Made with quiet intent.</p>
            <div className="flex items-center gap-2 text-[12.5px] text-graphite/55">
              <ShieldCheck size={13} strokeWidth={1.6} /> SOC 2 · HIPAA-ready · GDPR
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
