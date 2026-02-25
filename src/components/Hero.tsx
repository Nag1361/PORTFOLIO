import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import profileImg from "@/assets/nagaraju.png";

const FloatingBlob = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 ${className}`} />
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <FloatingBlob className="w-96 h-96 bg-primary -top-20 -left-20 animate-float" />
      <FloatingBlob className="w-80 h-80 bg-accent bottom-20 right-10 animate-float-slow" />
      <FloatingBlob className="w-64 h-64 bg-primary/50 top-1/2 left-1/2 animate-pulse-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-primary font-mono text-sm mb-4"
          >
            👋 Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            Nagaraju{" "}
            <span className="gradient-text text-glow">Salendra</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground mb-6 font-mono"
          >
            Full Stack Developer | Java • Spring Boot • React
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0"
          >
            A passionate Computer Science Engineering student crafting scalable, secure, 
            and production-ready web applications. Driven by clean code and modern architecture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all hover:shadow-[0_0_30px_hsl(190_95%_55%/0.3)] hover:scale-105"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass glow-primary-hover font-semibold transition-all hover:scale-105"
            >
              Download Resume
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="relative"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full gradient-border glow-primary overflow-hidden">
            <img src={profileImg} alt="Nagaraju Salendra" className="w-full h-full rounded-full object-cover object-top" />
          </div>
          {/* Floating tech badges */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-2 -right-2 glass px-3 py-1.5 rounded-full text-xs font-mono text-primary"
          >
            Java ☕
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -bottom-2 -left-2 glass px-3 py-1.5 rounded-full text-xs font-mono text-accent"
          >
            React ⚛️
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
