import React from 'react';
import { Globe, Plus, Edit, Eye, Smartphone, Monitor, Palette } from 'lucide-react';

const WebsiteBuilder: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Website Builder</h1>
          <p className="mt-2 text-gray-600">Create beautiful, responsive websites with our drag-and-drop builder</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Create Website
        </button>
      </div>

      {/* My Websites */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">My Websites</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Active Website */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="flex items-center justify-center">
                <Globe className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">My Business Site</h3>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Live
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">mybusiness.com</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Last edited: 2 hours ago</span>
                <span>1,247 visits</span>
              </div>
              <div className="flex items-center gap-x-2">
                <button className="flex-1 inline-flex items-center justify-center gap-x-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                  <Edit className="h-4 w-4" />
                  Edit
                </button>
                <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Draft Website */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-orange-100 to-red-100">
              <div className="flex items-center justify-center">
                <Globe className="h-12 w-12 text-orange-600" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Portfolio Site</h3>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Draft
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Not published</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Created: 1 week ago</span>
                <span>0 visits</span>
              </div>
              <div className="flex items-center gap-x-2">
                <button className="flex-1 inline-flex items-center justify-center gap-x-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                  <Edit className="h-4 w-4" />
                  Continue
                </button>
                <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Create New */}
          <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-300 transition-colors">
            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors">
              <div className="text-center">
                <Plus className="h-12 w-12 text-gray-400 group-hover:text-blue-500 mx-auto mb-2 transition-colors" />
                <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">Create New Website</p>
              </div>
            </div>
            <div className="p-4">
              <div className="text-center">
                <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:shadow-lg transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Templates */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Builder Features */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Builder Features</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <Palette className="h-4 w-4 text-blue-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Drag & Drop Editor</div>
                <div className="text-xs text-gray-500">Visual website building with real-time preview</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <Smartphone className="h-4 w-4 text-green-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Mobile Responsive</div>
                <div className="text-xs text-gray-500">Automatically optimized for all devices</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                <Globe className="h-4 w-4 text-purple-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Custom Domain</div>
                <div className="text-xs text-gray-500">Connect your own domain name</div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
                <Monitor className="h-4 w-4 text-orange-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">SEO Optimized</div>
                <div className="text-xs text-gray-500">Built-in SEO tools and optimization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Template Categories */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Template Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Business', count: 24, color: 'from-blue-500 to-blue-600' },
              { name: 'Portfolio', count: 18, color: 'from-purple-500 to-purple-600' },
              { name: 'E-commerce', count: 16, color: 'from-green-500 to-green-600' },
              { name: 'Blog', count: 12, color: 'from-orange-500 to-orange-600' },
              { name: 'Restaurant', count: 8, color: 'from-red-500 to-red-600' },
              { name: 'Agency', count: 14, color: 'from-teal-500 to-teal-600' },
            ].map((category) => (
              <div
                key={category.name}
                className="p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-2`}>
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </div>
                <div className="text-xs text-gray-500">{category.count} templates</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;