/**
 * Componente Navbar - Barra de navegación principal
 * 
 * Este componente es responsable de mostrar la navegación principal de la aplicación.
 * Contiene el logo/home a la izquierda y tres botones en el navbar:
 * - Home (logo animado)
 * - Quiénes Somos
 * - Contacto
 * 
 * Usa React Router para navegar entre las diferentes secciones de la aplicación
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Navbar() {
  return (
    // Contenedor principal del navbar con estilos personalizados
    <nav className="w-full bg-brand-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Home Button - A la izquierda */}
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
          title="Volver a inicio"
        >
          {/* Icono de casa que se mostrará en el navbar */}
          <Home className="w-8 h-8 text-brand-orange" />
          <span className="text-xl font-bold text-brand-orange">TrailForge</span>
        </Link>

        {/* Botones de navegación - En el centro/derecha */}
        <div className="flex items-center gap-8">
          {/* Botón: Quiénes Somos */}
          <Link 
            to="/about"
            className="hover:text-brand-orange transition-colors duration-300 font-semibold"
          >
            Quiénes Somos
          </Link>

          {/* Botón: Contacto */}
          <Link 
            to="/contact"
            className="bg-brand-orange hover:bg-brand-orange/90 text-brand-dark px-6 py-2 rounded-full font-semibold transition-colors duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
