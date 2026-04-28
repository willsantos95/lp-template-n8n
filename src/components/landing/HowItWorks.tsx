import { MessagesSquare, Link2, Sparkles, Send } from "lucide-react";

const steps = [
  { icon: MessagesSquare, title: "1. Captura", desc: "Recebe mensagens dos grupos de ofertas que você participa." },
  { icon: Link2, title: "2. Link de afiliado", desc: "Gera automaticamente seu link de afiliado em cada produto." },
  { icon: Sparkles, title: "3. Formatação", desc: "Monta a mensagem perfeita com título, preço e link." },
  { icon: Send, title: "4. Disparo", desc: "Envia automaticamente para seus grupos do WhatsApp." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Como funciona</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Um pipeline que trabalha <span className="text-gradient">por você</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Animated connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-1 lg:block">
            <div className="mx-auto h-full max-w-5xl rounded-full"
                 style={{
                   background: "linear-gradient(90deg, transparent, oklch(0.62 0.27 300), oklch(0.82 0.24 145), oklch(0.88 0.18 95), transparent)",
                   backgroundSize: "200% 100%",
                   animation: "flow 4s linear infinite",
                 }} />
          </div>

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative text-center">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="absolute inset-0 rounded-full opacity-50 blur-xl"
                         style={{ background: i % 2 === 0 ? "var(--gradient-primary)" : "var(--gradient-cta)" }} />
                    <div className="glass relative flex h-24 w-24 items-center justify-center rounded-full">
                      <Icon className={`h-10 w-10 ${i % 2 === 0 ? "text-primary" : "text-secondary"}`} />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
