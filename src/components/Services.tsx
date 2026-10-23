import { Palette, Box, Brush, MonitorSmartphone, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/portfolio';

const iconMap: Record<string, typeof Palette> = {
  Palette,
  Box,
  Brush,
  MonitorSmartphone,
};

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-ink-950 to-ink-900">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">
            Dịch vụ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight">
            Bốn lĩnh vực, một tâm huyết với thiết kế.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Palette;
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/30 p-8 hover:border-accent-500/50 hover:bg-ink-900/60 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-500/0 group-hover:bg-accent-500/15 rounded-full blur-[60px] transition-all duration-700" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-800/60 group-hover:bg-accent-500 transition-colors duration-500">
                      <Icon size={26} className="text-accent-400 group-hover:text-ink-950 transition-colors duration-500" />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-ink-500 group-hover:text-accent-400 group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ink-50 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-ink-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-ink-400 border border-ink-700 rounded-full px-3 py-1.5 group-hover:border-ink-600 transition-colors"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
