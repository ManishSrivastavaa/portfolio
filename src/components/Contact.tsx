import contentData from '../data/content.json';

const Contact = () => {
  const { personalInfo } = contentData;

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="section-subtitle block mb-4">Get in Touch</span>
        <h2 className="section-title mb-8">Ready to Optimize Your Operations?</h2>
        
        <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto mb-12">
          I am always open to discussing operational challenges, program management strategies, and new leadership opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="btn-primary"
          >
            {personalInfo.email}
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
