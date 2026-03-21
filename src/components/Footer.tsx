const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-ivory border-t border-border-warm">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-3">
        <p className="text-sm text-charcoal/50 font-light tracking-wide">
          &copy; {currentYear} Manish Mohan Srivastava. All rights reserved.
        </p>
        <p className="text-xs text-charcoal/40 font-light tracking-wide uppercase">
          Website created by{' '}
          <a 
            href="https://www.linkedin.com/in/ansh-srivastava-16a6b42a4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal hover:text-ink transition-colors underline underline-offset-4 decoration-transparent hover:decoration-ink/30"
          >
            Ansh Srivastava
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
