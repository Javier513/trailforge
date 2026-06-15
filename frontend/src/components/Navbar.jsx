import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Moon, Sun, Eye, EyeOff, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import A11yModal from './A11yModal';
import './Navbar.scss';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const [showHouseIcon, setShowHouseIcon] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showA11yModal, setShowA11yModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const flags = {
    es: 'https://flagcdn.com/w40/es.png',
    en: 'https://flagcdn.com/w40/gb.png',
    sv: 'https://flagcdn.com/w40/se.png',
    de: 'https://flagcdn.com/w40/de.png'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHouseIcon(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar__container">
        
        {/* Logo / Home Button - Izquierda */}
        <Link to="/" className="navbar__logo" title={t('navbar.home')}>
          <div className="icon-container">
            {showHouseIcon ? (
              <Home style={{ width: '100%', height: '100%', color: 'var(--brand-orange)' }} strokeWidth={1.5} />
            ) : (
              <img 
                src="/src/assets/logoTrailForge.png" 
                alt="TrailForge Logo" 
                style={{ width: '150%', height: '150%', objectFit: 'contain', borderRadius: '40%' /* Tamaño logo en el navbar */}} 
                onError={(e) => { 
                  e.target.src = "https://placehold.co/150x150/351D14/ffffff?text=Trail&font=Montserrat";
                }}
              />
            )}
          </div>
          <span>TrailForge</span>
        </Link>

        {/* Botón menú móvil hamburguesa */}
        <button 
          className="navbar__mobile-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Botones de navegación y acciones */}
        <div className={`navbar__nav ${isMobileMenuOpen ? 'navbar__nav--open' : ''}`}>
          <Link 
            to="/"
            className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navbar.home')}
          </Link>
          
          <Link 
            to="/about"
            className={`navbar__link ${isActive('/about') ? 'navbar__link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navbar.about')}
          </Link>

          <Link 
            to="/contact"
            className={`btn btn--primary ${isActive('/contact') ? 'navbar__link--active' : ''}`}
            style={isActive('/contact') ? { backgroundColor: 'transparent', border: '1px solid var(--brand-orange)', color: 'var(--brand-orange)' } : {}}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navbar.contact')}
          </Link>
          
          <div className="navbar__actions">
            {/* 
              Selector de Idiomas:
              - Se activa con clic para mayor fiabilidad en móviles y escritorio.
            */}
            <div 
              className="navbar__lang-selector" 
            >
              <button 
                className="navbar__lang-btn" 
                onClick={() => setShowLangMenu(!showLangMenu)}
                title={t('navbar.selectLanguage', 'Seleccionar idioma')}
              >
                {flags[i18n.language] ? (
                  <img src={flags[i18n.language]} alt={i18n.language} className="flag-img" />
                ) : (
                  <img src={flags['es']} alt="es" className="flag-img" />
                )}
              </button>
              
              {showLangMenu && (
                <div className="navbar__lang-menu">
                  {Object.entries(flags).map(([code, flag]) => (
                    <button 
                      key={code}
                      className={`navbar__lang-option ${i18n.language === code ? 'active' : ''}`}
                      onClick={() => {
                        changeLanguage(code);
                        setShowLangMenu(false);
                      }}
                      title={code.toUpperCase()}
                    >
                      <img src={flag} alt={code} className="flag-img" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Accesibilidad */}
            <button onClick={() => setShowA11yModal(true)} className="navbar__icon-btn" title="Ajustes de Accesibilidad">
              <Eye size={24} />
            </button>

            {/* Tema */}
            <button onClick={toggleTheme} className="navbar__icon-btn" title="Toggle Theme">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

      </div>

      <A11yModal isOpen={showA11yModal} onClose={() => setShowA11yModal(false)} />
    </nav>
  );
}
