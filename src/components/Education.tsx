import contentData from '../data/content.json';

const Education = () => {
  const { education } = contentData;

  return (
    <section id="education" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {education.map((item, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-2xl font-light text-ink">
                {item.degree}
              </h3>
              <p className="text-base font-light text-charcoal/60 mt-2 tracking-wide">
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
