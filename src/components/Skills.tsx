import contentData from '../data/content.json';

const Skills = () => {
  const { groups } = contentData.skills;

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title mt-4">Selected Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {groups.map((group, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-sm font-semibold text-navy dark:text-white uppercase tracking-wider mb-6 pb-2 border-b border-gray-100 dark:border-slate-800">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((skill, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400 font-light tracking-wide text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-teal/50 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
