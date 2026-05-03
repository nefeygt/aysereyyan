import { Microscope, PackageCheck, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Pharmacy Operations",
      icon: <PackageCheck className="text-medical-primary" size={28} />,
      skills: [
        "MEDULA System Navigation",
        "Inventory & Quality Control",
        "Expiration Date (EXP) Tracking",
        "Cold Chain Management"
      ]
    },
    {
      title: "Clinical & Laboratory",
      icon: <Microscope className="text-medical-primary" size={28} />,
      skills: [
        "Patient Communication & Counseling",
        "Titration & Solution Preparation",
        "Chromatography Techniques",
        "Microscopy & Analysis"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-medical-primary" size={28} />,
      skills: [
        "Adaptable & Fast Learner",
        "Proactive Responsibility",
        "Teamwork & Collaboration",
        "Highly Organized in Fast-paced environments"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Competencies</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A balanced skill set blending rigorous scientific understanding with practical operational capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-medical-blue rounded-xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-medical-accent mt-2"></div>
                    <span className="text-slate-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
