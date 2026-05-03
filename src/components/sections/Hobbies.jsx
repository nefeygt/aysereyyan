import { BookOpen, Palette, Music } from 'lucide-react';

export default function Hobbies() {
  const hobbies = [
    {
      title: 'Reading philosophy books',
      icon: <BookOpen size={28} className="text-medical-primary" />,
      desc: 'Exploring ideas that shape ethical and critical thinking.'
    },
    {
      title: 'Oil painting and handcrafts',
      icon: <Palette size={28} className="text-medical-primary" />,
      desc: 'Creating visual art and handmade projects in spare time.'
    },
    {
      title: 'Playing the violin',
      icon: <Music size={28} className="text-medical-primary" />,
      desc: 'Classical pieces and chamber music as a creative outlet.'
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Hobbies & Interests</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Personal interests that support creativity, focus, and well-being.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {hobbies.map((h, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-medical-blue text-medical-primary">
                  {h.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{h.title}</h3>
              </div>
              <p className="text-slate-600 text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
