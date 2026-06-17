import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, WHATSAPP_DISPLAY, INSTAGRAM_URL, MAPS_URL } from "@/lib/contact";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: (
      <div className="space-y-1">
        <p>{ADDRESS_LINE_1}</p>
        <p>{ADDRESS_LINE_2}</p>
      </div>
    ),
    link: MAPS_URL,
    linkText: "Ver no mapa",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: <p>{WHATSAPP_DISPLAY}</p>,
    link: `https://wa.me/5548996718382`,
    linkText: "Enviar mensagem",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: <p>@alveseschmidtadvogados</p>,
    link: INSTAGRAM_URL,
    linkText: "Seguir",
  },
];

const ContactSection = () => (
  <section id="contato" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
          Entre em contato
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Fale conosco
        </h2>
        <p className="text-muted-foreground font-body text-lg">
          Estamos prontos para ouvir você. Escolha o canal mais conveniente.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactInfo.map((info, i) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl bg-card p-8 space-y-4 border border-border hover:border-primary/30 transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
              <info.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg text-foreground">{info.title}</h3>
            <div className="text-muted-foreground font-body text-sm">{info.content}</div>
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
            >
              {info.linkText} →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
