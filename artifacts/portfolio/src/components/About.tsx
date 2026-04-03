import { motion } from "framer-motion";
import { Section } from "./Section";
import { Stethoscope, Activity, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const cards = [
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "Clinical Precision",
      description: "Delivering high-quality diagnostic images across multiple modalities."
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-accent" />,
      title: "Patient Care",
      description: "Ensuring patient comfort and safety during complex procedures."
    },
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "Radiation Safety",
      description: "Strict adherence to ALARA principles and radiation protection."
    }
  ];

  return (
    <Section id="about" title="About Me" bg="muted">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 space-y-6 text-lg text-foreground/80 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            As a dedicated and passionate certified clinical radiology professional from the Allied Health Professional Council of Pakistan, I bring hands-on experience in delivering precise diagnostic imaging.
          </p>
          <p>
            My expertise spans across Ultrasound (US), Computed Radiography (CR), Digital Radiography (DR), Magnetic Resonance Imaging (MRI), Computed Tomography (CT), and Fluoroscopy. 
          </p>
          <p>
            I practice radiation safety principles with a patient-centered approach to care, ensuring safe, accurate imaging and patient comfort at all times. Working in a fast-paced hospital environment has honed my ability to make critical decisions while maintaining the highest standards of medical ethics.
          </p>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cards.map((card, index) => (
            <Card key={index} className="border-none shadow-sm hover-elevate transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-background shadow-sm border border-border shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
