import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-bg">
        <div className="footer container">
          <img
            src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"
            alt=""
          />
          <div className="footer-contato">
            <h3 className="font-2-1-b cor-0">Contato</h3>
            <ul className="font-2-m cor-5">
              <li>
                <a href="#">+55 48 9999-9999</a>
              </li>
              <li>
                <a href="#">contato@bikcraft.com</a>
              </li>
              <li>
                <a href="#">Rua  Ipe Amarelo, 42 - Centro</a>
              </li>
              <li>
                <a href="#">Florianópolis - SC</a>
              </li>
            </ul>
            <div className="footer-redes">
              <a href="#">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="footer-informacoes">
            <h3 className="font-2-1-b cor-0">Informações</h3>
            <nav>
              <ul className="font-1-m cor-5">
                <li>
                  <a href="#">Bicicletas</a>
                </li>
                <li>
                  <a href="#">Seguros</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Termos e Condições</a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="footer-copy font-2-m cor-6">
            Bikcraft © Alguns direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;