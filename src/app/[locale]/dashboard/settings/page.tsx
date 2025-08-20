'use client';

import { useState } from 'react';
import { 
  User, Bell, Shield, Palette, Globe, CreditCard, 
  Key, Database, Mail, Smartphone, Monitor, Moon,
  Sun, Save, Camera, Upload, Check, AlertCircle,
  Lock, LogOut, Trash2, Download, ChevronRight,
  ToggleLeft, Volume2, Zap, Eye, EyeOff
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Creative content creator passionate about AI-generated videos',
    website: 'https://johndoe.com',
    avatar: '/api/placeholder/150/150'
  });
  
  const [notifications, setNotifications] = useState({
    emailVideoComplete: true,
    emailCreditsLow: true,
    emailNewFeatures: false,
    emailMarketing: false,
    pushVideoComplete: true,
    pushCreditsLow: true,
    pushComments: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC-5',
    videoQuality: '1080p',
    autoDownload: false,
    soundEffects: true,
    animations: true,
    compactMode: false
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'preferences', label: 'Preferences', icon: <Palette className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'api', label: 'API', icon: <Key className="w-4 h-4" /> },
    { id: 'data', label: 'Data & Privacy', icon: <Database className="w-4 h-4" /> },
  ];

  const handleSaveProfile = () => {
    // Save profile logic
    console.log('Saving profile:', profileData);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle avatar upload
      console.log('Uploading avatar:', file);
    }
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Change password logic
    console.log('Changing password');
    setShowPasswordModal(false);
  };

  const handleDeleteAccount = () => {
    // Delete account logic
    console.log('Deleting account');
    setShowDeleteModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-left transition ${
                    activeTab === tab.id
                      ? 'bg-purple-50 text-purple-600 border-l-3 border-purple-600'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                  <ChevronRight className={`w-4 h-4 ml-auto ${
                    activeTab === tab.id ? 'text-purple-600' : 'text-gray-400'
                  }`} />
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                
                {/* Avatar */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Picture
                  </label>
                  <div className="flex items-center gap-4">
                    <img
                      src={profileData.avatar}
                      alt="Avatar"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                        id="avatar-upload"
                      />
                      <label
                        htmlFor="avatar-upload"
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer inline-flex items-center gap-2"
                      >
                        <Upload className="w-4 h-4" />
                        Upload New
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={profileData.website}
                      onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleSaveProfile}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                
                {/* Email Notifications */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Notifications
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Video Generation Complete</p>
                        <p className="text-sm text-gray-500">Get notified when your videos are ready</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.emailVideoComplete}
                        onChange={(e) => setNotifications({ ...notifications, emailVideoComplete: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Low Credits Alert</p>
                        <p className="text-sm text-gray-500">Alert when credits fall below 10</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.emailCreditsLow}
                        onChange={(e) => setNotifications({ ...notifications, emailCreditsLow: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">New Features</p>
                        <p className="text-sm text-gray-500">Updates about new features and improvements</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.emailNewFeatures}
                        onChange={(e) => setNotifications({ ...notifications, emailNewFeatures: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Marketing & Promotions</p>
                        <p className="text-sm text-gray-500">Special offers and promotional content</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.emailMarketing}
                        onChange={(e) => setNotifications({ ...notifications, emailMarketing: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>
                  </div>
                </div>

                {/* Push Notifications */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Push Notifications
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Video Generation Complete</p>
                        <p className="text-sm text-gray-500">Browser notification when videos are ready</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.pushVideoComplete}
                        onChange={(e) => setNotifications({ ...notifications, pushVideoComplete: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Low Credits Alert</p>
                        <p className="text-sm text-gray-500">Browser alert for low credits</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.pushCreditsLow}
                        onChange={(e) => setNotifications({ ...notifications, pushCreditsLow: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Comments & Mentions</p>
                        <p className="text-sm text-gray-500">When someone comments on your videos</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notifications.pushComments}
                        onChange={(e) => setNotifications({ ...notifications, pushComments: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Application Preferences</h2>
                
                <div className="space-y-6">
                  {/* Theme */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Theme
                    </label>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setPreferences({ ...preferences, theme: 'light' })}
                        className={`flex-1 p-3 border rounded-lg flex items-center justify-center gap-2 ${
                          preferences.theme === 'light'
                            ? 'border-purple-600 bg-purple-50 text-purple-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Sun className="w-5 h-5" />
                        Light
                      </button>
                      <button
                        onClick={() => setPreferences({ ...preferences, theme: 'dark' })}
                        className={`flex-1 p-3 border rounded-lg flex items-center justify-center gap-2 ${
                          preferences.theme === 'dark'
                            ? 'border-purple-600 bg-purple-50 text-purple-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Moon className="w-5 h-5" />
                        Dark
                      </button>
                      <button
                        onClick={() => setPreferences({ ...preferences, theme: 'system' })}
                        className={`flex-1 p-3 border rounded-lg flex items-center justify-center gap-2 ${
                          preferences.theme === 'system'
                            ? 'border-purple-600 bg-purple-50 text-purple-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Monitor className="w-5 h-5" />
                        System
                      </button>
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language
                    </label>
                    <select
                      value={preferences.language}
                      onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="en">English</option>
                      <option value="zh">中文</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="ja">日本語</option>
                    </select>
                  </div>

                  {/* Timezone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timezone
                    </label>
                    <select
                      value={preferences.timezone}
                      onChange={(e) => setPreferences({ ...preferences, timezone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                      <option value="UTC">UTC</option>
                      <option value="UTC+1">Central European Time (UTC+1)</option>
                      <option value="UTC+8">China Standard Time (UTC+8)</option>
                      <option value="UTC+9">Japan Standard Time (UTC+9)</option>
                    </select>
                  </div>

                  {/* Video Quality */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Default Video Quality
                    </label>
                    <select
                      value={preferences.videoQuality}
                      onChange={(e) => setPreferences({ ...preferences, videoQuality: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="720p">720p (HD)</option>
                      <option value="1080p">1080p (Full HD)</option>
                      <option value="4K">4K (Ultra HD)</option>
                    </select>
                  </div>

                  {/* Toggles */}
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Auto-download Videos</p>
                        <p className="text-sm text-gray-500">Automatically download completed videos</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.autoDownload}
                        onChange={(e) => setPreferences({ ...preferences, autoDownload: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Sound Effects</p>
                        <p className="text-sm text-gray-500">Play sounds for notifications and actions</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.soundEffects}
                        onChange={(e) => setPreferences({ ...preferences, soundEffects: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Animations</p>
                        <p className="text-sm text-gray-500">Enable interface animations</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.animations}
                        onChange={(e) => setPreferences({ ...preferences, animations: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Compact Mode</p>
                        <p className="text-sm text-gray-500">Reduce spacing for more content</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.compactMode}
                        onChange={(e) => setPreferences({ ...preferences, compactMode: e.target.checked })}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                {/* Password */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Password</h3>
                  <p className="text-gray-600 mb-4">
                    Last changed 3 months ago. We recommend changing your password regularly.
                  </p>
                  <button
                    onClick={() => setShowPasswordModal(true)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Change Password
                  </button>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <p className="text-gray-600 mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                    Enable 2FA
                  </button>
                </div>

                {/* Sessions */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Monitor className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Chrome on MacOS</p>
                          <p className="text-sm text-gray-500">San Francisco, CA • Current session</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Mobile App - iOS</p>
                          <p className="text-sm text-gray-500">San Francisco, CA • 2 hours ago</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:text-red-700 text-sm">
                        Revoke
                      </button>
                    </div>
                  </div>
                  <button className="mt-4 text-red-600 hover:text-red-700 text-sm font-medium">
                    Sign out all other sessions
                  </button>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                {/* Current Plan */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">Pro Plan</p>
                      <p className="text-gray-600">$29/month • Next billing date: Feb 1, 2024</p>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                      Upgrade Plan
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Credits Used</p>
                      <p className="text-xl font-bold text-gray-900">67/100</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Storage Used</p>
                      <p className="text-xl font-bold text-gray-900">2.3 GB</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Videos Created</p>
                      <p className="text-xl font-bold text-gray-900">45</p>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-8 h-8 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/25</p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Update
                    </button>
                  </div>
                  <button className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium">
                    + Add payment method
                  </button>
                </div>

                {/* Billing History */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
                  <div className="space-y-3">
                    {[
                      { date: 'Jan 1, 2024', amount: '$29.00', status: 'Paid' },
                      { date: 'Dec 1, 2023', amount: '$29.00', status: 'Paid' },
                      { date: 'Nov 1, 2023', amount: '$29.00', status: 'Paid' },
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{invoice.date}</p>
                          <p className="text-sm text-gray-500">Pro Plan - Monthly</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">{invoice.amount}</span>
                          <button className="text-purple-600 hover:text-purple-700 text-sm">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* API Tab */}
            {activeTab === 'api' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Keys</h3>
                  <p className="text-gray-600 mb-6">
                    Use API keys to authenticate requests to the BabyAI Video API.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">Production Key</p>
                        <button className="text-red-600 hover:text-red-700 text-sm">
                          Revoke
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 px-3 py-2 bg-gray-100 rounded text-sm font-mono">
                          sk_live_••••••••••••••••••••••••
                        </code>
                        <button className="p-2 text-gray-600 hover:text-gray-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-gray-900">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Created on Jan 15, 2024</p>
                    </div>
                  </div>

                  <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Generate New Key
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Usage</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Requests Today</p>
                      <p className="text-2xl font-bold text-gray-900">1,234</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Rate Limit</p>
                      <p className="text-2xl font-bold text-gray-900">10k/day</p>
                    </div>
                  </div>
                  <a href="/api-docs" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    View API Documentation →
                  </a>
                </div>
              </div>
            )}

            {/* Data & Privacy Tab */}
            {activeTab === 'data' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Export Your Data</p>
                        <p className="text-sm text-gray-500">Download all your videos, settings, and account data</p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white">
                        <Download className="w-4 h-4 inline mr-2" />
                        Export
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Delete All Videos</p>
                        <p className="text-sm text-gray-500">Permanently remove all your generated videos</p>
                      </div>
                      <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Public Profile</p>
                        <p className="text-sm text-gray-500">Allow others to view your profile</p>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Share Usage Analytics</p>
                        <p className="text-sm text-gray-500">Help us improve by sharing anonymous usage data</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>

                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Personalized Recommendations</p>
                        <p className="text-sm text-gray-500">Get AI-powered style and content suggestions</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      />
                    </label>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Delete Account</h3>
                  <p className="text-red-700 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Password Change Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold mb-4">Change Password</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handlePasswordChange}
                  className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Update Password
                </button>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-red-600 mb-2">Delete Account</h3>
              <p className="text-gray-600 mb-4">
                This action cannot be undone. All your data, videos, and settings will be permanently deleted.
              </p>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type "DELETE" to confirm
                </label>
                <input
                  type="text"
                  placeholder="DELETE"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleDeleteAccount}
                  className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete Account
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
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