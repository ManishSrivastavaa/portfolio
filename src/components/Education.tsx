import contentData from '../data/content.json';

const Education = () => {
  const { education } = contentData;

  return (
    <section id="education" className="py-24 lg:py-32 bg-white border-t border-charcoal/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-charcoal/10 pt-16">
          {education.map((item, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-[19px] md:text-xl font-light text-ink">
                {item.degree}
              </h3>
              <p className="text-[12px] font-medium text-charcoal/50 mt-2 tracking-widest uppercase">
                {item.school}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
