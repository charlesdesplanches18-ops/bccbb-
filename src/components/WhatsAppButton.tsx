import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/contact";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all hover:scale-110 animate-bounce"
    title="Abrir WhatsApp"
  >
    <MessageCircle size={24} />
  </a>
);

export default WhatsAppButton;
