import { Workflow } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5514997005174?text=Oi%20Quero%20o%20template%20n8n%20para%20afiliados";

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#" className="flex items-center gap-2 font-display font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
              <Workflow className="h-5 w-5 text-primary-foreground" />
            </div>
            <span>Relâmpago de Ofertas <span className="text-secondary">- Template para afiliados</span></span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>

          </div>
          <a
            href={WHATSAPP_LINK}
            className="rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
          >
            Quero o template
          </a>
        </nav>
      </div>
    </header>
  );
}
