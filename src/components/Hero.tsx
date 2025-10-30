'use client';

import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import {useTranslations} from 'next-intl';






const Hero = () => {
  const t = useTranslations('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   

    <section className="min-h-screen flex items-center justify-center  antialiased  overflow-hidden pt-16 ">
      {/* Background decoration */}
      
       
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full flex flex-col justify-center items-center">
         

          
          {/* Text Content */}
          <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              <span className="block text-center">{t('greeting')}</span>
              <span className="block text-slate-800 text-center">{t('greeting2')}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed text-center ">
              {t('tagline1')}
            </p>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed text-center ">
               {t('tagline2')}
            </p>

            <div className="flex flex-col justify-center sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToAbout}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
               {t('viewWork')}
              </button>
              
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
               {t('getInTouch')}
              </a>
              
              <a
                href="/Josh-Hall-CV-Oct-25.pdf"
                download
                className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200"
              >
                <Download size={20} />
                <span>CV</span>
              </a>
            </div>

            <div className="flex space-x-6 justify-center">
              <a
                href="https://github.com/Jsendz"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-sendzul-14535383/"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:joshuasendzul@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

         
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
    
  );
};

export default Hero;