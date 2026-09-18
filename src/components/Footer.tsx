import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative border-t border-nebula-400/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2 font-display font-semibold text-white">
          <Logo size={32} className="rounded-lg" />
          Pran
        </div>
        <p className="text-sm text-nebula-100/40">
          © {new Date().getFullYear()} Pranav Tryambake. Built with precision.
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm text-nebula-100/50 transition-colors hover:text-white"
        >
          Back to top
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-nebula-400/20 transition-all group-hover:-translate-y-0.5 group-hover:border-nebula-400/50">
            <ArrowUp className="h-4 w-4" />
          </span>
        </a>
      </div>
    </footer>
  );
}
