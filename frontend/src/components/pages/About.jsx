import React from 'react';
import { Heart, Target, Users, Zap, Bike, Map } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './About.scss';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <header className="about-hero">
        <div className="container">
          <h1>{t('about.hero.title')}</h1>
          <p>
            {t('about.hero.subtitle')}
          </p>
        </div>
      </header>

      <main className="about-main">
        
        <section className="about-section">
          <div className="about-mission">
            <div className="about-mission__text">
              <h2 className="about-section__title">{t('about.mission.title')}</h2>
              <p>
                {t('about.mission.p1')}
              </p>
              <p>
                {t('about.mission.p2')}
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
          <h2 className="about-section__title about-section__title--center">{t('about.values.title')}</h2>

          <div className="about-values">
            <div className="about-values__card">
              <Heart size={48} />
              <h3>{t('about.values.items.passion.title')}</h3>
              <p>
                {t('about.values.items.passion.desc')}
              </p>
            </div>

            <div className="about-values__card">
              <Target size={48} />
              <h3>{t('about.values.items.integrity.title')}</h3>
              <p>
                {t('about.values.items.integrity.desc')}
              </p>
            </div>

            <div className="about-values__card">
              <Users size={48} />
              <h3>{t('about.values.items.community.title')}</h3>
              <p>
                {t('about.values.items.community.desc')}
              </p>
            </div>

            <div className="about-values__card">
              <Zap size={48} />
              <h3>{t('about.values.items.innovation.title')}</h3>
              <p>
                {t('about.values.items.innovation.desc')}
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="about-section about-team">
          <h2 className="about-section__title about-section__title--center">{t('about.team.title')}</h2>

          <p className="about-team__intro">
            {t('about.team.intro')}
          </p>

          <div className="about-team__grid">
            <div className="about-team__card">
              <div className="image-placeholder"></div>
              <div className="content">
                <h3>Javier Heredia</h3>
                <p className="role">{t('about.team.members.Javier.role')}</p>
                <p>
                  {t('about.team.members.Javier.desc')}
                </p>
              </div>
            </div>

            <div className="about-team__card">
              <div className="image-placeholder"></div>
              <div className="content">
                <h3>Amanda Lanetoft</h3>
                <p className="role">{t('about.team.members.Amanda.role')}</p>
                <p>
                  {t('about.team.members.Amanda.desc')}
                </p>
              </div>
            </div>

            <div className="about-team__card">
              <div className="image-placeholder"></div>
              <div className="content">
                <h3>Ana Fernández</h3>
                <p className="role">{t('about.team.members.ana.role')}</p>
                <p>
                  {t('about.team.members.ana.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="about-section about-partners">
          <h2 className="about-section__title about-section__title--center">{t('about.partners.title')}</h2>

          <p className="about-team__intro">
            {t('about.partners.intro')}
          </p>

          <div className="about-team__grid" style={{ justifyContent: 'center' }}>
            <div className="about-team__card">
              <div className="image-placeholder" style={{backgroundColor: '#e67e22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <Bike size={48} />
              </div>
              <div className="content">
                <h3>Harman Bikes & Running</h3>
                <p className="role">{t('about.partners.companies.harman.role')}</p>
                <p>
                  {t('about.partners.companies.harman.desc')}
                </p>
              </div>
            </div>

            <div className="about-team__card">
              <div className="image-placeholder" style={{backgroundColor: '#27ae60', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <Map size={48} />
              </div>
              <div className="content">
                <h3>Summit Guides</h3>
                <p className="role">{t('about.partners.companies.summit.role')}</p>
                <p>
                  {t('about.partners.companies.summit.desc')}
                </p>
              </div>
            </div>
          </div>

          <div className="about-partners__note" style={{maxWidth: '800px', margin: '2rem auto 0', padding: '1.5rem', backgroundColor: 'var(--surface-color)', borderRadius: '0.5rem', borderLeft: '4px solid var(--brand-orange)', boxShadow: '0 4px 6px var(--shadow-color)'}}>
            <p style={{fontWeight: '500', margin: 0, textAlign: 'center', fontSize: '1.1rem'}}>{t('about.partners.ferratas')}</p>
          </div>
        </section>

        <section className="about-stats">
          <h2>{t('about.stats.title')}</h2>
          <div className="about-stats__grid">
            <div className="about-stats__item">
              <div className="number">500+</div>
              <p>{t('about.stats.routes')}</p>
            </div>
            <div className="about-stats__item">
              <div className="number">10K+</div>
              <p>{t('about.stats.adventurers')}</p>
            </div>
            <div className="about-stats__item">
              <div className="number">100%</div>
              <p>{t('about.stats.security')}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
