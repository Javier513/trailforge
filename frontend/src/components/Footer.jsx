/**
 * Componente Footer - Pie de página
 * 
 * Este componente es el pie de página que aparece en todas las páginas.
 * Contiene:
 * - Información de contacto (teléfono y email)
 * - Enlaces rápidos a las páginas principales
 * - Información de derechos de autor
 * 
 * Es un atajo útil para que los usuarios contacten sin necesidad de navegar
 * hasta la página de contacto completa
 */

import React from 'react';
import { Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear(); // Obtener el año actual dinámicamente

  return (
    // Contenedor del footer
    <footer className="w-full bg-brand-dark text-white mt-20">
      {/* Contenido principal del footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Grid principal con 3 columnas */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          
          {/* === COLUMNA 1: Sobre TrailForge === */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>TrailForge</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Forja tu propio camino. Plataforma de rutas y aventuras al aire libre 
              para corredores, senderistas y ciclistas.
            </p>
          </div>

          {/* === COLUMNA 2: Enlaces Rápidos === */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <nav className="space-y-2">
              <a href="/" className="text-white/70 hover:text-brand-orange transition-colors text-sm">
                Inicio
              </a>
              <br />
              <a href="/about" className="text-white/70 hover:text-brand-orange transition-colors text-sm">
                Quiénes Somos
              </a>
              <br />
              <a href="/contact" className="text-white/70 hover:text-brand-orange transition-colors text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* === COLUMNA 3: Información de Contacto === */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto Rápido</h3>
            
            {/* Teléfono */}
            <a 
              href="tel:+34912345678"
              className="flex items-center gap-3 text-white/70 hover:text-brand-orange transition-colors mb-4 text-sm"
            >
              <Phone className="w-5 h-5" />
              <span>+34 91 234 56 78</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@trailforge.com"
              className="flex items-center gap-3 text-white/70 hover:text-brand-orange transition-colors text-sm"
            >
              <Mail className="w-5 h-5" />
              <span>info@trailforge.com</span>
            </a>
          </div>
        </div>

        {/* === Divisor === */}
        <hr className="border-white/20 my-8" />

        {/* === Sección Inferior: Derechos de Autor === */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Texto de derechos */}
          <p className="text-white/60 text-sm">
            © {year} TrailForge. Todos los derechos reservados.
          </p>

          {/* Corazón y texto inspirador */}
          <p className="text-white/60 text-sm flex items-center gap-2 mt-4 md:mt-0">
            Hecho con 
            <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" />
            para los aventureros
          </p>
        </div>
      </div>
    </footer>
  );
}
