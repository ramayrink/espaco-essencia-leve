function About() {
  return (
    <section id="sobre" className="about-section py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <img
              src="/Sobre_Nos.png"
              alt="Sobre Espaço Essência Leve"
              className="img-fluid rounded-4 shadow-sm"
            />

          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">

            <p className="section-subtitle">
              Sobre nós
            </p>

            <h2 className="section-title mb-4">
              Um espaço criado para cuidar de você
            </h2>

            <p className="about-text">
              O Espaço Essência Leve nasceu com o propósito
              de proporcionar momentos de relaxamento,
              autocuidado e bem-estar através de atendimentos
              humanizados e personalizados.
            </p>

            <p className="about-text">
              Cada experiência é pensada para renovar não
              apenas o corpo, mas também a mente e a autoestima,
              trazendo equilíbrio, conforto e leveza para o
              seu dia a dia.
            </p>

            <button className="custom-btn mt-3">
              Falar no WhatsApp
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About