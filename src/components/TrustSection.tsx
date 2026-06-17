import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de uma consultoria jurídica.";

const forYou = [
  "Foi demitido(a) e suspeita que seus direitos não foram respeitados",
  "Está enfrentando um processo de divórcio, pensão ou guarda",
  "Precisa revisar ou elaborar um contrato com segurança",
  "Tem dúvidas sobre herança, inventário ou planejamento sucessório",
  "Foi vítima de um problema de consumo, dívida indevida ou cobrança abusiva",
];

const notForYou = [
  "Busca uma solução milagrosa ou garantia de resultado",
  "Quer agir de má-fé ou contra a ética profissional",
  "Não pretende fornecer as informações e documentos necessários",
];

const values = [
  { title: "Sigilo profissional", desc: "Tudo que você compartilha é protegido pelo segredo profissional da advocacia." },
  { title: "Linguagem clara", desc: "Sem juridiquês. Explicamos cada passo de um jeito que você realmente entende." },
  { title: "Ética acima de tudo", desc: "Atuação pautada pelo Código de Ética da OAB, com transparência total sobre prazos e honorários." },
  { title: "Atendimento humanizado", desc: "Você não é um número de processo. Cada caso recebe atenção personalizada." },
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
          Um atendimento jurídico de confiança
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
          <h3 className="font-display text-2xl text-foreground mb-6">Podemos te ajudar se…</h3>
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
          <h3 className="font-display text-2xl text-foreground mb-6">Talvez não seja o caso se…</h3>
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
          Resolver começa por uma conversa.
        </p>
        <p className="text-muted-foreground font-body mb-6">
          Uma análise inicial sem compromisso. Entenda seus direitos antes de decidir qualquer coisa.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Quero analisar meu caso
        </a>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
