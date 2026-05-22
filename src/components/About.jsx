import {
  HeartHandshake,
  Sparkles,
  ShieldCheck
} from 'lucide-react'

function About() {

  return (
    <section
      id="sobre"
      className="about-section"
    >

      <div className="container">

        <div className="row align-items-center gy-5">

          <div
            className="col-lg-5 text-center"
            data-aos="fade-up"
          >

            <img
              src={`${import.meta.env.BASE_URL}Sobre_Nos.png`}
              alt="Espaço Essência Leve"
              className="img-fluid about-image"
            />

          </div>

          <div
            className="col-lg-7"
            data-aos="fade-up"
          >

            <p className="section-subtitle">
              Sobre o Espaço Essência Leve
            </p>

            <h2 className="section-title mb-4">
              Cuidado, saúde e bem-estar em cada atendimento
            </h2>

            <p className="about-text">
              O Espaço Essência Leve nasceu com o propósito de
              proporcionar momentos de cuidado, autoestima e
              bem-estar através de um atendimento acolhedor,
              humanizado e personalizado.
            </p>

            <p className="about-text">
              Farmacêutica com especialização em oncologia e
              atualmente em formação em estética avançada,
              Thais une conhecimento técnico e cuidado humano
              para oferecer experiências que vão além da estética,
              promovendo saúde, relaxamento e qualidade de vida.
            </p>

            <p className="about-text">
              Cada atendimento é pensado para que você se sinta
              acolhida, confortável e segura, em um ambiente leve,
              tranquilo e preparado para desacelerar da rotina e
              cuidar de si mesma.
            </p>

          </div>

        </div>

        <div className="row mt-5 g-4">

          <div className="col-md-4">

            <div className="about-card">

              <div className="about-card-icon">
                <HeartHandshake size={34} />
              </div>

              <h5>
                Atendimento Humanizado
              </h5>

              <p>
                Escuta, acolhimento e cuidado individualizado
                em cada atendimento.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="about-card">

              <div className="about-card-icon">
                <ShieldCheck size={34} />
              </div>

              <h5>
                Saúde e Segurança
              </h5>

              <p>
                Conhecimento farmacêutico aliado ao bem-estar,
                autoestima e cuidado corporal.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="about-card">

              <div className="about-card-icon">
                <Sparkles size={34} />
              </div>

              <h5>
                Leveza e Bem-estar
              </h5>

              <p>
                Um espaço pensado para relaxar, desacelerar
                e renovar suas energias.
              </p>

            </div>

          </div>

        </div>

        <div
          className="about-quote text-center"
          data-aos="fade-up"
        >

          <p>
            “Mais do que estética, um momento de cuidado,
            acolhimento e conexão com você mesma.”
          </p>

        </div>

      </div>

    </section>
  )
}

export default About