import { Instagram, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur-sm lg:hidden">
        <h1 className="font-display text-lg font-bold uppercase tracking-wider leading-tight">
          Elena<br />Stefanidou
        </h1>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 lg:hidden">
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://instagram.com/stefanidou.photography"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:stefanidouphotography@gmail.com"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 flex-col justify-between p-10 z-30 bg-background">
        <div>
          <h1 className="font-display text-2xl font-bold uppercase tracking-wider leading-[1.1] mb-12">
            Elena<br />Stefanidou
          </h1>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Sports Photography
          </p>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/stefanidou.photography"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:stefanidouphotography@gmail.com"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            <p>Contact:</p>
            <a
              href="mailto:stefanidouphotography@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              stefanidouphotography@gmail.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
