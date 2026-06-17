import React from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Home.scss';

export default function Home() {
  const { t } = useTranslation();

  const categories = [
    { icon: '🥾', label: t('home.categories.hiking') },
    { icon: '🚴', label: t('home.categories.mtb') },
    { icon: '🏃', label: t('home.categories.running') },
    { icon: '⛰️', label: t('home.categories.ferrata') } 
  ];

  return (
    <div className="home">
      <header className="home-hero">
        <div className="home-hero__bg"></div>
        <div className="home-hero__content">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--inverted-text)', marginBottom: '1rem' }}>
            {t('home.title')}
          </h1>
          <p className="home-hero__subtitle">{t('home.subtitle')}</p>
        </div>
      </header>

      <main className="home-main">
        <div className="home-search">
          <div className="home-search__bar">
            <Search size={24} />
            <input 
              type="text"
              placeholder={t('home.searchPlaceholder')}
            />
          </div>
        </div>

        <section className="home-section">
          <div className="home-section__header">
            <h2>{t('home.categoriesTitle')}</h2>
          </div>
          <div className="home-categories">
            {categories.map((category, index) => (
              <div key={index} className="home-categories__card">
                <div className="icon">{category.icon}</div>
                <h3>{category.label}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-section__header">
            <h2>{t('home.featuredTitle')}</h2>
            <a href="#">{t('home.viewAll')}</a>
          </div>

          <div className="home-routes">
            {/* Ruta 1 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://media-cdn.tripadvisor.com/media/photo-o/28/57/21/8f/torrecilla-o-la-torrecilla.jpg')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.torrecilla.title')}</h3>
                    <p>{t('home.routes.torrecilla.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--moderate">{t('home.difficulty.moderate')}</span>
                </div>
                <button className="btn" onClick={() => window.open('https://es.wikiloc.com/rutas-carrera-por-montana/cuerno-torrecilla-carril-128680405', '_blank', 'noopener,noreferrer')}>{t('home.viewDetails')}</button>
              </div>
            </div>

            {/* Ruta 2 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9mv5KR-SKnaI-xXZtYOljkQWWjVBAewFpkRt5jHpVW8UhpjLni0eAGywYqVtDHPXfTaNLM2BlpF31Tz92kCPOigFs6gZ8TsmfMnrJHBJ8hYj49-zvX_A_7pVMfhOfOTVW8mwDVW27UA_E/s640/DSC08094_redimensionar.JPG')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.Mijas.title')}</h3>
                    <p>{t('home.routes.Mijas.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--hard">{t('home.difficulty.hard')}</span>
                </div>
                <button className="btn " onClick={() => window.open('https://es.wikiloc.com/rutas-carrera-por-montana/mijas-bola-mijas-senderos-129342757', '_blank', 'noopener,noreferrer')}>{t('home.viewDetails')}</button>
              </div>
            </div>


            {/* Ruta 3 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('../src/assets/antenas.jpeg')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.Repetidor.title')}</h3>
                    <p>{t('home.routes.Repetidor.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--hard">{t('home.difficulty.hard')}</span>
                </div>
                <button className="btn" onClick={() => window.open('https://es.wikiloc.com/rutas-carrera-por-montana/osunillas-127375690', '_blank', 'noopener,noreferrer')}>{t('home.viewDetails')}</button>
              </div>
            </div>

            {/* Ruta 4 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://www.malagatop.com/wp-content/uploads/2022/01/Postal-Mirador-Canada-Lobo.jpg')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.lobo.title')}</h3>
                    <p>{t('home.routes.lobo.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--hard">{t('home.difficulty.hard')}</span>
                </div>
                <button className="btn" onClick={() => window.open('https://es.wikiloc.com/rutas-carrera-por-montana/calamorro-puerto-de-las-ovejas-y-mirador-del-lobo-desde-benalmadena-191897164', '_blank', 'noopener,noreferrer')}>{t('home.viewDetails')}</button>
              </div>
            </div>
           
            {/* Ruta 5 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('../src/assets/Veleta.jpeg')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.Veleta.title')}</h3>
                    <p>{t('home.routes.Veleta.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--moderate">{t('home.difficulty.moderate')}</span>
                </div>
                <button className="btn " onClick={() => window.open('https://es.wikiloc.com/rutas-carrera-por-montana/sierra-nevada-subida-veleta-hoya-la-mora-51328540', '_blank', 'noopener,noreferrer')}>{t('home.viewDetails')}</button>
              </div>
            </div>
            
            {/* Ruta 6 */}
             <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://milyunarutas.com/wp-content/uploads/chorreras-del-molinillo.webp')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.chorreras.title')}</h3>
                    <p>{t('home.routes.chorreras.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--moderate">{t('home.difficulty.moderate')}</span>
                </div>
                <button className="btn" onClick={() => window.open('https://es.wikiloc.com/rutas-carrera-por-montana/sierra-nevada-81064646', '_blank', 'noopener,noreferrer')}>{t('home.viewDetails')}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
