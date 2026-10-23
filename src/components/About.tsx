import { useReveal } from '@/hooks/useReveal';
import { stats, skills } from '@/data/portfolio';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 bg-ink-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/8 rounded-full blur-[100px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: image + stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src="https://images.pexels.com/photos/15558380/pexels-photo-15558380.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Tấn Thiện tại nơi làm việc"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-lg font-semibold text-ink-50">Tấn Thiện</p>
                <p className="text-sm text-ink-300">Graphic Designer & Creative Director</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-ink-800 bg-ink-900/40 p-5 hover:border-accent-500/40 transition-colors duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <p className="font-display text-4xl font-extrabold text-accent-400">{stat.value}</p>
                  <p className="mt-1 text-sm text-ink-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">
              Giới thiệu
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-ink-50 mb-8">
              Biến ý tưởng thành hình ảnh khiến người ta không thể rời mắt.
            </h2>
            <div className="space-y-6 text-ink-300 text-lg leading-relaxed">
              <p>
                Mình là Tấn Thiện — graphic designer với hơn 8 năm kinh nghiệm
                biến ý tưởng thành hình ảnh. Mình tin rằng thiết kế giỏi không phải
                là hét to, mà là cộng hưởng. Mỗi logo, poster, hay bao bì đều bắt
                đầu bằng một câu hỏi: cảm giác này nên để lại gì? Rồi mình làm ngược
                lại từ cảm giác đó cho đến khi từng chi tiết đều có chỗ đứng.
              </p>
              <p>
                Mình làm việc với các thương hiệu từ mỹ phẩm, F&B đến nghệ thuật
                số, luôn đặt chất lượng lên trên số lượng. Mỗi dự án mình nhận đều
                được đầu tư như tác phẩm riêng — đẹp đủ để đoạt giải, sắc enough để
                đẩy doanh số.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <p className="text-sm text-ink-400 mb-4">Chuyên môn</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-ink-700 bg-ink-900/50 px-4 py-2 text-sm text-ink-200 hover:border-accent-400 hover:text-accent-400 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-ink-800">
              <p className="font-display text-3xl italic text-ink-200">Tấn Thiện</p>
              <p className="text-sm text-ink-400 mt-1">Đà Nẵng, Việt Nam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
