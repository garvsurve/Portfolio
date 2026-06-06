import { ArrowRight, Mail, Github, Linkedin, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neo-bg bg-grid py-20">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-20 left-10 animate-spin-slow opacity-20 hidden md:block">
        <Star size={120} className="text-neo-ink" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse hidden md:block">
        <div className="w-32 h-32 border-8 border-black bg-neo-muted -rotate-12 shadow-neo-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
            <div className="relative bg-neo-secondary border-4 border-black px-4 py-1 -rotate-2">
              <span className="font-black uppercase tracking-widest text-sm flex items-center gap-2">
                <Sparkles size={16} /> Available for New Projects
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Hello, I am
            </h2>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] relative">
              <span className="text-stroke block">Garv</span>
              <span className="bg-neo-accent text-neo-white px-4 inline-block -rotate-1 shadow-neo-xl mt-2">
                Surve
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-bold max-w-xl leading-relaxed border-l-8 border-neo-ink pl-6 py-2">
            I craft <span className="bg-neo-muted px-1">robust backends</span> and <span className="bg-neo-secondary px-1">vibrant frontends</span>. 
            Full-stack engineer specializing in Java Spring Boot.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <a href="#projects" className="neo-btn bg-neo-ink text-neo-white px-8 py-4 text-xl flex items-center gap-3 group">
              Explore Projects <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex gap-4 items-center">
              {[
                { icon: <Github />, href: 'https://github.com/garvsurve', color: 'bg-neo-white' },
                { icon: <Linkedin />, href: 'https://linkedin.com/in/garvsurve', color: 'bg-neo-white' },
                { icon: <Mail />, href: 'mailto:garvsurve1@gmail.com', color: 'bg-neo-white' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border-4 border-black shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md active:translate-y-1 active:shadow-none transition-all ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Visual/Stickers */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative group">
            {/* The "Main" Image Container */}
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] bg-neo-white border-8 border-black shadow-neo-xl rotate-3 group-hover:rotate-0 transition-all duration-300 overflow-hidden grayscale hover:grayscale-0">
              <img src="/avatar.jpg" alt="Garv Surve" className="w-full h-full object-cover" />
            </div>

            {/* Overlapping Stickers */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-neo-accent border-4 border-black flex items-center justify-center -rotate-12 shadow-neo-md animate-bounce">
              <Star size={48} className="text-neo-white" fill="white" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-neo-secondary border-4 border-black px-6 py-3 font-black text-xl rotate-6 shadow-neo-md whitespace-nowrap">
              JAVA DEVELOPER
            </div>

            <div className="absolute top-1/2 -right-12 bg-neo-muted border-4 border-black px-4 py-2 font-black text-sm -rotate-90 shadow-neo-sm">
              SPRING BOOT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
