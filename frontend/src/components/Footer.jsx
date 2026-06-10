import React from 'react';
import { Phone, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__grid">
          
          {/* === COLUMNA 1: Sobre TrailForge === */}
          <div className="footer__section">
            <h3>TrailForge</h3>
            <p>
              {t('footer.about')}
            </p>
          </div>

          {/* === COLUMNA 2: Enlaces Rápidos === */}
          <div className="footer__section">
            <h3>{t('footer.quickLinks')}</h3>
            <nav>
              <Link to="/" className="footer__link">
                {t('navbar.home')}
              </Link>
              <Link to="/about" className="footer__link">
                {t('navbar.about')}
              </Link>
              <Link to="/contact" className="footer__link">
                {t('navbar.contact')}
              </Link>
            </nav>
          </div>

          {/* === COLUMNA 3: Información de Contacto === */}
          <div className="footer__section">
            <h3>{t('footer.quickContact')}</h3>
            
            {/* Teléfono */}
            <a href="tel:+34912345678" className="footer__contact">
              <Phone />
              <span>+34 91 234 56 78</span>
            </a>

            {/* Email */}
            <a href="mailto:info@trailforge.com" className="footer__contact">
              <Mail />
              <span>info@trailforge.com</span>
            </a>
          </div>
        </div>

        <hr className="footer__divider" />

        {/* === Sección Inferior === */}
        <div className="footer__bottom">
          <p>
            © {year} {t('footer.rights')}
          </p>

          <p>
            {t('footer.madeWith')} 
            <Heart className="w-4 h-4" />
            {t('footer.forAdventurers')}
          </p>
        </div>
      </div>
    </footer>
  );
}
