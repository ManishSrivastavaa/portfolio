import contentData from '../data/content.json';

const Education = () => {
  const { education } = contentData;

  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title mt-4">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div key={index} className="flex flex-col border-l-2 border-teal/30 dark:border-teal/50 pl-6 py-1">
              <h3 className="text-lg font-medium text-navy dark:text-gray-200">
                {item.degree}
              </h3>
              <p className="text-sm font-light text-gray-500 mt-2 tracking-wide">
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
