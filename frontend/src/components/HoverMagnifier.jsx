import React, { useEffect, useState, useRef } from 'react';
import { useA11y } from '../context/A11yContext';

/**
 * HoverMagnifier
 * Actúa como una lupa real. Cuando la lupa está activa (nivel 1, 2 o 3),
 * lee el texto del elemento sobre el que pasa el ratón y lo muestra
 * en una caja flotante gigante junto al cursor.
 */
export default function HoverMagnifier() {
  const { settings } = useA11y();
  const [text, setText] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnifierLevel = settings.magnifier; // 0, 1, 2, 3

  useEffect(() => {
    if (magnifierLevel === 0) {
      setText('');
      return;
    }

    const handleMouseMove = (e) => {
      // Intentar obtener el texto del elemento bajo el cursor
      const target = e.target;
      
      // Filtramos para no hacer lupa de contenedores enormes (como el body)
      if (
        ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'SPAN', 'A', 'LABEL', 'LI', 'BUTTON'].includes(target.tagName)
      ) {
        const content = target.innerText || target.textContent;
        if (content && content.trim().length > 0) {
          setText(content.trim());
        } else {
          setText('');
        }
      } else {
        setText('');
      }

      // Posicionar la caja un poco por encima del cursor
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [magnifierLevel]);

  if (magnifierLevel === 0 || !text) return null;

  // Ajustar el tamaño de la fuente según el nivel de lupa
  // Nivel 1 = 2rem, Nivel 2 = 3rem, Nivel 3 = 4rem
  const fontSize = `${1.5 + (magnifierLevel * 0.8)}rem`;

  return (
    <div 
      className={`hover-magnifier-box ${text ? 'visible' : ''}`}
      style={{
        left: Math.min(position.x + 20, window.innerWidth - 300) + 'px', // Evitar salir de la pantalla por la derecha
        top: Math.max(position.y - 80, 20) + 'px', // Evitar salir por arriba
        fontSize: fontSize
      }}
    >
      {text}
    </div>
  );
}
