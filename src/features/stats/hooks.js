import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/axios';

export const useWeeklyStats = () =>
  useQuery({
    queryKey: ['weekly'],
    queryFn: async () => (await api.get('/stats/weekly')).data,
  });
