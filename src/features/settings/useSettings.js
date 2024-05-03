import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({ queryKey: ['settings'], queryFn: getSettings });

  if (error) {
    console.error(error);
    throw new Error('Error loading settings');
  }

  return { isLoading, settings, error };
}
