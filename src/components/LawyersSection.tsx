import { motion } from "framer-motion";
import { Award } from "lucide-react";
import jefersonPhoto from "@/assets/jeferson-alves.webp";

const lawyers = [
  {
    name: "Jeferson Alves",
    title: "Advogado Sênior",
    specialties: "Direito do Trabalho e Previdenciário",
    experience: "6+ anos",
    oab: ["RS 100.982", "SC 59.394-A"],
    bio: "Especialista em direito trabalhista e previdenciário com experiência em litígios complexos, negociações extrajudiciais e consultoria empresarial. Atuação pautada por transparência e confiança.",
    photo: jefersonPhoto,
  },
  {
    name: "Rafael Schmidt",
    title: "Advogado Sênior",
    specialties: "Direito Cível e Previdenciário",
    experience: "Experiência comprovada",
    oab: ["SC - OAB ativa"],
    bio: "Especialista em direito civil e previdenciário, com foco em contratos, planejamento sucessório e benefícios previdenciários. Atendimento humanizado e orientação clara.",
    photo: null,
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

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {lawyers.map((lawyer, i) => (
          <motion.div
            key={lawyer.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-xl bg-background overflow-hidden border border-border hover:border-primary/30 transition-colors"
          >
            {/* Photo Section */}
            {lawyer.photo ? (
              <div className="relative h-80 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <img
                  src={lawyer.photo}
                  alt={lawyer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-80 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Foto em breve</p>
                </div>
              </div>
            )}

            {/* Info Section */}
            <div className="p-8 space-y-4">
              <div>
                <h3 className="font-display text-2xl text-foreground">{lawyer.name}</h3>
                <p className="text-primary font-body text-sm font-semibold">{lawyer.title}</p>
              </div>

              <div className="space-y-2">
                <p className="text-muted-foreground font-body text-sm">
                  <span className="font-semibold text-foreground">Especialidades:</span> {lawyer.specialties}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  <span className="font-semibold text-foreground">Experiência:</span> {lawyer.experience}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  <span className="font-semibold text-foreground">OAB:</span> {lawyer.oab.join(" · ")}
                </p>
              </div>

              <p className="text-muted-foreground font-body leading-relaxed text-sm pt-2 border-t border-border">
                {lawyer.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LawyersSection;
