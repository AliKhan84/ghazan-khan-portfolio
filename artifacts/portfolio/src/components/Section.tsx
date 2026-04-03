import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  bg?: "white" | "muted" | "primary";
}

export function Section({ id, title, children, className = "", bg = "white" }: SectionProps) {
  const bgColors = {
    white: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary/5"
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12 md:mb-16 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4 relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
