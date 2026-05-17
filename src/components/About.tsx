import contentData from '../data/content.json';

const About = () => {
  const { personalInfo } = contentData;

  return (
    <section id="summary" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
        
        {/* Large Editorial Second Image */}
        <div className="w-full lg:w-5/12">
          <div className="relative aspect-[3/4] overflow-hidden bg-stone about-portrait">
            <img 
              src="/portfolio/assets/2.jpeg" 
              alt="Professional Snapshot"
              className="w-full h-full object-cover object-[center_15%]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Career Context Text */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <span className="section-subtitle">Career Context</span>
          <h2 className="section-title">Leadership & Delivery</h2>
          
          <div className="mt-8 space-y-6 text-base md:text-lg text-charcoal/70 font-light leading-relaxed">
            <p>
              {personalInfo.summary}
            </p>
            <p>
              A strong proponent of structured, Lean-driven environments, I focus on stabilizing the delivery center ecosystem, elevating quality protocols, and championing margin improvements. My leadership philosophy is built on establishing clear communication, optimizing resource allocation, and mentoring distributed teams toward operational excellence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
