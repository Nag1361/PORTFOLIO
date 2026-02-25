import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code, Globe, Server, Database, Wrench, Film,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    icon: Globe,
    title: "Frontend Technologies",
    skills: ["HTML", "CSS", "Advanced CSS", "Bootstrap", "React JS", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend Technologies",
    skills: ["Spring Boot", "Spring Security", "REST APIs", "JWT Auth", "Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Terraform", "Postman"],
  },
  {
    icon: Film,
    title: "Other Skills",
    skills: ["Video Editing", "Blender", "Adobe Tools"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ icon: Icon, title, skills }, gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-xl p-6 glow-primary-hover transition-all hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
