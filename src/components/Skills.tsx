import contentData from '../data/content.json';

const Skills = () => {
  const { groups } = contentData.skills;

  return (
    <section id="expertise" className="py-28 lg:py-36 bg-ivory border-t border-border-warm relative overflow-hidden">
      {/* Subtle decorative luxury gradient element */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-[11px] font-bold text-teal uppercase tracking-[0.3em] block mb-3">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-ink tracking-tight">
            Professional Capabilities
          </h2>
          <div className="w-12 h-px bg-teal/30 mx-auto mt-6 mb-6" />
          <p className="text-sm text-charcoal/60 max-w-xl mx-auto font-light leading-relaxed">
            A comprehensive suite of operational leadership, delivery excellence, and strategic management skills cultivated over two decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {groups.map((group, index) => (
            <div key={index} className="flex flex-col p-8 rounded-2xl bg-white/20 border border-white/5 hover:border-teal/20 transition-all duration-300">
              <h3 className="text-[12px] font-semibold text-teal uppercase tracking-[0.2em] mb-6 pb-3 border-b border-white/10">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((skill, idx) => (
                  <li key={idx} className="text-charcoal/80 text-[15px] font-light tracking-wide flex items-center leading-relaxed gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal/40" />
                    <span>{skill}</span>
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
