import { Database, Terminal, BarChart3, Table2, BrainCircuit, LineChart, ArrowRight, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { stats } from '@/data/content';

type Tool = { name: string; icon: LucideIcon; r: number; dur: string; delay: string; rev?: boolean; color: string };

const tools: Tool[] = [
  { name: 'SQL', icon: Database, r: 150, dur: '26s', delay: '0s', color: 'text-aqua-300' },
  { name: 'Python', icon: Terminal, r: 215, dur: '34s', delay: '-4s', color: 'text-nebula-300' },
  { name: 'Power BI', icon: BarChart3, r: 175, dur: '30s', delay: '-8s', rev: true, color: 'text-magenta-400' },
  { name: 'Excel', icon: Table2, r: 245, dur: '40s', delay: '-2s', color: 'text-nebula-400' },
  { name: 'ML', icon: BrainCircuit, r: 195, dur: '28s', delay: '-12s', rev: true, color: 'text-aqua-400' },
  { name: 'Viz', icon: LineChart, r: 140, dur: '24s', delay: '-6s', color: 'text-nebula-200' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div className="relative z-10 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-nebula-400/25 bg-nebula-500/10 px-4 py-1.5 text-xs font-medium text-nebula-100 animate-rise">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua-400" />
            </span>
            Available for engagements
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block animate-rise">Data Analyst</span>
            <span className="block text-gradient-anim animate-rise [animation-delay:120ms]">
              Turning Data into
            </span>
            <span className="block animate-rise [animation-delay:240ms]">Business Insights</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-nebula-100/70 sm:text-lg md:mx-0 animate-rise [animation-delay:360ms]">
            I design dashboards, build data pipelines, and translate messy numbers into decisions
            that move revenue. SQL · Python · Power BI · ML.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start animate-rise [animation-delay:480ms]">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          {/* stats */}
          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 animate-rise [animation-delay:600ms]">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl px-3 py-3 text-center md:text-left">
                <dt className="font-display text-2xl font-bold text-gradient">{s.value}</dt>
                <dd className="mt-0.5 text-xs text-nebula-100/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: orbiting tools */}
        <div className="relative hidden h-[32rem] items-center justify-center md:flex">
          {/* rings */}
          <div className="absolute h-[20rem] w-[20rem] rounded-full border border-nebula-400/10" />
          <div className="absolute h-[28rem] w-[28rem] rounded-full border border-nebula-400/[0.07]" />
          <div className="absolute h-[36rem] w-[36rem] rounded-full border border-nebula-400/[0.05]" />

          {/* core */}
          <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-nebula-500 to-aqua-500 shadow-2xl shadow-nebula-600/50 animate-float-y">
            <div className="absolute inset-0 rounded-full bg-nebula-400/40 blur-2xl animate-pulse-glow" />
            <Database className="relative h-10 w-10 text-white" />
          </div>

          {/* orbiting icons */}
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className={`absolute ${t.rev ? 'animate-orbit-rev' : 'animate-orbit-slow'}`}
                style={
                  {
                    '--orbit-r': `${t.r}px`,
                    animationDuration: t.dur,
                    animationDelay: t.delay,
                  } as React.CSSProperties
                }
              >
                <div className="glass glow-border grid h-14 w-14 place-items-center rounded-2xl">
                  <Icon className={`h-6 w-6 ${t.color}`} />
                </div>
                <span className="mt-1.5 block text-center text-[0.65rem] font-medium text-nebula-100/60">
                  {t.name}
                </span>
              </div>
            );
          })}

          {/* floating glow chips */}
          <div className="absolute left-6 top-10 glass rounded-xl px-3 py-2 text-xs text-nebula-100/70 animate-float-soft">
            SELECT insight FROM data
          </div>
          <div className="absolute bottom-12 right-4 glass rounded-xl px-3 py-2 text-xs text-nebula-100/70 animate-float-soft [animation-delay:2s]">
            df.groupby('cohort')
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-nebula-100/40 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-nebula-100/20 p-1.5">
          <span className="h-2 w-1 animate-float-y rounded-full bg-nebula-100/60" />
        </span>
      </a>
    </section>
  );
}
