import { Rocket, Gauge, DollarSign } from "lucide-react";

const stats = [
  { icon: Rocket, label: "Mais ofertas", value: "10x", desc: "Volume diário enviado" },
  { icon: Gauge, label: "Mais velocidade", value: "< 5s", desc: "Da captura ao envio" },
  { icon: DollarSign, label: "Mais lucro", value: "24/7", desc: "Operação sem parar" },
];

export function Proof() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl"
               style={{ background: "oklch(0.62 0.27 300 / 0.3)" }} />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full blur-3xl"
               style={{ background: "oklch(0.82 0.24 145 / 0.25)" }} />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Enquanto muitos fazem tudo <span className="line-through opacity-60">manualmente</span>,
                <br />
                você <span className="text-gradient">automatiza e escala</span>.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                A diferença entre um afiliado mediano e um afiliado de alta performance está em quanto
                ele consegue postar — e na hora certa. O template faz isso por você.
              </p>
            </div>

            <div className="grid gap-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="glass flex items-center gap-5 rounded-2xl p-5 transition-transform hover:translate-x-1">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
                      <div className="text-2xl font-bold text-secondary">{s.value}</div>
                    </div>
                    <div className="hidden text-right text-sm text-muted-foreground sm:block">{s.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
