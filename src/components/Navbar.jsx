import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-200 border-b-4 border-black ${
        scrolled ? 'bg-neo-bg/95 backdrop-blur-sm py-2' : 'bg-neo-bg py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Sticker */}
        <a href="#hero" className="group">
          <div className="relative">
            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
            <div className="relative bg-neo-accent border-4 border-black px-4 py-1 -rotate-1 group-hover:rotate-1 transition-transform">
              <span className="font-black text-2xl text-neo-white uppercase tracking-tighter">GS.</span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold text-lg uppercase tracking-tight hover:text-neo-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="neo-btn bg-neo-secondary px-6 py-2 flex items-center gap-2 group"
          >
            Hire Me <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden bg-neo-white border-4 border-black p-2 shadow-neo-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[72px] bg-neo-bg border-t-4 border-black z-50 md:hidden transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 h-full bg-grid">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter border-b-4 border-black pb-2 hover:bg-neo-accent hover:px-4 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="neo-btn bg-neo-secondary text-2xl text-center py-4 mt-auto mb-12"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </nav>
  );
}
