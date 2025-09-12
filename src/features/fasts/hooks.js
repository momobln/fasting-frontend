import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../api/axios'
import { useAuth } from '../../auth/useAuth'

export const useFasts = () => {
  const { token } = useAuth()
  return useQuery({
    queryKey: ['fasts'],
    queryFn: async () => (await api.get('/fasts')).data,
    enabled: !!token,
  })
}

export const useStartFast = () => {
  const qc = useQueryClient()
  return useMutation({
		mutationFn: (p) => api.post("/fasts/start", p).then((r) => r.data),
		onSuccess: () => qc.invalidateQueries({ queryKey: ["fasts"] }),
		onError: (error) =>
			console.warn(
				"⚠️ Error:",
				error.response.data?.error,
				"| Error details: ",
				error.response.data?.details[0]?.message
			),
  });
}

export const useStopFast = () => {
  const qc = useQueryClient()
  return useMutation({
		mutationFn: (id) => api.post(`/fasts/${id}/stop`).then((r) => r.data),
		onSuccess: () => qc.invalidateQueries({ queryKey: ["fasts"] }),
		onError: (error) =>
			console.warn(
				"⚠️ Error:",
				error.response.data?.error,
				"| Error details: ",
				error.response.data?.details[0]?.message
			),
  });
}

export const useWeeklyStats = () => {            
  const { token } = useAuth()
  return useQuery({
    queryKey: ['weekly'],
    queryFn: async () => (await api.get('/stats/weekly')).data,
    enabled: !!token,
    retry: false,
  })
}
