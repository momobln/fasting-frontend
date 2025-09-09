import { useFasts, useStartFast, useStopFast } from '../features/fasts/hooks';

export default function Sessions() {
  const { data:list=[], isLoading } = useFasts();
  const start = useStartFast();
  const stop = useStopFast();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{maxWidth:600,margin:'20px auto'}}>
      <h2>Fasts</h2>
      <div style={{display:'flex',gap:8,margin:'12px 0'}}>
        {[8,12,21].map(h=>(
          <button key={h} onClick={()=>start.mutate(h)}>Start {h}h</button>
        ))}
      </div>
      <ul>
        {list.map(s=>(
          <li key={s._id} style={{display:'flex',gap:12,alignItems:'center',margin:'6px 0'}}>
            <span>{new Date(s.startAt).toLocaleString()} • {s.preset}h</span>
            {!s.endAt ? (
              <button onClick={()=>stop.mutate(s._id)}>Stop</button>
            ) : (
              <span>Done • {s.durationMins ?? '-'} mins</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
