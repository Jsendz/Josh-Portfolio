'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, User, Code } from 'lucide-react';
import Image from 'next/image';


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
    { icon: <Code size={24} />, value: '2+', label: 'années expérience' },
    { icon: <User size={24} />, value: '10+', label: 'projets réalisés' },
    
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
              <div className="w-[350px] h-[400px] mx-auto rounded-2xl bg-transparent  overflow-hidden">
                <Image
                  src="/josh-pic.png"
                  alt="Josh Hall"
                  className="w-full h-full object-contain shadow-2xl"
                  width={400}
                  height={400}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">À propos de moi</h2>
            
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Je suis un développeur frontend passionné avec plus de 2 ans d&apos;expérience dans la création d&apos;applications web responsives. Je me spécialise en Next.js, React, TypeScript et frameworks CSS modernes afin d&apos;offrir de grandes expériences utilisateur.
              </p>
              
              <p>
                Mon parcours dans le développement web a commencé par une curiosité pour le fonctionnement d&apos;internet. Aujourd&apos;hui, je me concentre sur l&apos;écriture d&apos;un code propre et maintenable, ainsi que sur le fait de rester à jour avec les dernières technologies web et les bonnes pratiques
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
                <span>Télécharger le CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;