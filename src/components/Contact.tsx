import contentData from '../data/content.json';

const Contact = () => {
  const { personalInfo } = contentData;

  return (
    <section id="contact" className="py-32 bg-stone text-center border-t border-border-warm">
      <div className="max-w-3xl mx-auto px-6">
        <span className="section-subtitle mb-6 block">Get in Touch</span>
        <h2 className="text-4xl md:text-5xl font-light text-ink mb-12">
          Ready to Connect
        </h2>
        
        <p className="text-lg text-charcoal/70 font-light max-w-xl mx-auto mb-16 leading-relaxed">
          I am always open to discussing operational excellence, strategic program management, and future leadership opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="btn-primary"
          >
            Email Directly
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
