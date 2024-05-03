import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({ queryKey: ['cabin'], queryFn: getCabins });

  if (error) {
    console.error(error);
    throw new Error('Error loading table');
  }

  return { isLoading, cabins, error };
}
