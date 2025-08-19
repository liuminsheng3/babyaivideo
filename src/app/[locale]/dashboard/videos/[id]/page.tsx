'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Download, Share2, Heart, Eye, Clock, Calendar,
  Play, Pause, Volume2, VolumeX, Maximize, Settings,
  Edit2, Trash2, Copy, ExternalLink, ChevronRight,
  MessageCircle, ThumbsUp, Flag, Info, Sparkles, RefreshCw
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'comments' | 'versions'>('details');

  // Mock data - in production this would come from an API
  const video = {
    id: params.id,
    title: 'Baby\'s First Steps in Garden',
    description: 'A heartwarming video of a baby taking their first steps in a sunny garden, surrounded by colorful flowers and butterflies.',
    url: '/api/video/sample.mp4',
    thumbnail: '/api/placeholder/1280/720',
    duration: '0:15',
    createdAt: '2024-01-15T10:30:00',
    views: 234,
    likes: 45,
    comments: 12,
    status: 'completed',
    style: 'Realistic',
    resolution: '1080p',
    fps: '30',
    fileSize: '15.2 MB',
    prompt: 'A happy baby taking first steps in a sunny garden with colorful flowers',
    aspectRatio: '16:9',
    model: 'BabyAI Pro v2.0',
    processingTime: '1m 23s',
    credits: 10
  };

  const versions = [
    { id: '1', date: '2024-01-15 10:30', changes: 'Original generation', status: 'current' },
    { id: '2', date: '2024-01-15 11:45', changes: 'Enhanced quality', status: 'available' },
    { id: '3', date: '2024-01-15 14:20', changes: 'Added background music', status: 'available' },
  ];

  const comments = [
    { id: '1', user: 'Alice', avatar: '/api/placeholder/40/40', text: 'This is adorable! Great work!', date: '2 hours ago', likes: 5 },
    { id: '2', user: 'Bob', avatar: '/api/placeholder/40/40', text: 'Love the lighting and colors', date: '1 day ago', likes: 3 },
    { id: '3', user: 'Carol', avatar: '/api/placeholder/40/40', text: 'How did you get such smooth animation?', date: '2 days ago', likes: 2 },
  ];

  const relatedVideos = [
    { id: '2', title: 'Toddler Playing with Blocks', thumbnail: '/api/placeholder/320/180', duration: '0:10', views: 189 },
    { id: '3', title: 'Baby Laughing Compilation', thumbnail: '/api/placeholder/320/180', duration: '0:30', views: 567 },
    { id: '4', title: 'Child Painting Art', thumbnail: '/api/placeholder/320/180', duration: '0:20', views: 123 },
  ];

  const handleDownload = () => {
    // In production, this would trigger actual download
    console.log('Downloading video...');
  };

  const handleDelete = () => {
    // In production, this would delete the video
    setShowDeleteModal(false);
    router.push('/dashboard/videos');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Show toast notification
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/dashboard/videos" className="hover:text-gray-700">
            Videos
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">{video.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden shadow-xl">
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Player Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-gray-900" />
                    ) : (
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    )}
                  </button>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <button onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button onClick={() => setIsMuted(!isMuted)}>
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <span className="text-sm">{video.duration}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button>
                        <Settings className="w-5 h-5" />
                      </button>
                      <button>
                        <Maximize className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(video.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {video.processingTime}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-lg border ${
                      isLiked ? 'bg-red-50 border-red-200 text-red-600' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => setShowShareModal(true)}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{video.description}</p>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`py-2 px-4 text-sm font-medium border-b-2 transition ${
                      activeTab === 'details'
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('comments')}
                    className={`py-2 px-4 text-sm font-medium border-b-2 transition ${
                      activeTab === 'comments'
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Comments ({video.comments})
                  </button>
                  <button
                    onClick={() => setActiveTab('versions')}
                    className={`py-2 px-4 text-sm font-medium border-b-2 transition ${
                      activeTab === 'versions'
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Versions
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              {activeTab === 'details' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Style</p>
                      <p className="font-medium">{video.style}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Resolution</p>
                      <p className="font-medium">{video.resolution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Frame Rate</p>
                      <p className="font-medium">{video.fps} fps</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Aspect Ratio</p>
                      <p className="font-medium">{video.aspectRatio}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">File Size</p>
                      <p className="font-medium">{video.fileSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">AI Model</p>
                      <p className="font-medium">{video.model}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Original Prompt</p>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{video.prompt}</p>
                      <button
                        onClick={() => copyToClipboard(video.prompt)}
                        className="mt-2 text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        Copy prompt
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-purple-700">
                      This video used <span className="font-semibold">{video.credits} credits</span>
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'comments' && (
                <div className="space-y-4">
                  {/* Add Comment */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <textarea
                        placeholder="Add a comment..."
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                      />
                      <div className="mt-2 flex justify-end">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <img
                          src={comment.avatar}
                          alt={comment.user}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{comment.user}</span>
                            <span className="text-xs text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-sm text-gray-700">{comment.text}</p>
                          <div className="mt-2 flex items-center gap-4">
                            <button className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              {comment.likes}
                            </button>
                            <button className="text-xs text-gray-500 hover:text-gray-700">
                              Reply
                            </button>
                            <button className="text-xs text-gray-500 hover:text-gray-700">
                              <Flag className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'versions' && (
                <div className="space-y-3">
                  {versions.map((version) => (
                    <div
                      key={version.id}
                      className={`p-4 border rounded-lg ${
                        version.status === 'current'
                          ? 'border-purple-200 bg-purple-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{version.changes}</span>
                            {version.status === 'current' && (
                              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-500">{version.date}</span>
                        </div>
                        {version.status !== 'current' && (
                          <button className="text-sm text-purple-600 hover:text-purple-700">
                            Restore
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-purple-400 hover:text-purple-600 transition flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Generate New Version
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Video
                </button>
                <button className="w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <Edit2 className="w-5 h-5" />
                  Edit Video
                </button>
                <button className="w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Regenerate
                </button>
              </div>
            </div>

            {/* Share Options */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Public Link</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
                <button className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm flex items-center justify-center gap-2">
                  <Copy className="w-4 h-4" />
                  Copy Link
                </button>
                <button className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </button>
              </div>
            </div>

            {/* Related Videos */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Videos</h3>
              <div className="space-y-3">
                {relatedVideos.map((related) => (
                  <Link
                    key={related.id}
                    href={`/dashboard/videos/${related.id}`}
                    className="block hover:bg-gray-50 rounded-lg transition"
                  >
                    <div className="flex gap-3">
                      <div className="w-24 h-14 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={related.thumbnail}
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 line-clamp-2">
                          {related.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{related.duration}</span>
                          <span>•</span>
                          <span>{related.views} views</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h3 className="text-lg font-semibold mb-4">Share Video</h3>
              <div className="space-y-3">
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  Copy link
                </button>
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  Share to Twitter
                </button>
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  Share to Facebook
                </button>
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  Embed video
                </button>
              </div>
              <button
                onClick={() => setShowShareModal(false)}
                className="mt-4 w-full p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h3 className="text-lg font-semibold mb-2">Delete Video</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete "{video.title}"? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDelete}
                  className="flex-1 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}