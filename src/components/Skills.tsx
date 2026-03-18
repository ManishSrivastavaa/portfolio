import content from '../data/content.json'
import SectionWrapper from './SectionWrapper'

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-sand/30">
      <div className="grid lg:grid-cols-2 gap-64">
        {/* Technical & Ops Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-32 border-b-4 border-teal inline-block pb-8 text-navy">Technical & Ops Skills</h2>
          <div className="flex flex-wrap gap-12">
            {content.skills.technical.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-white text-navy border-2 border-navy/10 px-24 py-12 rounded-2xl font-bold text-lg hover:border-teal hover:text-teal hover:shadow-lg transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-32 border-b-4 border-teal inline-block pb-8 text-navy">Leadership & Soft Skills</h2>
          <div className="flex flex-wrap gap-12">
            {content.skills.soft.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-teal text-white px-24 py-12 rounded-2xl font-bold text-lg hover:bg-navy transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
