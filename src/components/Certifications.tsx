import Reveal from './Reveal';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/content';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 text-center">
          <span className="section-label">04 — Certifications</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Verified <span className="text-gradient">certifications</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-nebula-100/60">
            Every badge below links to its official, verifiable credential.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 2) * 120}
              as="a"
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="group glass glow-border flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-magenta-500/25 to-nebula-500/20 ring-1 ring-magenta-400/30">
                <Award className="h-6 w-6 text-magenta-400" />
              </span>
              <div className="flex-1">
                <h3 className="font-display font-semibold leading-snug text-white">{c.title}</h3>
                <p className="mt-0.5 text-sm text-nebula-100/50">{c.issuer}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-nebula-100/30 transition-colors group-hover:text-aqua-300" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
