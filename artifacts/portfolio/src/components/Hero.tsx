import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Building, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden bg-background">
      {/* Background abstract elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-secondary/30 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          <motion.div 
            className="flex-1 text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AHPC Certified
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4 font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Ghazan Khan
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Radiology Technologist
            </motion.h2>
            
            <motion.p 
              className="text-lg text-foreground/80 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              "Delivering precise diagnostic imaging with a patient-centered approach."
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto rounded-full hover-elevate">
                Get In Touch
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full hover-elevate">
                <a href="/Ghazan_Khan_CV.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Swabi, Pakistan
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Building size={16} className="text-primary" />
                Khyber Medical Center
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-[1.05]" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.1]" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl relative z-10 bg-muted">
                <img 
                  src="/profile.jpg" 
                  alt="Ghazan Khan - Radiology Technologist" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Ghazan+Khan&size=400&background=0D8ABC&color=fff";
                  }}
                />
              </div>
              
              {/* Floating badges */}
              {/* MRI badge — top right */}
              <motion.div
                className="absolute top-2 sm:top-10 -right-2 sm:-right-4 lg:-right-8 bg-background shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-20 border border-border cursor-default"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.6 },
                  x: { delay: 0.6, duration: 0.6 },
                  y: { delay: 0.6, duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, y: -2, boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  MRI
                </div>
                <span className="text-sm font-medium">Expertise</span>
              </motion.div>

              {/* CT badge — bottom left */}
              <motion.div
                className="absolute bottom-2 sm:bottom-10 -left-2 sm:-left-4 lg:-left-8 bg-background shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-20 border border-border cursor-default"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.6 },
                  x: { delay: 0.8, duration: 0.6 },
                  y: { delay: 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, y: -2, boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">
                  CT
                </div>
                <span className="text-sm font-medium">Specialist</span>
              </motion.div>

              {/* U/S badge — bottom right */}
              <motion.div
                className="absolute bottom-2 sm:bottom-10 -right-2 sm:-right-4 lg:-right-8 bg-background shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-20 border border-border cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  opacity: { delay: 1.0, duration: 0.6 },
                  y: { delay: 1.8, duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, y: -2, boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  U/S
                </div>
                <span className="text-sm font-medium">Tech</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
