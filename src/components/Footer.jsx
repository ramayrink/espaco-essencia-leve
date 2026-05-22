import {
  MapPin
} from 'lucide-react'

function Footer() {

  return (

    <footer className="footer-section">

      <div className="container">

        <div className="row gy-5 align-items-start">

          <div className="col-lg-5">

            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Espaço Essência Leve"
              width="90"
              className="mb-4"
            />

            <h4 className="footer-logo mb-3">
              Espaço Essência Leve
            </h4>

            <p className="footer-text">
              Um espaço pensado para proporcionar
              acolhimento, bem-estar e autoestima
              através de atendimentos humanizados
              e personalizados.
            </p>

            <p className="footer-quote">
              “Leveza que vem de dentro.”
            </p>

          </div>

          <div className="col-lg-3">

            <h5 className="footer-title">
              Navegação
            </h5>

            <ul className="footer-links">

              <li>
                <a href="#inicio">
                  Início
                </a>
              </li>

              <li>
                <a href="#sobre">
                  Sobre
                </a>
              </li>

              <li>
                <a href="#servicos">
                  Serviços
                </a>
              </li>

              <li>
                <a href="#contato">
                  Contato
                </a>
              </li>

            </ul>

          </div>

          <div className="col-lg-4">

            <h5 className="footer-title">
              Contato
            </h5>

            <div className="footer-contact">

              <img
                src={`${import.meta.env.BASE_URL}whatsapp.png`}
                alt="WhatsApp"
                width="22"
              />

              <a
                href="https://wa.me/5531987578049"
                target="_blank"
                rel="noreferrer"
              >
                (31) 98757-8049
              </a>

            </div>

            <div className="footer-contact">

              <img
                src={`${import.meta.env.BASE_URL}instagram.png`}
                alt="Instagram"
                width="22"
              />

              <a
                href="https://www.instagram.com/thais.essencialeve"
                target="_blank"
                rel="noreferrer"
              >
                @thais.essencialeve
              </a>

            </div>

            <div className="footer-contact">

              <MapPin size={18} />

              <span>
                Betim • MG
              </span>

            </div>

          </div>

        </div>

        <hr className="footer-divider" />

        <div className="text-center">

          <p className="footer-copy">
            © 2026 Mayrink Tech Solutions.
            Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer