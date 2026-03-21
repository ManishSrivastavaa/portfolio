import { useState, useEffect } from 'react';
import contentData from '../data/content.json';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { personalInfo } = contentData;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-24 md:pt-0 overflow-hidden bg-gray-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Area */}
        <div 
          className={`flex-1 flex flex-col items-start transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-subtitle mb-4">Operations Head</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy dark:text-white tracking-tight leading-[1.1] mb-6">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light mb-8 max-w-lg leading-relaxed">
            {personalInfo.title}
          </h2>
          
          <p className="text-base text-gray-500 dark:text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
            Seasoned operations leader with over 20 years of experience driving operational efficiency, program, and revenue management for pharma and healthcare tech clients.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              Contact
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Image Area */}
        <div 
          className={`w-full md:w-[45%] flex justify-center md:justify-end transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative w-full max-w-sm aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden rounded-sm bg-gray-200 dark:bg-slate-800">
            <img 
              src="/portfolio/assets/1.jpg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle overlay to soften the image slightly */}
            <div className="absolute inset-0 bg-navy/5 mix-blend-multiply dark:bg-slate-900/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
