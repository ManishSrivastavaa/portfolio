import contentData from '../data/content.json';

const Contact = () => {
  const { personalInfo } = contentData;

  return (
    <section id="contact" className="py-32 bg-stone text-center border-t border-charcoal/10">
      <div className="max-w-3xl mx-auto px-6">
        <span className="section-subtitle mb-6 block">Communication</span>
        <h2 className="text-2xl md:text-3xl font-light text-ink mb-12">
          Get in Touch
        </h2>
        
        <p className="text-base text-charcoal/70 font-light max-w-xl mx-auto mb-16 leading-relaxed prose-editorial">
          I am always open to discussing operational excellence, strategic program management, and future leadership opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="btn-secondary px-6 py-2.5 text-xs"
          >
            Email Directly
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary px-6 py-2.5 text-xs"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
