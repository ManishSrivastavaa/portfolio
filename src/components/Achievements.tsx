import contentData from '../data/content.json';

const Achievements = () => {
  const { achievements } = contentData;

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-ivory border-t border-border-warm">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Recognition</span>
          <h2 className="section-title">Awards & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col border-l border-brass/50 pl-6 py-1">
              <h3 className="text-lg font-light text-ink leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-charcoal/50 mt-2 tracking-wide uppercase">
                {item.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
