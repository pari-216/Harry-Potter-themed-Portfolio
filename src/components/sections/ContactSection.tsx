import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Bird } from 'lucide-react';
import parchmentTexture from '@/assets/parchment-texture.jpg';
import OwlPostAnimation from '@/components/OwlPostAnimation';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOwlAnimation, setShowOwlAnimation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    setShowOwlAnimation(true);
  };

  const handleOwlAnimationComplete = () => {
    setShowOwlAnimation(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-magical-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-magical/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Bird className="h-8 w-8 text-primary" />
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-glow-gold">
              Owl Post
            </h2>
            <Bird className="h-8 w-8 text-primary -scale-x-100" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Send your message via magical owl — I promise to respond swiftly!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 hover:border-glow-gold transition-all">
              <h3 className="font-cinzel text-xl font-bold text-foreground mb-6">
                Ways to Reach Me
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:pari216garg@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:border-glow-gold">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">pari216garg@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/pari-216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:border-glow-gold">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground">github.com/pari-216</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/pari-garg-675a1437a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:border-glow-gold">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground">Pari Garg</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social links could go here */}
            <div className="text-center text-muted-foreground text-sm">
              <p className="font-cinzel italic">
                "Not all those who wander are lost"
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 relative"
          >
            {/* Owl Post Animation */}
            <OwlPostAnimation 
              isVisible={showOwlAnimation} 
              onComplete={handleOwlAnimationComplete} 
            />

            <div
              className="relative rounded-xl p-8 shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${parchmentTexture})`,
                backgroundSize: 'cover',
              }}
            >
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/60" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-cinzel text-sm font-semibold text-parchment-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-accent/40 text-parchment-foreground placeholder-accent/50 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Harry Potter"
                    />
                  </div>
                  <div>
                    <label className="block font-cinzel text-sm font-semibold text-parchment-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-accent/40 text-parchment-foreground placeholder-accent/50 focus:border-accent focus:outline-none transition-colors"
                      placeholder="owl@hogwarts.edu"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-cinzel text-sm font-semibold text-parchment-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-accent/40 text-parchment-foreground placeholder-accent/50 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Regarding a magical opportunity..."
                  />
                </div>

                <div>
                  <label className="block font-cinzel text-sm font-semibold text-parchment-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-accent/40 text-parchment-foreground placeholder-accent/50 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Dear Wizard, I would like to discuss..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full spell-button py-4 rounded-lg font-cinzel font-semibold text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Bird className="h-5 w-5" />
                      </motion.div>
                      Sending Owl...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Wax seal decoration */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <span className="text-2xl">🦉</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
