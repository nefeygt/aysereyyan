import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      <div className="space-y-8 w-full mt-10 mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Ayşe Reyyan Tunç
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 font-medium mt-4">
          Pharmacy Student | Erasmus+ Internship Candidate
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Highly motivated learner with a collaborative attitude, seeking an Erasmus+ internship opportunity to gain global perspectives and contribute to daily pharmacy operations in an international setting.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/cv.pdf"
            download="Ayse_Reyyan_Tunc_CV.pdf"
            className="inline-flex items-center gap-2 bg-medical-primary hover:bg-medical-accent text-white px-8 py-4 rounded-md font-medium transition-colors shadow-sm text-lg"
          >
            <Download size={22} />
            Download CV
          </a>
          <a 
            href="mailto:ayse.tunc.reyyan@gmail.com"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-md font-medium transition-all shadow-sm text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
