import contentData from '../data/content.json';

const Achievements = () => {
  const { achievements } = contentData;
  const awards = achievements.filter(a => a.org !== "Certified");
  const certs = achievements.filter(a => a.org === "Certified");

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-ivory border-t border-charcoal/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Recognition</span>
          <h2 className="section-title">Awards & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {/* Awards Column */}
          <div>
            <h3 className="text-xs font-semibold text-charcoal/60 uppercase tracking-[0.15em] mb-8 pb-4 border-b border-charcoal/10">
              Awards
            </h3>
            <div className="space-y-6">
              {awards.map((item, index) => (
                <div key={index} className="flex flex-col pb-6 border-b border-charcoal/5 last:border-0 last:pb-0">
                  <h4 className="text-[17px] font-light text-ink leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal/50 mt-1.5 tracking-wide uppercase">
                    {item.org}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-xs font-semibold text-charcoal/60 uppercase tracking-[0.15em] mb-8 pb-4 border-b border-charcoal/10">
              Certifications
            </h3>
            <div className="space-y-6">
              {certs.map((item, index) => (
                <div key={index} className="flex flex-col pb-6 border-b border-charcoal/5 last:border-0 last:pb-0">
                  <h4 className="text-[17px] font-light text-ink leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal/50 mt-1.5 tracking-wide uppercase">
                    {item.org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
