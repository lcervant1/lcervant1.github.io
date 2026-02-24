import { Beaker, Brain, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="w-full h-80 bg-slate-800 rounded-lg overflow-hidden mb-6">
                <img
                  src="/IMG_6825_2.jpg"
                  alt="Luis Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              I'm <span className="text-cyan-400">Luis</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              I am a computational chemist and postdoctoral fellow at MD Anderson Cancer Center's Institute for Applied Cancer Science (IACS) based in Houston, TX. I hold a Ph.D. in Medicinal Chemistry from the University of Michigan.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I am passionate about advancing small molecule drug discovery through computer-aided drug design, free energy methods, and cheminformatics. My expertise lies in bridging efficiency and accuracy in computational drug discovery, contributing to innovative therapeutic solutions for cancer and neurological diseases.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I develop computational pipelines, implement free energy workflows, and apply advanced molecular simulations to support drug discovery programs. I'm also fluent in both Spanish and English.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Beaker className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold">Drug Discovery</h4>
                </div>
                <p className="text-slate-400 text-sm">Computer-aided drug design expertise</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold">Free Energy Methods</h4>
                </div>
                <p className="text-slate-400 text-sm">Advanced computational simulations</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold">Ph.D. Research</h4>
                </div>
                <p className="text-slate-400 text-sm">Multisite λ-Dynamics development</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold">Fellowships</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  D.E. Shaw Research & <a href="https://www.gulfcoastconsortia.org/home/research/chemical-genomics/scholars/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">GCC IDDD</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
