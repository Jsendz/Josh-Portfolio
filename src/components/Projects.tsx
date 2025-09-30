'use client';

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';





const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'Ecco Studio',
      description: 'Framer',
      image: '/tsender.png',
      technologies: ['Framer', 'Figma' ],
      liveUrl: 'https://ecco.studio/',
      
      date: '2024'
    },
    
    {
      id: 2,
      title: 'Agency Website',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/jhcorporate.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwindcss' ],
      liveUrl: 'https://www.jhcorporateservices.com/en',
      githubUrl: 'https://github.com/Jsendz/JH-Corporate',
      date: '2024'
    },
    {
      id: 3,
      title: 'Digital Agency Website',
      description: 'Full-stack Digital Agency website',
      image: '/jhdigital.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwindcss' ],
      liveUrl: 'https://www.jhdigitalservices.com/en',
      githubUrl: 'https://github.com/Jsendz/JH-Digital-Services',
      date: '2025'
    },
    {
      id: 4,
      title: 'T-Sender Clone',
      description: 'React/NextJS Static Site - Token Airdropper UI',
      image: '/tsender.png',
      technologies: ['Next.js', 'TypeScript',  'Solidity', ],
      liveUrl: 'https://t-sender-ywp75664u-jsendzs-projects.vercel.app/',
      githubUrl: 'https://github.com/Jsendz/TSender',
      date: '2025'
    }
    
   
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8  bg-white/10 border border-white/10 rounded-xl
">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
        
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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