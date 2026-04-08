import { ArrowRight, Share2, Eye, Lock, Trash2 } from "lucide-react";

const DataSafety = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-google font-medium text-foreground">
          Segurança dos dados
        </h2>
        <ArrowRight className="w-5 h-5 text-foreground" />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Sua segurança começa quando você entende como os desenvolvedores coletam
        e compartilham seus dados. As práticas de segurança e privacidade de
        dados podem variar de acordo com o uso, a região e a idade. O
        desenvolvedor forneceu as informações a seguir, que podem ser
        atualizadas ao longo do tempo.
      </p>
      <div className="border border-border rounded-xl p-4 space-y-4">
        <div className="flex items-start gap-3">
          <Share2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-foreground font-medium">
              Este app pode compartilhar estes tipos de dados com terceiros
            </p>
            <p className="text-xs text-muted-foreground">
              Local e Identificadores do dispositivo e outros IDs
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Eye className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-foreground font-medium">
              Este app pode coletar estes tipos de dados
            </p>
            <p className="text-xs text-muted-foreground">
              Informações pessoais, Atividade no app e Identificadores do
              dispositivo e outros IDs
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">
            Os dados são criptografados em trânsito
          </p>
        </div>
        <div className="flex items-start gap-3">
          <Trash2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">
            Você pode solicitar a exclusão dos dados
          </p>
        </div>
        <div>
          <a href="#" className="text-sm text-gplay-green font-medium">
            Mais detalhes
          </a>
        </div>
      </div>
    </section>
  );
};

export default DataSafety;
