import { GraduationCap, Languages, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white py-20 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
            <div className="w-16 h-1 bg-medical-primary rounded"></div>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a 3rd year student at Başkent University Faculty of Pharmacy and gained field experience by completing an internship at a pharmacy last summer. I am familiar with pharmacy operations, operational processes, and patient communication.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              As a highly motivated learner with a collaborative attitude, I am currently seeking an Erasmus+ internship opportunity to gain global perspectives and contribute to daily pharmacy operations in an international setting.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 sm:col-span-2">
              <GraduationCap className="text-medical-primary mb-4" size={32} />
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Education</h3>
              <p className="text-slate-700 font-medium">B.S. in Pharmacy</p>
              <p className="text-sm text-slate-600">Başkent University | Ankara, Turkey</p>
              <p className="text-sm text-slate-500 mt-1">09/2023 - Present</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 sm:col-span-2">
              <Languages className="text-medical-primary mb-4" size={32} />
              <h3 className="font-semibold text-slate-900 mb-4 text-lg">Languages</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-700 font-medium">Turkish</span>
                  <span className="text-slate-500">Native</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-700 font-medium">English</span>
                  <span className="text-slate-500">Full Professional Rank</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-700 font-medium">German</span>
                  <span className="text-slate-500">Beginner</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-700 font-medium">Spanish</span>
                  <span className="text-slate-500">Beginner</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
