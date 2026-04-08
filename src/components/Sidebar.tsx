import { ArrowRight, Star } from "lucide-react";

const moreApps = [
  {
    name: "Consulta Carro, Moto por placa",
    dev: "DS Develop",
    rating: "2,7",
    icon: "https://play-lh.googleusercontent.com/rFv25m2mNKwhBHZGobbJWhKU3qkbAiFVU0EY425xAdPzwVEyOkldd-wobloCb5VPVxU=s64-rw",
  },
  {
    name: "Utilcar",
    dev: "DS Develop",
    rating: "0,0",
    icon: "https://play-lh.googleusercontent.com/n8wt3DTCT12PCuGA2nD5ZSQ_rsT1xKobq2LuPHUsyllvq_ZJ8F-JFXsA-fLj1mL_KfKU=s64-rw",
  },
  {
    name: "EZ Banner (Cartazes, Convites)",
    dev: "DS Develop",
    rating: "3,8",
    icon: "https://play-lh.googleusercontent.com/I9iexzE5LFR_YcssI9vQQgNHTjkyY04O5Vngzqybs0TIQlHAdCAo4uJa9A8nnprlbUQ=s64-rw",
  },
  {
    name: "De Olho na Ficha (controle de)",
    dev: "DS Develop",
    rating: "0,0",
    icon: "https://play-lh.googleusercontent.com/LBlbA5FCLEJq3-vos4Jf4oKMm1EqWCZjGHmSpao6ZgKU_vyiO7LsLel8N_1hHxldsDDE=s64-rw",
  },
  {
    name: "Fipe Fácil",
    dev: "DS Develop",
    rating: "3,7",
    icon: "https://play-lh.googleusercontent.com/z3gKmI1hbAficW8DqY6OFG5xG0LJipLrZAqUlzTobR7wSAztLLkb8VC-hzV5Xkx6yQ=s64-rw",
  },
];

const similarApps = [
  {
    name: "Flash App Benefícios",
    dev: "Flash Pay",
    rating: "4,8",
    icon: "https://play-lh.googleusercontent.com/rtUcOHvj9_Yk8l41eVLzfG-p9-E_bILYtNSXZ0tOKDIJOeNRpYWWmxqcIdWPtich2HM=s64-rw",
  },
  {
    name: "Habitação Caixa",
    dev: "Caixa Econômica Federal",
    rating: "4,0",
    icon: "https://play-lh.googleusercontent.com/0haT2TfSXlxivDWOKOkRzoi4m42Pu4sKl7uwE6SjUwLdF4to3SRyYlOGheGpKcQWGkc=s64-rw",
  },
  {
    name: "gov.br",
    dev: "Serviços e Informações do Brasil",
    rating: "4,7",
    icon: "https://play-lh.googleusercontent.com/qn6t9aaqbxUJDl9SMRlBkgG6SArPRfk_g_m5lyG6SjhpUfiW1PsHuJ6jSuL9GVDqnA=s64-rw",
  },
  {
    name: "RG Digital São Paulo",
    dev: "Instituto de Identificação Ricardo Gumbleton",
    rating: "4,5",
    icon: "https://play-lh.googleusercontent.com/tlew0e0L9TY5pN_nQFyKUEiyVWYg-rf_n5E5g00sdGOq8WGIkoxb01WbiYYwDrux1Q=s64-rw",
  },
  {
    name: "Poupatempo SP/GOV.BR",
    dev: "PRODESP",
    rating: "3,1",
    icon: "https://play-lh.googleusercontent.com/xtHm0c2q7Sx2tdNYJJ1Gvw59GwBRAKVOcieHFBHAz8j_vuc6mQc5Ojzmf0-ew6U40t1H=s64-rw",
  },
  {
    name: "Dietbox",
    dev: "Dietbox Software Nutricional",
    rating: "4,7",
    icon: "https://play-lh.googleusercontent.com/nmDb6lRA1uwHMOf1l9C6ZtVmEqkS-kDSyTsTDUaNMSJGNMnbkXRmPf0EutWchvRphWg=s64-rw",
  },
];

const AppListItem = ({ app }: { app: (typeof moreApps)[0] }) => (
  <a
    href="#"
    className="flex items-center gap-3 py-2 hover:bg-secondary rounded-lg px-2 transition"
  >
    <img
      src={app.icon}
      alt={app.name}
      className="bg-secondary rounded-xl flex"
    />
    <div className="min-w-0">
      <p className="text-sm text-foreground truncate">{app.name}</p>
      <p className="text-xs text-muted-foreground">{app.dev}</p>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        {app.rating} <Star className="w-2.5 h-2.5 fill-current" />
      </div>
    </div>
  </a>
);

const Sidebar = () => {
  return (
    <aside className="space-y-8">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Suporte do app ▾</p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-google font-medium text-foreground">
            Mais de DS Develop
          </h3>
          <ArrowRight className="w-5 h-5 text-foreground" />
        </div>
        <div className="space-y-1">
          {moreApps.map((app, i) => (
            <AppListItem key={i} app={app} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-google font-medium text-foreground">
            Apps semelhantes
          </h3>
          <ArrowRight className="w-5 h-5 text-foreground" />
        </div>
        <div className="space-y-1">
          {similarApps.map((app, i) => (
            <AppListItem key={i} app={app} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
