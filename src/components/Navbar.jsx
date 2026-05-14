function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3 fixed-top custom-navbar">

      <div className="container">

        <a
          className="navbar-brand fw-semibold"
          href="#"
          style={{ color: 'var(--primary)' }}
        >
          Essência Leve
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Início
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#servicos">
                Serviços
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar