# Paradise Nursery Shopping Cart

Una aplicación de carrito de compras para una tienda de plantas construida con React, Redux Toolkit y Vite.

## 🌿 Características

- Página de inicio atractiva
- Catálogo de productos con filtros por categoría
- Carrito de compras funcional con Redux
- Gestión de cantidades de productos
- Diseño responsive
- Interfaz moderna y limpia

## 🚀 Instalación y Desarrollo

### Requisitos previos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/paradise-nursery-shopping-cart.git

# Navegar al directorio
cd paradise-nursery-shopping-cart

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

## 📦 Despliegue en GitHub Pages

### Opción 1: Despliegue Automático con GitHub Actions (Recomendado)

1. **Habilitar GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

2. **Hacer push al repositorio:**
   ```bash
   git add .
   git commit -m "Setup project for GitHub Pages"
   git push origin main
   ```

3. El workflow automáticamente construirá y desplegará tu aplicación cuando hagas push a la rama `main`.

### Opción 2: Despliegue Manual con gh-pages

```bash
# Construir el proyecto
npm run build

# Desplegar a GitHub Pages
npm run deploy
```

**Nota:** Para el despliegue manual, necesitas configurar GitHub Pages para usar la rama `gh-pages` en Settings → Pages → Source.

## 🛠️ Tecnologías Utilizadas

- **React** - Biblioteca de UI
- **Redux Toolkit** - Gestión de estado
- **React Router** - Navegación
- **Vite** - Build tool y dev server
- **CSS3** - Estilos

## 📁 Estructura del Proyecto

```
paradise-nursery-shopping-cart/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── redux/          # Store y slices de Redux
│   ├── data/           # Datos de productos
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── public/             # Archivos estáticos
├── .github/
│   └── workflows/      # GitHub Actions workflows
└── package.json
```

## 🌐 Demo

Una vez desplegado, tu aplicación estará disponible en:
`https://tu-usuario.github.io/paradise-nursery-shopping-cart/`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.
