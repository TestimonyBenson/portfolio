import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('submitting');

    try {
      // Replace the URL below with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/xdapedyv', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-charcoal px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-white mb-4">Let's <span className="text-gold italic">Connect</span></h2>
        <p className="text-silver mb-12 text-lg">Whether you have a project in mind, need a frontend architect, or just want to discuss the tech landscape, my inbox is always open.</p>

        {status === 'success' ? (
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center animate-pulse">
            <h3 className="text-2xl font-serif text-gold mb-2">Message Sent!</h3>
            <p className="text-silver">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus('')}
              className="mt-6 text-sm uppercase tracking-widest text-gold hover:text-white transition-colors border-b border-gold/30 pb-1"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-silver pl-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-silver pl-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-silver pl-1">Message</label>
              <textarea 
                name="message"
                required
                rows="5"
                className="w-full bg-obsidian border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors duration-300 resize-none placeholder:text-white/20"
                placeholder="Tell me about your vision..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gold text-obsidian font-bold text-lg tracking-wide py-4 rounded-xl hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center mt-4">Oops! There was a problem sending your message. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;