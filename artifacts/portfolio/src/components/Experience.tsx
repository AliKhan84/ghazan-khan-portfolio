import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" title="Experience" bg="primary">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0">
          <motion.div 
            className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-background"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-2 h-2 rounded-full bg-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary hidden md:block" />
                Radiology Technologist
              </h3>
              <span className="inline-block mt-1 md:mt-0 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                December 2023 – Present
              </span>
            </div>
            
            <p className="text-lg font-medium text-muted-foreground mb-4">
              Khyber Medical Center | Peshawar, Pakistan
            </p>
            
            <div className="bg-card border shadow-sm rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Key Responsibilities & Achievements</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span>Enhanced clinical skills across full radiology department including Ultrasound, CT, MRI, Digital Radiography, and Fluoroscopy.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span>Upheld core values of work ethics, ensuring a respectful and responsible approach to healthcare practices.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary mt-1">•</span>
                  <span>Strengthened communication skills through regular patient interactions, creating a comfortable and informative environment.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
