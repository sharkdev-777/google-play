import { ArrowRight, Star, ThumbsUp, MoreVertical } from "lucide-react";

const ratingBars = [
  { stars: 5, percent: 78 },
  { stars: 4, percent: 12 },
  { stars: 3, percent: 5 },
  { stars: 2, percent: 2 },
  { stars: 1, percent: 3 },
];

const reviews = [
  {
    name: "Loris Modalhas",
    date: "14 de setembro de 2025",
    rating: 4,
    text: "O app sempre foi muito bom e sempre tivemos anúncios (que são necessários pra manter a parte gratuita) mas realmente ultimamente está quase impossível de usar, ao abrir o app, um vídeo que não se pode pular, ao cadastrar o rastreio, outro anúncio, ao voltar a página para verificar o rastreio, outro anúncio não passa 30 segundos dentro do app e já leva 3 anúncios diferentes o problema não é ter anúncios pra manter o app, mas a quantidade absurda que impede a gente de navegar no app.",
    helpful: 15,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjXsGlM3ti3EbAZJroOyYAI4y1IDshoGMePGe1sVFW4-7a76-dCh=s32-rw",
  },
  {
    name: "Guilherme Campagnaro Carneiro",
    date: "26 de maio de 2021",
    rating: 4,
    text: "Aplicativo excelente. Testei junto com vários outros app. de rastreios e esse foi o que deu a notificação de atualização do rastreio mais rápido que todos. O único ponto chato são as propagandas, que eu até compraria o app para não ter mais, entretanto o valor é mensal, é uma assinatura. Achei o valor alto. Se fosse um valor mais em conta e uma compra vitalícia, com certeza pagaria.",
    helpful: 44,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjWKgZoGSi5nh8bdqTZW6T9iaUhR-Oe3OhIhgCR7b22MlgO3X5YX=s32-rw",
  },
  {
    name: "Hodivando Nunes",
    date: "3 de abril de 2021",
    rating: 5,
    text: "Aplicativo top na balada!! Leve, fácil de usar e sem complicações. Poucas propagandas que são bem aceitas. Gostaria de dar uma dica: Ter a opção de escolher o tipo de toque do celular para as notificações, pois quando ele atualiza, o som é padrão do aparelho e se confundi com outras do celular. Tendo a opção de escolha, podemos colocar um toque único e saber que recebemos uma notificação de rastreio! Parabéns aos desenvolvedores!!!",
    helpful: 104,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjWffjoAdlsw9SskG0Py9L7jTOeHFGeKPuPcT45RMUW7eRem9tkWNQ=s32-rw",
  },
];

const RatingsSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-google font-medium text-foreground">
          Classificações e resenhas
        </h2>
        <ArrowRight className="w-5 h-5 text-foreground" />
      </div>

      <div className="flex gap-2 mb-4">
        <button className="text-xs font-medium border border-gplay-green text-gplay-green rounded-full px-4 py-1.5 bg-primary/10">
          Telefone
        </button>
        <button className="text-xs font-medium border border-border text-muted-foreground rounded-full px-4 py-1.5">
          Tablet
        </button>
      </div>

      <div className="flex gap-8 mb-8">
        <div className="flex-shrink-0">
          <div className="text-5xl font-google font-medium text-foreground">
            4,7
          </div>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i <= 4 ? "fill-gplay-star text-gplay-star" : "fill-gplay-star/40 text-gplay-star/40"}`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            77,6 mil avaliações
          </p>
        </div>
        <div className="flex-1 space-y-0.5">
          {ratingBars.map(({ stars, percent }) => (
            <div key={stars} className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground w-2">{stars}</span>
              <div className="flex-1 h-2.5 bg-gplay-bar-bg rounded-full overflow-hidden">
                <div
                  className="h-full bg-gplay-green rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, i) => (
          <div key={i} className="pb-6 border-b border-border last:border-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-foreground">
                  {review.name}
                </span>
              </div>
              <MoreVertical className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-2 mt-2 ml-11">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-3 h-3 ${s <= review.rating ? "fill-gplay-star text-gplay-star" : "text-gplay-bar-bg"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {review.date}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 ml-11 leading-relaxed">
              {review.text}
            </p>
            <div className="mt-3 ml-11 flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                Essa avaliação foi marcada como útil por {review.helpful}{" "}
                pessoas
              </span>
            </div>
            <div className="mt-2 ml-11 flex items-center gap-2 text-xs text-muted-foreground">
              <span>Você achou isso útil?</span>
              <button className="border border-border rounded-full px-3 py-1 hover:bg-secondary">
                Sim
              </button>
              <button className="border border-border rounded-full px-3 py-1 hover:bg-secondary">
                Não
              </button>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="text-sm text-gplay-green font-medium mt-4 inline-block"
      >
        Ver todas as avaliações
      </a>
    </section>
  );
};

export default RatingsSection;
