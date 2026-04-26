# 🎨 Guía de Diseño Web - Uteroo

## 📱 Sobre Uteroo
**Uteroo** es una app de cuidado menstrual con un enfoque amigable, cálido y femenino. La identidad visual se centra en tonos rosados suaves, tipografía clara y un diseño minimalista que transmite confianza y calidez.

---

## 🎨 Paleta de Colores

### Colores Principales
```css
--primary: #EC407A;           /* Rosa principal (Pink 400) */
--primary-light: #F8BBD0;     /* Rosa claro (Pink 100) */
--primary-dark: #D81B60;      /* Rosa oscuro (Pink 600) */
--primary-ultra-light: #FCE4EC; /* Rosa ultra claro (Pink 50) */
```

### Colores de Fondo
```css
--background: #FFFFFF;        /* Blanco puro */
--background-grey: #F5F5F5;   /* Gris muy claro (Grey 100) */
--background-pink: #FCE4EC;   /* Rosa pastel (Pink 50) */
```

### Colores de Texto
```css
--text-primary: #424242;      /* Gris oscuro (Grey 800) */
--text-secondary: #757575;    /* Gris medio (Grey 600) */
--text-light: #616161;        /* Gris (Grey 700) */
--text-lighter: #9E9E9E;      /* Gris claro (Grey 500) */
--text-disabled: #BDBDBD;     /* Gris muy claro (Grey 400) */
```

### Colores de Estado
```css
--success: #4CAF50;           /* Verde */
--error: #F44336;             /* Rojo */
--warning: #FF9800;           /* Naranja */
```

---

## 🔤 Tipografía

### Fuentes Recomendadas
**Opción 1 (Moderna y Suave):**
- **Títulos:** `Poppins` (Bold, 600-700)
- **Cuerpo:** `Inter` (Regular, 400-500)

**Opción 2 (Clásica y Elegante):**
- **Títulos:** `Montserrat` (Bold, 600-700)
- **Cuerpo:** `Open Sans` (Regular, 400)

**Opción 3 (Amigable y Redondeada):**
- **Títulos:** `Quicksand` (Bold, 600-700)
- **Cuerpo:** `Nunito` (Regular, 400)

### Tamaños de Texto
```css
/* Títulos */
--title-xlarge: 48px;         /* Título principal de landing */
--title-large: 32px;          /* Títulos de sección */
--title-medium: 24px;         /* Subtítulos importantes */
--title-small: 20px;          /* Subtítulos secundarios */

/* Cuerpo */
--body-large: 18px;           /* Texto destacado */
--body: 16px;                 /* Texto normal */
--body-small: 14px;           /* Texto secundario */
--caption: 12px;              /* Etiquetas pequeñas */
```

### Pesos de Fuente
```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## 📐 Espaciado y Layout

### Sistema de Espaciado (múltiplos de 8px)
```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-xxl: 64px;
```

### Bordes Redondeados
```css
--radius-small: 8px;          /* Elementos pequeños */
--radius-medium: 12px;        /* Botones, cards */
--radius-large: 16px;         /* Contenedores grandes */
--radius-xlarge: 20px;        /* Modales, secciones */
--radius-full: 9999px;        /* Círculos perfectos */
```

### Ancho Máximo de Contenido
```css
--max-width-content: 1200px;  /* Ancho máximo del contenido */
--max-width-text: 800px;      /* Ancho máximo para texto legible */
--max-width-form: 400px;      /* Ancho máximo para formularios */
```

---

## 🏠 PÁGINA PRINCIPAL (Landing Page)

### Estructura General
```
┌─────────────────────────────────────┐
│         HEADER / NAVBAR             │
├─────────────────────────────────────┤
│                                     │
│         HERO SECTION                │
│    (Título + Subtítulo + CTA)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      CARACTERÍSTICAS (3 cards)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         SOBRE LA APP                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           FOOTER                    │
│                                     │
└─────────────────────────────────────┘
```

---

### 1. HERO SECTION (Sección Principal)

#### Diseño Visual
- **Fondo:** Gradiente suave de rosa claro a blanco
  ```css
  background: linear-gradient(180deg, #F8BBD0 0%, #FCE4EC 50%, #FFFFFF 100%);
  ```
- **Altura:** 100vh (pantalla completa)
- **Alineación:** Centrado vertical y horizontal

#### Contenido

**Título Principal:**
```
¡Bienvenida a Uteroo!
```
- **Tamaño:** 48px (móvil: 32px)
- **Color:** `#EC407A` (rosa principal)
- **Peso:** Bold (700)
- **Alineación:** Centro

**Subtítulo:**
```
Tu compañera para el cuidado menstrual
```
- **Tamaño:** 18px (móvil: 16px)
- **Color:** `#616161` (gris)
- **Peso:** Regular (400)
- **Alineación:** Centro
- **Margen superior:** 16px

**Descripción (opcional):**
```
Lleva el control de tu ciclo, cuida de tu mascota virtual 
y encuentra bienestar en cada fase.
```
- **Tamaño:** 16px
- **Color:** `#757575` (gris secundario)
- **Peso:** Regular (400)
- **Alineación:** Centro
- **Margen superior:** 24px
- **Ancho máximo:** 600px

**Ícono/Imagen:**
- Corazón rosa grande (♥) o logo de la app
- **Tamaño:** 100px
- **Color:** `#F8BBD0` (rosa claro)
- **Posición:** Arriba del título
- **Margen inferior:** 24px

**Botones (si los agregas después):**
- Espaciado entre botones: 16px
- Ancho: 280px
- Altura: 48px
- Border radius: 25px (redondeados)

---

### 2. SECCIÓN DE CARACTERÍSTICAS

#### Diseño Visual
- **Fondo:** Blanco puro `#FFFFFF`
- **Padding:** 64px vertical, 32px horizontal
- **Ancho máximo:** 1200px centrado

#### Título de Sección
```
¿Qué hace especial a Uteroo?
```
- **Tamaño:** 32px (móvil: 24px)
- **Color:** `#EC407A` (rosa principal)
- **Peso:** Bold (700)
- **Alineación:** Centro
- **Margen inferior:** 48px

#### Cards de Características (3 columnas)

**Card 1: Seguimiento del Ciclo**
```
🗓️ Seguimiento del Ciclo
Registra tu periodo y conoce en qué fase estás. 
Predice tu próximo ciclo con precisión.
```

**Card 2: Mascota Virtual**
```
🐾 Mascota Virtual
Cuida de tu compañera virtual. Aliméntala, 
vístela y explora juntas en cada fase.
```

**Card 3: Bienestar**
```
💆‍♀️ Bienestar
Tips personalizados, meditaciones y un espacio 
para liberar tus preocupaciones.
```

#### Estilo de Cards
```css
.feature-card {
  background: #F5F5F5;           /* Gris claro */
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);   /* Efecto hover sutil */
  box-shadow: 0 8px 24px rgba(236, 64, 122, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: #424242;
  margin-bottom: 12px;
}

.feature-description {
  font-size: 14px;
  color: #757575;
  line-height: 1.6;
}
```

---

### 3. SECCIÓN "SOBRE LA APP"

#### Diseño Visual
- **Fondo:** Gradiente suave invertido
  ```css
  background: linear-gradient(180deg, #FFFFFF 0%, #FCE4EC 100%);
  ```
- **Padding:** 64px vertical, 32px horizontal

#### Contenido
```
Diseñada con amor para ti

Uteroo es más que una app de seguimiento menstrual. 
Es tu espacio seguro para entender tu cuerpo, cuidar 
de tu bienestar emocional y acompañarte en cada etapa 
de tu ciclo.

Con Uteroo puedes:
✨ Predecir tu próximo periodo
✨ Entender tus fases del ciclo
✨ Cuidar de tu mascota virtual
✨ Encontrar paz con meditaciones guiadas
✨ Liberar tus preocupaciones en un espacio privado
```

#### Estilo
- **Título:** 32px, Bold, Rosa principal
- **Párrafo:** 16px, Regular, Gris oscuro
- **Lista:** 16px, Regular, Gris oscuro con emoji
- **Alineación:** Centro
- **Ancho máximo:** 800px

---

### 4. FOOTER

#### Diseño Visual
- **Fondo:** `#424242` (gris oscuro)
- **Color de texto:** `#FFFFFF` (blanco)
- **Padding:** 32px vertical, 24px horizontal

#### Contenido
```
© 2026 Uteroo - Tu compañera menstrual

Hecho con ♥ para ti
```

#### Estilo
```css
.footer {
  background: #424242;
  color: #FFFFFF;
  text-align: center;
  padding: 32px 24px;
  font-size: 14px;
}

.footer-heart {
  color: #EC407A;
  font-size: 16px;
}
```

---

## ✉️ PÁGINA DE VERIFICACIÓN DE EMAIL

### Estructura
```
┌─────────────────────────────────────┐
│                                     │
│         CONTENEDOR CENTRADO         │
│                                     │
│  ┌───────────────────────────────┐  │
│  │         ÍCONO GRANDE          │  │
│  │                               │  │
│  │          TÍTULO               │  │
│  │                               │  │
│  │         MENSAJE               │  │
│  │                               │  │
│  │    [BOTÓN (opcional)]         │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

---

### ESTADO: VERIFICANDO (Loading)

#### Diseño Visual
- **Fondo:** Gradiente suave (igual que hero)
  ```css
  background: linear-gradient(180deg, #F8BBD0 0%, #FCE4EC 50%, #FFFFFF 100%);
  ```
- **Altura:** 100vh
- **Alineación:** Centrado vertical y horizontal

#### Contenido

**Ícono:**
- Spinner animado o ícono de email
- **Tamaño:** 80px
- **Color:** `#EC407A` (rosa principal)
- **Animación:** Rotación suave

**Título:**
```
Verificando tu cuenta...
```
- **Tamaño:** 24px
- **Color:** `#EC407A` (rosa principal)
- **Peso:** Bold (700)
- **Margen superior:** 24px

**Mensaje:**
```
Espera un momento mientras confirmamos tu email.
```
- **Tamaño:** 16px
- **Color:** `#757575` (gris secundario)
- **Peso:** Regular (400)
- **Margen superior:** 16px

---

### ESTADO: ÉXITO ✅

#### Ícono
- ✅ Check verde en círculo
- **Tamaño:** 80px
- **Color:** `#4CAF50` (verde éxito)

#### Título
```
¡Cuenta Verificada!
```
- **Tamaño:** 24px
- **Color:** `#4CAF50` (verde éxito)
- **Peso:** Bold (700)

#### Mensaje
```
Tu email ha sido verificado exitosamente.

Ya puedes iniciar sesión en la app Uteroo 
y comenzar a cuidar de tu ciclo.
```
- **Tamaño:** 16px
- **Color:** `#424242` (gris oscuro)
- **Peso:** Regular (400)
- **Alineación:** Centro
- **Line height:** 1.6
- **Margen superior:** 16px

#### Mensaje Secundario (opcional)
```
Puedes cerrar esta ventana.
```
- **Tamaño:** 14px
- **Color:** `#9E9E9E` (gris claro)
- **Margen superior:** 24px

---

### ESTADO: ERROR ❌

#### Ícono
- ❌ X roja en círculo
- **Tamaño:** 80px
- **Color:** `#F44336` (rojo error)

#### Título
```
Error de Verificación
```
- **Tamaño:** 24px
- **Color:** `#F44336` (rojo error)
- **Peso:** Bold (700)

#### Mensaje
```
No pudimos verificar tu cuenta.

El enlace puede haber expirado o ya fue usado.
Por favor, solicita un nuevo enlace de verificación 
desde la app.
```
- **Tamaño:** 16px
- **Color:** `#424242` (gris oscuro)
- **Peso:** Regular (400)
- **Alineación:** Centro
- **Line height:** 1.6
- **Margen superior:** 16px

---

### ESTADO: TOKEN EXPIRADO ⏰

#### Ícono
- ⏰ Reloj
- **Tamaño:** 80px
- **Color:** `#FF9800` (naranja warning)

#### Título
```
Enlace Expirado
```
- **Tamaño:** 24px
- **Color:** `#FF9800` (naranja warning)
- **Peso:** Bold (700)

#### Mensaje
```
Este enlace de verificación ha expirado.

Por seguridad, los enlaces solo son válidos por 24 horas.
Solicita un nuevo enlace desde la app.
```
- **Tamaño:** 16px
- **Color:** `#424242` (gris oscuro)
- **Peso:** Regular (400)
- **Alineación:** Centro
- **Line height:** 1.6
- **Margen superior:** 16px

---

## 🎨 Estilos del Contenedor de Verificación

```css
.verification-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #F8BBD0 0%, #FCE4EC 50%, #FFFFFF 100%);
  padding: 24px;
}

.verification-card {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 48px 32px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.verification-icon {
  font-size: 80px;
  margin-bottom: 24px;
  animation: fadeIn 0.5s ease-in;
}

.verification-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.verification-message {
  font-size: 16px;
  color: #424242;
  line-height: 1.6;
  margin-bottom: 24px;
}

.verification-secondary {
  font-size: 14px;
  color: #9E9E9E;
}

/* Animación suave */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Spinner de carga */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 640px) {
  --title-xlarge: 32px;
  --title-large: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  --title-xlarge: 40px;
  --title-large: 28px;
}

/* Desktop */
@media (min-width: 1025px) {
  /* Usar valores por defecto */
}
```

### Ajustes Móviles
- **Hero:** Reducir tamaño de título y espaciado
- **Cards:** Apilar en columna única
- **Padding:** Reducir a 16px en los lados
- **Botones:** Ancho completo (100%)

---

## ✨ Animaciones y Transiciones

### Transiciones Suaves
```css
/* Hover en cards */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Fade in de elementos */
animation: fadeIn 0.5s ease-in;

/* Hover en botones */
transition: background-color 0.2s ease, transform 0.1s ease;
```

### Efectos Hover
```css
/* Cards */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(236, 64, 122, 0.15);
}

/* Botones */
.button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(236, 64, 122, 0.3);
}
```

---

## 🎯 Principios de Diseño

### 1. Minimalismo
- Espacios en blanco generosos
- Elementos limpios y claros
- Sin sobrecarga visual

### 2. Calidez
- Colores suaves y acogedores
- Lenguaje amigable y cercano
- Iconos redondeados

### 3. Accesibilidad
- Contraste adecuado (mínimo 4.5:1)
- Tamaños de texto legibles
- Espaciado táctil (mínimo 44px)

### 4. Consistencia
- Usar siempre los mismos colores
- Mantener espaciado uniforme
- Tipografía coherente

---

## 📝 Textos y Copywriting

### Tono de Voz
- **Amigable:** Como hablar con una amiga
- **Cálido:** Acogedor y comprensivo
- **Empoderador:** Positivo y motivador
- **Claro:** Directo y fácil de entender

### Ejemplos de Frases

**Para Hero:**
- "Tu compañera para el cuidado menstrual"
- "Entiende tu ciclo, cuida tu bienestar"
- "Tu ciclo, tu mascota, tu bienestar"

**Para Características:**
- "Conoce tu cuerpo como nunca antes"
- "Una amiga virtual que te acompaña"
- "Encuentra paz en cada fase"

**Para Verificación:**
- "¡Bienvenida a la familia Uteroo!"
- "Tu cuenta está lista"
- "Estamos verificando tu información"

---

## 🖼️ Recursos Visuales

### Iconos Recomendados
- **Biblioteca:** Font Awesome, Material Icons, o Heroicons
- **Estilo:** Redondeados y suaves
- **Tamaño:** 24px-48px para iconos funcionales

### Imágenes
- **Estilo:** Ilustraciones suaves o fotos con filtro cálido
- **Colores:** Tonos rosados y pasteles
- **Formato:** SVG para iconos, WebP para fotos

### Emojis Sugeridos
- ♥️ Corazón (logo/marca)
- 🗓️ Calendario (ciclo)
- 🐾 Huella (mascota)
- 💆‍♀️ Spa (bienestar)
- ✨ Brillos (éxito/magia)
- ✅ Check (verificación exitosa)
- ❌ X (error)
- ⏰ Reloj (expirado)

---

## 🚀 Implementación Técnica

### HTML Semántico
```html
<header>
  <nav>...</nav>
</header>

<main>
  <section class="hero">...</section>
  <section class="features">...</section>
  <section class="about">...</section>
</main>

<footer>...</footer>
```

### CSS Moderno
- Usar CSS Grid y Flexbox
- Variables CSS para colores y espaciado
- Mobile-first approach

### Performance
- Optimizar imágenes (WebP, lazy loading)
- Minificar CSS y JS
- Usar fuentes web optimizadas

---

## 📋 Checklist de Implementación

### Página Principal
- [ ] Hero con gradiente rosa
- [ ] Título "¡Bienvenida a Uteroo!"
- [ ] Subtítulo descriptivo
- [ ] Ícono de corazón
- [ ] 3 cards de características
- [ ] Sección "Sobre la app"
- [ ] Footer con copyright

### Página de Verificación
- [ ] Contenedor centrado con card blanca
- [ ] Estado: Verificando (spinner)
- [ ] Estado: Éxito (check verde)
- [ ] Estado: Error (X roja)
- [ ] Estado: Expirado (reloj naranja)
- [ ] Animaciones suaves
- [ ] Responsive en móvil

### General
- [ ] Colores consistentes
- [ ] Tipografía clara
- [ ] Espaciado uniforme
- [ ] Responsive design
- [ ] Animaciones suaves
- [ ] Accesibilidad (contraste, tamaños)

---

## 💡 Tips Finales

1. **Mantén la simplicidad:** Menos es más
2. **Usa espacios en blanco:** Respira el diseño
3. **Consistencia visual:** Mismos colores y estilos
4. **Prueba en móvil:** La mayoría de usuarias usarán móvil
5. **Optimiza velocidad:** Carga rápida = mejor experiencia
6. **Accesibilidad primero:** Diseña para todas

---

**¡Buena suerte con tu página web! 🚀💕**

Si necesitas ajustes o más detalles, ¡avísame!
