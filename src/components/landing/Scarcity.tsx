import { useEffect, useState } from "react";
import { Flame, AlertTriangle } from "lucide-react";

const TOTAL = 150; // 2:30
const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Quero%20o%20template%20n8n";

export function Scarcity() {
  const [secs, setSecs] = useState(TOTAL);
  const [progress, setProgress] = useState(72);

  useEffect(() => {
    const t = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p < 95 ? p + 1 : 95)), 8000);
    return () => clearInterval(t);
  }, []);

  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-destructive/40 bg-card p-8 md:p-12"
             style={{ boxShadow: "0 0 60px oklch(0.65 0.25 25 / 0.25)" }}>
          <div className="absolute inset-0 opacity-30"
               style={{ background: "radial-gradient(ellipse at center, oklch(0.65 0.25 25 / 0.4), transparent 70%)" }} />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/15 px-4 py-1.5 text-sm font-semibold text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Atenção — oferta por tempo limitado
            </div>

            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              O acesso ao template com <span className="text-accent">suporte</span> pode encerrar a qualquer momento
            </h2>

            <div className="mt-8 flex justify-center gap-3 font-display text-5xl font-bold md:text-7xl">
              <div className="glass min-w-[110px] rounded-2xl px-6 py-4">
                <span className="text-gradient">{m}</span>
                <div className="mt-1 text-xs font-normal uppercase tracking-widest text-muted-foreground">min</div>
              </div>
              <div className="self-center text-secondary">:</div>
              <div className="glass min-w-[110px] rounded-2xl px-6 py-4">
                <span className="text-gradient">{s}</span>
                <div className="mt-1 text-xs font-normal uppercase tracking-widest text-muted-foreground">seg</div>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-md">
              <div className="mb-2 flex justify-between text-sm">
                <span className="flex items-center gap-1.5 text-accent"><Flame className="h-4 w-4" /> Vagas preenchidas</span>
                <span className="font-bold">{progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full transition-all duration-500"
                     style={{ width: `${progress}%`, background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow-yellow)" }} />
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              className="mt-10 inline-flex items-center justify-center rounded-xl px-10 py-4 text-lg font-bold text-secondary-foreground transition-transform hover:scale-[1.03] animate-pulse-glow"
              style={{ background: "var(--gradient-cta)" }}
            >
              Garantir minha vaga agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
