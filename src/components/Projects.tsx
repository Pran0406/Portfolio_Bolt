import { useState, useMemo, useEffect } from 'react';
import Reveal from './Reveal';
import { ArrowUpRight, X, ExternalLink, Github, Target, Lightbulb, TrendingUp, ChevronDown, ChevronUp, CheckCircle2, Sparkles } from 'lucide-react';
import { type Project, type ProjectCategory } from '@/data/content';
import { useProjects } from '@/hooks/useProjects';

const catColor: Record<string, string> = {
  Python: 'text-nebula-300 border-nebula-400/30 bg-nebula-500/10',
  'Machine Learning': 'text-magenta-400 border-magenta-400/30 bg-magenta-500/10',
  'Power BI': 'text-aqua-300 border-aqua-400/30 bg-aqua-500/10',
  SQL: 'text-nebula-300 border-nebula-400/30 bg-nebula-500/10',
  Automation: 'text-aqua-400 border-aqua-400/30 bg-aqua-500/10',
  Excel: 'text-nebula-400 border-nebula-400/30 bg-nebula-500/10',
};

export default function Projects() {
  const { projects: allProjects } = useProjects();
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);

  const VISIBLE_COUNT = 6;

  useEffect(() => {
    setExpanded(false);
  }, [filter]);

  const liveCategories = useMemo(() => {
    const cats = new Set<string>();
    allProjects.forEach((p) => cats.add(p.category));
    return cats;
  }, [allProjects]);

  const categories: (ProjectCategory | 'All')[] = useMemo(() => {
    const all = ['All', 'Excel', 'SQL', 'Power BI', 'Python', 'Automation', 'Machine Learning'] as (ProjectCategory | 'All')[];
    return all.filter((c) => c === 'All' || liveCategories.has(c));
  }, [liveCategories]);

  const filtered = filter === 'All' ? allProjects : allProjects.filter((p) => p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, VISIBLE_COUNT);
  const hasMore = filtered.length > VISIBLE_COUNT;

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-8 text-center">
          <span className="section-label">03 — Projects</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Projects with <span className="text-gradient">measurable insights</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-nebula-100/55 sm:text-base">
            Data analysis, dashboards, automation, and machine learning projects focused on solving practical business problems.
          </p>
        </Reveal>

        {/* category filter */}
        <Reveal className="mb-10 flex flex-wrap items-center justify-center gap-2" delay={100}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-nebula-500 to-aqua-500 text-white shadow-lg shadow-nebula-600/30'
                  : 'border border-nebula-400/15 bg-ink-850/40 text-nebula-100/60 hover:border-nebula-400/35 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 3) * 80}
              as="article"
              className="group glass glow-border relative flex cursor-pointer flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className={`pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

              {p.imageUrl && (
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    loading="lazy"
                    className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                </div>
              )}

              <div className="mb-4 flex items-center justify-between gap-2">
                <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${catColor[p.category]}`}>
                  {p.category}
                </span>
                <span className="text-right font-display text-xs font-semibold text-gradient">{p.impact}</span>
              </div>

              <h3 className="font-display text-lg font-semibold leading-snug text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-nebula-100/60">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tools.map((tag) => (
                  <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-nebula-100/70">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <button
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-aqua-300/80 transition-colors hover:text-aqua-300"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </button>
                <a
                  href="https://github.com/Pran0406"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-nebula-400/15 bg-ink-850/40 text-nebula-100/60 transition-all hover:-translate-y-0.5 hover:border-nebula-400/40 hover:text-white"
                  aria-label="GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="btn-ghost !py-3 !px-7 text-sm"
            >
              {expanded ? (
                <>
                  Show less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show more ({filtered.length - VISIBLE_COUNT} more)
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* detail modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-rise"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" />

      <div
        className="glass-strong glow-border relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-lg text-nebula-100/50 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* header */}
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${catColor[project.category]}`}>
          {project.category}
        </span>

        {project.imageUrl && (
          <div className="mt-4 overflow-hidden rounded-xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
          </div>
        )}

        <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-nebula-100/70">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-nebula-100/70">
              {t}
            </span>
          ))}
        </div>

        {/* business impact banner */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-nebula-500/15 to-aqua-500/10 px-5 py-4">
          <Sparkles className="h-6 w-6 shrink-0 text-aqua-300" />
          <div>
            <p className="text-xs text-nebula-100/50">Business impact</p>
            <p className="font-display text-lg font-bold text-gradient">{project.results}</p>
          </div>
        </div>

        {/* story sections */}
        <div className="mt-6 space-y-5">
          <StoryBlock icon={Target} label="The challenge" text={project.challenge} />
          <StoryBlock icon={Lightbulb} label="The approach" text={project.approach} />

          {/* key insights */}
          {project.insights && project.insights.length > 0 && (
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-850/60 ring-1 ring-nebula-400/20">
                <TrendingUp className="h-5 w-5 text-nebula-300" />
              </span>
              <div className="flex-1">
                <h4 className="font-display text-sm font-semibold text-white">Key insights</h4>
                <ul className="mt-2 space-y-2">
                  {project.insights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-nebula-100/60">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400/70" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 !px-5 text-sm">
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5 !px-5 text-sm">
                <Github className="h-4 w-4" />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StoryBlock({ icon: Icon, label, text }: { icon: any; label: string; text: string }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-850/60 ring-1 ring-nebula-400/20">
        <Icon className="h-5 w-5 text-nebula-300" />
      </span>
      <div>
        <h4 className="font-display text-sm font-semibold text-white">{label}</h4>
        <p className="mt-1 text-sm leading-relaxed text-nebula-100/60">{text}</p>
      </div>
    </div>
  );
}
