import { Mail, MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Ayşe Reyyan Tunç</h2>
          <p className="text-slate-400 mb-6">Pharmacy Student & Erasmus+ Candidate</p>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Heart size={14} className="text-medical-accent" /> Hobbies & Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1.5 rounded-full border border-slate-700">Reading Philosophy</span>
              <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1.5 rounded-full border border-slate-700">Oil Painting & Handcrafts</span>
              <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1.5 rounded-full border border-slate-700">Playing Violin</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 md:items-end mt-8 md:mt-0">
          <a href="mailto:ayse.tunc.reyyan@gmail.com" className="flex items-center gap-2 hover:text-medical-blue transition-colors">
            <Mail size={18} />
            ayse.tunc.reyyan@gmail.com
          </a>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            +90 549 400 4919
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            Ankara, Turkey
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Ayşe Reyyan Tunç. Built for Erasmus+ Internship Applications.
      </div>
    </footer>
  );
}
