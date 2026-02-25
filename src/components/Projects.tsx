import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, Database as DbIcon, Layout, Search } from "lucide-react";

const projects = [
  {
    title: "Tiny Wings – Baby Growth Analysis",
    description: "Full-stack baby growth tracking platform with comprehensive analytics and secure authentication.",
    features: [
      { icon: Shield, text: "JWT Authentication & Spring Security" },
      { icon: DbIcon, text: "MySQL with Spring Boot layered architecture" },
      { icon: Layout, text: "Responsive frontend with growth charts" },
    ],
    tags: ["Spring Boot", "Java", "MySQL", "REST API"],
  },
  {
    title: "Virtual Herbal Garden",
    description: "Interactive AYUSH educational platform showcasing medicinal plants with rich multimedia content.",
    features: [
      { icon: Search, text: "Advanced search & filter functionality" },
      { icon: Layout, text: "Multimedia plant information cards" },
      { icon: DbIcon, text: "Educational UI with interactive content" },
    ],
    tags: ["HTML", "CSS", "JavaScript", "Education"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass rounded-2xl overflow-hidden gradient-border glow-primary-hover transition-all hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Gradient header bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.features.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm">
                      <Icon size={15} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg glass hover:bg-secondary transition-colors"
                  >
                    <Github size={14} /> GitHub
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

export default Projects;
