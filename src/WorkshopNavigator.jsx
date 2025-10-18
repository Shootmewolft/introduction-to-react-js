/**
 * NAVEGADOR DE CLASES DEL WORKSHOP
 * Este componente permite navegar fácilmente entre todas las clases
 */

import { useState } from 'react';
import Class1 from './workshop/01-conceptualizacion-componentes';
import Class2 from './workshop/02-reactividad-estados-eventos';
import Class3 from './workshop/03-fetching-renderizado-condicional';
import Class4 from './workshop/04-ejercicio-final-hooks';
import './workshop/estilos-workshop.css';

function WorkshopNavigator() {
  const [currentClass, setCurrentClass] = useState(1);

  const classes = [
    {
      id: 1,
      title: 'Class 1: Component Conceptualization',
      description: 'What they are, how to think about them and structure them',
      component: <Class1 />,
    },
    {
      id: 2,
      title: 'Class 2: Reactivity - States and Events',
      description: 'useState, events, controlled inputs',
      component: <Class2 />,
    },
    {
      id: 3,
      title: 'Class 3: Fetching and Conditional Rendering',
      description: 'useEffect, APIs, loading states',
      component: <Class3 />,
    },
    {
      id: 4,
      title: 'Class 4: Final Exercise - Hooks and Separation',
      description: 'Custom hooks, design patterns',
      component: <Class4 />,
    },
  ];

  const selectedClass = classes.find((c) => c.id === currentClass);

  return (
    <div className="workshop-navigator">
      <nav className="workshop-nav">
        <div className="nav-header">
          <h1>🎓 React Workshop</h1>
          <p>Class material with interactive examples</p>
        </div>
        <div className="nav-buttons">
          {classes.map((classItem) => (
            <button
              key={classItem.id}
              className={currentClass === classItem.id ? 'active' : ''}
              onClick={() => setCurrentClass(classItem.id)}
            >
              <div className="button-content">
                <strong>{classItem.title}</strong>
                <small>{classItem.description}</small>
              </div>
            </button>
          ))}
        </div>
      </nav>

      <main className="workshop-content">{selectedClass?.component}</main>

      <style>{`
        .workshop-navigator {
          min-height: 100vh;
          background: #f5f5f5;
        }

        .workshop-nav {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .nav-header h1 {
          margin: 0;
          font-size: 2.5em;
        }

        .nav-header p {
          margin: 10px 0 0 0;
          opacity: 0.9;
        }

        .nav-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .nav-buttons button {
          background: white;
          color: #333;
          border: none;
          padding: 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nav-buttons button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .nav-buttons button.active {
          background: #646cff;
          color: white;
          transform: scale(1.05);
        }

        .button-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .button-content strong {
          font-size: 1.1em;
        }

        .button-content small {
          opacity: 0.8;
          font-size: 0.9em;
        }

        .workshop-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .workshop-footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 20px;
          margin-top: 40px;
        }

        .workshop-footer p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .nav-buttons {
            grid-template-columns: 1fr;
          }

          .nav-header h1 {
            font-size: 1.8em;
          }
        }
      `}</style>
    </div>
  );
}

export default WorkshopNavigator;
