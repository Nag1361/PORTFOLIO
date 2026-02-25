import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    period: "2023 – 2027",
    title: "B.Tech in Computer Science Engineering",
    institution: "SR University",
    status: "Currently Pursuing",
  },
  {
    period: "2021 – 2023",
    title: "Intermediate – MPC",
    institution: "SR Edu Centre",
    status: "Completed",
  },
  {
    period: "2020 – 2021",
    title: "SSC",
    institution: "Shine High School",
    status: "Completed",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary glow-primary -translate-x-1.5 sm:-translate-x-1.5 mt-6 z-10" />

              {/* Spacer for mobile */}
              <div className="w-12 shrink-0 sm:hidden" />

              {/* Card */}
              <div className={`sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                <div className="glass rounded-xl p-5 glow-primary-hover transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-primary" />
                    <span className="text-xs font-mono text-primary">{item.period}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
