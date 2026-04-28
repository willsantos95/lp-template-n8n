import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Proof } from "@/components/landing/Proof";
import { Deliverables } from "@/components/landing/Deliverables";
import { Scarcity } from "@/components/landing/Scarcity";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { LiveNotifications } from "@/components/landing/LiveNotifications";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Template n8n para Grupos de Ofertas no WhatsApp | Automação para Afiliados" },
      { name: "description", content: "Copie grupos de ofertas, gere links de afiliado e poste automaticamente. Template n8n pronto para Shopee, Mercado Livre e Amazon." },
      { property: "og:title", content: "Template n8n para Grupos de Ofertas no WhatsApp" },
      { property: "og:description", content: "Automatize sua operação de afiliado e escale suas vendas com n8n." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Proof />
      <Deliverables />
      <Faq />
      <FinalCta />
    </main>
  );
}
