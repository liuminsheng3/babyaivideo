'use client';

import { useState } from 'react';
import { Upload, Video, Sparkles, Settings, Play, Download, Clock, Wand2, ChevronRight, Info, Image, Music, Mic } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateVideoPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'text' | 'image' | 'audio'>('text');
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [duration, setDuration] = useState('5');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [generating, setGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedAudio, setUploadedAudio] = useState<File | null>(null);

  const styles = [
    { id: 'realistic', name: 'Realistic', description: 'Photorealistic quality' },
    { id: 'cartoon', name: 'Cartoon', description: 'Animated style' },
    { id: 'anime', name: 'Anime', description: 'Japanese animation' },
    { id: 'pixar', name: 'Pixar', description: '3D animated style' },
    { id: 'watercolor', name: 'Watercolor', description: 'Artistic painting' },
    { id: 'sketch', name: 'Sketch', description: 'Hand-drawn look' },
  ];

  const promptSuggestions = [
    "A baby taking first steps in a sunny garden",
    "Toddler playing with colorful building blocks",
    "Baby laughing while playing peek-a-boo",
    "Child painting with fingers, creating art",
    "Baby discovering bubbles for the first time",
    "Toddler dancing to music in living room",
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert('Please enter a description for your video');
      return;
    }

    setGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGenerating(false);
      // In production, this would redirect to the actual video page
      router.push('/dashboard/videos/demo-video');
    }, 3000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Image size should be less than 10MB');
        return;
      }
      setUploadedImage(file);
    }
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        alert('Audio size should be less than 50MB');
        return;
      }
      setUploadedAudio(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/dashboard" className="hover:text-gray-700">
              Dashboard
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">Create Video</span>
          </nav>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create New Video</h1>
              <p className="mt-2 text-gray-600">Transform your ideas into engaging baby videos with AI</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Credits: 50</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Input Type Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('text')}
                    className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition ${
                      activeTab === 'text'
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Wand2 className="w-4 h-4 inline mr-2" />
                    Text to Video
                  </button>
                  <button
                    onClick={() => setActiveTab('image')}
                    className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition ${
                      activeTab === 'image'
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Image className="w-4 h-4 inline mr-2" />
                    Image to Video
                  </button>
                  <button
                    onClick={() => setActiveTab('audio')}
                    className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition ${
                      activeTab === 'audio'
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Music className="w-4 h-4 inline mr-2" />
                    Audio to Video
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {/* Text Input */}
                {activeTab === 'text' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Describe your video
                      </label>
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                        placeholder="E.g., A happy baby playing with colorful toys in a bright nursery room..."
                      />
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{prompt.length}/500 characters</span>
                        <button
                          onClick={() => setPrompt('')}
                          className="text-xs text-gray-500 hover:text-gray-700"
                        >
                          Clear
                        </button>
                      </div>
                    </div>

                    {/* Prompt Suggestions */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Need inspiration? Try these:</p>
                      <div className="flex flex-wrap gap-2">
                        {promptSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => setPrompt(suggestion)}
                            className="text-xs px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full hover:bg-purple-100 transition"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Image Upload */}
                {activeTab === 'image' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Reference Image
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
                          {uploadedImage ? (
                            <div className="space-y-2">
                              <Image className="w-12 h-12 text-green-600 mx-auto" />
                              <p className="text-sm text-gray-700">{uploadedImage.name}</p>
                              <p className="text-xs text-gray-500">Click to change</p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                              <p className="text-sm text-gray-700">Click to upload or drag and drop</p>
                              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Motion Description (Optional)
                      </label>
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                        placeholder="Describe how you want the image to animate..."
                      />
                    </div>
                  </div>
                )}

                {/* Audio Upload */}
                {activeTab === 'audio' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Audio File
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition">
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={handleAudioUpload}
                          className="hidden"
                          id="audio-upload"
                        />
                        <label htmlFor="audio-upload" className="cursor-pointer">
                          {uploadedAudio ? (
                            <div className="space-y-2">
                              <Mic className="w-12 h-12 text-green-600 mx-auto" />
                              <p className="text-sm text-gray-700">{uploadedAudio.name}</p>
                              <p className="text-xs text-gray-500">Click to change</p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                              <p className="text-sm text-gray-700">Upload audio or music</p>
                              <p className="text-xs text-gray-500">MP3, WAV up to 50MB</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Visual Theme
                      </label>
                      <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Describe the visual style for your audio..."
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Style Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Visual Style</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {styles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStyle(s.id)}
                    className={`p-4 rounded-lg border-2 transition ${
                      style === s.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-left">
                      <p className="font-medium text-sm text-gray-900">{s.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{s.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Advanced Settings</h3>
                <Settings className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="5">5 seconds</option>
                    <option value="10">10 seconds</option>
                    <option value="15">15 seconds</option>
                    <option value="30">30 seconds</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aspect Ratio
                  </label>
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="16:9">16:9 (Landscape)</option>
                    <option value="9:16">9:16 (Portrait)</option>
                    <option value="1:1">1:1 (Square)</option>
                    <option value="4:3">4:3 (Standard)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quality
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <option>Standard (720p)</option>
                    <option>High (1080p)</option>
                    <option>Ultra (4K)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frame Rate
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <option>24 fps</option>
                    <option>30 fps</option>
                    <option>60 fps</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Generation Button */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <button
                onClick={handleGenerate}
                disabled={generating || (!prompt.trim() && activeTab === 'text') || (!uploadedImage && activeTab === 'image') || (!uploadedAudio && activeTab === 'audio')}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Video
                  </>
                )}
              </button>
              
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div className="text-xs text-purple-700">
                    <p className="font-medium">This will use 10 credits</p>
                    <p className="mt-1">Generation takes 1-2 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Creations */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Creations</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    href={`/dashboard/videos/${i}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded flex items-center justify-center">
                        <Video className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Baby Playing</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <Clock className="w-3 h-3" />
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pro Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Be specific about actions, emotions, and settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Include details about lighting and atmosphere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Mention camera angles for dynamic shots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Use style keywords for consistent aesthetics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}