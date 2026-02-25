import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Lightbulb } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, title: "Frontend", desc: "React, modern CSS, responsive design" },
    { icon: Server, title: "Backend", desc: "Spring Boot, REST APIs, JWT auth" },
    { icon: Lightbulb, title: "Mindset", desc: "Clean code, scalable architecture" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a <span className="text-foreground font-medium">motivated Computer Science Engineering student</span> at 
              SR University with a deep passion for building robust, production-grade applications. My core 
              expertise lies in <span className="text-primary">Java and Spring Boot</span>, where I've developed secure 
              backend systems with JWT authentication and RESTful architectures.
            </p>
            <p>
              Currently expanding my horizons into the <span className="text-primary">MERN ecosystem</span>, I bring a 
              disciplined, fundamentals-focused mindset to every project. I believe in writing clean, 
              maintainable code and building systems that scale — not just work.
            </p>
            <p>
              Every line of code I write is driven by a commitment to security, performance, and 
              user-centric design. I'm eager to contribute to teams that value engineering excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass rounded-xl p-5 glow-primary-hover transition-all hover:-translate-y-1 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
