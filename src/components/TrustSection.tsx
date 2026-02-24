import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a terapia.";

const forYou = [
  "Sente ansiedade que não para, mesmo quando tudo parece bem",
  "Está emocionalmente esgotado(a) e sem energia",
  "Tem dificuldade de concentração ou suspeita de TDAH",
  "Sente que vive no automático, sem propósito",
  "Quer se conhecer melhor e tomar decisões com mais clareza",
];

const notForYou = [
  "Busca receita de medicamento (encaminho para psiquiatra)",
  "Quer respostas prontas ou conselhos rápidos",
  "Não está aberto(a) a olhar para dentro",
];

const values = [
  { title: "Sigilo absoluto", desc: "Tudo que você compartilha fica entre nós. Ética profissional rigorosa." },
  { title: "Sem julgamento", desc: "Aqui não existe certo ou errado. Existe o que você sente." },
  { title: "Abordagem humana", desc: "Terapia baseada em evidências, mas com escuta genuína e empática." },
  { title: "No seu ritmo", desc: "Cada pessoa tem seu tempo. Respeitamos o seu processo." },
];

const TrustSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-4xl">
      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
          Confiança e ética
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Um espaço seguro, de verdade
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-xl bg-card p-6 space-y-2"
          >
            <h3 className="font-display text-lg text-foreground">{v.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* For who / Not for who */}
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-2xl text-foreground mb-6">A terapia é pra você se…</h3>
          <ul className="space-y-3">
            {forYou.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground font-body">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-2xl text-foreground mb-6">Talvez não seja o momento se…</h3>
          <ul className="space-y-3">
            {notForYou.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground font-body">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Mid-page CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16 p-10 rounded-2xl bg-accent/50"
      >
        <p className="font-display text-2xl text-foreground mb-3">
          Dar o primeiro passo já é cuidar de si.
        </p>
        <p className="text-muted-foreground font-body mb-6">
          Uma conversa simples, sem compromisso. Só pra você sentir se faz sentido.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Quero dar o primeiro passo
        </a>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
