import { Flag } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border mt-12">
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Flag className="w-4 h-4" />
        <span>Sinalizar como impróprio</span>
      </div>

      <div className="grid grid-cols-1 gap-6 text-sm text-muted-foreground">
        <div className="space-y-2">
          <p>Google Play</p>
          <p>Play Pass</p>
          <p>Pontos do Play Points</p>
          <p>Vale presente</p>
          <p>Resgatar</p>
          <p>Política de reembolso</p>
        </div>
        <div className="space-y-2">
          <p>Crianças e família</p>
          <p>Guia para a família</p>
          <p>Compartilhamento em família</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-border text-xs text-muted-foreground">
        <span>Termos de Serviço</span>
        <span>Privacidade</span>
        <span>Sobre o Google Play</span>
        <span>Desenvolvedores</span>
        <span>Google Store</span>
        <span className="ml-auto">🌐 Brasil (Português)</span>
      </div>
    </div>
  </footer>
);

export default Footer;
