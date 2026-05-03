import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      <div className="space-y-8 w-full mt-10 mb-10">
        <h3 className="text-medical-primary font-bold tracking-[0.2em] uppercase text-sm">
          Ayşe Reyyan Tunç
        </h3>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Pharmacy Student
          <span className="text-slate-500 text-3xl md:text-5xl block mt-4 font-medium tracking-normal">Erasmus+ Internship Candidate</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Highly motivated learner with a collaborative attitude, seeking an Erasmus+ internship opportunity to gain global perspectives and contribute to daily pharmacy operations in an international setting.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/cv.pdf"
            download
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
