import { useEffect, useRef, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import sports1 from "@/assets/sports-1.jpg";
import sports2 from "@/assets/sports-2.jpg";
import sports3 from "@/assets/sports-3.jpg";
import sports4 from "@/assets/sports-4.jpg";
import sports5 from "@/assets/sports-5.jpg";
import sports6 from "@/assets/sports-6.jpg";
import sports7 from "@/assets/sports-7.jpg";
import sports8 from "@/assets/sports-8.jpg";
import sports9 from "@/assets/sports-9.jpg";
import sports10 from "@/assets/sports-10.jpg";
import sports11 from "@/assets/sports-11.jpg";

const images = [
  { src: sports1, alt: "Basketball player in action during game", sport: "Basketball" },
  { src: sports2, alt: "Basketball player dunking the ball", sport: "Basketball" },
  { src: sports3, alt: "Basketball player dribbling during national team game", sport: "Basketball" },
  { src: sports4, alt: "Handball player jumping to shoot", sport: "Handball" },
  { src: sports5, alt: "Young handball player mid-air throw", sport: "Handball" },
  { src: sports6, alt: "Greek national team basketball player portrait", sport: "Basketball" },
  { src: sports7, alt: "Handball player celebrating a goal", sport: "Handball" },
  { src: sports8, alt: "Basketball player celebrating with intensity", sport: "Basketball" },
  { src: sports9, alt: "Basketball coach drawing up plays during timeout", sport: "Basketball" },
  { src: sports10, alt: "Volleyball player serving during Greek cup match", sport: "Volleyball" },
  { src: sports11, alt: "Volleyball player focused before the play", sport: "Volleyball" },
];

const Gallery = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="portfolio" className="py-8 lg:py-0">
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="gallery-item break-inside-avoid opacity-0 overflow-hidden cursor-pointer relative group"
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end p-4">
                <span className="font-display text-sm uppercase tracking-widest text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  {img.sport}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 border-none bg-black/95 shadow-2xl overflow-hidden [&>button]:hidden">
          <DialogTitle className="sr-only">
            {lightboxIndex !== null ? images[lightboxIndex].alt : "Photo"}
          </DialogTitle>
          {lightboxIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />

              {/* Close */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Nav arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-accent transition-colors z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-accent transition-colors z-10"
                aria-label="Next"
              >
                <ChevronRight size={36} />
              </button>

              {/* Sport label */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-xs uppercase tracking-[0.25em] text-accent">
                {images[lightboxIndex].sport} — {lightboxIndex + 1}/{images.length}
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
