import { ArrowDown, Sparkles } from 'lucide-react';
import { clientLogos } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sand-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/50 px-4 py-1.5 text-sm text-ink-200">
            <Sparkles size={14} className="text-accent-400" />
Đang nhận dự án — Thu 2026
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.95] tracking-tight text-ink-50 animate-fade-in-up">
          Thiết kế
          <br />
          thương hiệu
          <br />
          <span className="text-stroke italic">không pha trộn</span>
          <span className="text-accent-400">.</span>
        </h1>

        {/* Subtext */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="max-w-md text-lg text-ink-300 leading-relaxed">
            Mình là <span className="text-ink-50 font-medium">Tấn Thiện</span> —
            graphic designer tự do sáng tạo nhận diện thương hiệu,
            poster và digital painting cho những ai không chịu hòa tan.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-ink-50 font-medium text-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-700 group-hover:border-accent-400 group-hover:bg-accent-500 transition-all duration-300">
                <ArrowDown size={20} className="group-hover:text-ink-950 transition-colors" />
              </span>
              Xem tác phẩm nổi bật
            </a>
          </div>
        </div>
      </div>

      {/* Client logos marquee */}
      <div className="relative z-10 mt-20 border-y border-ink-800/60 overflow-hidden py-5">
        <div className="marquee-track">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <span
              key={i}
              className="mx-8 font-display text-xl font-semibold text-ink-400 hover:text-ink-200 transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
