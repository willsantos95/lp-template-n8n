import { ArrowRight, Zap, Bot } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

const WHATSAPP_LINK = "https://wa.me/5514997005174?text=Oi%20Quero%20o%20template%20n8n%20para%20afiliados";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="text-muted-foreground">Automação ativa para afiliados</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Template <span className="text-gradient">n8n</span> para
              <br />
              Grupos de <span className="relative inline-block">
                Ofertas
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9 Q100 -2 198 9" stroke="oklch(0.82 0.24 145)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Copie grupos de ofertas, gere links de afiliado e poste automaticamente nos seus grupos
              do <span className="text-secondary font-semibold">WhatsApp</span>.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-secondary-foreground transition-transform hover:scale-[1.03] animate-pulse-glow"
                style={{ background: "var(--gradient-cta)" }}
              >
                Comece a automatizar suas ofertas hoje
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#como-funciona"
                className="glass inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold transition-colors hover:border-primary/50"
              >
                Ver como funciona
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                Setup em minutos
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-secondary" />
                100% automático
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
