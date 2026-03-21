import contentData from '../data/content.json';

const ExperienceTimeline = () => {
  const { experience } = contentData;

  return (
    <section id="experience" className="py-24 lg:py-32 bg-ivory border-t border-border-warm">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="space-y-16">
          {experience.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group">
              
              {/* Timeline Label */}
              <div className="md:w-48 shrink-0 md:text-right pt-1">
                <p className="text-sm font-semibold text-charcoal/50 tracking-widest uppercase">
                  {job.range}
                </p>
                <p className="text-xs text-charcoal/40 mt-1 uppercase tracking-wider">
                  {job.location}
                </p>
              </div>

              {/* Timeline Content */}
              <div className="flex-1 pb-16 border-b border-border-warm group-last:border-0 group-last:pb-0">
                <h3 className="text-2xl font-light text-ink mb-1">
                  {job.title}
                </h3>
                <h4 className="text-sm font-medium tracking-wide text-teal mb-4 uppercase">
                  {job.company}
                </h4>
                
                {job.description && (
                  <p className="text-base text-charcoal/80 mb-6 leading-relaxed font-light">
                    {job.description}
                  </p>
                )}
                
                <ul className="space-y-3">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-charcoal/60 font-light leading-relaxed">
                      <span className="mr-4 mt-2.5 block w-1 h-1 bg-brass rounded-full shrink-0"></span>
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
