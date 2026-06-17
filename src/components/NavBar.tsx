import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-alves-schmidt.png";
import { WHATSAPP_LINK } from "@/lib/contact";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Advogados", href: "#advogados" },
    { label: "Áreas", href: "#areas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Alves & Schmidt Advogados" className="h-14 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Conversar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block font-body text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg bg-primary px-6 py-2 text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Conversar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
