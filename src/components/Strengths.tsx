import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Bug, Clock, Users, Zap } from "lucide-react";

const strengths = [
  { icon: Brain, title: "Problem Solving", desc: "Analytical thinking to break down complex challenges" },
  { icon: Bug, title: "Debugging Expert", desc: "Efficiently tracing and resolving software issues" },
  { icon: Clock, title: "Disciplined & Consistent", desc: "Committed to daily practice and continuous growth" },
  { icon: Users, title: "Team Collaborator", desc: "Effective communication and collaborative development" },
  { icon: Zap, title: "Quick Learner", desc: "Rapidly adapting to new technologies and frameworks" },
];

const Strengths = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Core <span className="gradient-text">Strengths</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center glow-primary-hover transition-all hover:-translate-y-2 group"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
