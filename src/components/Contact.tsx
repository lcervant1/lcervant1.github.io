import { MapPin, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Let's create something amazing together
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat. I'm always excited to work on new projects and meet new people.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-white">Houston, TX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <a
                    href="mailto:lfcervantes@mdanderson.org"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    lfcervantes@mdanderson.org
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/lfcv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
