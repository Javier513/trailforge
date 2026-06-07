/**
 * Componente Home - Página de inicio
 * 
 * Este es el componente principal de la página de inicio de TrailForge.
 * Incluye:
 * - Un logo animado que cambia entre el logo original y una casita cada 5 segundos
 * - Un buscador de rutas
 * - Categorías principales de actividades (Senderismo, MTB, Aventura, Deportes)
 * - Una sección de "Rutas Destacadas" mostrando rutas populares
 * 
 * El logo animado es un feature especial que mejora la experiencia visual
 */

import React, { useState, useEffect } from 'react';
import { Compass, Map, Search, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  // Estado para controlar si se muestra el logo original o el icono de casita
  const [showHouseIcon, setShowHouseIcon] = useState(false);

  /**
   * useEffect - Maneja la animación del logo
   * 
   * Cada 5 segundos, cambia entre mostrar el logo original y el icono de casita.
   * Se ejecuta solo una vez cuando el componente se monta.
   */
  useEffect(() => {
    // Establecer un intervalo que ejecuta cada 5000 milisegundos (5 segundos)
    const interval = setInterval(() => {
      setShowHouseIcon(prev => !prev); // Alternar entre true y false
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonta
    // Esto previene memory leaks
    return () => clearInterval(interval);
  }, []); // Array vacío significa que solo se ejecuta una vez al montar

  return (
    <div className="min-h-screen flex flex-col">
      {/* ============================================
          SECCIÓN HERO - Encabezado principal
          ============================================ */}
      <header className="w-full bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark/90 text-brand-orange rounded-b-3xl shadow-xl overflow-hidden relative">
        {/* Imagen de fondo decorativa */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>

        {/* Contenido del hero */}
        <div className="relative z-10 px-6 pt-12 pb-16 flex flex-col items-center text-center">
          {/* Logo Animado - Cambia entre logo y casita cada 5 segundos */}
          <div className="w-32 h-32 text-brand-orange rounded-full flex items-center justify-center p-2 shadow-2xl mb-6 animate-float transition-all duration-500">
            {showHouseIcon ? (
              // Mostrar icono de casita
              <HomeIcon className="w-20 h-20 text-brand-orange" strokeWidth={1.5} />
            ) : (
              // Mostrar logo original
              <img 
                src="/src/assets/logoTrailForge.png" 
                alt="TrailForge Logo" 
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  e.target.src = "https://placehold.co/150x150/351D14/ffffff?text=Trail&font=Montserrat";
                }}
              />
            )}
          </div>

          {/* Título principal 
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">TrailForge</h1>
            */}

          {/* Descripción corta 
          <p className="text-lg font-light text-white/80 max-w-md mb-2">
            Forja tu propio camino. Encuentra, crea y reserva tus rutas perfectas.
          </p>
          */}

          <p className="text-lg text-brand-orange/100">Explora aventuras sin límites</p>
        </div>
      </header>

      {/* ============================================
          SECCIÓN BUSCADOR
          ============================================ */}
      <main className="flex-1 px-6 py-8">
        {/* Buscador de rutas */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border-2 border-brand-orange/20 hover:border-brand-orange/50 transition-colors">
            <Search className="w-6 h-6 text-brand-dark/50" />
            <input 
              type="text"
              placeholder="Buscar ruta, ciudad, tipo de actividad..."
              className="flex-1 outline-none text-brand-dark placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        {/* ============================================
            SECCIÓN CATEGORÍAS
            ============================================ */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Categorías de Actividades</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

            {/* Cada categoría es un card clickeable */}
            {[
              { icon: '🥾', label: 'Senderismo' },
              { icon: '🚴', label: 'MTB / Ciclismo' },
              { icon: '🏃', label: 'Running' },
              { icon: '⛰️', label: 'Vías ferratas' } 
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-3 flex justify-center">{category.icon}</div>
                <h3 className="font-semibold text-brand-dark text-sm">{category.label}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================
            SECCIÓN RUTAS DESTACADAS
            ============================================ */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-brand-dark">Rutas Destacadas</h2>
            <a href="#" className="text-brand-orange font-semibold hover:underline">Ver todas</a>
          </div>

          {/* Lista de rutas destacadas */}
          <div className="space-y-6">
            {/* Ruta 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[url('https://media-cdn.tripadvisor.com/media/photo-o/28/57/21/8f/torrecilla-o-la-torrecilla.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Pico Torrecilla - Málaga </h3>
                    <p className="text-sm text-gray-600 mt-1">Una ruta espectacular con vistas panorámicas de toda la provincia de Málaga</p>
                  </div>
                  <span className="text-brand-orange font-bold">MODERADA</span>
                </div>
                <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-2 rounded-lg transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>

             {/* Ruta 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[url('https://stage-dms-spain.stageets.net/DbImgs/temp/B724F79BBB6E5B6AC2125F79F43E2577FBD6008D.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Pico Mulhacén - Sierra Nevada (Granada)</h3>
                    <p className="text-sm text-gray-600 mt-1">Descubre el pico más alto de la Península Ibérica</p>
                  </div>
                  <span className="text-yellow-600 font-bold">MODERADA</span>
                </div>
                <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-2 rounded-lg transition-colors">
                  Ver Detalles 
                </button>
              </div>
            </div>

            {/* Ruta 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Laguna Grande de Gredos</h3>
                    <p className="text-sm text-gray-600 mt-1">Aventura y natural en esta hermosa ruta de montaña</p>
                  </div>
                  <span className="text-yellow-600 font-bold">MODERADA</span>
                </div>
                <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-2 rounded-lg transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Ruta 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Ruta del Cares - Picos de Europa</h3>
                    <p className="text-sm text-gray-600 mt-1">La legendaria ruta por el cañón. Espectáculo de naturaleza</p>
                  </div>
                  <span className="text-red-600 font-bold">DIFÍCIL</span>
                </div>
                <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-2 rounded-lg transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Ruta 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Pico del Lobo - Sierra de Ayllon</h3>
                    <p className="text-sm text-gray-600 mt-1">Una ruta espectacular con vistas panorámicas del acantilado</p>
                  </div>
                  <span className="text-brand-orange font-bold">FÁCIL</span>
                </div>
                <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-2 rounded-lg transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
