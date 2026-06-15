import React, { useRef, useEffect } from 'react';
import { 
  ZoomIn, ZoomOut, Type, Moon, 
  AlignJustify, Link, Navigation, 
  Search, PauseCircle, RotateCcw, X 
} from 'lucide-react';
import { useA11y } from '../context/A11yContext';
import './A11yModal.scss';

export default function A11yModal({ isOpen, onClose }) {
  const { settings, toggleSetting, changeZoom, cycleMagnifier, resetSettings } = useA11y();
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="a11y-modal-overlay">
      <div className="a11y-modal" ref={modalRef}>
        <div className="a11y-modal__header">
          <h2>Ajustes de Accesibilidad</h2>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="a11y-modal__grid">
          <button className="a11y-btn" onClick={() => changeZoom(1)}>
            <ZoomIn size={28} />
            <span>Zoom +</span>
          </button>

          <button className="a11y-btn" onClick={() => changeZoom(-1)}>
            <ZoomOut size={28} />
            <span>Zoom -</span>
          </button>

          <button className={`a11y-btn ${settings.dyslexia ? 'active' : ''}`} onClick={() => toggleSetting('dyslexia')}>
            <Type size={28} />
            <span>Dislexia</span>
          </button>

          <button className={`a11y-btn ${settings.contrast ? 'active' : ''}`} onClick={() => toggleSetting('contrast')}>
            <Moon size={28} />
            <span>Contraste 1</span>
          </button>

          <button className={`a11y-btn ${settings.spacing ? 'active' : ''}`} onClick={() => toggleSetting('spacing')}>
            <AlignJustify size={28} />
            <span>Espaciado</span>
          </button>

          <button className={`a11y-btn ${settings.highlightLinks ? 'active' : ''}`} onClick={() => toggleSetting('highlightLinks')}>
            <Link size={28} />
            <span>Enlaces</span>
          </button>

          <button className={`a11y-btn ${settings.largeCursor ? 'active' : ''}`} onClick={() => toggleSetting('largeCursor')}>
            <Navigation size={28} />
            <span>Cursor</span>
          </button>

          <button className={`a11y-btn ${settings.magnifier > 0 ? 'active' : ''}`} onClick={cycleMagnifier}>
            <Search size={28} />
            <span>Lupa {settings.magnifier > 0 && `(x${settings.magnifier})`}</span>
          </button>

          <button className={`a11y-btn ${settings.pauseAnimations ? 'active' : ''}`} onClick={() => toggleSetting('pauseAnimations')}>
            <PauseCircle size={28} />
            <span>Animación</span>
          </button>
        </div>

        <button className="a11y-modal__reset" onClick={resetSettings}>
          <span>Restablecer</span>
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
}
