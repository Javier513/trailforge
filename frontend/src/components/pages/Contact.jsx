import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';

export default function Contact() {
  const { t } = useTranslation();
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
      setMensaje(t('contact.messages.emptyFields'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMensaje(t('contact.messages.invalidEmail'));
      return;
    }

    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(formData.telefono.replace(/\D/g, ''))) {
      setMensaje(t('contact.messages.invalidPhone'));
      return;
    }

    setEnviando(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMensaje(t('contact.messages.success'));
      
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
      setMensaje(t('contact.messages.error'));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="contact">
      <header className="contact-hero">
        <div className="container">
          <h1>{t('contact.hero.title')}</h1>
          <p>{t('contact.hero.subtitle')}</p>
        </div>
      </header>

      <main className="contact-main">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2>{t('contact.info.title')}</h2>
            
            <div className="contact-info__card">
              <Phone size={32} />
              <div>
                <h3>{t('contact.info.phoneTitle')}</h3>
                <p>+34 91 234 56 78</p>
                <p className="small">{t('contact.info.phoneSchedule')}</p>
              </div>
            </div>

            <div className="contact-info__card">
              <Mail size={32} />
              <div>
                <h3>{t('contact.info.emailTitle')}</h3>
                <p>info@trailforge.com</p>
                <p className="small">{t('contact.info.emailResponse')}</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>{t('contact.form.docType')}</label>
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
                  <label>{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div className="contact-form__group">
                  <label>{t('contact.form.lastName')}</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.lastNamePlaceholder')}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div className="contact-form__group">
                  <label>{t('contact.form.birthDate')}</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label>{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>

              <div className="contact-form__group">
                <label>{t('contact.form.activityLabel')}</label>
                <select name="actividad" value={formData.actividad} onChange={handleInputChange}>
                  <option value="running">{t('contact.form.activities.running')}</option>
                  <option value="senderismo">{t('contact.form.activities.hiking')}</option>
                  <option value="mtb">{t('contact.form.activities.mtb')}</option>
                  <option value="carretera">{t('contact.form.activities.road')}</option>
                </select>
              </div>

              {mensaje && (
                <div className={`contact-form__message ${mensaje.includes(t('contact.messages.error').split('.')[0]) || mensaje.includes('Error') ? 'contact-form__message--error' : 'contact-form__message--success'}`}>
                  {mensaje}
                </div>
              )}

              <button type="submit" disabled={enviando}>
                {enviando ? t('contact.form.submitting') : t('contact.form.submit')}
              </button>

              <p className="contact-form__note">
                {t('contact.form.securityNote')}
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
