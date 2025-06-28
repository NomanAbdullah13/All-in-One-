import React from 'react';
import { FileText, Plus, Copy, Edit, Eye, Download } from 'lucide-react';

const FormTemplates: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Form Templates</h1>
          <p className="mt-2 text-gray-600">Create and manage reusable form templates</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Create Template
        </button>
      </div>

      {/* Template Categories */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Contact Forms', count: 12, color: 'from-blue-500 to-blue-600' },
          { name: 'Lead Generation', count: 8, color: 'from-green-500 to-green-600' },
          { name: 'Event Registration', count: 6, color: 'from-purple-500 to-purple-600' },
          { name: 'Surveys', count: 4, color: 'from-orange-500 to-orange-600' },
        ].map((category) => (
          <div key={category.name} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
            <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
              <FileText className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{category.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{category.count} templates</p>
          </div>
        ))}
      </div>

      {/* Popular Templates */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Popular Templates</h2>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[
            {
              name: 'Contact Us Form',
              description: 'Standard contact form with name, email, and message fields',
              category: 'Contact Forms',
              submissions: 1247,
              lastUsed: '2 hours ago'
            },
            {
              name: 'Newsletter Signup',
              description: 'Simple email capture form for newsletter subscriptions',
              category: 'Lead Generation',
              submissions: 892,
              lastUsed: '5 hours ago'
            },
            {
              name: 'Event Registration',
              description: 'Comprehensive form for event attendee registration',
              category: 'Event Registration',
              submissions: 634,
              lastUsed: '1 day ago'
            },
            {
              name: 'Product Feedback',
              description: 'Customer feedback form with rating and comment fields',
              category: 'Surveys',
              submissions: 423,
              lastUsed: '3 days ago'
            }
          ].map((template, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {template.category}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{template.submissions} submissions</span>
                <span>Last used: {template.lastUsed}</span>
              </div>

              <div className="flex items-center gap-x-2">
                <button className="flex-1 inline-flex items-center justify-center gap-x-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                  <Copy className="h-4 w-4" />
                  Use Template
                </button>
                <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Builder Features */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Form Builder Features</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm text-gray-700">Drag & drop form builder</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <span className="text-sm text-gray-700">Custom field validation</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-purple-600"></div>
              <span className="text-sm text-gray-700">Conditional logic</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
              <span className="text-sm text-gray-700">Email notifications</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-red-600"></div>
              <span className="text-sm text-gray-700">Spam protection</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-x-3">
                <Download className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Export as CSV</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-x-3">
                <Download className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Export as PDF</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-x-3">
                
                <Download className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Export as Excel</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTemplates;