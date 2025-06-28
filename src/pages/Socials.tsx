import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, TrendingUp, Users, MessageCircle, Plus } from 'lucide-react';

const socialAccounts = [
  { platform: 'Instagram', handle: '@mybusiness', followers: '12.5K', engagement: '4.2%', icon: Instagram, color: 'from-pink-500 to-purple-600' },
  { platform: 'Facebook', handle: 'My Business Page', followers: '8.3K', engagement: '3.1%', icon: Facebook, color: 'from-blue-600 to-blue-700' },
  { platform: 'Twitter', handle: '@mybusiness', followers: '5.7K', engagement: '2.8%', icon: Twitter, color: 'from-sky-400 to-sky-600' },
  { platform: 'LinkedIn', handle: 'My Business', followers: '3.2K', engagement: '5.1%', icon: Linkedin, color: 'from-blue-700 to-blue-800' },
];

const Socials: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Social Media Management</h1>
          <p className="mt-2 text-gray-600">Manage all your social media accounts from one place</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Connect Account
        </button>
      </div>

      {/* Connected Accounts */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {socialAccounts.map((account) => (
          <div
            key={account.platform}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r opacity-5 group-hover:opacity-10 transition-opacity ${account.color}`} />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center justify-center rounded-lg p-2 bg-gradient-to-r ${account.color}`}>
                  <account.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{account.followers}</div>
                  <div className="text-xs text-gray-500">followers</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{account.platform}</h3>
                <p className="text-sm text-gray-500">{account.handle}</p>
                <div className="mt-3 flex items-center gap-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-700">{account.engagement} engagement</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Content Scheduler */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Content Scheduler</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">Instagram Post</span>
                <span className="text-xs text-gray-500">Today, 2:00 PM</span>
              </div>
              <p className="text-sm text-gray-600">New product launch announcement...</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">Facebook Story</span>
                <span className="text-xs text-gray-500">Tomorrow, 9:00 AM</span>
              </div>
              <p className="text-sm text-gray-600">Behind the scenes content...</p>
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Schedule New Post
          </button>
        </div>

        {/* Instagram Database */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Instagram Database</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Profiles</span>
              <span className="text-sm font-medium text-gray-900">2.4M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Verified Accounts</span>
              <span className="text-sm font-medium text-gray-900">47K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Business Profiles</span>
              <span className="text-sm font-medium text-gray-900">890K</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center gap-x-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Lead Generation Ready</span>
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:shadow-lg transition-all">
            Explore Database
          </button>
        </div>

        {/* Analytics Overview */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Analytics Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">+24.7%</div>
                <div className="text-sm text-gray-500">Engagement Growth</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">+12.3%</div>
                <div className="text-sm text-gray-500">Follower Growth</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">1.2K</div>
                <div className="text-sm text-gray-500">Comments This Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;