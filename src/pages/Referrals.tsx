import React, { useState } from 'react';
import { Gift, Users, DollarSign, TrendingUp, Share2, Copy } from 'lucide-react';

const Referrals: React.FC = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const referralLink = 'https://platform.com/ref/your-unique-code';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  const handleShare = (platform: string) => {
    const message = `Check out this amazing platform! Join using my referral link: ${referralLink}`;
    
    switch (platform) {
      case 'email':
        window.location.href = `mailto:?subject=Join this amazing platform&body=${encodeURIComponent(message)}`;
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`, '_blank');
        break;
      default:
        alert(`Sharing on ${platform}...`);
    }
    setShowShareModal(false);
  };

  const ShareModal = () => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Share Referral Link</h3>
          <button
            onClick={() => setShowShareModal(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Referral Link
          </label>
          <div className="flex items-center gap-x-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-50"
            />
            <button
              onClick={handleCopyLink}
              className="px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
            >
              Copy
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Share on:</h4>
          {[
            { name: 'Email', key: 'email' },
            { name: 'Twitter', key: 'twitter' },
            { name: 'Facebook', key: 'facebook' },
            { name: 'LinkedIn', key: 'linkedin' }
          ].map((platform) => (
            <button
              key={platform.key}
              onClick={() => handleShare(platform.key)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">{platform.name}</span>
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
          <h1 className="text-3xl font-bold text-gray-900">Referral System</h1>
          <p className="mt-2 text-gray-600">Grow your business through word-of-mouth marketing</p>
        </div>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
              <Users className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">247</div>
              <div className="text-sm text-gray-500">Total Referrals</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$3,247</div>
              <div className="text-sm text-gray-500">Commissions Earned</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">18.2%</div>
              <div className="text-sm text-gray-500">Conversion Rate</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
              <Gift className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-500">Active Referrers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Link */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Referral Link</h2>
        <div className="flex items-center gap-x-3 p-4 bg-gray-50 rounded-xl">
          <div className="flex-1">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="w-full bg-transparent border-0 text-sm text-gray-900 focus:ring-0"
            />
          </div>
          <button 
            onClick={handleCopyLink}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setShowShareModal(true)}
            className="inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white hover:shadow-lg transition-all"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
      </div>

      {/* Program Details & Recent Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Program Details */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Program Details</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
              <div>
                <div className="text-sm font-medium text-green-900">Commission Rate</div>
                <div className="text-xs text-green-700">Per successful referral</div>
              </div>
              <div className="text-2xl font-bold text-green-900">20%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
              <div>
                <div className="text-sm font-medium text-blue-900">Cookie Duration</div>
                <div className="text-xs text-blue-700">Tracking period</div>
              </div>
              <div className="text-2xl font-bold text-blue-900">30 days</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
              <div>
                <div className="text-sm font-medium text-purple-900">Minimum Payout</div>
                <div className="text-xs text-purple-700">Payment threshold</div>
              </div>
              <div className="text-2xl font-bold text-purple-900">$50</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Commission earned: $29.99</div>
                <div className="text-xs text-gray-500">From referral: john.doe@example.com</div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
            <div className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">New referral signup</div>
                <div className="text-xs text-gray-500">jane.smith@example.com</div>
              </div>
              <div className="text-xs text-gray-500">5h ago</div>
            </div>
            <div className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center">
                <Share2 className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Link shared on Instagram</div>
                <div className="text-xs text-gray-500">3 clicks generated</div>
              </div>
              <div className="text-xs text-gray-500">1d ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default Referrals;