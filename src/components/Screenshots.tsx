import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";
import screenshot4 from "@/assets/screenshot-4.jpg";

const screenshots = [
  "https://play-lh.googleusercontent.com/WASqfws8kgmxzPyedKCRYPabV7Vo_dLEnwh0nsJyJAMHliQ-tGss0tXWdIYHUgGXbYUJ=w526-h296-rw",
  "https://play-lh.googleusercontent.com/Ra8q_gThlkdzPLe4mdQYm3FBfurMQj1XTPnqYRf8aVYRnUqFxnpbyla1oL8Mlwpa5w=w526-h296-rw",
  "https://play-lh.googleusercontent.com/cSaAIA5F3FLHUurudlnj35x1qo-88iudL4EAUq9JKBFd5ew_lxxcBum3epYLORoClwY=w526-h296-rw",
  "https://play-lh.googleusercontent.com/18rDQyjwWzM6Fy6mzTB8Fl_3ip4mOqD8U5c7HKPXNS0iU7Z0iTJY4r2aoQxQCicN9w=w526-h296-rw",
  "https://play-lh.googleusercontent.com/blfhEGssps9OAABHhbnCcI4547WHUtZAaUaqx7pBW4z-ELYJ31IrpqYhBU8_AIlgpgs=w526-h296-rw",
  "https://play-lh.googleusercontent.com/q84RKvsPmM0UT7vFZ8n0_vHoojRi5nPXtMApkI0n3DT39zMe-zJhub9zFDaHhC5Th9A=w526-h296-rw",
  "https://play-lh.googleusercontent.com/xO1LBJOU7Y7yaXuo1sRfacGI-Owp2N7VmXMfoUM-ujbXZCykCmlToAMVckSfJlKUDg=w526-h296-rw",
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
