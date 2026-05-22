function Hero() {
  return (
    <section id="inicio" className="hero-section d-flex align-items-center">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 text-center text-lg-start order-2 order-lg-1" data-aos="fade-up">

            <p className="hero-subtitle mb-3">
              Saúde • Estética • Bem-estar
            </p>

            <h1 className="hero-title">
              Seu momento de cuidado e renovação
            </h1>

            <p className="hero-description mt-4">
              Um espaço pensado para proporcionar relaxamento,
              autoestima e bem-estar através de experiências
              acolhedoras e personalizadas.
            </p>

            <div className="hero-buttons mt-5">

              <a href="https://wa.me/5531987578049" target="_blank" className="custom-btn text-decoration-none">
                Agendar pelo WhatsApp
            </a>

              <a href="https://www.instagram.com/thais.essencialeve?igsh=MWhtZmNqeTl6cDkweQ==" target="_blank" className="outline-btn text-decoration-none">
                Instagram
            </a>

            </div>

          </div>

          <div className="col-lg-6 text-center mb-5 mb-lg-0 order-1 order-lg-2" data-aos="zoom-in">

            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Espaço Essência Leve"
              className="img-fluid hero-logo"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero