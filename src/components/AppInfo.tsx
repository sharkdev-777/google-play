import { Star, Share2, Flag, BookmarkPlus } from "lucide-react";
import appIcon from "@/assets/app-icon.png";
import icon from "@/assets/app.webp";
import { Button } from "./ui/button";

const AppInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6 items-start">
        <img
          src={icon}
          alt="Rastreio Fácil"
          className="w-[72px] h-[72px] rounded-xl shadow"
        />

        <div className="flex-1">
          <h1 className="leading-none text-2xl font-google font-medium text-foreground">
            Rastreio Fácil (correios)
          </h1>
          <a
            href="#"
            className="text-sm text-gplay-green font-medium mt-1 inline-block"
          >
            DS Develop
          </a>
          <p className="text-xs text-muted-foreground mt-1">
            Contém anúncios · Compras no app
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-6 mt-4 text-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 font-medium text-foreground">
              4,7 <Star className="w-3 h-3 fill-current" />
            </div>
            <p className="text-xs text-muted-foreground">76 mil avaliações</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-medium text-foreground">1 mi+</div>
            <p className="text-xs text-muted-foreground">downloads</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 font-medium text-foreground">
              <Flag className="w-3 h-3" />
            </div>
            <p className="text-xs text-muted-foreground">Classificação Livre</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-5">
          <Button
            asChild
            type="button"
            className="w-full bg-[#01875f] text-primary-foreground font-medium px-8 py-2.5 rounded-lg text-sm hover:opacity-90 transition"
          >
            <a href="/rastreio.facil.apk" download>
              Instalar
            </a>
          </Button>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gplay-green text-sm font-medium hover:bg-secondary px-3 py-2.5 rounded-lg transition">
              <Share2 className="w-4 h-4" /> Compartilhar
            </button>
            <button className="flex items-center gap-2 text-gplay-green text-sm font-medium hover:bg-secondary px-3 py-2.5 rounded-lg transition">
              <BookmarkPlus className="w-4 h-4" /> Adicionar à lista de desejos
            </button>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4 flex items-center gap-1">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          Este app está disponível para alguns dos seus dispositivos
        </p>
      </div>
    </div>
  );
};

export default AppInfo;
