import { ArrowRight, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5514997005174?text=Oi%20Quero%20o%20template%20n8n%20para%20afiliados";

export function FinalCta() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">
          Sua próxima venda pode acontecer <span className="text-gradient">enquanto você dorme</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Comece hoje e automatize seu negócio de afiliado com um fluxo testado, escalável e plug-and-play.
        </p>

        <a
          href={WHATSAPP_LINK}
          className="group mt-12 inline-flex items-center justify-center gap-3 rounded-2xl px-12 py-6 text-xl font-bold text-secondary-foreground transition-transform hover:scale-[1.04] animate-pulse-glow"
          style={{ background: "var(--gradient-cta)" }}
        >
          Garantir acesso agora
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
        </a>

        <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-secondary" />
          Suporte direto no WhatsApp · Acesso imediato
        </div>
      </div>

      <footer className="mt-20 border-t border-border/40 pt-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Relâmpago de Ofertas - Template n8n para Afiliados — Automatize. Escale. Lucre.
        </div>
      </footer>
    </section>
  );
}
