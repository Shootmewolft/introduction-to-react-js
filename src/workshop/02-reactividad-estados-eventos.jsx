/**
 * CLASE 2: REACTIVIDAD - ESTADOS Y EVENTOS
 * =========================================
 * - useState para manejar estado local
 * - Eventos en React
 * - Actualización de estado
 * - Re-renderizado cuando cambia el estado
 */

import { useState } from 'react';

// ============================================
// EXAMPLE 1: Basic Counter
// ============================================
function Counter() {
  // State: value that can change and trigger re-render
  const [count, setCount] = useState(0);

  // Event handler
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

// ============================================
// EXAMPLE 2: Toggle and Conditional Rendering
// ============================================
function ShowHide() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{visible ? 'Hide' : 'Show'}</button>
      {visible && (
        <div className="secret-content">
          <p>🎉 This content is secret!</p>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN COMPONENT FOR DEMONSTRATION
// ============================================
function ReactivityExamples() {
  return (
    <div className="workshop-section">
      <h1>Reactivity: States and Events</h1>

      <section>
        <h3>1. Basic Counter</h3>
        <Counter />
      </section>

      <section>
        <h3>2. Visibility Toggle</h3>
        <ShowHide />
      </section>
    </div>
  );
}

export default ReactivityExamples;
