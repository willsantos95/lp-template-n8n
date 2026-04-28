import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const messages = [
  "João entrou no grupo agora",
  "Mariana garantiu o acesso ao template",
  "Pedro automatizou 3 grupos",
  "Carla acabou de comprar",
  "Lucas conectou Shopee + Mercado Livre",
  "Rafa enviou 240 ofertas hoje",
];

export function LiveNotifications() {
  const [current, setCurrent] = useState<{ id: number; text: string } | null>(null);

  useEffect(() => {
    let i = 0;
    const show = () => {
      setCurrent({ id: Date.now(), text: messages[i % messages.length] });
      i++;
      setTimeout(() => setCurrent(null), 4500);
    };
    const initial = setTimeout(show, 3000);
    const interval = setInterval(show, 9000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  if (!current) return null;

  return (
    <div
      key={current.id}
      className="glass fixed bottom-6 left-6 z-50 flex max-w-xs items-center gap-3 rounded-xl p-3 pr-5 shadow-2xl animate-slide-in"
      style={{ boxShadow: "var(--shadow-glow-green)" }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
        <CheckCircle2 className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold">{current.text}</div>
        <div className="text-xs text-muted-foreground">há instantes</div>
      </div>
    </div>
  );
}
