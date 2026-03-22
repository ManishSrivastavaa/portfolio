import contentData from '../data/content.json';

const Contact = () => {
  const { personalInfo } = contentData;

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone text-center border-t border-charcoal/10">
      <div className="max-w-2xl mx-auto px-6">
        <span className="text-[11px] tracking-[0.2em] font-medium text-brass uppercase mb-6 block">Contact</span>
        <h2 className="text-2xl font-light text-ink mb-10">
          Get in Touch
        </h2>
        
        <p className="text-[15px] text-charcoal/70 font-light mx-auto mb-16 leading-relaxed prose-editorial">
          I am always open to discussing operational excellence, strategic program management, and future leadership opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="btn-secondary px-6 py-2.5 text-[12px] uppercase tracking-wider"
          >
            Email Directly
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary px-6 py-2.5 text-[12px] uppercase tracking-wider"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
