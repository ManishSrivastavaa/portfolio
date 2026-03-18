import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../data/content.json'
import SectionWrapper from './SectionWrapper'

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  // Configuration from env
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const isConfigured = !!(FORMSPREE_ENDPOINT || (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY));

  const startCooldown = () => {
    setCooldown(30);
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cooldown > 0) return;
    
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Honeypot check
    if (data._gotcha) {
      setStatus('success');
      return;
    }

    try {
      if (FORMSPREE_ENDPOINT) {
        // Formspree logic
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setStatus('success');
          formRef.current?.reset();
          startCooldown();
        } else {
          const result = await response.json();
          throw new Error(result.error || 'Submission failed');
        }
      } else if (EMAILJS_SERVICE_ID) {
        // EmailJS logic (using global or npm package - for this script we assume dynamic fetch to their API or a placeholder if package not loaded)
        // Here we'll use a fetch to their direct API to avoid needing a specific SDK import if not preferred
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: data,
          }),
        });

        if (response.ok) {
          setStatus('success');
          formRef.current?.reset();
          startCooldown();
        } else {
          throw new Error('EmailJS submission failed');
        }
      }
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="text-center mb-64">
        <h2 className="text-3xl font-bold mb-16 text-navy">Get in Touch</h2>
        <p className="text-gray-custom max-w-2xl mx-auto">
          Currently open to discussing leadership roles, program management opportunities, or strategic consulting.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-64 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-40">
          <div className="bg-sand/30 p-32 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-32 text-navy">Direct Contact</h3>
            <div className="space-y-24">
              <a href={`mailto:${content.personalInfo.email}`} className="flex items-center gap-16 group">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-teal group-hover:text-white transition-all">
                  ✉️
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</div>
                  <div className="text-lg font-bold text-navy group-hover:text-teal">{content.personalInfo.email}</div>
                </div>
              </a>
              
              <a href={`tel:${content.personalInfo.phone}`} className="flex items-center gap-16 group">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-teal group-hover:text-white transition-all">
                  📞
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</div>
                  <div className="text-lg font-bold text-navy group-hover:text-teal">{content.personalInfo.phone}</div>
                </div>
              </a>

              <a href={content.personalInfo.linkedin} target="_blank" rel="noopener" className="flex items-center gap-16 group">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-teal group-hover:text-white transition-all">
                  🔗
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">LinkedIn</div>
                  <div className="text-lg font-bold text-navy group-hover:text-teal">manish-mohan-srivastava</div>
                </div>
              </a>
            </div>
          </div>

          {!isConfigured && (
            <div className="p-24 bg-gold/10 border border-gold/20 rounded-2xl text-navy">
              <div className="font-bold mb-8 flex items-center gap-8">
                <span>⚠️</span> Configuration Needed
              </div>
              <p className="text-sm">
                The contact form is currently in **fallback mode**. To enable automated delivery, configure `VITE_FORMSPREE_ENDPOINT` or `VITE_EMAILJS_*` in your repository secrets.
              </p>
              <a href={`mailto:${content.personalInfo.email}`} className="btn-primary w-full text-center mt-16 block">
                Send Direct Email
              </a>
            </div>
          )}
        </div>

        {/* Right: Form */}
        <div>
          {isConfigured ? (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-24">
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="grid md:grid-cols-2 gap-24">
                <div className="space-y-8">
                  <label htmlFor="name" className="text-sm font-bold text-navy uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-sand px-24 py-16 rounded-2xl border-2 border-transparent focus:border-teal outline-none transition-all"
                  />
                </div>
                <div className="space-y-8">
                  <label htmlFor="email" className="text-sm font-bold text-navy uppercase tracking-widest">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-sand px-24 py-16 rounded-2xl border-2 border-transparent focus:border-teal outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <label htmlFor="subject" className="text-sm font-bold text-navy uppercase tracking-widest">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full bg-sand px-24 py-16 rounded-2xl border-2 border-transparent focus:border-teal outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="Hiring">Hiring Inquiry</option>
                  <option value="Consulting">Consulting / Program Revamp</option>
                  <option value="Speaking">Speaking Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-8">
                <label htmlFor="message" className="text-sm font-bold text-navy uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you today?"
                  className="w-full bg-sand px-24 py-16 rounded-2xl border-2 border-transparent focus:border-teal outline-none transition-all resize-none"
                />
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-green-100 text-green-800 p-16 rounded-xl font-medium text-center"
                    role="status"
                  >
                    🚀 Message received! I'll get back to you shortly.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-red-100 text-red-800 p-16 rounded-xl font-medium text-center"
                  >
                    ❌ {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'submitting' || cooldown > 0}
                className={`btn-primary w-full flex justify-center items-center gap-12 py-20 ${
                  (status === 'submitting' || cooldown > 0) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status === 'submitting' ? (
                  <span className="w-24 h-24 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : null}
                {cooldown > 0 ? `Please wait ${cooldown}s...` : 'Send Message'}
              </button>
            </form>
          ) : (
            <div className="h-full flex flex-col justify-center items-center border-4 border-dashed border-gray-200 rounded-3xl p-64 text-center">
              <div className="text-64 mb-24 grayscale opacity-30">📨</div>
              <p className="text-gray-400 mb-24">Form disabled (No endpoint configured)</p>
              <a href={`mailto:${content.personalInfo.email}`} className="btn-secondary">
                Click to Email Directly
              </a>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
