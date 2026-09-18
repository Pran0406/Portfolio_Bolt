import { useState } from 'react';
import Reveal from './Reveal';
import { Mail, ArrowRight, Check, Linkedin, Github, FileText, Phone, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured');
      }

      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg('The contact form is not configured yet. Please email me directly.');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const field =
    'w-full rounded-xl border border-nebula-400/15 bg-ink-850/50 px-4 py-3 text-sm text-white placeholder:text-nebula-100/30 outline-none transition-all focus:border-nebula-400/50 focus:ring-2 focus:ring-nebula-500/30';

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="glass-strong glow-border relative overflow-hidden rounded-3xl p-8 sm:p-12">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-32 left-1/3 h-64 w-64 rounded-full bg-nebula-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-aqua-500/15 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="section-label">06 — Contact</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Have data that needs a <span className="text-gradient">second pair of eyes?</span>
              </h2>
              <p className="mt-4 max-w-md text-nebula-100/65">
                I take on a few engagements per quarter — strategy sprints, dashboard rebuilds, and
                embedded analytics roles. Tell me what you're solving.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/pranav-tryambake"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-nebula-400/20 bg-ink-850/40 text-nebula-100/70 transition-all hover:-translate-y-0.5 hover:border-nebula-400/50 hover:text-white"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Pran0406"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-nebula-400/20 bg-ink-850/40 text-nebula-100/70 transition-all hover:-translate-y-0.5 hover:border-nebula-400/50 hover:text-white"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="http://app.notion.com/p/Portfolio-3adb9fc3607780eda72fe801e59e464"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-nebula-400/20 bg-ink-850/40 text-nebula-100/70 transition-all hover:-translate-y-0.5 hover:border-nebula-400/50 hover:text-white"
                  aria-label="Notion portfolio"
                >
                  <FileText className="h-5 w-5" />
                </a>
              </div>

              <a
                href="tel:+919284647476"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-aqua-300"
              >
                <Phone className="h-4 w-4 text-aqua-300" />
                +91 9284647476
              </a>

              <a
                href="mailto:tryambakepranav1@gmail.com"
                className="mt-3 inline-flex items-center gap-2 text-sm text-nebula-100/70 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-aqua-300" />
                tryambakepranav1@gmail.com
              </a>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                className={field}
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={status === 'sending'}
              />
              <input
                type="email"
                className={field}
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={status === 'sending'}
              />
              <textarea
                className={`${field} min-h-[7rem] resize-none`}
                placeholder="What are you solving?"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={status === 'sending'}
              />

              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sent' ? (
                  <>
                    <Check className="h-4 w-4" /> Message sent
                  </>
                ) : status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
