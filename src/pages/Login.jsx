import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    try {
      await login(email.trim(), password);
      nav('/');
    } catch (e) {
  setErr(e?.response?.data?.error || 'Invalid credentials');
}

  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 360, margin: '40px auto', display: 'grid', gap: 12 }}>
      <h2>Login</h2>
      <input type="email" required placeholder="email"
             value={email} onChange={(e)=>{ setEmail(e.target.value); if (err) setErr(''); }} />
      <input type="password" required placeholder="password"
             value={password} onChange={(e)=>{ setPassword(e.target.value); if (err) setErr(''); }} />
      {err && <div style={{ color: 'crimson' }}>{err}</div>}
      <button type="submit">Login</button>
      <Link to="/signup">No account? Signup</Link>
    </form>
  );
}
