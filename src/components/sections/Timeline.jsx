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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Experience & Activities</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-medical-primary text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex flex-col mb-4">
                  <span className="text-medical-primary font-medium text-sm mb-1">{exp.date}</span>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-slate-600 font-medium">{exp.facility}</span>
                </div>
                <p className="text-slate-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-2">
                       <span className="text-medical-accent">•</span> {highlight}
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
