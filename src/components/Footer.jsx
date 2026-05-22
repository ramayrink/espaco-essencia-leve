import { MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row">

          <div className="col-lg-6">

            <h3 className="footer-logo">
              Espaço Essência Leve
            </h3>

            <p className="footer-text mt-3">
              Um espaço dedicado ao seu bem-estar,
              autoestima e momentos de leveza.
            </p>

          </div>

          <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">

          <div className="social-icons">

            <a
              href="https://wa.me/5531987578049"
              target="_blank"
              className="social-link"
            >
              <img src={`${import.meta.env.BASE_URL}whatsapp.png`} alt="WhatsApp" />
            </a>

            <a
              href="https://www.instagram.com/thais.essencialeve"
              target="_blank"
              className="social-link"
            >
              <img src={`${import.meta.env.BASE_URL}instagram.png`} alt="Instagram" />
            </a>

          </div>

          <p className="footer-location mt-4">
            <MapPin size={18} />
            Betim - MG
          </p>

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