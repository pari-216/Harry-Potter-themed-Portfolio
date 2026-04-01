import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, BookOpen } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aurora Weather App',
    description: 'A responsive weather application that provides real-time weather updates with a clean and user-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    liveUrl: 'https://pari-216.github.io/Aurora-Weather/',
    githubUrl: 'https://github.com/pari-216/Aurora-Weather.git',
    spell: 'Meteolojinx Recanto',
  },
  {
    id: 2,
    title: 'To-Do List App',
    description: 'A task management web application that allows users to add, delete, and mark tasks as completed to improve daily productivity.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    liveUrl: 'https://pari-216.github.io/To-Do-List/',
    githubUrl: 'https://github.com/pari-216/To-Do-List.git',
    spell: 'Organisium Totalus',
  },
  {
    id: 3,
    title: 'Harry Potter Themed Google Maps',
    description: 'A customized, themed version of Google Maps inspired by the Harry Potter universe, focusing on UI styling and creativity.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop',
    liveUrl: 'https://pari-216.github.io/Harry-Potter-theme-google-maps-/',
    githubUrl: 'https://github.com/pari-216/Harry-Potter-theme-google-maps-',
    spell: 'Revelio Mappa',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 starfield opacity-20" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-glow-gold">
              The Spell Book
            </h2>
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of enchanted projects, each crafted with precision and magical intent
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className={`group relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 ${
                hoveredId === project.id ? 'border-primary/50 border-glow-gold' : ''
              }`}
              style={{
                animation: hoveredId === project.id ? 'none' : `float 6s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {/* Spell cast overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                className="absolute inset-0 z-20 pointer-events-none"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredId === project.id ? [0, 1.5, 0] : 0,
                    opacity: hoveredId === project.id ? [0, 0.5, 0] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/30 blur-xl"
                />
              </motion.div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Spell name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0, y: hoveredId === project.id ? 0 : 20 }}
                  className="absolute bottom-4 left-4 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-cinzel text-sm text-primary italic text-glow-gold">
                    "{project.spell}"
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
