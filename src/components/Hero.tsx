import contentData from '../data/content.json';

const Hero = () => {
  const { personalInfo } = contentData;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 md:pt-0 bg-ivory overflow-hidden border-b border-border-warm"
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 lg:gap-28">
        
        {/* Minimal Text Area */}
        <div className="flex-1 flex flex-col items-start pt-4 pb-16 md:py-0">
          <span className="section-subtitle">Executive Profile</span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-ink tracking-tight mb-6 leading-[1.1]">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-charcoal/80 font-light mb-8 max-w-xl leading-snug">
            {personalInfo.title}
          </h2>
          
          <p className="text-base md:text-lg text-charcoal/60 mb-12 max-w-2xl leading-relaxed font-light">
            Seasoned operations leader with over two decades of experience optimizing complex workflows, managing multi-million-dollar portfolios, and driving patient support programs within the healthcare sector.
          </p>

          <div className="flex items-center gap-6">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              Contact
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium tracking-wide text-charcoal hover:text-teal underline underline-offset-4 decoration-charcoal/30 hover:decoration-teal transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Hero Portrait — editorial, confident framing */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-full max-w-md overflow-hidden bg-stone shadow-sm hero-portrait">
            <img 
              src={`${import.meta.env.BASE_URL}assets/1.jpeg`} 
              alt={personalInfo.name}
              className="w-full h-full object-cover object-[center_top]"
              loading="eager"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
