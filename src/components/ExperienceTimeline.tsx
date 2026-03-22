import contentData from '../data/content.json';

const ExperienceTimeline = () => {
  const { experience } = contentData;

  return (
    <section id="journey" className="py-24 lg:py-32 bg-ivory border-t border-charcoal/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title text-navy">Professional Experience</h2>
        </div>

        <div className="timeline-container">
          {/* Vertical Timeline Line */}
          <div className="timeline-line"></div>
          
          {experience.map((job, index) => (
            <div key={index} className="timeline-item-wrapper group">
              
              {/* Left Column: Date and Location */}
              <div className="date-column">
                <p className="text-[14px] font-semibold text-navy uppercase tracking-wider">
                  {job.range}
                </p>
                <p className="location-text">
                  {job.location}
                </p>
              </div>

              {/* Right Column: Role Content */}
              <div className="content-column">
                <h3 className="role-title">
                  {job.title}
                </h3>
                <p className="company">
                  {job.company}
                </p>
                
                {job.description && (
                  <p className="text-[15px] text-gray-custom font-light leading-[1.6]">
                    {job.description}
                  </p>
                )}
                
                <ul className="space-y-3 mt-4">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-[14px] text-navy/80 font-light leading-[1.6]">
                      <span className="mr-3 mt-2 block w-1.5 h-1.5 bg-teal rounded-full shrink-0"></span>
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
