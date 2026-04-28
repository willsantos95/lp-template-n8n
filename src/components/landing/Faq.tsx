import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "O que é o n8n e por que usá-lo?",
    a: "O n8n é uma plataforma de automação de fluxos (workflows) open-source, parecida com Zapier e Make, mas muito mais flexível e barata. Com ele você conecta APIs, mensageiros e planilhas sem precisar programar — basta arrastar e configurar os blocos. É perfeito para automatizar grupos de ofertas no WhatsApp.",
  },
  {
    q: "Preciso saber programar para usar o template?",
    a: "Não. O template já vem 100% pronto e configurado. Você só precisa importar o arquivo JSON no seu n8n, conectar suas credenciais (WhatsApp, Shopee, Mercado Livre, Amazon) e ativar. Tudo está documentado passo a passo.",
  },
  {
    q: "Como funciona a integração com grupos do WhatsApp?",
    a: "O fluxo se conecta ao WhatsApp via API (Evolution API ou similar) para capturar ofertas de grupos de origem e disparar nos seus próprios grupos. Você recebe instruções detalhadas para configurar a conexão, mesmo que nunca tenha mexido com isso antes.",
  },
  {
    q: "Como o template gera meus links de afiliado automaticamente?",
    a: "O fluxo identifica o link original do produto (Shopee, Mercado Livre ou Amazon), chama a API oficial de afiliados de cada plataforma e devolve o link já com o seu ID de comissão. Tudo isso acontece em segundos, antes da mensagem ser postada nos seus grupos.",
  },
  {
    q: "Funciona com Shopee, Mercado Livre e Amazon ao mesmo tempo?",
    a: "Sim. O template detecta automaticamente a plataforma da oferta e aplica a regra correta de geração de link para cada uma. Você pode operar várias plataformas em paralelo no mesmo fluxo.",
  },
  {
    q: "Posso usar em quantos grupos eu quiser?",
    a: "Sim. Não há limite de grupos. Quanto mais grupos você tiver, mais a automação trabalha por você — sem precisar copiar e colar manualmente.",
  },
  {
    q: "Onde eu hospedo o n8n?",
    a: "Você pode rodar o n8n gratuitamente no seu computador, em uma VPS barata (a partir de R$ 20/mês) ou usar a versão cloud oficial. As instruções do template incluem a opção mais simples para começar hoje mesmo.",
  },
  {
    q: "E se eu tiver dúvidas depois da compra?",
    a: "Você recebe instruções detalhadas de cada nó do fluxo e suporte para tirar suas dúvidas pelo WhatsApp. O objetivo é que você tenha tudo rodando no mesmo dia.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-5">
            <HelpCircle className="w-4 h-4 text-secondary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre n8n, integração com grupos e geração de links de afiliado.
          </p>
        </div>

        <Accordion type="single" collapsible className="glass rounded-2xl px-6 md:px-8 py-2">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border/40 last:border-0"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline hover:text-secondary transition-colors">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
