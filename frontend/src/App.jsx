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
import { ThemeProvider } from './context/ThemeContext';
import { A11yProvider } from './context/A11yContext';
import ScrollToTop from './components/ScrollToTop';
import HoverMagnifier from './components/HoverMagnifier';

// Importar componentes de páginas
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <A11yProvider>
        <BrowserRouter>
          <ScrollToTop />
          <HoverMagnifier />
          <div className="app-container">
            
            {/* === NAVBAR GLOBAL === */}
            <Navbar />

            {/* === CONTENIDO PRINCIPAL === */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            {/* === FOOTER GLOBAL === */}
            <Footer />
          </div>
        </BrowserRouter>
      </A11yProvider>
    </ThemeProvider>
  );
}
