import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Você entra em contato",
    description:
      "Me manda uma mensagem simples. Sem formulários longos, sem burocracia. Pode ser pelo WhatsApp, no seu tempo.",
  },
  {
    icon: CalendarCheck,
    title: "Conversamos sobre você",
    description:
      "Na primeira sessão, você conta o que está sentindo. Eu ouço sem julgamento e entendemos juntos o que faz sentido pra você.",
  },
  {
    icon: Heart,
    title: "Começamos o caminho",
    description:
      "Sessão a sessão, você vai reconhecendo padrões, se sentindo mais leve e encontrando suas próprias respostas.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-20 md:py-28 bg-card">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
          Simples e acolhedor
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Como funciona a terapia?
        </h2>
        <p className="text-muted-foreground font-body text-lg">
          Não precisa ter certeza do que sente. Não precisa ter um &quot;problema grave&quot;. 
          Basta querer se entender melhor.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center space-y-4 p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent">
              <step.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <p className="text-xs font-body font-semibold text-primary tracking-widest uppercase">
              Passo {i + 1}
            </p>
            <h3 className="font-display text-xl text-foreground">{step.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
