import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send, Instagram, Linkedin, Dribbble, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-ink-900 to-ink-950 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">
              Liên hệ
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-ink-50 leading-[1.05] mb-8">
              Có dự án
              <br />
              trong đầu?
              <br />
              <span className="text-accent-400">Cùng làm nhé.</span>
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed max-w-md mb-10">
              Mình nhận một số lượng giới hạn dự án mỗi mùa để dành trọn sự quan
              tâm cho từng tác phẩm. Hãy cho mình biết bạn đang xây gì, mình sẽ
              phản hồi trong vòng 48 giờ.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ttan13713@gmail.com"
                className="flex items-center gap-4 text-ink-200 hover:text-accent-400 transition-colors group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 group-hover:border-accent-400 transition-colors">
                  <Mail size={18} />
                </span>
                ttan13713@gmail.com
              </a>
              <a
                href="tel:0348808250"
                className="flex items-center gap-4 text-ink-200 hover:text-accent-400 transition-colors group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 group-hover:border-accent-400 transition-colors">
                  <Phone size={18} />
                </span>
                0348 808 250
              </a>
              <a
                href="https://zalo.me/0348808250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-ink-200 hover:text-accent-400 transition-colors group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 group-hover:border-accent-400 transition-colors">
                  <MessageCircle size={18} />
                </span>
                Zalo: 0348 808 250
              </a>
              <div className="flex items-center gap-4 text-ink-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700">
                  <MapPin size={18} />
                </span>
                K249 Hà Huy Tập, Thanh Khê, TP Đà Nẵng
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 flex gap-3">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Dribbble, href: '#', label: 'Dribbble' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 text-ink-300 hover:border-accent-400 hover:text-accent-400 hover:bg-ink-900 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-ink-800 bg-ink-900/40 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ink-300 mb-2">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-xl border border-ink-700 bg-ink-950/50 px-4 py-3 text-ink-50 placeholder-ink-500 outline-none focus:border-accent-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-300 mb-2">
                  Địa chỉ Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-ink-700 bg-ink-950/50 px-4 py-3 text-ink-50 placeholder-ink-500 outline-none focus:border-accent-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-300 mb-2">
                  Kể về dự án của bạn
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Mình đang xây dựng thương hiệu mỹ phẩm và cần một bộ nhận diện..."
                  rows={5}
                  className="w-full rounded-xl border border-ink-700 bg-ink-950/50 px-4 py-3 text-ink-50 placeholder-ink-500 outline-none focus:border-accent-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 font-semibold text-ink-950 hover:bg-accent-400 disabled:opacity-70 transition-colors duration-300"
              >
                {sent ? (
                  <>
                    <Check size={20} /> Đã gửi — sẽ liên hệ sớm!
                  </>
                ) : (
                  <>
                    Gửi tin nhắn <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
