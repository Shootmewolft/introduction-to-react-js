# 🎓 Workshop de React - Guía Rápida

## ✅ Material Creado

He creado un workshop completo de React con 4 clases progresivas, cada una con ejemplos de código interactivos.

## 📁 Estructura de Archivos

```
src/
├── workshop/
│   ├── 01-conceptualizacion-componentes.jsx    # Clase 1
│   ├── 02-reactividad-estados-eventos.jsx      # Clase 2
│   ├── 03-fetching-renderizado-condicional.jsx # Clase 3
│   ├── 04-ejercicio-final-hooks.jsx            # Clase 4
│   ├── estilos-workshop.css                    # Estilos
│   └── README.md                               # Documentación
├── WorkshopNavigator.jsx                        # Navegador de clases
└── App.jsx                                      # Punto de entrada
```

## 🚀 Cómo Usar

### 1. Ejecuta el proyecto

```bash
npm run dev
```

### 2. Navega por las clases

La aplicación carga automáticamente con un navegador que te permite:
- Ver las 4 clases del workshop
- Cambiar entre clases con un solo clic
- Interactuar con todos los ejemplos

### 3. Durante tu Workshop

Puedes presentar de dos formas:

#### Opción A: Usar el Navegador (Recomendado)
- Abre la aplicación y usa los botones para cambiar entre clases
- Todos los ejemplos son interactivos
- Perfecto para demo en vivo

#### Opción B: Editar el código en vivo
- Abre cada archivo en VS Code
- Modifica los ejemplos en tiempo real
- Los cambios se reflejan instantáneamente (HMR)

## 📚 Contenido de Cada Clase

### Clase 1: Conceptualización de Componentes
- ✅ Componentes básicos
- ✅ Props y composición
- ✅ Pensamiento en componentes
- ✅ Ejemplos: Tarjetas de usuario, listas

### Clase 2: Reactividad - Estados y Eventos
- ✅ useState hook
- ✅ Eventos y handlers
- ✅ Inputs controlados
- ✅ Ejemplos: Contador, formularios, TODO list

### Clase 3: Fetching y Renderizado Condicional
- ✅ useEffect hook
- ✅ Llamadas a APIs
- ✅ Estados de carga/error
- ✅ Ejemplos: Usuarios, posts, búsqueda con debouncing

### Clase 4: Ejercicio Final con Hooks
- ✅ Custom hooks
- ✅ Separación de responsabilidades
- ✅ Patrones de diseño
- ✅ Proyectos completos: Gestor de tareas, Directorio de usuarios

## 💡 Tips para el Instructor

1. **Progresión**: Cada clase construye sobre la anterior
2. **Interactividad**: Todos los ejemplos son funcionales
3. **Ejercicios**: Cada clase tiene ejercicios propuestos al final
4. **Live Coding**: Puedes modificar el código en vivo
5. **DevTools**: Muestra las React DevTools durante las demos

## 🎯 Ejercicios para Estudiantes

Cada archivo tiene ejercicios comentados al final. Los estudiantes pueden:
- Clase 1: Crear tarjeta de producto
- Clase 2: Crear carrito de compras
- Clase 3: Buscador de productos con API
- Clase 4: Aplicación de películas completa (proyecto final)

## 🛠 Personalización

### Para usar una clase específica:

```jsx
// En App.jsx
import Clase1 from './workshop/01-conceptualizacion-componentes';

function App() {
  return <Clase1 />;
}
```

### Para agregar más contenido:

Simplemente edita los archivos en `src/workshop/` y agrega tus propios ejemplos.

## 📖 Documentación Adicional

Revisa `src/workshop/README.md` para información más detallada sobre:
- Estructura completa
- Objetivos de aprendizaje
- Recursos adicionales
- Tips pedagógicos

## ✨ Features Destacadas

- 🎨 **Interfaz moderna**: Navegación intuitiva con gradientes
- 🔄 **Ejemplos vivos**: Todos los componentes son interactivos
- 📱 **Responsive**: Funciona en móviles y tablets
- 🎯 **Progresivo**: De lo simple a lo complejo
- 💾 **Persistencia**: La Clase 4 usa localStorage
- 🌐 **APIs reales**: Integración con JSONPlaceholder

## 🐛 Troubleshooting

Si algo no funciona:
1. Asegúrate de tener `npm install` ejecutado
2. Verifica que estés usando Node.js 16+
3. Revisa la consola del navegador para errores
4. Para APIs, necesitas conexión a internet

---

¡Listo para empezar tu workshop! 🚀

Si necesitas modificar algo o agregar más contenido, simplemente edita los archivos en `src/workshop/`.
