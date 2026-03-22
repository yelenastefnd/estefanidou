import { useEffect, useRef } from "react";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 opacity-0"
    >
      <div className="max-w-xl">
        <h2 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-8 leading-[1.1]">
          About
        </h2>
        <div className="space-y-5 text-sm leading-relaxed text-muted-foreground max-w-prose">
          <p>
            I'm Elena Stefanidou, a sports photographer driven by the
            raw intensity and fleeting beauty of athletic performance.
            From the tension before a sprint to the euphoria of a
            last-second goal, I live for the moments that define
            competition.
          </p>
          <p>
            I shoot every sport — football pitches, swimming pools,
            velodromes, courts, and tracks. My work captures the
            discipline, emotion, and sheer physicality that make
            sports a universal language.
          </p>
          <p>
            Whether it's editorial, commercial, or event coverage,
            I bring the same obsessive eye for timing and light to
            every assignment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
