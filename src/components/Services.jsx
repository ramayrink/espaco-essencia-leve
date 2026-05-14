import {
  Heart,
  Wind,
  Droplets,
  Sparkles,
  Flower2
} from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Services() {

  const services = [
    {
      icon: <Heart size={34} />,
      title: 'Massagem Relaxante',
      description:
        'Relaxamento profundo para aliviar tensões e renovar as energias.'
    },

    {
      icon: <Wind size={34} />,
      title: 'Ventosaterapia',
      description:
        'Técnica terapêutica que auxilia circulação e alívio muscular.'
    },

    {
      icon: <Droplets size={34} />,
      title: 'Drenagem Linfática',
      description:
        'Estimula a circulação e reduz retenção de líquidos.'
    },

    {
      icon: <Sparkles size={34} />,
      title: 'Massagem Modeladora',
      description:
        'Auxilia na definição corporal e melhora da autoestima.'
    },

    {
      icon: <Flower2 size={34} />,
      title: 'Aromaterapia',
      description:
        'Experiência sensorial para equilíbrio e bem-estar.'
    }
  ]

  return (
    <section
      id="servicos"
      className="services-section py-5"
    >

      <div className="container">

        <div className="text-center mb-5">

          <p className="section-subtitle">
            Serviços
          </p>

          <h2 className="section-title">
            Experiências pensadas para você
          </h2>

        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}

          spaceBetween={25}
          slidesPerView={1}

          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            }
          }}
        >

          {services.map((service, index) => (

            <SwiperSlide key={index}>

              <div className="service-card">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4 className="mt-4 mb-3">
                  {service.title}
                </h4>

                <p>
                  {service.description}
                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  )
}

export default Services