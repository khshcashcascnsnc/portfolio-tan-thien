import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/portfolio';

const categories = ['All', 'Brand Identity', 'Poster Design', 'Typography', 'Digital Painting'];

export default function Work() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter(
          (p) => p.category === filter || p.tags.some((t) => t === filter),
        );

  return (
    <section id="work" className="relative py-32 bg-ink-900">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 reveal ${visible ? 'is-visible' : ''}`}>
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight">
              Những tác phẩm tự hào nhất.
            </h2>
          </div>
          <p className="text-ink-400 max-w-xs">
            Tuyển tập poster, branding và digital painting từ những dự án gần nhất.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-accent-500 text-ink-950'
                  : 'border border-ink-700 text-ink-300 hover:border-ink-500 hover:text-ink-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[320px]">
          {filtered.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer text-left ${
                project.span === 'wide'
                  ? 'md:col-span-2'
                  : project.span === 'tall'
                    ? 'lg:row-span-2'
                    : ''
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Top badge */}
              <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-0 rotate-45">
                <ArrowUpRight size={18} className="text-ink-50" />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-accent-500/90 px-2.5 py-0.5 text-xs font-medium text-ink-950">
                    {project.category}
                  </span>
                  <span className="text-xs text-ink-300">{project.year}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-ink-50 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-300 line-clamp-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-400 py-20">Chưa có dự án trong danh mục này.</p>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-ink-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-ink-900 border border-ink-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/60 backdrop-blur-md text-ink-200 hover:text-ink-50 hover:bg-ink-800 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full bg-accent-500/90 px-3 py-1 text-xs font-medium text-ink-950">
                  {selected.category}
                </span>
                <span className="text-sm text-ink-400">{selected.year}</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-ink-50 mb-4">
                {selected.title}
              </h3>
              <p className="text-ink-300 leading-relaxed mb-6">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink-600 px-3 py-1.5 text-sm text-ink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
