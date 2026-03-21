import contentData from '../data/content.json';

const About = () => {
  const { personalInfo } = contentData;

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          <div className="md:w-1/3">
            <span className="section-subtitle">Professional Summary</span>
            <h2 className="section-title mt-4">At a glance</h2>
          </div>
          
          <div className="md:w-2/3 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
            
            {/* Small subtle secondary image */}
            <div className="w-48 h-64 shrink-0 rounded-sm overflow-hidden bg-gray-100 dark:bg-slate-800 hidden lg:block">
               <img 
                 src="/portfolio/assets/2.jpg" 
                 alt="Professional Portrait Secondary"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
