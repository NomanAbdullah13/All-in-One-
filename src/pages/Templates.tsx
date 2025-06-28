import React from 'react';
import { Layout, Plus, Download, Star, Eye, Heart } from 'lucide-react';

const Templates: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Template Library</h1>
          <p className="mt-2 text-gray-600">Browse and create beautiful templates for all your needs</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Create Template
        </button>
      </div>

      {/* Template Categories */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { name: 'Website', count: 124, color: 'from-blue-500 to-blue-600' },
          { name: 'Email', count: 89, color: 'from-green-500 to-green-600' },
          { name: 'Social Media', count: 156, color: 'from-purple-500 to-purple-600' },
          { name: 'Link in Bio', count: 67, color: 'from-orange-500 to-orange-600' },
          { name: 'Course', count: 34, color: 'from-red-500 to-red-600' },
          { name: 'Form', count: 78, color: 'from-teal-500 to-teal-600' },
        ].map((category) => (
          <div key={category.name} className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
            <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3`}>
              <Layout className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{category.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{category.count} templates</p>
          </div>
        ))}
      </div>

      {/* Featured Templates */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Featured Templates</h2>
          <div className="flex items-center gap-x-2">
            <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Website</option>
              <option>Email</option>
              <option>Social Media</option>
            </select>
            <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Modern Business Website',
              category: 'Website',
              author: 'Design Studio',
              rating: 4.9,
              downloads: 2847,
              price: 'Free',
              preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              name: 'Newsletter Template',
              category: 'Email',
              author: 'Marketing Pro',
              rating: 4.7,
              downloads: 1923,
              price: '$19',
              preview: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              name: 'Instagram Story Pack',
              category: 'Social Media',
              author: 'Creative Agency',
              rating: 4.8,
              downloads: 3421,
              price: '$29',
              preview: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              name: 'Minimalist Portfolio',
              category: 'Website',
              author: 'UI Designer',
              rating: 4.6,
              downloads: 1567,
              price: 'Free',
              preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              name: 'Course Landing Page',
              category: 'Website',
              author: 'Edu Templates',
              rating: 4.9,
              downloads: 892,
              price: '$39',
              preview: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              name: 'Link in Bio - Creator',
              category: 'Link in Bio',
              author: 'Social Tools',
              rating: 4.5,
              downloads: 2156,
              price: '$15',
              preview: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
          ].map((template, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-10 bg-gray-100 overflow-hidden">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-x-2">
                    <button className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {template.category}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{template.price}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-500 mb-3">by {template.author}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Download className="h-4 w-4" />
                    <span>{template.downloads}</span>
                  </div>
                </div>

                <div className="flex items-center gap-x-2">
                  <button className="flex-1 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                    {template.price === 'Free' ? 'Download' : 'Purchase'}
                  </button>
                  <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Templates */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">My Templates</h2>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'My Business Template', category: 'Website', downloads: 45, earnings: '$135' },
            { name: 'Email Newsletter', category: 'Email', downloads: 23, earnings: '$69' },
            { name: 'Social Media Kit', category: 'Social Media', downloads: 67, earnings: '$201' },
          ].map((template, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="h-8 w-8 rounded bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <Layout className="h-4 w-4 text-blue-600" />
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {template.category}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{template.name}</h3>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{template.downloads} downloads</span>
                <span className="font-medium text-green-600">{template.earnings}</span>
              </div>
            </div>
          ))}
          
          <div className="p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-300 transition-colors cursor-pointer group">
            <div className="text-center">
              <div className="h-8 w-8 rounded bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center mx-auto mb-3 transition-colors">
                <Plus className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Create New Template</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;