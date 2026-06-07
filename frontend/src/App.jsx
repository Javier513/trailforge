/**
 * App.jsx - Componente principal de la aplicación
 * 
 * Este es el componente raíz de TrailForge que configura:
 * - React Router para navegar entre páginas
 * - La estructura general con Navbar en la parte superior
 * - Las diferentes rutas (Home, About, Contact)
 * - El Footer que aparece en todas las páginas
 * 
 * Todas las páginas tienen la misma estructura:
 * Navbar → Contenido de la página → Footer
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar componentes de páginas
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

export default function App() {
  return (
    // BrowserRouter: Habilita React Router para navegar entre páginas
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        
        {/* === NAVBAR GLOBAL === 
            Aparece en todas las páginas, en la parte superior */}
        <Navbar />

        {/* === CONTENIDO PRINCIPAL ===
            Las diferentes páginas se renderizan aquí según la ruta actual
            
            Routes disponibles:
            - "/"           → Home (página de inicio)
            - "/about"      → About (quiénes somos)
            - "/contact"    → Contact (formulario de contacto)
        */}
        <main className="flex-1">
          <Routes>
            {/* Ruta Home - Página principal */}
            <Route path="/" element={<Home />} />

            {/* Ruta About - Página Quiénes Somos */}
            <Route path="/about" element={<About />} />

            {/* Ruta Contact - Página de Contacto con formulario */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* === FOOTER GLOBAL === 
            Aparece en todas las páginas, en la parte inferior */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
