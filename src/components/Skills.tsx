import contentData from '../data/content.json';

const Skills = () => {
  const { groups } = contentData.skills;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <span className="section-subtitle">Core Expertise</span>
          <h2 className="section-title">Focus Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {groups.map((group, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-sm font-medium text-ink uppercase tracking-widest mb-8 pb-4 border-b border-border-warm">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((skill, idx) => (
                  <li key={idx} className="text-charcoal/70 font-light tracking-wide flex items-center">
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
