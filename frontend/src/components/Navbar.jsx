import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Moon, Sun, Eye, EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useA11y } from '../context/A11yContext';
import './Navbar.scss';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { a11yMode, toggleA11yMode } = useA11y();

  const [showHouseIcon, setShowHouseIcon] = useState(false);

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
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                onError={(e) => {
                  e.target.src = "https://placehold.co/150x150/351D14/ffffff?text=Trail&font=Montserrat";
                }}
              />
            )}
          </div>
          <span>TrailForge</span>
        </Link>

        {/* Botones de navegación y acciones */}
        <div className="navbar__nav">
          <Link 
            to="/"
            className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}
          >
            {t('navbar.home')}
          </Link>
          
          <Link 
            to="/about"
            className={`navbar__link ${isActive('/about') ? 'navbar__link--active' : ''}`}
          >
            {t('navbar.about')}
          </Link>

          <Link 
            to="/contact"
            className={`btn btn--primary ${isActive('/contact') ? 'navbar__link--active' : ''}`}
            style={isActive('/contact') ? { backgroundColor: 'transparent', border: '1px solid var(--brand-orange)', color: 'var(--brand-orange)' } : {}}
          >
            {t('navbar.contact')}
          </Link>
          
          <div className="navbar__actions">
            {/* Idiomas */}
            <select 
              className="navbar__lang-select" 
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              title="Seleccionar idioma"
            >
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇬🇧 EN</option>
              <option value="sv">🇸🇪 SV</option>
            </select>

            {/* Accesibilidad */}
            <button onClick={toggleA11yMode} className="navbar__icon-btn" title="Toggle Accessibility">
              {a11yMode ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>

            {/* Tema */}
            <button onClick={toggleTheme} className="navbar__icon-btn" title="Toggle Theme">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
