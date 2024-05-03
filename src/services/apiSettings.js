import supabase from './supabase';

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*');

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }

  return data;
}

export async function updateSettings(newSetting) {
  //All settings are on one row only with an Id of 1, hence we only need to update Id=1
  const { data, error } = await supabase
    .from('settings')
    .update(newSetting)
    .eq('id', 1)
    .select('*')
    .single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be updated');
  }
  return data;
}
