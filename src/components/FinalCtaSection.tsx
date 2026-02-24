import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a terapia.";

const FinalCtaSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">
          Você merece se sentir bem.
          <br />
          <span className="text-primary">E pode começar agora.</span>
        </h2>

        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-lg mx-auto">
          Não existe momento perfeito. Se você chegou até aqui, é porque algo dentro de você já sabe 
          que precisa de um espaço pra se cuidar.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-10 py-4 text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Falar com a psicóloga
        </a>

        <p className="text-muted-foreground/70 text-sm font-body">
          Atendimento online · Sigilo garantido · CRP ativo
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
