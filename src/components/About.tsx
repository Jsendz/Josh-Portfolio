'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, User, Code, Coffee } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: <Code size={24} />, value: '2+', label: 'Years Experience' },
    { icon: <User size={24} />, value: '10+', label: 'Projects Completed' },
    
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20  ">
      
     
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 backdrop-blur-md bg-white/10 border border-white/10 
">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 shadow-2xl overflow-hidden">
                <img
                  src="/josh-pic.jpg"
                  alt="Josh Hall"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Code className="text-white" size={32} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                I'm a passionate Frontend Developer with 2+ years of experience creating 
                beautiful, responsive web applications. I specialize in Next.js, React, TypeScript, 
                and modern CSS frameworks to deliver exceptional user experiences.
              </p>
              
              <p>
                My journey in web development started with a curiosity for how things work 
                on the internet. Today, I focus on writing clean, maintainable code and 
                staying up-to-date with the latest web technologies and best practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, and contribting on projects. 
                
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-blue-600">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a 
                href="/Josh-Hall-CV-2025.pdf" 
                download
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;