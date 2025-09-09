import { Link } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { useWeeklyStats } from '../features/stats/hooks';

export default function Dashboard(){
  const { logout } = useAuth();
  const { data, isLoading } = useWeeklyStats();
  return (
    <div style={{maxWidth:600,margin:'20px auto',display:'grid',gap:12}}>
      <h2>Dashboard</h2>
      <nav style={{display:'flex',gap:12}}>
        <Link to="/sessions">Sessions</Link>
        <Link to="/goals">Goals</Link>
        <button onClick={logout}>Logout</button>
      </nav>
      {isLoading ? <p>Loading...</p> :
        <div>
          <div>Total hours (7d): <b>{data.totalHours}</b></div>
          <div>Average/day: <b>{data.avgHours}</b></div>
          <div>Streak: <b>{data.streak}</b> days</div>
        </div>}
    </div>
  );
}
