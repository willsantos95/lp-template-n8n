import { ShoppingBag, Users, Send, Clock, TrendingUp, Layers } from "lucide-react";

const benefits = [
  { icon: ShoppingBag, title: "Integração total", desc: "Shopee, Mercado Livre e Amazon conectados em um só fluxo.", color: "secondary" },
  { icon: Layers, title: "Grupos por nicho", desc: "Gerencie e segmente grupos por categoria com facilidade.", color: "primary" },
  { icon: Send, title: "Envio automático", desc: "Posta nas listas certas, no momento certo, sem você levantar um dedo.", color: "accent" },
  { icon: Clock, title: "Economia de tempo", desc: "Horas de trabalho manual viram segundos de processamento.", color: "secondary" },
  { icon: Users, title: "Ideal para afiliados", desc: "Iniciantes ou experientes — escala sem complicação.", color: "primary" },
  { icon: TrendingUp, title: "Mais conversões", desc: "Volume + velocidade = mais cliques, mais vendas.", color: "accent" },
];

const colorMap: Record<string, string> = {
  secondary: "text-secondary glow-green",
  primary: "text-primary glow-purple",
  accent: "text-accent glow-yellow",
};

export function Benefits() {
  return (
    <section className="relative py-24" id="beneficios">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Por que usar</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Tudo que você precisa para <span className="text-gradient">escalar</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um template completo, pronto para rodar 24/7 e transformar ofertas em comissões.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-60"
                     style={{ background: "var(--gradient-primary)" }} />
                <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card ${colorMap[b.color]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 text-xl font-bold">{b.title}</h3>
                <p className="relative mt-2 text-muted-foreground">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
