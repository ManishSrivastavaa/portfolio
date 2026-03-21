import contentData from '../data/content.json';

const Achievements = () => {
  const { achievements } = contentData;

  return (
    <section id="achievements" className="py-24 bg-gray-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-subtitle">Recognition</span>
          <h2 className="section-title mt-4">Achievements & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white dark:bg-slate-800/50 p-6 rounded-sm border border-gray-100 dark:border-slate-800 hover:border-teal/30 dark:hover:border-teal/30 transition-colors">
              <div className="flex-1">
                <h3 className="text-base font-medium text-navy dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
