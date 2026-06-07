/**
 * Componente About - Página Quiénes Somos
 * 
 * Este componente muestra información sobre la empresa TrailForge:
 * - Nuestra misión y visión
 * - Quiénes somos y por qué existimos
 * - Nuestros valores principales
 * - Información sobre el equipo
 * 
 * Está diseñado para establecer confianza y conexión con los usuarios
 */

import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================
          SECCIÓN HERO - Encabezado de la página
          ============================================ */}
      <header className="w-full bg-brand-dark text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-lg text-white/80">
            Descubre la historia de TrailForge y nuestra pasión por las aventuras al aire libre
          </p>
        </div>
      </header>

      {/* ============================================
          SECCIÓN PRINCIPAL - Contenido
          ============================================ */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* --- Subsección: Nuestra Misión --- */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Nuestra Misión</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                En TrailForge, creemos que la naturaleza es uno de los grandes regalos de la vida. 
                Nuestra misión es conectar a aventureros, senderistas, ciclistas y corredores con 
                las rutas más hermosas y desafiantes de nuestro país.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Queremos hacer que explorar nuevas rutas sea fácil, seguro y accesible para todos, 
                desde principiantes hasta atletas experimentados.
              </p>
            </div>

            {/* Imagen */}
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://www.temarium.com/wordpress/wp-content/uploads/2019/02/2018-12-05_10-36-58-1024x576.jpg"
                alt="Montañas y naturaleza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* --- Divisor --- */}
        <hr className="my-12 border-gray-200" />

        {/* ============================================
            SECCIÓN - Nuestros Valores
            ============================================ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Nuestros Valores</h2>

          {/* Grid de valores (4 tarjetas) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Valor 1: Pasión */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Pasión</h3>
              <p className="text-gray-600">
                Somos apasionados por la naturaleza y queremos compartir esa pasión contigo
              </p>
            </div>

            {/* Valor 2: Integridad */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Integridad</h3>
              <p className="text-gray-600">
                Información veraz, rutas verificadas y reseñas honestas de nuestros usuarios
              </p>
            </div>

            {/* Valor 3: Comunidad */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Comunidad</h3>
              <p className="text-gray-600">
                Construimos una comunidad donde los aventureros se conectan y comparten experiencias
              </p>
            </div>

            {/* Valor 4: Innovación */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Innovación</h3>
              <p className="text-gray-600">
                Usamos tecnología para mejorar continuamente la experiencia de nuestros usuarios
              </p>
            </div>
          </div>
        </section>

        {/* --- Divisor --- */}
        <hr className="my-12 border-gray-200" />

        {/* ============================================
            SECCIÓN - Nuestro Equipo
            ============================================ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Nuestro Equipo</h2>

          {/* Párrafo de introducción */}
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            Somos un equipo diverso de desarrolladores, diseñadores y apasionados por la naturaleza.
            Cada uno de nosotros aporta su experiencia en deportes al aire libre para crear la mejor 
            plataforma de rutas del país.
          </p>

          {/* Grid de miembros del equipo */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Miembro 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-brand-orange to-brand-dark"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark">María García</h3>
                <p className="text-brand-orange font-semibold mb-3">Fundadora & CEO</p>
                <p className="text-gray-600 text-sm">
                  Alpinista experimentada y amante de la naturaleza. Dirige la visión de TrailForge.
                </p>
              </div>
            </div>

            {/* Miembro 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-brand-orange to-brand-dark"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark">Carlos López</h3>
                <p className="text-brand-orange font-semibold mb-3">CTO & Desarrollador</p>
                <p className="text-gray-600 text-sm">
                  Ingeniero de software especializado en aplicaciones móviles y web.
                </p>
              </div>
            </div>

            {/* Miembro 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-brand-orange to-brand-dark"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark">Ana Fernández</h3>
                <p className="text-brand-orange font-semibold mb-3">Directora de Diseño</p>
                <p className="text-gray-600 text-sm">
                  Diseñadora UX/UI con pasión por crear experiencias intuitivas y bellas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECCIÓN - ¿Por qué TrailForge?
            ============================================ */}
        <section className="bg-gradient-to-r from-brand-dark to-brand-dark/90 text-white rounded-2xl p-12 text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">¿Por qué elegir TrailForge?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">500+</div>
              <p className="text-white/80">Rutas verificadas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">10K+</div>
              <p className="text-white/80">Aventureros activos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">100%</div>
              <p className="text-white/80">Seguridad garantizada</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
