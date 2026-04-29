import {
  ShoppingBag,
  Users,
  Send,
  Clock,
  TrendingUp,
  Layers,
  Gift,
  BadgeCheck,
  MessageCircle,
  Wrench,
  Infinity,
  Bot,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "15 dias grátis",
    desc: "Valide a automação funcionando na prática antes de continuar.",
    color: "secondary",
  },
  {
    icon: Gift,
    title: "Setup grátis",
    desc: "Implantação totalmente gratuita para você começar sem custo inicial.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "R$199/mês",
    desc: "Automação completa, suporte básico e manutenção inclusos.",
    color: "primary",
  },
  {
    icon: Bot,
    title: "Automação 24h por dia",
    desc: "O sistema trabalha sozinho recebendo, tratando e enviando ofertas.",
    color: "secondary",
  },
  {
    icon: ShoppingBag,
    title: "Recebe ofertas automaticamente",
    desc: "Captura ofertas dos grupos que você acompanha sem precisar copiar manualmente.",
    color: "primary",
  },
  {
    icon: BadgeCheck,
    title: "Links de afiliado automáticos",
    desc: "Gera seus links da Shopee, Mercado Livre, Amazon, AliExpress e Magazine Luiza.",
    color: "accent",
  },
  {
    icon: Layers,
    title: "Grupos por nicho",
    desc: "Gerencie e segmente seus grupos por categorias como geral, pet, bebê, fitness e muito mais.",
    color: "primary",
  },
  {
    icon: Send,
    title: "Envio automático",
    desc: "Formata a mensagem e dispara automaticamente para seus grupos de ofertas.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Sem limite de grupos",
    desc: "Ideal para quem quer escalar a operação e enviar ofertas para vários grupos.",
    color: "secondary",
  },
  {
    icon: Wrench,
    title: "Suporte + manutenção",
    desc: "Suporte básico e manutenção do sistema já inclusos no valor mensal.",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "Postagem no Telegram",
    desc: "Melhoria mapeada para também postar automaticamente em canais ou grupos do Telegram.",
    color: "accent",
  },
  {
    icon: Infinity,
    title: "Escala sem trabalho manual",
    desc: "Você não precisa mais copiar, gerar link, formatar e enviar tudo manualmente.",
    color: "secondary",
  },
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
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Serviço completo de automação
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Pare de fazer tudo manualmente e{" "}
            <span className="text-gradient">escale seus grupos</span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Com esse sistema, você recebe ofertas automaticamente, gera seus links de afiliado,
            formata as mensagens e dispara para seus grupos sem precisar fazer o processo manual.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Teste grátis
            </p>
            <h3 className="mt-2 text-3xl font-black">15 dias</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Para validação e implantação
            </p>
          </div>

          <div className="glass rounded-2xl border-primary/40 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Mensalidade
            </p>
            <h3 className="mt-2 text-3xl font-black">R$199/mês</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Suporte básico + manutenção inclusos
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Implantação
            </p>
            <h3 className="mt-2 text-3xl font-black">Setup grátis</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sem cobrança inicial para configurar
            </p>
          </div>
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
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-primary)" }}
                />

                <div
                  className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card ${colorMap[b.color]}`}
                >
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
