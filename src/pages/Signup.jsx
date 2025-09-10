import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export default function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr(''); setBusy(true);
    try {
      await signup(email.trim(), password);
      nav('/');
    } catch (e) {
      setErr(e?.response?.data?.error || 'Signup failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 360, margin: '40px auto', display: 'grid', gap: 12 }}>
      <h2>Signup</h2>
      <input type="email" required placeholder="email"
             value={email} onChange={(e)=>{ setEmail(e.target.value); if (err) setErr(''); }} />
      <input type="password" required minLength={8} placeholder="password"
             value={password} onChange={(e)=>{ setPassword(e.target.value); if (err) setErr(''); }} />
      {err && <div style={{ color: 'crimson' }}>{err}</div>}
      <button type="submit" disabled={busy}>{busy ? 'Creating…' : 'Create account'}</button>
      <Link to="/login">Have account? Login</Link>
    </form>
  );
}