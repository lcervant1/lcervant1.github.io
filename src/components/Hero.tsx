import { useState, useEffect } from 'react';
import { Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Computational Chemist', 'Drug Discovery Scientist', 'Molecular Dynamics Expert', 'Molecular Modeler'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 animate-fadeIn">
          <h3 className="text-xl md:text-2xl text-cyan-400 mb-4 font-light">Hi There, I'm</h3>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Luis F. Cervantes
          </h1>
          <div className="text-2xl md:text-4xl text-slate-300 font-light h-12">
            I am a <span className="text-cyan-400 font-semibold">{text}</span>
            <span className="animate-blink">|</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Advancing drug discovery through computational chemistry, free energy methods, and informed decision-making
        </p>

        <div className="flex gap-6 justify-center mb-16">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all duration-300"
          >
            View Publications
          </a>
        </div>

        <div className="flex gap-6 justify-center mb-16">
          <a
            href="https://www.linkedin.com/in/lfcv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
