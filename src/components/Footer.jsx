import { Mail, Heart, Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neo-ink text-neo-white py-16 relative overflow-hidden">
      {/* Halftone Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-halftone"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-neo-secondary border-4 border-neo-white px-6 py-2 -rotate-2 shadow-[8px_8px_0px_0px_#fff]">
              <span className="text-neo-ink font-black text-3xl uppercase tracking-tighter">GS.</span>
            </div>
            <p className="font-bold text-lg opacity-60">Building the future, one pixel at a time.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map(link => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xl font-black uppercase tracking-widest hover:text-neo-secondary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/garvsurve" className="p-3 border-4 border-neo-white hover:bg-neo-accent hover:border-neo-accent transition-all">
              <Github />
            </a>
            <a href="https://linkedin.com/in/garvsurve" className="p-3 border-4 border-neo-white hover:bg-neo-muted hover:border-neo-muted transition-all">
              <Linkedin />
            </a>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-neo-white text-neo-ink border-4 border-neo-white hover:bg-neo-secondary transition-all"
            >
              <ArrowUp />
            </button>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t-4 border-neo-white opacity-20 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-black uppercase tracking-widest text-sm opacity-50">
            © {year} Garv Surve • ALL RIGHTS RESERVED
          </div>
          
          <div className="bg-neo-accent border-4 border-neo-white px-4 py-2 rotate-1 shadow-[4px_4px_0px_0px_#fff] flex items-center gap-2">
            <span className="font-black text-xs uppercase tracking-widest">
              Built with
            </span>
            <Heart size={16} fill="white" className="animate-pulse" />
            <span className="font-black text-xs uppercase tracking-widest">
              and React
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
