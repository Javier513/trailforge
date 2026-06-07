# 🏔️ TrailForge - Frontend - Estructura del Proyecto

## 📋 Descripción General
Este es el frontend de **TrailForge**, una aplicación web moderna para buscar, crear y reservar rutas de aventura (senderismo, MTB, running, ciclismo).

---

## 📁 Estructura de Carpetas

```
frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx       # Barra de navegación superior
│   │   ├── Footer.jsx       # Pie de página
│   │   └── pages/           # Páginas principales
│   │       ├── Home.jsx     # Página de inicio
│   │       ├── About.jsx    # Página "Quiénes Somos"
│   │       └── Contact.jsx  # Página de contacto con formulario
│   ├── App.jsx              # Componente raíz con rutas
│   ├── main.jsx             # Punto de entrada
│   ├── index.scss           # Estilos globales
│   ├── index.css            # Variables CSS
│   └── App.css              # Estilos de App (opcional)
├── public/                  # Archivos estáticos
├── package.json             # Dependencias del proyecto
├── tailwind.config.js       # Configuración de Tailwind CSS
├── vite.config.js           # Configuración de Vite
└── index.html               # Archivo HTML base
```

---

## 🔧 Componentes Principales

### 1. **Navbar.jsx** (`src/components/Navbar.jsx`)
- Barra de navegación sticky (fija en la parte superior)
- **Logo/Home Button**: A la izquierda, con ícono de casa + texto "TrailForge"
- **Links de Navegación**: 
  - "Quiénes Somos" → `/about`
  - "Contacto" → `/contact` (botón destacado en naranja)
- Usa React Router para navegar entre páginas
- **Estilos**: Fondo marrón oscuro (#351D14), texto blanco, naranja (#DE994E) para acentos

### 2. **Home.jsx** (`src/components/pages/Home.jsx`)
- **Logo Animado**: Cambia entre el logo original y un ícono de casita cada 5 segundos
- **Hero Section**: Encabezado con imagen de fondo, título y descripción
- **Buscador**: Campo de búsqueda de rutas
- **Categorías**: 4 tarjetas clickeables (Senderismo, MTB/Ciclismo, Running, Aventura)
- **Rutas Destacadas**: 3 ejemplos de rutas con imagen, descripción y nivel de dificultad

### 3. **About.jsx** (`src/components/pages/About.jsx`)
- **Sección "Nuestra Misión"**: Explica la visión de TrailForge
- **Sección "Nuestros Valores"**: 4 tarjetas con valores principales
  - Pasión ❤️
  - Integridad 🎯
  - Comunidad 👥
  - Innovación ⚡
- **Nuestro Equipo**: 3 miembros del equipo con información
- **Estadísticas**: Números clave (500+ rutas, 10K+ usuarios, etc.)

### 4. **Contact.jsx** (`src/components/pages/Contact.jsx`)
- **Información de Contacto Directo**: Teléfono y email en la columna izquierda
- **Formulario de Registro** con validación:
  - **Tipo de Documento**: Selector DNI/NIE
  - **DNI/NIE**: Campo de texto
  - **Nombre**: Campo de texto
  - **Apellidos**: Campo de texto
  - **Email**: Validación de email
  - **Fecha de Nacimiento**: Date picker
  - **Teléfono**: Validación de 9 dígitos españoles
  - **Actividad**: Selector con opciones
    - 🏃 Running
    - 🥾 Senderismo
    - 🚴 MTB / Ciclismo de Montaña
    - 🚴 Ciclismo de Carretera
  - **Botón "Registrarme Ahora"**: Envío del formulario
- Mensajes de éxito/error dinámicos

### 5. **Footer.jsx** (`src/components/Footer.jsx`)
- **3 Columnas**:
  1. Información sobre TrailForge
  2. Enlaces rápidos a las páginas principales
  3. Contacto directo (teléfono y email con iconos clickeables)
- **Sección inferior**: Derechos de autor y texto inspirador
- Teléfono y email son enlaces funcionales (tel: y mailto:)

### 6. **App.jsx** (`src/App.jsx`)
- **Componente raíz** con React Router
- **Estructura**: Navbar → Rutas (Home/About/Contact) → Footer
- Las 3 rutas disponibles:
  - `/` → Home
  - `/about` → About
  - `/contact` → Contact

---

## 🎨 Sistema de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Marrón Oscuro | `#351D14` | Navbar, Footer, textos principales |
| Naranja | `#DE994E` | Botones, acentos, iconos |
| Fondo Claro | `#F5F2EB` | Fondo principal |
| Blanco | `#FFFFFF` | Tarjetas, fondos de formularios |
| Gris | `#999999` | Textos secundarios |

---

## 📦 Dependencias Principales

- **React** 19.2.6 - Framework de UI
- **React Router DOM** 7.15.1 - Enrutamiento entre páginas
- **Tailwind CSS** 3.4.19 - Estilización (utility-first CSS)
- **Lucide React** 1.16.0 - Iconos (Phone, Mail, Heart, Home, etc.)
- **Vite** 8.0.12 - Bundler y dev server
- **Sass** 1.99.0 - Preprocesador CSS

---

## 🚀 Cómo Ejecutar

```bash
# 1. Navegar a la carpeta del frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev

# La aplicación se abrirá en http://localhost:5173/
```

---

## 📝 Comentarios en el Código

Cada componente está totalmente documentado con comentarios explicativos en español:
- Descripción general del componente
- Explicación de cada sección principal
- Comentarios sobre lógica especial (animaciones, validaciones, etc.)

---

## ✨ Características Especiales

### 1. **Logo Animado en Home**
```javascript
// El logo cambia cada 5 segundos entre:
// - Logo original (imagen)
// - Ícono de casita (Home icon de lucide-react)
useEffect(() => {
  const interval = setInterval(() => {
    setShowHouseIcon(prev => !prev);
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

### 2. **Validación de Formulario**
- Email: Validación regex
- Teléfono: Exactamente 9 dígitos
- Campos obligatorios: Todos deben completarse
- Mensajes de error/éxito dinámicos

### 3. **Responsive Design**
- Usa Tailwind CSS con breakpoints (md:, lg:, etc.)
- Mobile-first approach
- Grid flexible en tarjetas

### 4. **Navegación Sticky**
- El Navbar se queda fijo en la parte superior al hacer scroll
- `sticky top-0 z-50`

---

## 🔮 Futuras Mejoras

1. **Backend**: Conectar con API real
2. **Autenticación**: Login/Register de usuarios
3. **Favoritos**: Guardar rutas favoritas
4. **Mapa Interactivo**: Mostrar rutas en Google Maps
5. **Reseñas**: Sistema de calificación de rutas
6. **Notificaciones**: Email confirmación de registro
7. **Dashboard**: Perfil de usuario y mis rutas

---

## 📧 Información de Contacto (En la app)
- **Teléfono**: +34 91 234 56 78
- **Email**: info@trailforge.com
- **Horario**: Lunes a viernes, 9:00 - 18:00

---

**Creado con ❤️ para los aventureros** 🏔️
