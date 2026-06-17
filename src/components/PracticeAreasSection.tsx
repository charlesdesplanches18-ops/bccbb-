import { motion } from "framer-motion";
import { Briefcase, FileText, DollarSign } from "lucide-react";

const areas = [
  {
    icon: Briefcase,
    title: "Direito do Trabalho",
    description:
      "Orientação em demissões, rescisões, benefícios trabalhistas, reclamações trabalhistas e negociações com empresas. Atuamos tanto para empregados quanto para empregadores.",
  },
  {
    icon: FileText,
    title: "Direito Cível",
    description:
      "Consultoria em contratos, responsabilidade civil, direito de família, herança, inventário, planejamento sucessório e litígios civis em geral.",
  },
  {
    icon: DollarSign,
    title: "Direito Previdenciário",
    description:
      "Análise de direitos previdenciários, aposentadorias, pensões, benefícios do INSS e recursos administrativos. Orientação clara sobre seus direitos.",
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

const PracticeAreasSection = () => (
  <section id="areas" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
          Nossas especialidades
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Áreas de atuação
        </h2>
        <p className="text-muted-foreground font-body text-lg">
          Atuamos com profundidade e excelência nas principais áreas do direito.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-xl bg-card p-8 space-y-4 border border-border hover:border-primary/30 transition-all hover:shadow-lg"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
              <area.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground">{area.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreasSection;
