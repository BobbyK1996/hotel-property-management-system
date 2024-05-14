import supabase from './supabase';

export async function getBookings() {
  const { data, error } = await supabase.from('bookings').select('*');

  if (error) {
    console.error(error);
    throw new Error('Booking not found');
  }

  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, cabins(*), guests(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking not found');
  }

  return data;
}
