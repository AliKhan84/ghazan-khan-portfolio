import { motion } from "framer-motion";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Layers, Monitor, Target, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillGroups = [
    {
      title: "Clinical Imaging Modalities",
      icon: <Layers className="w-5 h-5 text-primary" />,
      skills: [
        "Ultrasound (US)", 
        "Computed Radiography (CR)", 
        "Digital Radiography (DR)", 
        "Magnetic Resonance Imaging (MRI)", 
        "Computed Tomography (CT)", 
        "Fluoroscopy"
      ]
    },
    {
      title: "Technical & Software",
      icon: <Monitor className="w-5 h-5 text-primary" />,
      skills: [
        "Microsoft Office Suite", 
        "SPSS", 
        "Google Drive", 
        "EndNote", 
        "Mendeley"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Target className="w-5 h-5 text-primary" />,
      skills: [
        "Communication", 
        "Interpersonal Skills", 
        "Creativity", 
        "Planning", 
        "Persistence"
      ]
    },
    {
      title: "Languages",
      icon: <Globe className="w-5 h-5 text-primary" />,
      skills: [
        "Pashto (Native)", 
        "English (C1 — Proficient)", 
        "Urdu (C1 — Proficient)"
      ]
    }
  ];

  return (
    <Section id="skills" title="Core Competencies" bg="white">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillGroups.map((group, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border border-border/50 hover:border-primary/20 transition-colors shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-md">
                    {group.icon}
                  </div>
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIndex) => (
                    <Badge key={sIndex} variant="secondary" className="font-normal text-sm py-1 px-3 bg-secondary/50 hover:bg-secondary text-secondary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
