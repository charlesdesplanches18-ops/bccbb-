import { FIRM_NAME, ADDRESS_LINE_1, ADDRESS_LINE_2, WHATSAPP_DISPLAY, INSTAGRAM_URL } from "@/lib/contact";

const Footer = () => (
  <footer className="py-12 bg-foreground text-background">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* About */}
        <div>
          <h3 className="font-display text-lg text-background mb-3">{FIRM_NAME}</h3>
          <p className="text-background/80 font-body text-sm leading-relaxed">
            Orientação jurídica sóbria, ética e confiável nas áreas de Direito do Trabalho, Direito Cível e Direito Previdenciário.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm text-background mb-3 uppercase tracking-widest">Contato</h4>
          <div className="space-y-2 text-background/80 font-body text-sm">
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
            <p className="pt-2">
              <a
                href={`https://wa.me/5548996718382`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-sm text-background mb-3 uppercase tracking-widest">Redes Sociais</h4>
          <div className="space-y-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-background/80 hover:text-background font-body text-sm transition-colors"
            >
              Instagram →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20 pt-8">
        <div className="text-center">
          <p className="text-background/70 font-body text-sm">
            © {new Date().getFullYear()} {FIRM_NAME} · Todos os direitos reservados
          </p>
          <p className="text-background/60 font-body text-xs mt-2">
            Atendimento online e presencial · Sigilo profissional garantido
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
