import { Mail, Phone, MapPin, FileText } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  const contact = [
    { icon: <Mail className="w-4 h-4" />, label: "ghazankhanadeem@gmail.com", href: "mailto:ghazankhanadeem@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, label: "+92 330 2430098", href: "tel:+923302430098" },
    { icon: <MapPin className="w-4 h-4" />, label: "Swabi, KPK, Pakistan", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-background/10">
          <div>
            <p className="font-serif text-xl font-bold mb-2">Ghazan Khan</p>
            <p className="text-sm text-background/70 mb-4">Certified Radiology Technologist</p>
            <p className="text-xs text-background/50 leading-relaxed">
              AHPC Reg. No: REG-20251202-03563<br />
              Allied Health Professional Council of Pakistan
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Contact</p>
            <ul className="space-y-3">
              {contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                    data-testid={`footer-contact-${item.label.replace(/[^a-z]/gi, "-").toLowerCase()}`}
                  >
                    <span className="text-background/40">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Ghazan_Khan_CV.pdf"
                  download
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                  data-testid="footer-download-cv"
                >
                  <span className="text-background/40"><FileText className="w-4 h-4" /></span>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-background/40">
          <p>&copy; {year} Ghazan Khan. All Rights Reserved.</p>
          <p>Radiology Technologist | AHPC Certified | Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
