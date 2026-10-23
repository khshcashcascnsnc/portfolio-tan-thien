import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Tác phẩm', href: '#work' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Khoá học', href: '#services' },
  { label: 'Đánh giá', href: '#testimonials' },
  { label: 'Liên hệ', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handler = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      const scrollPos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          return;
        }
      }
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-ink-800/60 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="text-2xl font-display font-extrabold tracking-tight text-ink-50">
            thiện<span className="text-accent-400">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                activeSection === link.href.slice(1)
                  ? 'text-accent-400'
                  : 'text-ink-200 hover:text-ink-50'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent-400 transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent-500 px-5 py-2 text-sm font-semibold text-ink-950 hover:bg-accent-400 transition-colors duration-300"
          >
            Liên hệ ngay
          </a>
        </div>

        <button
          className="md:hidden text-ink-50 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink-950/95 backdrop-blur-xl border-b border-ink-800/60 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink-200 hover:text-accent-400 font-medium text-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-ink-950"
          >
            Liên hệ ngay
          </a>
        </div>
      )}
    </header>
  );
}
