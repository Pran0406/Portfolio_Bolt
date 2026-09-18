import Reveal from './Reveal';
import { GraduationCap, Briefcase } from 'lucide-react';
import { education } from '@/data/content';

const icons = [GraduationCap, Briefcase, GraduationCap, GraduationCap];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal className="mb-12 text-center">
          <span className="section-label">05 — Journey</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            From campus to <span className="text-gradient">production analytics</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* spine */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-nebula-400/40 via-aqua-400/20 to-transparent sm:left-1/2" />

          <ul className="space-y-8">
            {education.map((e, i) => {
              const Icon = icons[i] ?? GraduationCap;
              const right = i % 2 === 1;
              return (
                <Reveal key={e.title} delay={i * 100} as="li">
                  <div className={`relative flex items-start gap-5 sm:gap-0 ${right ? 'sm:flex-row-reverse' : ''}`}>
                    {/* node */}
                    <span className="absolute left-5 top-2 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-aqua-400 shadow-lg shadow-aqua-500/50 sm:left-1/2">
                      <span className="absolute h-6 w-6 animate-ping rounded-full bg-aqua-400/30" />
                    </span>

                    {/* card */}
                    <div className={`ml-10 sm:ml-0 sm:w-1/2 ${right ? 'sm:pl-10' : 'sm:pr-10 sm:text-right'}`}>
                      <div className="glass glow-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                        <div className={`flex items-center gap-3 ${right ? '' : 'sm:flex-row-reverse'}`}>
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-nebula-500/20 ring-1 ring-nebula-400/30">
                            <Icon className="h-5 w-5 text-nebula-300" />
                          </span>
                          <h3 className="font-display font-semibold leading-snug text-white">{e.title}</h3>
                        </div>
                        <p className="mt-3 text-sm text-nebula-100/55">{e.org}</p>
                        <p className="mt-1 text-xs font-medium text-aqua-300/70">{e.period}</p>
                        <p className="mt-2 text-sm leading-relaxed text-nebula-100/45">{e.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
