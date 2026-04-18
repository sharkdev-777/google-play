import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import screenshot1 from "@/assets/sc1.webp"; 
import screenshot2 from "@/assets/sc2.webp"; 
import screenshot3 from "@/assets/sc3.webp"; 


const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3
];

const Screenshots = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-md rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x"
      >
        {screenshots.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Screenshot ${i + 1}`}
            className="w-36 rounded-lg flex-shrink-0 snap-start border border-border"
            width={176}
            height={312}
          />
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-md rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
};

export default Screenshots;
