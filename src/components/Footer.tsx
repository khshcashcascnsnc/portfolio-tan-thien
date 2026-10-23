import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-ink-800 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-extrabold tracking-tight text-ink-50">
              thiện<span className="text-accent-400">.</span>
            </span>
          </div>

          <p className="text-sm text-ink-400 text-center">
            &copy; {new Date().getFullYear()} Tấn Thiện. Thiết kế & xây dựng bằng cả tâm huyết.
          </p>

          <a
            href="#hero"
            className="group flex items-center gap-2 text-sm text-ink-300 hover:text-accent-400 transition-colors"
          >
            Lên đầu trang
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 group-hover:border-accent-400 group-hover:-translate-y-1 transition-all">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
