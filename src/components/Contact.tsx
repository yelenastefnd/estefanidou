import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 border-t border-border opacity-0"
    >
      <h2 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-10 leading-[1.1]">
        Get in Touch
      </h2>

      <div className="space-y-6">
        <a
          href="mailto:stefanidouphotography@gmail.com"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Mail size={18} />
          <span>stefanidouphotography@gmail.com</span>
          <ArrowUpRight
            size={14}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </a>

        <a
          href="https://instagram.com/stefanidou.photography"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Instagram size={18} />
          <span>@stefanidou.photography</span>
          <ArrowUpRight
            size={14}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </div>

      <p className="mt-16 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Elena Stefanidou. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
