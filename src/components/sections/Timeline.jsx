export default function Timeline() {
  const experiences = [
    {
      type: "work",
      role: "Intern Pharmacist",
      facility: "Haluk Pharmacy | Ankara, Turkey",
      date: "07/2025 - 08/2025",
      description: "Contributed to maintaining order and organization in daily pharmacy operations.",
      highlights: [
        "Organized, classified, and tracked shelves for prescription and non-prescription medications.",
        "Managed stock control, expiration date (EXP) tracking, and identified missing products.",
        "Recorded and updated medications in pharmacy software/database.",
        "Assisted in the patient counseling process under pharmacist supervision.",
        "Observed prescription entry processes and supported operational workflow.",
        "Monitored proper storage conditions for cold chain medications."
      ]
    },
    {
      type: "leadership",
      role: "Active & Board Member",
      facility: "Başkent University Student Clubs",
      date: "2023 - Present",
      description: "Actively involved in various university clubs, demonstrating strong teamwork and organizational skills outside of academics.",
      highlights: [
        "Active Member, Başkent University Pharmacy Club (2023-Present).",
        "Board Member, Başkent University Dance Club (2023-2025).",
        "Board Member, Başkent University Culture and Art in Education Club (2023-2025)."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience & Activities</h2>
          <div className="w-16 h-1.5 bg-medical-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-medical-primary/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-medical-primary text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-shadow relative">
                <div className="flex flex-col mb-4">
                  <span className="inline-block px-3 py-1 bg-medical-blue text-medical-primary rounded-full font-bold text-xs tracking-wider uppercase mb-3 w-fit">{exp.date}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <span className="text-slate-600 font-semibold">{exp.facility}</span>
                </div>
                <p className="text-slate-700 font-medium mb-6 italic border-l-2 border-medical-primary pl-4">{exp.description}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-3 leading-relaxed">
                       <span className="text-medical-accent mt-0.5 font-bold">✓</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
