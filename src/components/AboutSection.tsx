import { motion } from "framer-motion";
import { FIRM_NAME } from "@/lib/contact";

const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-28 bg-background">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">
          Quem somos
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Sobre o {FIRM_NAME}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed"
      >
        <p>
          O {FIRM_NAME} é um escritório de advocacia fundado com o compromisso de oferecer orientação jurídica de excelência, pautada pela ética, transparência e humanização do atendimento. Atuamos nas áreas de Direito do Trabalho, Direito Cível e Direito Previdenciário, sempre com foco na resolução efetiva dos conflitos.
        </p>

        <p>
          Nosso diferencial está na abordagem personalizada de cada caso. Não acreditamos em soluções genéricas. Cada cliente recebe análise detalhada, explicações claras em linguagem acessível e estratégia jurídica alinhada aos seus objetivos reais.
        </p>

        <p>
          Operamos com sigilo profissional absoluto, respeitando rigorosamente o Código de Ética da OAB. Nossos advogados combinam experiência prática com atualização constante nas legislações, jurisprudência e tendências do direito, garantindo orientação sempre relevante e fundamentada.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
          <div className="text-center">
            <p className="text-primary font-display text-3xl mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Sigilo Profissional</p>
          </div>
          <div className="text-center">
            <p className="text-primary font-display text-3xl mb-2">Ética</p>
            <p className="text-sm text-muted-foreground">Código OAB</p>
          </div>
          <div className="text-center">
            <p className="text-primary font-display text-3xl mb-2">Humanizado</p>
            <p className="text-sm text-muted-foreground">Atendimento Personalizado</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
