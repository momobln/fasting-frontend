import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/axios';

export default function Goals(){
  const qc = useQueryClient();
  const list = useQuery({ queryKey:['goals'], queryFn: async()=> (await api.get('/goals')).data });
  const create = useMutation({ mutationFn: (g)=> api.post('/goals',g).then(r=>r.data), onSuccess:()=> qc.invalidateQueries({queryKey:['goals']}) });
  const del = useMutation({ mutationFn: (id)=> api.delete(`/goals/${id}`), onSuccess:()=> qc.invalidateQueries({queryKey:['goals']}) });

  if(list.isLoading) return <p>Loading...</p>;
  return (
    <div style={{maxWidth:600,margin:'20px auto'}}>
      <h2>Goals</h2>
      <button onClick={()=>create.mutate({period:'week',hoursTarget:36})}>Add Weekly 36h</button>
      <ul>
        {list.data.map(g=>(
          <li key={g._id}>
            {g.period} • {g.hoursTarget}h
            <button onClick={()=>del.mutate(g._id)} style={{marginLeft:8}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
