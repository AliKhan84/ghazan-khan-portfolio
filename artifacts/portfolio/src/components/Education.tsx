import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section id="education" title="Education & Certifications" bg="muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Education & Honors */}
        <div className="space-y-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary w-7 h-7" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="relative pl-6 border-l-2 border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-background" />
                <h4 className="text-lg font-bold text-foreground">BS Radiology</h4>
                <div className="text-primary font-medium text-sm mb-1">CGPA: 3.55/4.0</div>
                <p className="text-muted-foreground text-sm">Khyber Medical University (KMU) | 2019–2023</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative pl-6 border-l-2 border-border">
                <div className="absolute w-3 h-3 bg-muted-foreground/30 rounded-full -left-[7px] top-1.5 ring-4 ring-background" />
                <h4 className="text-lg font-bold text-foreground">Intermediate (Pre-Medical)</h4>
                <p className="text-muted-foreground text-sm">Quaid-e-Azam College Swabi | 2016–2018</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
              <Award className="text-accent w-7 h-7" />
              Honors & Achievements
            </h3>
            
            <div className="space-y-3">
              {[
                { title: "Certificate of Distinction — BS Radiology", org: "MTI CMT-BKMC" },
                { title: "Merit Scholarship 2020 (Undergraduate)", org: "MTI CMT-BKMC" },
                { title: "Talent Hunt Scholarship 2016", org: "Quaid-e-Azam College Swabi" },
                { title: "Science Talent Farming Scheme Scholarship 2015", org: "Pakistan Science Foundation (HEC)" },
              ].map((honor, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="border-none shadow-sm bg-background">
                    <CardContent className="p-4 flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{honor.title}</p>
                        <p className="text-xs text-muted-foreground">{honor.org}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Courses & Certs */}
        <div className="space-y-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
              <BookOpen className="text-primary w-7 h-7" />
              Online Courses & Certifications
            </h3>
            
            <div className="space-y-3">
              {[
                { title: "Anatomy Specialization", org: "University of Michigan" },
                { title: "Anatomy of The Chest, Neck, Abdomen, and Pelvis", org: "Yale University" },
                { title: "Medical Imaging Anatomy", org: "Radiopaedia" },
                { title: "Minimizing Radiation Risks in Pediatrics", org: "Certification" },
                { title: "BLS & ACLS", org: "Basic Life Support & Advanced Cardiovascular Life Support" },
                { title: "Vein Access Injection", org: "Certification" },
              ].map((course, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="border border-border/50 shadow-sm bg-background hover:border-primary/20 transition-colors">
                    <CardContent className="p-4">
                      <p className="font-semibold text-foreground text-sm mb-1">{course.title}</p>
                      <p className="text-xs text-primary">{course.org}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
