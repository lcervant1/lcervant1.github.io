import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Optimizing MSλD Throughput with Charge Renormalization',
      description: 'Enhanced throughput and accuracy in multisite λ-dynamics free energy calculations through charge renormalization techniques.',
      image: 'https://images.pexels.com/photos/8326706/pexels-photo-8326706.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['MSλD', 'Free Energy', 'Optimization', 'Co-first Author'],
      github: 'https://github.com/Vilseck-Lab/msld-py-prep',
      live: 'https://pubs.acs.org/doi/10.1021/acs.jcim.1c01071',
    },
    {
      title: 'How to Sample Dozens of Substitutions with λ Dynamics',
      description: 'Novel methodology for efficient free energy calculations enabling large-scale prediction of relative binding free energies using MS λD.',
      image: 'https://images.pexels.com/photos/8326707/pexels-photo-8326707.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Free Energy', 'λ-Dynamics', 'CHARMM', 'Drug Design'],
      github: 'https://github.com',
      live: 'https://pubs.acs.org/doi/full/10.1021/acs.jctc.4c00514',
    },
    {
      title: 'Exploring the limits of the generalized CHARMM and AMBER force fields',
      description: 'Comprehensive evaluation of force field performance in predicting hydration free energies of small molecules.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Force Fields', 'Hydration', 'OpenMM', 'Validation'],
      github: 'https://github.com',
      live: 'https://pubs.acs.org/doi/abs/10.1021/acs.jcim.4c00126',
    },
    {
      title: 'Investigating Polypharmacology through Targeting Known Human Neutrophil Elastase Inhibitors to Proteinase 3',
      description: 'Investigating affinity of neutrophil elastase inhibitors towards proteinase 3 using computational methods.',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Polypharmacology', 'MSλD', 'Drug Discovery', 'Proteases'],
      github: 'https://github.com',
      live: 'https://pubs.acs.org/doi/full/10.1021/acs.jcim.3c01949',
    },
    {
      title: 'pyCHARMM: Embedding CHARMM Functionality in a Python Framework',
      description: 'Embedding CHARMM functionality in Python for accessible molecular dynamics simulations and analysis.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'CHARMM', 'Molecular Dynamics', 'API'],
      github: 'https://github.com/BrooksResearchGroup-UM/pyCHARMM-Workshop',
      live: 'https://pubs.acs.org/doi/abs/10.1021/acs.jctc.3c00364',
    },
    {
      title: 'Alchemical Free Energy Methods Applied to Complexes of the First Bromodomain of BRD4',
      description: 'Application of alchemical free energy methods to bromodomain-containing protein 4 (BRD4) complexes for drug discovery.',
      image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Alchemical FE', 'BRD4', 'Cancer', 'Collaboration'],
      github: 'https://github.com',
      live: 'https://pubs.acs.org/doi/full/10.1021/acs.jcim.1c01229',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Publications & Research
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Selected publications in computational chemistry and drug discovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github !== 'https://github.com' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Read Paper</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
