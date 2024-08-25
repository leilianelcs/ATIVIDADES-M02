import './Header.css';

function Header() {
    return (
      <>
      <header className='header-bg'>
          <div className="header container">
            <img
              className="img-header"
              src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"
              alt="Logo-Bikcraft"
            />
            <nav className="nav-list">
                <ul className="nav-list-ul">
                    <li className="nav-list-li"><a href="#">Bicicletas</a></li>
                    <li className="nav-list-li"><a href="#">Seguros</a></li>
                    <li className="nav-list-li"><a href="#">Contato</a></li>
                </ul>
            </nav>
          </div>
      </header>
      </>
    );
}

export default Header;