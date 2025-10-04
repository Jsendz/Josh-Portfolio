'use client';

import { useState, useEffect, useRef, JSX } from 'react';
import { 
  Code, 
 
  Zap,
 
} from 'lucide-react';
import { SiHiveBlockchain, SiNextdotjs, SiTypescript, SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiSolidity } from "react-icons/si";




const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'React': <FaReact size={32} color='lightblue'/>,
      'TypeScript': <SiTypescript size={32} />,
      'Next.js': <SiNextdotjs size={32} color='black' />,
      'Tailwind CSS': <RiTailwindCssFill size={32} />,
      'Figma': <CgFigma size={32} />,
      'Blockchain': <SiHiveBlockchain size={32} />,
      'Solidity': <SiSolidity size={32} />,
      'Vite': <SiVite size={32}  />,
    };
    return iconMap[skillName] || <Code size={32} />;
  };

  const skills = [
    { name: 'React', level: 90, color: 'bg-gray-800', category: 'Frontend' },
    { name: 'TypeScript', level: 90, color: 'bg-gray-800', category: 'Language' },
    { name: 'Next.js', level: 85, color: 'bg-gray-800', category: 'Framework' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-gray-800', category: 'Styling' },
    { name: 'Solidity', level: 70, color: 'bg-gray-800', category: 'Language' },
    
  ];

  const technologies = [
    { name: 'React',  },
    { name: 'TypeScript',  },
    { name: 'Next.js', },
    { name: 'Tailwind CSS',  },
    { name: 'Figma',  },
    { name: 'Blockchain', },
    { name: 'Solidity',  },
    { name: 'Vite',  },
    
  ];

  const categories = ['Frontend', 'Backend', 'Language', 'Styling', 'Database', 'Tools', 'Design', 'DevOps', 'Cloud', 'Testing'];

  return (
    <section id="skills" ref={sectionRef} className="py-20 ">
      
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8  bg-white/10 border border-white/10 rounded-xl
">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Compétences & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voici les technologies que j&apos;utilise pour créer des expériences web remarquables :
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Niveau</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 font-medium">{skill.name}</span>
                    <span className="text-gray-800">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <div className={`lg:col-span-1 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Technologies</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-10">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-default group flex flex-col items-center text-center"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                    {getSkillIcon(tech.name)}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </span>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;