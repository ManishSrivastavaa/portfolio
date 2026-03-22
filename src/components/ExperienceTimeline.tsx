import contentData from '../data/content.json';

const ExperienceTimeline = () => {
  const { experience } = contentData;

  return (
    <section id="experience" className="py-24 lg:py-32 bg-ivory border-t border-charcoal/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="relative border-l border-charcoal/10 ml-3 md:ml-0 md:border-none space-y-16">
          {experience.map((job, index) => (
            <div key={index} className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group pl-8 md:pl-0">
              
              {/* Timeline Mobile Line/Node Override */}
              <div className="absolute left-[-5px] top-2 md:hidden w-2.5 h-2.5 rounded-full bg-teal opacity-50"></div>
              
              {/* Timeline Label - Left Column Desktop */}
              <div className="md:w-36 lg:w-48 shrink-0 md:text-right pt-1 relative md:border-r border-charcoal/10 md:pr-12">
                {/* Desktop Node */}
                <div className="hidden md:block absolute right-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-charcoal/20 group-hover:bg-teal transition-colors"></div>
                
                <p className="text-sm font-semibold text-charcoal/70 tracking-widest uppercase">
                  {job.range}
                </p>
                <p className="text-xs text-charcoal/40 mt-1 uppercase tracking-wider">
                  {job.location}
                </p>
              </div>

              {/* Timeline Content - Right Column */}
              <div className="flex-1 pb-16 md:border-b border-charcoal/10 group-last:border-0 group-last:pb-0">
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-1">
                  {job.title}
                </h3>
                <h4 className="text-sm font-medium tracking-wide text-teal mb-4 uppercase">
                  {job.company}
                </h4>
                
                {job.description && (
                  <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed font-light prose-editorial">
                    {job.description}
                  </p>
                )}
                
                <ul className="space-y-3">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-charcoal/80 font-light leading-[1.7] prose-editorial">
                      <span className="mr-4 mt-2.5 block w-1 h-1 bg-brass/80 rounded-full shrink-0"></span>
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
