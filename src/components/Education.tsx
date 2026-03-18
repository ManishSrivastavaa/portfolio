import content from '../data/content.json'
import SectionWrapper from './SectionWrapper'

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-sand/30">
      <h2 className="text-3xl font-bold mb-48 text-center text-navy">Education</h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-32">
        {content.education.map((edu, idx) => (
          <div 
            key={idx}
            className="w-full md:w-1/3 bg-white p-32 rounded-3xl shadow-lg border border-gray-100 hover:border-teal transition-all"
          >
            <div className="text-teal text-3xl mb-16">🎓</div>
            <h3 className="text-xl font-bold text-navy mb-8">{edu.degree}</h3>
            <div className="text-gray-custom font-medium mb-4">{edu.school}</div>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{edu.year}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Education
