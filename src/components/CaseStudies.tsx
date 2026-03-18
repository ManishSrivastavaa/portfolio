import * as Dialog from '@radix-ui/react-dialog'
import content from '../data/content.json'
import SectionWrapper from './SectionWrapper'

const CaseStudies = () => {
  return (
    <SectionWrapper id="case-studies" className="bg-white">
      <div className="text-center mb-64">
        <h2 className="text-3xl font-bold mb-16 text-navy">Impact Stories & Case Studies</h2>
        <p className="text-gray-custom max-w-2xl mx-auto">
          Deep dives into complex programs I have led, focusing on problem-solving strategies and measurable outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-32">
        {content.caseStudies.map((study, idx) => (
          <Dialog.Root key={idx}>
            <Dialog.Trigger asChild>
              <div className="group cursor-pointer bg-sand/50 p-32 rounded-3xl border border-gray-100 hover:border-teal hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-start mb-24">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-12 py-4 rounded-full">
                    {study.scope}
                  </span>
                  <div className="text-teal group-hover:translate-x-4 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-16">{study.title}</h3>
                <p className="text-gray-custom line-clamp-2 mb-24 italic">
                  "{study.problem}"
                </p>
                
                <div className="flex items-center gap-8 text-teal font-bold text-sm">
                  <span>View Case Study Detail</span>
                </div>
              </div>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 animate-fade-in" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl bg-white rounded-3xl p-32 md:p-64 max-h-[90vh] overflow-y-auto z-50 focus:outline-none shadow-2xl">
                <div className="flex justify-between items-center mb-40">
                  <Dialog.Title className="text-3xl font-bold text-navy">{study.title}</Dialog.Title>
                  <Dialog.Close className="p-12 hover:bg-sand rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Dialog.Close>
                </div>

                <div className="space-y-48">
                  <section>
                    <h4 className="text-teal font-bold uppercase tracking-widest text-sm mb-12">The Challenge</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">{study.problem}</p>
                  </section>

                  <section>
                    <h4 className="text-teal font-bold uppercase tracking-widest text-sm mb-16">Key Actions & Leadership</h4>
                    <ul className="space-y-12">
                      {study.actions.map((action, i) => (
                        <li key={i} className="flex gap-16 text-gray-700">
                          <span className="text-teal font-bold">0{i+1}.</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="bg-navy p-32 rounded-2xl text-sand">
                    <h4 className="text-teal-light font-bold uppercase tracking-widest text-xs mb-12">Measurable Outcomes</h4>
                    <p className="text-xl font-medium" dangerouslySetInnerHTML={{ __html: study.outcomes.replace(/\[ADD EXACT %\/VALUE\]/g, '<span class="text-gold">ADD EXACT %/VALUE</span>') }} />
                  </section>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default CaseStudies
