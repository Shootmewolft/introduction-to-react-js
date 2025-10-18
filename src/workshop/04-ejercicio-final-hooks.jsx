/**
 * CLASS 4: FINAL EXERCISE - CUSTOM HOOKS
 * =======================================
 * - Creating custom hooks for reusable logic
 * - Separation of concerns
 * - Encapsulating stateful logic
 */

import { useState, useEffect } from 'react';

// ============================================
// EXAMPLE 1: useCounter - Custom Counter Hook
// ============================================

/**
 * Custom hook to manage a counter
 * Encapsulates counter logic (increment, decrement, reset)
 */
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

/**
 * Component using the useCounter hook
 */
function CounterWithHook() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="counter-example">
      <h2>Counter with Custom Hook</h2>
      <div className="counter">
        <h3>Count: {count}</h3>
        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
      <div className="code-explanation">
        <p>
          ✨ <strong>Custom Hook:</strong> <code>useCounter()</code>
        </p>
        <p>
          This hook encapsulates all counter logic, making it reusable across
          components.
        </p>
      </div>
    </div>
  );
}

// ============================================
// EXAMPLE 2: useFetch - Custom Fetching Hook
// ============================================

/**
 * Custom hook to fetch data from an API
 * Handles loading and error states automatically
 */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

/**
 * Component using the useFetch hook
 */
function UserListWithHook() {
  const {
    data: users,
    loading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/users');

  // Loading state
  if (loading) {
    return (
      <div className="fetch-example">
        <h2>User List with Custom Hook</h2>
        <div className="loading">⏳ Loading users...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="fetch-example">
        <h2>User List with Custom Hook</h2>
        <div className="error">❌ Error: {error}</div>
      </div>
    );
  }

  // Success state
  return (
    <div className="fetch-example">
      <h2>User List with Custom Hook</h2>
      <div className="user-list-simple">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <strong>{user.name}</strong>
            <p>📧 {user.email}</p>
            <p>🏢 {user.company.name}</p>
          </div>
        ))}
      </div>
      <div className="code-explanation">
        <p>
          ✨ <strong>Custom Hook:</strong> <code>useFetch(url)</code>
        </p>
        <p>
          This hook handles fetching, loading, and error states automatically.
          No need to repeat this logic in every component!
        </p>
      </div>
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================
function FinalExercise() {
  const [example, setExample] = useState('counter');

  return (
    <div className="workshop-section">
      <h1>Custom Hooks Examples</h1>

      <div className="selector">
        <button
          onClick={() => setExample('counter')}
          className={example === 'counter' ? 'active' : ''}
        >
          📊 Counter Hook
        </button>
        <button
          onClick={() => setExample('fetch')}
          className={example === 'fetch' ? 'active' : ''}
        >
          🌐 Fetch Hook
        </button>
      </div>

      <div className="example-container">
        {example === 'counter' ? <CounterWithHook /> : <UserListWithHook />}
      </div>

      <div className="key-concepts">
        <h3>🔑 Key Concepts</h3>
        <ul>
          <li>
            <strong>Reusability:</strong> Custom hooks let you reuse stateful
            logic across components
          </li>
          <li>
            <strong>Separation:</strong> Keep component logic separate from UI
          </li>
          <li>
            <strong>Convention:</strong> Custom hooks must start with "use"
          </li>
          <li>
            <strong>Composition:</strong> Hooks can use other hooks (useState,
            useEffect, etc.)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FinalExercise;
