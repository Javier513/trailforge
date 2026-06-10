import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import './Contact.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    dniType: 'DNI',
    dni: '',
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    actividad: 'running'
  });

  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.dni || !formData.nombre || !formData.apellidos || 
        !formData.fechaNacimiento || !formData.email || !formData.telefono) {
      setMensaje('Por favor, rellena todos los campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMensaje('Por favor, ingresa un email válido');
      return;
    }

    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(formData.telefono.replace(/\D/g, ''))) {
      setMensaje('Por favor, ingresa un teléfono válido (9 dígitos)');
      return;
    }

    setEnviando(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMensaje('¡Registración exitosa! Nos pondremos en contacto pronto.');
      
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

      setTimeout(() => setMensaje(''), 3000);
    } catch (error) {
      setMensaje('Error al enviar el formulario. Intenta nuevamente.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="contact">
      <header className="contact-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p>Regístrate ahora y únete a nuestra comunidad de aventureros</p>
        </div>
      </header>

      <main className="contact-main">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2>Contacto Directo</h2>
            
            <div className="contact-info__card">
              <Phone size={32} />
              <div>
                <h3>Teléfono</h3>
                <p>+34 91 234 56 78</p>
                <p className="small">Lunes a viernes, 9:00 - 18:00</p>
              </div>
            </div>

            <div className="contact-info__card">
              <Mail size={32} />
              <div>
                <h3>Email</h3>
                <p>info@trailforge.com</p>
                <p className="small">Respuesta en 24 horas</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Tipo de Documento</label>
                  <select name="dniType" value={formData.dniType} onChange={handleInputChange}>
                    <option value="DNI">DNI</option>
                    <option value="NIE">NIE</option>
                  </select>
                </div>

                <div className="contact-form__group">
                  <label>{formData.dniType}</label>
                  <input
                    type="text"
                    name="dni"
                    value={formData.dni}
                    onChange={handleInputChange}
                    placeholder={formData.dniType === 'DNI' ? '12345678X' : 'X1234567Y'}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="contact-form__group">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="contact-form__group">
                  <label>Fecha de Nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="612 345 678"
                />
              </div>

              <div className="contact-form__group">
                <label>¿Qué actividad te interesa?</label>
                <select name="actividad" value={formData.actividad} onChange={handleInputChange}>
                  <option value="running">🏃 Running</option>
                  <option value="senderismo">🥾 Senderismo</option>
                  <option value="mtb">🚴 MTB / Ciclismo de Montaña</option>
                  <option value="carretera">🚴 Ciclismo de Carretera</option>
                </select>
              </div>

              {mensaje && (
                <div className={`contact-form__message ${mensaje.includes('Error') ? 'contact-form__message--error' : 'contact-form__message--success'}`}>
                  {mensaje}
                </div>
              )}

              <button type="submit" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Registrarme Ahora'}
              </button>

              <p className="contact-form__note">
                Tus datos están seguros y solo serán usados para contactarte sobre tu actividad seleccionada.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
