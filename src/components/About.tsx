import content from '../data/content.json'
import SectionWrapper from './SectionWrapper'

const About = () => {
  const info = content.personalInfo;

  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid lg:grid-cols-3 gap-64">
        {/* Left: Detailed Summary */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-32 border-b-4 border-teal inline-block pb-8">Professional Profile</h2>
          <div className="prose prose-lg text-gray-custom max-w-none dark:text-gray-300">
            <p className="mb-24 leading-relaxed">
              {info.summary}
            </p>
            <p className="mb-24 leading-relaxed">
              With <strong>over 20 years of experience</strong> across global organizations like <strong>Indegene</strong> and <strong>Optum</strong>, I have specialized in scaling operations, managing diverse portfolios across the Asia-Pacific region, and driving multi-million dollar revenue growth.
            </p>
            <p className="leading-relaxed">
              My leadership style is grounded in <strong>continuous improvement</strong> and <strong>strategic resource optimization</strong>, utilizing Lean and Six Sigma methodologies to deliver high-quality outcomes in complex healthcare and IT environments.
            </p>
          </div>
          
          <div className="mt-40 no-print">
            <a href="/portfolio/assets/Mannish Srivastava - Operations Leader.pdf" target="_blank" className="text-teal font-bold hover:underline flex items-center gap-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              View Print-Optimized Resume
            </a>
          </div>
        </div>

        {/* Right: Quick Facts Card */}
        <div className="lg:col-span-1">
          <div className="bg-sand p-32 rounded-3xl shadow-lg border border-gray-200 h-full">
            <h3 className="text-2xl font-bold mb-24 text-navy">Quick Facts</h3>
            
            <ul className="space-y-16 mb-32">
              <li className="flex items-center gap-12">
                <span className="text-teal text-xl">📍</span>
                <span className="text-gray-custom font-medium">{info.location}</span>
              </li>
              <li className="flex items-center gap-12">
                <span className="text-teal text-xl">📞</span>
                <span className="text-gray-custom font-medium">{info.phone}</span>
              </li>
              <li className="flex items-center gap-12">
                <span className="text-teal text-xl">✉️</span>
                <a href={`mailto:${info.email}`} className="text-teal hover:underline break-all">{info.email}</a>
              </li>
              <li className="flex items-center gap-12">
                <span className="text-teal text-xl">🔗</span>
                <a href={info.linkedin} target="_blank" rel="noopener" className="text-teal hover:underline">LinkedIn Profile</a>
              </li>
            </ul>

            <h4 className="font-bold text-navy mb-12 uppercase tracking-wider text-sm border-t border-gray-200 pt-24 mt-24">Languages</h4>
            <div className="flex flex-wrap gap-8 mb-24">
              {info.languages.map(lang => (
                <span key={lang} className="bg-navy text-white text-xs px-12 py-4 rounded-full">{lang}</span>
              ))}
            </div>

            <h4 className="font-bold text-navy mb-12 uppercase tracking-wider text-sm">Hobbies</h4>
            <div className="flex flex-wrap gap-8">
              {info.hobbies.map(hobby => (
                <span key={hobby} className="bg-white text-navy border border-navy/10 text-xs px-12 py-4 rounded-full shadow-sm">{hobby}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
