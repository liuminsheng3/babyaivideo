import { createClient } from '@/lib/supabase/server';
import { Video, CreditCard, Activity, Film } from 'lucide-react';
import Link from 'next/link';

async function getDashboardData(userId: string) {
  const supabase = await createClient();
  
  const [profileResult, videosResult] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', userId).single(),
    supabase.from('videos').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(5)
  ]);

  return {
    profile: profileResult.data,
    recentVideos: videosResult.data || []
  };
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;

  const { profile, recentVideos } = await getDashboardData(user.id);

  const stats = [
    { 
      name: 'Total Videos', 
      value: recentVideos.length || 0, 
      icon: Video,
      color: 'bg-blue-500'
    },
    { 
      name: 'Credits Remaining', 
      value: profile?.credits || 0, 
      icon: CreditCard,
      color: 'bg-green-500'
    },
    { 
      name: 'Videos Processing', 
      value: recentVideos.filter(v => v.status === 'processing').length || 0, 
      icon: Activity,
      color: 'bg-yellow-500'
    },
    { 
      name: 'Completed Videos', 
      value: recentVideos.filter(v => v.status === 'completed').length || 0, 
      icon: Film,
      color: 'bg-purple-500'
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {profile?.full_name || user.email}!</h1>
        <p className="text-gray-600 mt-2">Here's an overview of your Baby AI Video activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Recent Videos</h2>
            <Link 
              href="/dashboard/videos" 
              className="text-primary hover:underline text-sm"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="p-6">
          {recentVideos.length > 0 ? (
            <div className="space-y-4">
              {recentVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Video className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{video.title || 'Untitled Video'}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(video.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      video.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : video.status === 'processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : video.status === 'failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {video.status}
                    </span>
                    {video.status === 'completed' && (
                      <Link 
                        href={`/dashboard/videos/${video.id}`}
                        className="text-primary hover:underline text-sm"
                      >
                        View
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">No videos yet</p>
              <Link 
                href="/dashboard/create" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Create your first video
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link 
              href="/dashboard/create"
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <span className="font-medium">Create New Video</span>
              <span className="text-gray-400">→</span>
            </Link>
            <Link 
              href="/dashboard/credits"
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <span className="font-medium">Buy More Credits</span>
              <span className="text-gray-400">→</span>
            </Link>
            <Link 
              href="/dashboard/settings"
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <span className="font-medium">Account Settings</span>
              <span className="text-gray-400">→</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Plan</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Current Plan</span>
              <span className="font-medium">{profile?.subscription_tier || 'Free'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Credits Available</span>
              <span className="font-medium">{profile?.credits || 0}</span>
            </div>
            {profile?.subscription_tier === 'free' && (
              <Link 
                href="/dashboard/upgrade"
                className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90"
              >
                Upgrade to Pro
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}