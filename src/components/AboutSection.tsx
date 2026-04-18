import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-google font-medium text-foreground">Sobre este app</h2>
        <ArrowRight className="w-5 h-5 text-foreground" />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        *** NOVO ***<br />
        Agora app rastreia códigos internacionais de empresas como: FedEx, USPS, DHL, BR1 Express, Wish (aligren), Serpos POST, entre outros!
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
        Com o app RastreiaApp você pode rastrear todas as suas encomendas registradas no Correios, e nas transportadoras Plimor, Patrus, Sequoia/Jadlog (Mercado Livre), e nas transportadoras do sistema SSW...
      </p>
      <div className="mt-4">
        <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Atualizado em</span><br />16 de jul. de 2025</p>
      </div>
      <div className="mt-3">
        <span className="inline-block text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">Ferramentas</span>
      </div>
    </section>
  );
};

export default AboutSection;
