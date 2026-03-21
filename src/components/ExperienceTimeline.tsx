import contentData from '../data/content.json';

const ExperienceTimeline = () => {
  const { experience } = contentData;

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title mt-4">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 group">
              
              <div className="md:w-[220px] shrink-0 pt-2 border-t md:border-t-0 border-gray-200 dark:border-slate-800 md:text-right">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  {job.range}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 hidden md:block">
                  {job.location}
                </p>
              </div>

              <div className="flex-1 pb-12 border-b border-gray-100 dark:border-slate-800 group-last:border-0">
                <h3 className="text-xl font-medium text-navy dark:text-white mb-1">
                  {job.title}
                </h3>
                <h4 className="text-base text-teal dark:text-teal-light mb-2">
                  {job.company}
                </h4>
                
                {job.description && (
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 leading-relaxed tracking-wide">
                    {job.description}
                  </p>
                )}
                
                <ul className="space-y-3">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      <span className="mr-3 mt-2 block w-[4px] h-[4px] bg-gray-300 dark:bg-gray-600 rounded-full shrink-0"></span>
                      <span>{bullet.replace(/\*\*/g, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
