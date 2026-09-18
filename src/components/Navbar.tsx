import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-ink-950/50' : ''
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight text-white">
            <Logo size={38} className="shadow-lg shadow-nebula-600/40 rounded-xl" />
            <span className="hidden sm:inline">Pran</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-nebula-100/70 transition-colors hover:text-white hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Resume_Pranav_Tryambake.pdf"
            download="Pranav-Tryambake-Resume.pdf"
            className="hidden btn-primary !py-2.5 !px-5 text-sm md:inline-flex"
          >
            Resume
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-nebula-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 glass-strong rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-nebula-100/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/Resume_Pranav_Tryambake.pdf"
              download="Pranav-Tryambake-Resume.pdf"
              className="mt-2 block rounded-lg px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-nebula-500 to-aqua-500 text-center"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
