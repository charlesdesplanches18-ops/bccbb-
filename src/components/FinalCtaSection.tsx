import { motion } from "framer-motion";
import { WHATSAPP_LINK, FIRM_NAME } from "@/lib/contact";

const FinalCtaSection = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground text-balance">
          Pronto para resolver sua questão jurídica?
          <br />
          <span className="text-primary-foreground/90">Agende sua consulta inicial.</span>
        </h2>

        <p className="text-primary-foreground/85 font-body text-lg leading-relaxed max-w-lg mx-auto">
          Na {FIRM_NAME}, você recebe análise cuidadosa, explicações claras e estratégia jurídica personalizada. Sem compromisso, com sigilo profissional garantido.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-10 py-4 text-primary font-body font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Conversar agora
        </a>

        <p className="text-primary-foreground/70 text-sm font-body">
          Análise inicial sem compromisso · Sigilo profissional · Atendimento humanizado
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
