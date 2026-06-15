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
                <button className="btn btn--primary">{t('home.viewDetails')}</button>
              </div>
            </div>

             {/* Ruta 2 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://stage-dms-spain.stageets.net/DbImgs/temp/B724F79BBB6E5B6AC2125F79F43E2577FBD6008D.jpg')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.mulhacen.title')}</h3>
                    <p>{t('home.routes.mulhacen.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--moderate">{t('home.difficulty.moderate')}</span>
                </div>
                <button className="btn btn--primary">{t('home.viewDetails')}</button>
              </div>
            </div>

            {/* Ruta 3 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.gredos.title')}</h3>
                    <p>{t('home.routes.gredos.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--moderate">{t('home.difficulty.moderate')}</span>
                </div>
                <button className="btn btn--primary">{t('home.viewDetails')}</button>
              </div>
            </div>

            {/* Ruta 4 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.cares.title')}</h3>
                    <p>{t('home.routes.cares.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--hard">{t('home.difficulty.hard')}</span>
                </div>
                <button className="btn btn--primary">{t('home.viewDetails')}</button>
              </div>
            </div>

            {/* Ruta 5 */}
            <div className="home-routes__card">
              <div className="image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800')"}}></div>
              <div className="content">
                <div className="header">
                  <div>
                    <h3>{t('home.routes.lobo.title')}</h3>
                    <p>{t('home.routes.lobo.desc')}</p>
                  </div>
                  <span className="difficulty difficulty--easy">{t('home.difficulty.easy')}</span>
                </div>
                <button className="btn btn--primary">{t('home.viewDetails')}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
