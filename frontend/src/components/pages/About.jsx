import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';
import './About.scss';

export default function About() {
  return (
    <div className="about">
      <header className="about-hero">
        <div className="container">
          <h1>Quiénes Somos</h1>
          <p>
            Descubre la historia de TrailForge y nuestra pasión por las aventuras al aire libre
          </p>
        </div>
      </header>

      <main className="about-main">
        
        <section className="about-section">
          <div className="about-mission">
            <div className="about-mission__text">
              <h2 className="about-section__title">Nuestra Misión</h2>
              <p>
                En TrailForge, creemos que la naturaleza es uno de los grandes regalos de la vida. 
                Nuestra misión es conectar a aventureros, senderistas, ciclistas y corredores con 
                las rutas más hermosas y desafiantes de nuestro país.
              </p>
              <p>
                Queremos hacer que explorar nuevas rutas sea fácil, seguro y accesible para todos, 
                desde principiantes hasta atletas experimentados.
              </p>
            </div>

            <div className="about-mission__image">
              <img 
                src="https://www.temarium.com/wordpress/wp-content/uploads/2019/02/2018-12-05_10-36-58-1024x576.jpg"
                alt="Montañas y naturaleza"
              />
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="about-section">
          <h2 className="about-section__title about-section__title--center">Nuestros Valores</h2>

          <div className="about-values">
            <div className="about-values__card">
              <Heart size={48} />
              <h3>Pasión</h3>
              <p>
                Somos apasionados por la naturaleza y queremos compartir esa pasión contigo
              </p>
            </div>

            <div className="about-values__card">
              <Target size={48} />
              <h3>Integridad</h3>
              <p>
                Información veraz, rutas verificadas y reseñas honestas de nuestros usuarios
              </p>
            </div>

            <div className="about-values__card">
              <Users size={48} />
              <h3>Comunidad</h3>
              <p>
                Construimos una comunidad donde los aventureros se conectan y comparten experiencias
              </p>
            </div>

            <div className="about-values__card">
              <Zap size={48} />
              <h3>Innovación</h3>
              <p>
                Usamos tecnología para mejorar continuamente la experiencia de nuestros usuarios
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="about-section about-team">
          <h2 className="about-section__title about-section__title--center">Nuestro Equipo</h2>

          <p className="about-team__intro">
            Somos un equipo diverso de desarrolladores, diseñadores y apasionados por la naturaleza.
            Cada uno de nosotros aporta su experiencia en deportes al aire libre para crear la mejor 
            plataforma de rutas del país.
          </p>

          <div className="about-team__grid">
            <div className="about-team__card">
              <div className="image-placeholder"></div>
              <div className="content">
                <h3>María García</h3>
                <p className="role">Fundadora & CEO</p>
                <p>
                  Alpinista experimentada y amante de la naturaleza. Dirige la visión de TrailForge.
                </p>
              </div>
            </div>

            <div className="about-team__card">
              <div className="image-placeholder"></div>
              <div className="content">
                <h3>Carlos López</h3>
                <p className="role">CTO & Desarrollador</p>
                <p>
                  Ingeniero de software especializado en aplicaciones móviles y web.
                </p>
              </div>
            </div>

            <div className="about-team__card">
              <div className="image-placeholder"></div>
              <div className="content">
                <h3>Ana Fernández</h3>
                <p className="role">Directora de Diseño</p>
                <p>
                  Diseñadora UX/UI con pasión por crear experiencias intuitivas y bellas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-stats">
          <h2>¿Por qué elegir TrailForge?</h2>
          <div className="about-stats__grid">
            <div className="about-stats__item">
              <div className="number">500+</div>
              <p>Rutas verificadas</p>
            </div>
            <div className="about-stats__item">
              <div className="number">10K+</div>
              <p>Aventureros activos</p>
            </div>
            <div className="about-stats__item">
              <div className="number">100%</div>
              <p>Seguridad garantizada</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
