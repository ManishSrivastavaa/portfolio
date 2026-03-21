const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        <p className="text-sm text-gray-400 dark:text-gray-500 font-light">
          &copy; {currentYear} Manish Mohan Srivastava. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-600 font-light">
          Website created by{' '}
          <a 
            href="https://www.linkedin.com/in/ansh-srivastava-16a6b42a4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-teal dark:hover:text-teal transition-colors underline decoration-transparent hover:decoration-teal"
          >
            Ansh Srivastava
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
