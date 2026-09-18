import Reveal from './Reveal';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 text-center">
          <span className="section-label">02 — Skills</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            The stack behind <span className="text-gradient">every insight</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-nebula-100/60">
            Sharp tools, used carefully. I pick what fits the question — not what's trending.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.name}
                delay={(i % 4) * 90}
                className="glass glow-border group relative flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-850/60 ring-1 ring-nebula-400/20 transition-all duration-300 group-hover:ring-nebula-400/50 group-hover:shadow-lg group-hover:shadow-nebula-600/30">
                  <Icon className={`h-7 w-7 ${s.color} animate-float-soft`} style={{ animationDelay: `${i * 0.4}s` }} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white">{s.name}</h3>
                  <p className="mt-0.5 text-xs text-nebula-100/50">{s.level}</p>
                </div>
                <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_0%,rgba(75,91,255,0.12),transparent_70%)]" />
              </Reveal>
            );
          })}
        </div>

        {/* marquee */}
        <div className="mt-12 overflow-hidden mask-fade-edges">
          <div className="flex w-max animate-marquee gap-8">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex shrink-0 gap-8">
                {['PostgreSQL', 'Snowflake', 'BigQuery', 'Pandas', 'NumPy', 'scikit-learn', 'DAX', 'Power Query', 'Tableau', 'Looker', 'dbt', 'Airflow'].map((t) => (
                  <span key={t} className="font-mono text-sm text-nebula-100/40">
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
