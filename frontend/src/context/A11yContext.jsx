import React, { createContext, useContext, useState, useEffect } from 'react';

const A11yContext = createContext();

export const useA11y = () => useContext(A11yContext);

const defaultSettings = {
  zoom: 0, // -1, 0, 1, 2, 3 (each step is 10% change)
  dyslexia: false, // data-a11y="true"
  contrast: false, // .a11y-high-contrast
  spacing: false, // .a11y-spacing
  highlightLinks: false, // .a11y-links
  largeCursor: false, // .a11y-cursor
  magnifier: 0, // 0, 1, 2, 3 (.a11y-magnifier-X)
  pauseAnimations: false // .a11y-no-animations
};

export const A11yProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('a11ySettings');
    if (saved) {
      try {
        return { ...defaultSettings, ...JSON.parse(saved) };
      } catch (e) {
        return defaultSettings;
      }
    }
    // Backward compatibility with old a11yMode
    const oldSaved = localStorage.getItem('a11yMode');
    if (oldSaved === 'true') {
      return { ...defaultSettings, dyslexia: true };
    }
    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('a11ySettings', JSON.stringify(settings));

    const root = document.documentElement;
    const body = document.body;

    // Dyslexia (Mantener compatibilidad antigua)
    if (settings.dyslexia) root.setAttribute('data-a11y', 'true');
    else root.removeAttribute('data-a11y');

    // Clases CSS al body para los efectos
    body.classList.toggle('a11y-high-contrast', settings.contrast);
    body.classList.toggle('a11y-spacing', settings.spacing);
    body.classList.toggle('a11y-links', settings.highlightLinks);
    body.classList.toggle('a11y-cursor', settings.largeCursor);
    body.classList.toggle('a11y-no-animations', settings.pauseAnimations);

    // Magnifier classes (remover previas y poner nueva si > 0)
    body.classList.remove('a11y-magnifier-1', 'a11y-magnifier-2', 'a11y-magnifier-3');
    if (settings.magnifier > 0) {
      body.classList.add(`a11y-magnifier-${settings.magnifier}`);
    }

    // Zoom
    // 100% is default. Each step adds or subtracts 10%.
    const baseFontSize = 100 + (settings.zoom * 10);
    root.style.fontSize = `${baseFontSize}%`;

  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const cycleMagnifier = () => {
    setSettings(prev => ({ ...prev, magnifier: (prev.magnifier + 1) % 4 }));
  };

  const changeZoom = (delta) => {
    setSettings(prev => ({ 
      ...prev, 
      zoom: Math.max(-2, Math.min(prev.zoom + delta, 5)) // Min -20%, Max +50%
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <A11yContext.Provider value={{ 
      settings, 
      updateSetting, 
      toggleSetting, 
      cycleMagnifier,
      changeZoom,
      resetSettings 
    }}>
      {children}
    </A11yContext.Provider>
  );
};
