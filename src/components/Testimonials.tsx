import { Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { testimonials } from '@/data/portfolio';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="relative py-32 bg-ink-950 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-sage-500/8 rounded-full blur-[120px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">
            Lời nhận xét
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight">
            Khách hàng nói gì sau khi ra mắt.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="group relative flex flex-col rounded-2xl border border-ink-800 bg-ink-900/40 p-8 hover:border-accent-500/40 hover:bg-ink-900/60 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote size={36} className="text-accent-500/40 mb-6" />

              <p className="text-ink-200 leading-relaxed flex-1 text-[0.95rem]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-ink-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-ink-700 group-hover:border-accent-400 transition-colors"
                />
                <div>
                  <p className="font-display font-semibold text-ink-50">{t.name}</p>
                  <p className="text-sm text-ink-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
