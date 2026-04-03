import { Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg font-bold mb-1">Ghazan Khan</p>
          <p className="text-sm text-background/70">Certified Radiology Technologist | AHPC Pakistan</p>
        </div>
        
        <div className="text-center md:text-right text-sm text-background/50">
          <p>&copy; {year} Ghazan Khan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
