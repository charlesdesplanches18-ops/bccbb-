import { motion } from "framer-motion";
import heroImage from "@/assets/hero-therapy.jpg";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a terapia.";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Consultório de terapia acolhedor com luz natural"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/20" />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl space-y-6"
      >
        <p className="text-primary-foreground/80 font-body text-sm md:text-base tracking-widest uppercase">
          Psicologia · Acolhimento · Transformação
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-primary-foreground text-balance">
          Você não precisa continuar carregando tudo sozinho(a).
        </h1>

        <p className="text-primary-foreground/85 text-lg md:text-xl font-body leading-relaxed max-w-xl">
          Se a ansiedade, o esgotamento ou a sensação de estar travado(a) já fazem parte da sua rotina,
          a terapia pode ser o espaço que faltava para você respirar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Quero entender se a terapia é pra mim
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-8 py-4 text-primary-foreground font-body font-medium text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Como funciona?
          </a>
        </div>

        <p className="text-primary-foreground/60 text-sm font-body">
          Primeiro passo simples · Sem compromisso · Sigilo total
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
