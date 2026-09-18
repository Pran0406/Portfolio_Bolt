import Reveal from './Reveal';
import { Target, Sparkles, TrendingUp } from 'lucide-react';

const principles = [
  { icon: Target, title: 'Decision-first', desc: "Every chart should change a decision. If it doesn't, it shouldn't exist." },
  { icon: Sparkles, title: 'Clarity over flash', desc: 'Stakeholders read the answer in 5 seconds — not 5 minutes.' },
  { icon: TrendingUp, title: 'Revenue-obsessed', desc: 'Analytics measured in dollars moved, not dashboards shipped.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 text-center">
          <span className="section-label">01 — About</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            A decision partner, not just a <span className="text-gradient">dashboard builder</span>.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Reveal className="glass glow-border rounded-3xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-nebula-100/85">
              I'm <span className="font-semibold text-white">Pranav Tryambake</span> — a data analyst
              who turns raw, messy datasets into clear answers. I build SQL models, automate
              reporting pipelines, and design Power BI dashboards that leaders actually use to
              decide what to do next.
            </p>
            <p className="mt-5 leading-relaxed text-nebula-100/65">
              My north star is simple: every chart should change a decision. If it doesn't, it
              shouldn't exist.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['SQL Models', 'Reporting Automation', 'Power BI Dashboards', 'Churn Prediction', 'KPI Modelling'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-nebula-400/20 bg-nebula-500/10 px-3 py-1.5 text-xs font-medium text-nebula-100/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.title}
                  delay={i * 120}
                  className="glass glow-border group flex items-start gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-nebula-500/30 to-aqua-500/20 ring-1 ring-nebula-400/30">
                    <Icon className="h-5 w-5 text-aqua-300" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-nebula-100/60">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
