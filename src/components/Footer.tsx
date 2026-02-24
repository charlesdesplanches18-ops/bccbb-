const Footer = () => (
  <footer className="py-8 bg-foreground/5">
    <div className="container text-center">
      <p className="text-muted-foreground font-body text-sm">
        © {new Date().getFullYear()} Therapy Spotlight · Todos os direitos reservados
      </p>
      <p className="text-muted-foreground/60 font-body text-xs mt-1">
        Psicóloga CRP XX/XXXXX · Atendimento online
      </p>
    </div>
  </footer>
);

export default Footer;
