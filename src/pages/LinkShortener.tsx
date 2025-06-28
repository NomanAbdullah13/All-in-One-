import React, { useState } from 'react';
import { Link2, Copy, BarChart3, Eye, MousePointer, Calendar } from 'lucide-react';

const LinkShortener: React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([
    {
      short: 'short.ly/summer-sale',
      original: 'https://mystore.com/summer-collection/sale-items?discount=30&category=all',
      clicks: 1247,
      created: '2 days ago'
    },
    {
      short: 'short.ly/webinar-2024',
      original: 'https://zoom.us/webinar/register/1234567890/business-growth-strategies',
      clicks: 892,
      created: '5 days ago'
    },
    {
      short: 'short.ly/newsletter',
      original: 'https://newsletter.mycompany.com/subscribe?source=social&campaign=q1',
      clicks: 634,
      created: '1 week ago'
    }
  ]);

  const handleShortenLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (longUrl.trim()) {
      const newShortUrl = customAlias ? `short.ly/${customAlias}` : `short.ly/${Math.random().toString(36).substr(2, 8)}`;
      const newLink = {
        short: newShortUrl,
        original: longUrl,
        clicks: 0,
        created: 'Just now'
      };
      
      setShortenedLinks([newLink, ...shortenedLinks]);
      setLongUrl('');
      setCustomAlias('');
      setExpiryDate('');
      
      alert(`Link shortened successfully! Your short URL: ${newShortUrl}`);
    }
  };

  const handleCopyLink = (shortUrl: string) => {
    navigator.clipboard.writeText(`https://${shortUrl}`);
    alert(`Copied ${shortUrl} to clipboard!`);
  };

  const handleViewAnalytics = (shortUrl: string) => {
    alert(`Opening analytics for ${shortUrl}...`);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Link Shortener</h1>
          <p className="mt-2 text-gray-600">Create, track, and manage your shortened links</p>
        </div>
      </div>

      {/* URL Shortener Form */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shorten Link</h2>
        <form onSubmit={handleShortenLink} className="space-y-4">
          <div>
            <label htmlFor="long-url" className="block text-sm font-medium text-gray-700 mb-2">
              Long URL
            </label>
            <input
              type="url"
              id="long-url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://example.com/very-long-url-here"
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="custom-alias" className="block text-sm font-medium text-gray-700 mb-2">
                Custom Alias (Optional)
              </label>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50">
                  short.ly/
                </span>
                <input
                  type="text"
                  id="custom-alias"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value)}
                  className="flex-1 border-0 py-3 px-3 text-sm focus:ring-0"
                  placeholder="my-link"
                />
              </div>
            </div>
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date (Optional)
              </label>
              <input
                type="date"
                id="expiry"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <button 
            type="submit"
            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Shorten Link
          </button>
        </form>
      </div>

      {/* Recent Links */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Links</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {shortenedLinks.map((link, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-x-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                      <Link2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-x-2">
                        <span className="text-lg font-semibold text-blue-600">{link.short}</span>
                        <button 
                          onClick={() => handleCopyLink(link.short)}
                          className="p-1 rounded text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{link.original}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-6 text-sm text-gray-500">
                    <div className="flex items-center gap-x-1">
                      <MousePointer className="h-4 w-4" />
                      <span>{link.clicks} clicks</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Created {link.created}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <button 
                    onClick={() => handleViewAnalytics(link.short)}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <BarChart3 className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkShortener;