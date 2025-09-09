import { useState } from 'react';
import { useAuth } from '../auth/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    try {
  await signup(email.trim(), password);
  nav('/');
} catch (err) {
  setErr(err?.response?.data?.error || 'Signup failed');
}

  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 360, margin: '40px auto', display: 'grid', gap: 8 }}>
      <h2>Signup</h2>
      <input type="email" required placeholder="email" value={email}
             onChange={(e) => { setEmail(e.target.value); if (err) setErr(''); }} />
      <input type="password" required placeholder="password" value={password}
             onChange={(e) => { setPassword(e.target.value); if (err) setErr(''); }} />
      {err && <div style={{ color: 'crimson' }}>{err}</div>}
      <button type="submit">Create account</button>
      <Link to="/login">Have account? Login</Link>
    </form>
  );
}
