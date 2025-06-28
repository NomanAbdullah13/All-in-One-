import React, { useState } from 'react';
import { Link2, Eye, MousePointer, Share, Plus, Edit, Smartphone, Monitor, X } from 'lucide-react';

const LinkInBio: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [newPageName, setNewPageName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleCreatePage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPageName.trim() && selectedTemplate) {
      alert(`Creating new Link in Bio page: ${newPageName} with ${selectedTemplate} template`);
      setNewPageName('');
      setSelectedTemplate('');
      setShowCreateModal(false);
    }
  };

  const handleShare = (platform: string) => {
    alert(`Sharing Link in Bio page on ${platform}`);
    setShowShareModal(false);
  };

  const handleEdit = () => {
    alert('Opening Link in Bio editor...');
  };

  const CreatePageModal = () => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Create New Page</h3>
          <button
            onClick={() => setShowCreateModal(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <form onSubmit={handleCreatePage}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Page Name
            </label>
            <input
              type="text"
              value={newPageName}
              onChange={(e) => setNewPageName(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="My Awesome Bio"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Template
            </label>
            <div className="space-y-2">
              {[
                { id: 'influencer', name: 'Influencer', color: 'from-pink-400 to-purple-600' },
                { id: 'business', name: 'Business', color: 'from-blue-400 to-teal-600' },
                { id: 'ecommerce', name: 'E-commerce', color: 'from-orange-400 to-red-600' },
              ].map((template) => (
                <label key={template.id} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="template"
                    value={template.id}
                    checked={selectedTemplate === template.id}
                    onChange={(e) => setSelectedTemplate(e.target.value)}
                    className="mr-3"
                  />
                  <div className={`h-8 w-8 rounded bg-gradient-to-r ${template.color} mr-3`}></div>
                  <span className="text-sm font-medium text-gray-900">{template.name}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-x-3">
            <button
              type="button"
              onClick={() => setShowCreateModal(false)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:shadow-lg transition-all"
            >
              Create Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const ShareModal = () => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Share Your Bio Link</h3>
          <button
            onClick={() => setShowShareModal(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Link
          </label>
          <div className="flex items-center gap-x-2">
            <input
              type="text"
              value="mybusiness.bio"
              readOnly
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-50"
            />
            <button
              onClick={() => navigator.clipboard.writeText('mybusiness.bio')}
              className="px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
            >
              Copy
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Share on:</h4>
          {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
            <button
              key={platform}
              onClick={() => handleShare(platform)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">{platform}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Link in Bio</h1>
          <p className="mt-2 text-gray-600">Create beautiful, customizable bio link pages for your social media</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Create New Page
        </button>
      </div>

      {/* Active Pages */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Your Bio Link Pages</h2>
              <div className="flex items-center gap-x-2">
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Smartphone className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Monitor className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {/* Main Bio Link */}
              <div className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-x-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <Link2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">My Business Bio</h3>
                      <p className="text-sm text-gray-500">mybusiness.bio</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <button 
                      onClick={handleEdit}
                      className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => setShowShareModal(true)}
                      className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <Share className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">2,847</div>
                    <div className="text-sm text-gray-500">Total Clicks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">1,293</div>
                    <div className="text-sm text-gray-500">Unique Visitors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">4.2%</div>
                    <div className="text-sm text-gray-500">CTR</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">🛍️ Shop Now</span>
                    <div className="flex items-center gap-x-2 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>847 clicks</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">📧 Newsletter</span>
                    <div className="flex items-center gap-x-2 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>392 clicks</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">🎯 Contact</span>
                    <div className="flex items-center gap-x-2 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>284 clicks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Pages */}
              <div className="p-4 rounded-xl border border-dashed border-gray-300 hover:border-blue-300 transition-colors">
                <div className="text-center py-6">
                  <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <Plus className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Create Another Page</h3>
                  <p className="text-sm text-gray-500">Set up additional bio links for different campaigns or social accounts</p>
                  <button 
                    onClick={() => setShowCreateModal(true)}
                    className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats & Templates */}
        <div className="space-y-6">
          {/* Performance Stats */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance This Week</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                  <MousePointer className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">+18.2%</div>
                  <div className="text-sm text-gray-500">Click Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">+12.7%</div>
                  <div className="text-sm text-gray-500">Page Views</div>
                </div>
              </div>
            </div>
          </div>

          {/* Template Gallery */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Templates</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <div className="h-8 w-8 rounded bg-gradient-to-r from-pink-400 to-purple-600"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Influencer</div>
                    <div className="text-xs text-gray-500">Content creator focused</div>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <div className="h-8 w-8 rounded bg-gradient-to-r from-blue-400 to-teal-600"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Business</div>
                    <div className="text-xs text-gray-500">Professional services</div>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <div className="h-8 w-8 rounded bg-gradient-to-r from-orange-400 to-red-600"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">E-commerce</div>
                    <div className="text-xs text-gray-500">Online store focused</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showCreateModal && <CreatePageModal />}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default LinkInBio;