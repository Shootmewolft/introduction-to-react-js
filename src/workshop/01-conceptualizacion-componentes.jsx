/**
 * CLASE 1: INTRODUCCIÓN Y CONCEPTUALIZACIÓN DE COMPONENTES
 * =========================================================
 * - Qué es un componente
 * - Qué conforma un componente (JSX, props, estructura)
 * - Cómo pensar en componentes (división de responsabilidades)
 */

// ============================================
// EXAMPLE 1: Basic Component
// ============================================
// A component is a function that returns JSX
function Greeting() {
  return <h1>Hello World!</h1>;
}

// ============================================
// EXAMPLE 2: Component with Props
// ============================================
// Props are parameters that the component receives
function PersonalizedGreeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old</p>
    </div>
  );
}

// ============================================
// EXAMPLE 3: Thinking in Components - User Card
// ============================================
// Small and reusable component
function Avatar({ url, alt }) {
  return <img src={url} alt={alt} className="avatar" />;
}

function UserInfo({ name, role }) {
  return (
    <div className="info">
      <h3>{name}</h3>
      <span className="role">{role}</span>
    </div>
  );
}

// Component that composes other components
function UserCard({ user }) {
  return (
    <div className="user-card-item">
      <Avatar url={user.avatar} alt={user.name} />
      <UserInfo name={user.name} role={user.role} />
    </div>
  );
}

// ============================================
// EXAMPLE 4: List of Components
// ============================================
function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// ============================================
// EXAMPLE 5: Composition vs Inheritance
// ============================================
// In React we prefer composition
function Container({ title, children }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </div>
  );
}

// Using the container
function CompositionExample() {
  const users = [
    {
      id: 1,
      name: 'Ana',
      role: 'Developer',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Juan',
      role: 'Designer',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'María',
      role: 'Manager',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <Container title="Work Team">
      <UserList users={users} />
    </Container>
  );
}

export default CompositionExample;
