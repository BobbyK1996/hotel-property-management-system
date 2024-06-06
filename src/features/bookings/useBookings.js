import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({ queryKey: ['bookings'], queryFn: getBookings });

  if (error) {
    console.error(error);
    throw new Error('Error loading table');
  }

  return { isLoading, bookings, error };
}
