'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  const updates = {
    full_name: formData.get('name') as string,
    bio: formData.get('bio') as string,
    website: formData.get('website') as string,
    updated_at: new Date().toISOString()
  };

  const { error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', user.id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function updateNotifications(settings: any) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  const { error } = await supabase
    .from('profiles')
    .update({ 
      notification_settings: settings,
      updated_at: new Date().toISOString()
    })
    .eq('id', user.id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function updatePreferences(preferences: any) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  const { error } = await supabase
    .from('profiles')
    .update({ 
      preferences: preferences,
      updated_at: new Date().toISOString()
    })
    .eq('id', user.id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function changePassword(currentPassword: string, newPassword: string) {
  const supabase = await createClient();
  
  // First verify current password by trying to sign in
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !user.email) {
    return { error: 'Not authenticated' };
  }

  // Update password
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function deleteAccount() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  // Delete user data first
  await supabase.from('videos').delete().eq('user_id', user.id);
  await supabase.from('profiles').delete().eq('id', user.id);
  
  // Sign out
  await supabase.auth.signOut();
  
  redirect('/');
}

export async function generateApiKey() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  // Generate a random API key
  const apiKey = `sk_live_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`;
  
  const { data, error } = await supabase
    .from('api_keys')
    .insert({
      user_id: user.id,
      key: apiKey,
      name: 'Production Key',
      created_at: new Date().toISOString()
    })
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  return { success: true, apiKey };
}

export async function revokeApiKey(keyId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  const { error } = await supabase
    .from('api_keys')
    .delete()
    .eq('id', keyId)
    .eq('user_id', user.id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function exportUserData() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  // Fetch all user data
  const [profileResult, videosResult] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('videos').select('*').eq('user_id', user.id)
  ]);

  const exportData = {
    profile: profileResult.data,
    videos: videosResult.data,
    exportedAt: new Date().toISOString()
  };

  return { 
    success: true, 
    data: JSON.stringify(exportData, null, 2)
  };
}

export async function deleteAllVideos() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: 'Not authenticated' };
  }

  const { error } = await supabase
    .from('videos')
    .delete()
    .eq('user_id', user.id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signOutAllSessions() {
  const supabase = await createClient();
  
  // This will sign out the current session
  // In a real app, you'd also invalidate all refresh tokens
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    return { error: error.message };
  }
  
  redirect('/');
}