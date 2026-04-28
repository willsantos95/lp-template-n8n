import { Workflow, BookOpen, Sheet, ListChecks } from "lucide-react";

const items = [
  {
    icon: Workflow,
    title: "Template funcional do n8n",
    desc: "Fluxo pronto para importar e rodar — plug-and-play.",
  },
  {
    icon: BookOpen,
    title: "Explicação detalhada do fluxo",
    desc: "Cada nó do n8n explicado passo a passo, sem enrolação.",
  },
  {
    icon: Sheet,
    title: "Planilha de controle dos grupos",
    desc: "Organize seus grupos, links e métricas em um só lugar.",
  },
  {
    icon: ListChecks,
    title: "Instruções para o seu grupo",
    desc: "O passo a passo para fazer seu grupo converter de verdade.",
  },
];

export function Deliverables() {
  return (
    <section id="o-que-recebe" className="relative py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Conteúdo do pacote
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            O que você vai <span className="text-gradient">receber</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tudo o que você precisa para colocar sua automação no ar hoje mesmo.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isAlt = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="glass group relative flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-secondary-foreground"
                     style={{ background: "var(--gradient-cta)" }}>
                  {i + 1}
                </div>
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    background: isAlt ? "var(--gradient-cta)" : "var(--gradient-primary)",
                  }}
                >
                  <Icon
                    className={`h-7 w-7 ${isAlt ? "text-secondary-foreground" : "text-primary-foreground"}`}
                  />
                </div>
                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
