import { motion } from 'framer-motion';
import { Github, Linkedin, Sparkles, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/pari-216', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pari-garg-675a1437a/', label: 'LinkedIn' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border py-12">
      {/* Starfield background */}
      <div className="absolute inset-0 starfield opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <Sparkles className="h-6 w-6 text-primary group-hover:animate-glow" />
            <span className="font-cinzel text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Pari Garg
            </span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-glow-gold transition-all border border-transparent hover:border-primary/50"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors font-cinzel"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-accent fill-accent" /> and a bit of magic
            </p>
            <p className="mt-2 font-cinzel">
              © {currentYear} Pari Garg. All rights reserved.
            </p>
          </div>

          {/* Magical quote */}
          <p className="text-xs text-muted-foreground/60 font-cinzel italic text-center max-w-md">
            "It does not do to dwell on dreams and forget to live."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
