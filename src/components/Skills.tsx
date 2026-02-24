const Skills = () => {
  const skillCategories = [
    {
      title: 'Computational Methods',
      skills: [
        { name: 'Free Energy Methods', level: 95 },
        { name: 'Molecular Dynamics', level: 95 },
        { name: 'Virtual Screening', level: 90 },
        { name: 'Molecular Modeling', level: 90 },
      ],
    },
    {
      title: 'Software & Tools',
      skills: [
        { name: 'Maestro\/Schrödinger Suite', level: 90 },
        { name: 'CHARMM\/GROMACS\/\nAMBER', level: 90 },
        { name: 'Python\/RDKit', level: 85 },
        { name: 'PyMOL\/VMD', level: 85 },
      ],
    },
    {
      title: 'Specialized Skills',
      skills: [
        { name: 'Cheminformatics', level: 85 },
        { name: 'HPC & Linux', level: 90 },
        { name: 'Machine Learning', level: 75 },
        { name: 'AI Drug Design', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Abilities
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-lg p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
