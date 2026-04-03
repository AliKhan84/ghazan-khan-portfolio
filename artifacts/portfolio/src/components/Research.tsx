import { motion } from "framer-motion";
import { Section } from "./Section";
import { FileText, Users, Presentation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Research() {
  const publications = [
    {
      title: "Association of Anthropometric and Sociodemographic Factors with Portal Vein Diameter as Assessed by Ultrasonography",
      journal: "National Journal of Life and Health Sciences",
      icon: <FileText className="w-5 h-5 text-primary" />
    },
    {
      title: "Computed Tomography Findings of Traumatic Brain Injury and its Assessment in a Teaching Hospital: A Cross-Sectional Study",
      journal: "Pakistan Journal of Neurological Surgery",
      icon: <FileText className="w-5 h-5 text-primary" />
    },
    {
      title: "Sonographic Assessment of Renal Size among Young Population of District Mardan, Pakistan: A Cross Sectional Study",
      journal: "National Journal of Life and Health Sciences",
      icon: <FileText className="w-5 h-5 text-primary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section id="research" title="Research & Conferences" bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-xl font-bold font-serif text-foreground mb-4 flex items-center gap-2">
            <FileText className="text-primary w-6 h-6" />
            Research Publications
          </h3>
          
          {publications.map((pub, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="border border-border/50 hover:border-primary/30 transition-all hover-elevate bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-primary/10 rounded-md shrink-0 mt-1">
                      {pub.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground leading-snug mb-2">
                        {pub.title}
                      </h4>
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                        {pub.journal}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold font-serif text-foreground mb-4 flex items-center gap-2">
            <Presentation className="text-accent w-6 h-6" />
            Conferences & Workshops
          </h3>
          
          <Card className="bg-muted/50 border-none shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm shrink-0 border border-border">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">Virtual Radiology Conference 2023</h4>
                  <p className="text-xs text-muted-foreground">Radiopaedia</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-border" />
              
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm shrink-0 border border-border">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">CME Session on Radiology</h4>
                  <p className="text-xs text-muted-foreground">Al-Khidmat Diagnostic Center Nazimabad, Karachi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
