import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-xl font-bold text-slate-900 cursor-pointer tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Ayşe Reyyan Tunç
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollTo('about')} 
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo('skills')} 
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollTo('experience')} 
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            Experience
          </button>
          <a 
            href="/cv.pdf"
            download
            className="text-sm font-medium text-teal-600 border border-teal-600 px-4 py-2 rounded-full hover:bg-teal-50 transition-colors"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}