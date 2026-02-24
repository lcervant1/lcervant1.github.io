import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Postdoctoral Fellow',
      company: 'MD Anderson Cancer Center - IACS',
      period: 'Aug 2024 - Present',
      description: 'Performing computational drug discovery for cancer therapeutics using free energy calculations, virtual screening, and AI-generated molecules. Developing automated docking and molecular dynamics pipelines on HPC clusters.',
    },
    {
      type: 'work',
      title: 'Research Assistant',
      company: 'University of Michigan - Brooks Lab',
      period: 'Jan 2019 - Jul 2024',
      description: 'Developed msld-py-prep Python tool for Multisite Lambda Dynamics simulations. Conducted extensive molecular dynamics simulations and free energy calculations for drug discovery collaborations.',
    },
  ];

  const education = [
    {
      degree: 'Ph.D. in Medicinal Chemistry',
      institution: 'University of Michigan',
      period: 'May 2018 - Jul 2024',
      description: 'Dissertation: Bridging Efficiency and Accuracy in Computational Drug Discovery with Multisite λ-Dynamics (MSλD).',
    },
    {
      degree: 'B.S. in Biochemistry',
      institution: 'St. Edward\'s University',
      period: 'Aug 2014 - May 2018',
      description: 'Strong foundation in chemistry, biology, and computational methods. Conducted research on protein dynamics and polyketide biosynthesis.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    </div>
                    <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-slate-400">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-cyan-400 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-slate-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
