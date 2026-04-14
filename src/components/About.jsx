import { Coffee, Rocket, Trophy, Zap } from 'lucide-react';

const stats = [
  { value: '75', label: 'GFG University Rank', icon: <Trophy className="text-neo-ink" />, color: 'bg-neo-secondary' },
  { value: '1500+', label: 'LeetCode', icon: <Zap className="text-neo-ink" />, color: 'bg-neo-accent' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-neo-white border-y-8 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side: Bio */}
          <div className="lg:w-2/3 space-y-8">
            <div className="inline-block bg-neo-ink text-neo-white px-6 py-2 -rotate-1 font-black text-xl uppercase tracking-widest shadow-neo-md">
              01. ABOUT ME
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
              The human behind <br />
              <span className="text-stroke">the machine code</span>
            </h2>

            <div className="relative group">
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3"></div>
              <div className="relative bg-neo-white border-4 border-black p-8 md:p-12 space-y-6 bg-halftone">
                <p className="text-xl md:text-2xl font-bold leading-relaxed">
                  Hi! I&apos;m a final-year Computer Science student at <span className="underline decoration-8 decoration-neo-secondary decoration-skip-ink">ITM University Gwalior</span> with a deep love for building robust backend systems.
                  My toolkit revolves around Java and Spring Boot.
                </p>
                <p className="text-xl md:text-2xl font-bold leading-relaxed border-t-4 border-black pt-6">
                  I&apos;ve built everything from a P2P Skill Exchange Platform to an AI-powered accessibility analyzer.
                  I care a lot about clean architecture, meaningful UX, and writing code that actually holds up under pressure.
                </p>
                <p className="text-xl md:text-2xl font-bold leading-relaxed border-t-4 border-black pt-6">
                  When I&apos;m not coding, you&apos;ll find me solving DSA problems (GFG University Rank #75), exploring distributed systems,
                  or working on cloud foundations as an AWS Academy Graduate.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Stats & Facts */}
          <div className="lg:w-1/3 w-full space-y-12">

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`border-4 border-black p-6 shadow-neo-sm hover:shadow-neo-md transition-all ${stat.color} ${i % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0`}
                >
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black uppercase tracking-tighter">{stat.value}</div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Experience Box */}
            <div className="bg-neo-secondary border-4 border-black p-8 rotate-1 shadow-neo-lg relative">
              <div className="absolute -top-6 -right-6 bg-neo-accent border-4 border-black p-3 animate-bounce">
                <Rocket className="text-neo-white" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 border-b-4 border-black pb-2">
                Path to Mastery 🎓
              </h3>
              <ul className="space-y-4">
                {[
                  { title: 'Java Dev Trainee', sub: 'Eduskills (Jan - Mar 2026)' },
                  { title: 'B.Tech CSE', sub: 'ITM University Gwalior' },
                  { title: 'AWS Graduate', sub: 'Cloud Foundations' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="bg-black text-neo-white px-2 font-black">0{i + 1}</span>
                    <div>
                      <div className="font-black uppercase tracking-tight leading-none">{item.title}</div>
                      <div className="text-sm font-bold opacity-70">{item.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
