import { createFileRoute } from "@tanstack/react-router";
import heroSky from "@/assets/hero_clean.jpg.asset.json";
import ipsumPerson from "@/assets/ipsum_person.jpg.asset.json";
import tElara from "@/assets/t1_elara.jpg.asset.json";
import tDarius from "@/assets/t2_darius.jpg.asset.json";
import tAva from "@/assets/t3_ava.jpg.asset.json";
import blog1 from "@/assets/blog1.jpg.asset.json";
import blog2 from "@/assets/blog2.jpg.asset.json";
import blog3 from "@/assets/blog3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ailine — Building the future with AI and strategy" },
      {
        name: "description",
        content:
          "Ailine helps organizations unlock growth and efficiency through data-driven consulting and intelligent automation.",
      },
      { property: "og:title", content: "Ailine — AI & Strategy Consulting" },
      {
        property: "og:description",
        content:
          "We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const logos = ["Aeline", "Vision Tech", "Umbrella Co.", "Ipsum AI", "Catalyst", "Northstar"];

/** A single "airplane" pill icon that flies in the sky */
function Plane({ className = "", w = 120, rotate = 0 }: { className?: string; w?: number; rotate?: number }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full bg-white/95 shadow-[0_10px_30px_-8px_rgba(0,60,120,0.35)] backdrop-blur-sm ${className}`}
      style={{ width: w, height: 22, transform: `rotate(${rotate}deg)` }}
    >
      <div className="ml-1 grid h-4 w-4 place-items-center rounded-full bg-sky-brand/80">
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
    </div>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative mx-2 mt-2 overflow-hidden rounded-[28px]">
        <div
          className="relative h-[720px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSky.url})` }}
        >
          {/* copy */}
          <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-start pt-[110px] text-center">
            <h1 className="text-white text-[64px] leading-[1.05] font-light md:text-[80px]">
              Building the future with
              <br />
              <span className="text-white/70">AI and strategy</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/90 text-[15px] leading-relaxed">
              We help organizations unlock growth and efficiency through data-driven
              consulting and intelligent automation.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#demo"
                className="rounded-full bg-[#0f2a4a]/85 px-7 py-3 text-[11px] font-semibold tracking-[0.18em] text-white hover:bg-[#0f2a4a]"
              >
                VIEW DEMO
              </a>
              <a
                href="#start"
                className="group inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3 pr-2 text-[11px] font-semibold tracking-[0.18em] text-ink"
              >
                GET STARTED
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-lime">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Plane arc */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[80px] mx-auto h-[300px] max-w-6xl">
            <Plane className="left-[10%] top-[62%]" w={110} rotate={-14} />
            <Plane className="left-[24%] top-[45%]" w={80} rotate={-8} />
            <Plane className="left-[36%] top-[35%]" w={55} rotate={-2} />
            <Plane className="left-[46%] top-[85%]" w={70} rotate={0} />
            <Plane className="left-[54%] top-[42%]" w={160} rotate={4} />
            <Plane className="left-[70%] top-[38%]" w={70} rotate={10} />
            <Plane className="left-[80%] top-[55%]" w={140} rotate={14} />
          </div>

          {/* Rating */}
          <div className="absolute inset-x-0 bottom-6 text-center text-white/90">
            <p className="text-xs">Rated 4.9/5 by 4,900+ clients</p>
            <div className="mt-1 flex justify-center gap-1 text-lime">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="border-b border-border/60 py-8">
        <div className="overflow-hidden">
          <div className="marquee flex w-max gap-16 whitespace-nowrap">
            {[...logos, ...logos, ...logos, ...logos].map((l, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-semibold text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + stats */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="text-center text-[11px] font-semibold tracking-[0.24em] text-foreground/70">
          • ABOUT US
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-center text-[44px] leading-[1.15] md:text-[56px] font-light">
          A global consulting partner dedicated to building{" "}
          <span className="inline-grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-sky-brand align-middle">
            <span className="h-4 w-4 rounded-full bg-white/90" />
          </span>{" "}
          smarter and{" "}
          <span className="inline-grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-lime align-middle">
            <span className="h-3 w-3 rounded-full bg-ink" />
          </span>{" "}
          more adaptive
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* IPSUM card */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-sky-brand/30 to-sky-brand/10 p-4">
            <div
              className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${ipsumPerson.url})` }}
            >
              <div className="absolute left-4 top-4 text-xl font-bold tracking-tight text-white">IPSUM</div>
              <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg bg-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M12 4v16" stroke="currentColor" strokeWidth="1.6"/></svg>
              </div>
              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white p-5">
                <div className="text-[44px] leading-none font-light">120+</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Collaborating with leading AI and cloud technology providers.
                </p>
              </div>
            </div>
          </div>

          {/* Middle stack */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[28px] bg-muted p-7 min-h-[220px]">
              <p className="text-xs text-muted-foreground">Commitment to measurable</p>
              <div className="mt-3 text-[64px] leading-none font-light">100%</div>
              <div className="mt-8 flex -space-x-2">
                {[tElara, tDarius, tAva, ipsumPerson].map((a, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-cover bg-center ring-2 ring-white" style={{ backgroundImage: `url(${a.url})` }} />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/80">
                "Their automation strategy completely reshaped how we work. It's efficient, intelligent, and seamless."
              </p>
            </div>
          </div>

          {/* Right stack */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[28px] bg-lime p-7">
              <p className="text-xs text-ink/70">Data Points</p>
              <div className="mt-2 text-[64px] leading-none font-light text-ink">520k+</div>
              <p className="mt-4 text-sm text-ink/80">Analyzed monthly to power smarter business strategies.</p>
            </div>
            <div className="rounded-[28px] bg-ink p-7 text-white">
              <div className="flex items-end justify-between">
                <p className="text-xs text-white/70">Continents</p>
                <div className="text-[64px] leading-none font-light">20+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client stories */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-white/60">• CLIENT STORIES</p>
              <h2 className="mt-4 max-w-2xl text-[44px] leading-[1.1] md:text-[52px] font-light">
                Real outcomes from thoughtful AI partnerships
              </h2>
            </div>
            <a href="#work" className="rounded-full border border-white/25 px-6 py-3 text-[11px] font-semibold tracking-[0.2em] hover:bg-white/10">
              WORK WITH US
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { img: tElara.url, quote: "They brought clarity to complex problems, breaking down barriers and delivering innovative solutions.", who: "Elara Vance, Umbrella Co." },
              { img: tDarius.url, quote: "They gave key clarity to hard issues, tearing down walls and producing smart, new quick answers.", who: "Darius Jones, Vision Tech" },
              { img: tAva.url, quote: "They solved complex needs with great clarity, cutting through mess and giving sharp, key results.", who: "Ava Mercer, Catalyst" },
            ].map((t, i) => (
              <div key={i} className="relative overflow-hidden rounded-[24px]">
                <div className="h-[420px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${t.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white/80">"</div>
                  <p className="text-[17px] leading-snug">{t.quote}</p>
                  <p className="mt-4 text-xs text-white/60">{t.who}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-foreground/70">• BLOG AND ARTICLES</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="max-w-2xl text-[44px] leading-[1.1] md:text-[52px] font-light">Latest insights and trends</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Whether you're optimizing today or building for tomorrow, we help you move faster with confidence.
            </p>
          </div>
          <a href="#blog" className="rounded-full bg-ink px-6 py-3 text-[11px] font-semibold tracking-[0.2em] text-white">
            VIEW ALL
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { img: blog1.url, title: "Turning Data into Strategy: The Power of Analytics" },
            { img: blog2.url, title: "5 Ways AI Can Transform Business Operations" },
            { img: blog3.url, title: "Designing Adaptive Teams for an AI-native Future" },
          ].map((b, i) => (
            <a key={i} href="#" className="group relative block overflow-hidden rounded-[24px]">
              <div className="h-[380px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${b.img})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-6 text-[22px] leading-snug text-white">{b.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <div className="text-4xl font-bold tracking-tight">Aeline</div>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-24 place-items-center rounded-full bg-white shadow-inner">
                <span className="h-6 w-6 rounded-full bg-lime" />
              </span>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">© 2025 Ailine Inc. All rights reserved.</p>
            <div className="flex gap-2 text-muted-foreground">
              {["X", "IG", "IN"].map((s) => (
                <a key={s} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border text-xs hover:bg-white">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
