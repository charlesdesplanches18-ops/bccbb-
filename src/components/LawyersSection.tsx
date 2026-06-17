import { motion } from "framer-motion";
import { Users } from "lucide-react";

const lawyers = [
  {
    name: "Jeferson Alves",
    title: "Advogado Sênior",
    specialties: "Direito do Trabalho, Direito Cível",
    bio: "Especialista em direito trabalhista com experiência em litígios complexos, negociações extrajudiciais e consultoria empresarial.",
  },
  {
    name: "Rafael Schmidt",
    title: "Advogado Sênior",
    specialties: "Direito Cível, Direito Previdenciário",
    bio: "Especialista em direito civil e previdenciário, com foco em contratos, planejamento sucessório e benefícios previdenciários.",
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

const LawyersSection = () => (
  <section id="advogados" className="py-20 md:py-28 bg-card">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
          Nosso time
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Advogados experientes e comprometidos
        </h2>
        <p className="text-muted-foreground font-body text-lg">
          Profissionais dedicados à excelência jurídica e à resolução efetiva de conflitos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {lawyers.map((lawyer, i) => (
          <motion.div
            key={lawyer.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-xl bg-background p-8 space-y-4 border border-border hover:border-primary/30 transition-colors"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-foreground">{lawyer.name}</h3>
              <p className="text-primary font-body text-sm font-semibold">{lawyer.title}</p>
            </div>
            <p className="text-muted-foreground font-body text-sm">
              <span className="font-semibold text-foreground">Especialidades:</span> {lawyer.specialties}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">{lawyer.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LawyersSection;
