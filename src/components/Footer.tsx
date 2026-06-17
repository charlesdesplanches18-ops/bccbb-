const Footer = () => (
  <footer className="py-8 bg-foreground/5">
    <div className="container text-center">
      <p className="text-muted-foreground font-body text-sm">
        © {new Date().getFullYear()} Advocacia · Todos os direitos reservados
      </p>
      <p className="text-muted-foreground/60 font-body text-xs mt-1">
        OAB/XX nº XXX.XXX · Atendimento online e presencial
      </p>
    </div>
  </footer>
);

export default Footer;
