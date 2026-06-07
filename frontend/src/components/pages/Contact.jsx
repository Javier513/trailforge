/**
 * Componente Contact - Página de Contacto
 * 
 * Este componente contiene un formulario de contacto donde los usuarios pueden:
 * - Seleccionar tipo de DNI (DNI/NIE)
 * - Ingresar nombre y apellidos
 * - Ingresar fecha de nacimiento
 * - Ingresar email y teléfono
 * - Seleccionar la actividad que desean realizar
 * 
 * El formulario valida los datos y permite al usuario registrarse para actividades
 */

import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  // ============================================
  // ESTADO DEL FORMULARIO
  // ============================================
  // Estado principal que guarda todos los datos del formulario
  const [formData, setFormData] = useState({
    dniType: 'DNI',          // Tipo de documento: DNI o NIE
    dni: '',                 // Número de DNI/NIE
    nombre: '',              // Nombre del usuario
    apellidos: '',           // Apellidos del usuario
    fechaNacimiento: '',     // Fecha de nacimiento
    email: '',               // Email del usuario
    telefono: '',            // Teléfono del usuario
    actividad: 'running'     // Actividad seleccionada
  });

  // Estado para mostrar mensajes de éxito o error
  const [mensaje, setMensaje] = useState('');
  
  // Estado para indicar si se está enviando el formulario
  const [enviando, setEnviando] = useState(false);

  /**
   * Manejador de cambios en los inputs
   * Actualiza el estado formData cuando el usuario escriba en los campos
   * 
   * @param {Event} e - Evento del input
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Manejador del envío del formulario
   * Realiza validación básica y "envía" los datos
   * 
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir recarga de página
    
    // Validación básica de campos
    if (!formData.dni || !formData.nombre || !formData.apellidos || 
        !formData.fechaNacimiento || !formData.email || !formData.telefono) {
      setMensaje('Por favor, rellena todos los campos');
      return;
    }

    // Validación de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMensaje('Por favor, ingresa un email válido');
      return;
    }

    // Validación de teléfono (números españoles: 9 dígitos)
    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(formData.telefono.replace(/\D/g, ''))) {
      setMensaje('Por favor, ingresa un teléfono válido (9 dígitos)');
      return;
    }

    // Mostrar que se está enviando
    setEnviando(true);

    try {
      // Aquí irían los datos enviados al servidor
      // Por ahora, simularemos una respuesta exitosa
      console.log('Datos del formulario:', formData);
      
      // Simular delay de envío
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mostrar mensaje de éxito
      setMensaje('¡Registración exitosa! Nos pondremos en contacto pronto.');
      
      // Limpiar el formulario
      setFormData({
        dniType: 'DNI',
        dni: '',
        nombre: '',
        apellidos: '',
        fechaNacimiento: '',
        email: '',
        telefono: '',
        actividad: 'running'
      });

      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setMensaje(''), 3000);
    } catch (error) {
      setMensaje('Error al enviar el formulario. Intenta nuevamente.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================
          SECCIÓN HERO - Encabezado de la página
          ============================================ */}
      <header className="w-full bg-brand-dark text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-white/80">
            Regístrate ahora y únete a nuestra comunidad de aventureros
          </p>
        </div>
      </header>

      {/* ============================================
          SECCIÓN PRINCIPAL - Formulario
          ============================================ */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* === COLUMNA IZQUIERDA: Información de Contacto === */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Contacto Directo</h2>
            
            {/* Información de teléfono */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">Teléfono</h3>
                  <p className="text-gray-600">+34 91 234 56 78</p>
                  <p className="text-sm text-gray-500 mt-1">Lunes a viernes, 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Información de email */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">Email</h3>
                  <p className="text-gray-600">info@trailforge.com</p>
                  <p className="text-sm text-gray-500 mt-1">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA: Formulario === */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Formulario principal */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* ========== FILA 1: Tipo DNI y DNI ========== */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Selector Tipo DNI */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Tipo de Documento
                    </label>
                    <select
                      name="dniType"
                      value={formData.dniType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors bg-white"
                    >
                      <option value="DNI">DNI</option>
                      <option value="NIE">NIE</option>
                    </select>
                  </div>

                  {/* Campo DNI */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      {formData.dniType}
                    </label>
                    <input
                      type="text"
                      name="dni"
                      value={formData.dni}
                      onChange={handleInputChange}
                      placeholder={formData.dniType === 'DNI' ? '12345678X' : 'X1234567Y'}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* ========== FILA 2: Nombre y Apellidos ========== */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Campo Nombre */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  {/* Campo Apellidos */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleInputChange}
                      placeholder="Tus apellidos"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* ========== FILA 3: Email y Fecha de Nacimiento ========== */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Campo Email */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  {/* Campo Fecha de Nacimiento */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Fecha de Nacimiento
                    </label>
                    <input
                      type="date"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* ========== FILA 4: Teléfono ========== */}
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="612 345 678"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>

                {/* ========== FILA 5: Actividad ========== */}
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    ¿Qué actividad te interesa?
                  </label>
                  <select
                    name="actividad"
                    value={formData.actividad}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange transition-colors bg-white"
                  >
                    <option value="running">🏃 Running</option>
                    <option value="senderismo">🥾 Senderismo</option>
                    <option value="mtb">🚴 MTB / Ciclismo de Montaña</option>
                    <option value="carretera">🚴 Ciclismo de Carretera</option>
                  </select>
                </div>

                {/* ========== MENSAJE DE ESTADO ========== */}
                {mensaje && (
                  <div className={`p-4 rounded-lg text-sm font-semibold ${
                    mensaje.includes('Error') 
                      ? 'bg-red-100 text-red-700 border-2 border-red-300'
                      : 'bg-green-100 text-green-700 border-2 border-green-300'
                  }`}>
                    {mensaje}
                  </div>
                )}

                {/* ========== BOTÓN ENVIAR ========== */}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  {enviando ? 'Enviando...' : 'Registrarme Ahora'}
                </button>

                {/* Nota aclaratoria */}
                <p className="text-xs text-gray-500 text-center">
                  Tus datos están seguros y solo serán usados para contactarte sobre tu actividad seleccionada.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
