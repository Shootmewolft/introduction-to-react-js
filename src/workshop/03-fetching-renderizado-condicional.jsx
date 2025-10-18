/**
 * CLASE 3: FETCHING DE DATOS CON RENDERIZADO CONDICIONAL
 * =======================================================
 * - useEffect para efectos secundarios
 * - Fetch de datos desde una API
 * - Estados de carga, éxito y error
 * - Renderizado condicional basado en estados
 */

import { useState, useEffect } from 'react';

// ============================================
// EXAMPLE 1: Basic Fetch with Loading States
// ============================================
function UserListAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an API call
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error in response');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array = runs only once on mount

  // Conditional rendering - Loading state
  if (loading) {
    return <div className="loading">⏳ Loading users...</div>;
  }

  // Conditional rendering - Error state
  if (error) {
    return <div className="error">❌ Error: {error}</div>;
  }

  // Conditional rendering - Success state
  return (
    <div className="user-list-api">
      <h2>Users from API</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================
// EXAMPLE 2: Fetch with async/await (more modern)
// ============================================
function PostListAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        if (!response.ok) {
          throw new Error('Error loading posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>🔄 Loading posts...</div>;
  if (error) return <div>⚠️ Error: {error}</div>;

  return (
    <div className="post-list">
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================
function FetchingExamples() {
  return (
    <div className="workshop-section">
      <h1>Data Fetching and Conditional Rendering</h1>

      <section>
        <h3>1. Basic Fetch with States</h3>
        <UserListAPI />
      </section>

      <section>
        <h3>2. Fetch with Async/Await</h3>
        <PostListAsync />
      </section>
    </div>
  );
}

export default FetchingExamples;
