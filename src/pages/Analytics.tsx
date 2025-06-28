import React from 'react';
import { TrendingUp, BarChart3, PieChart, Activity, Calendar, Download } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reporting</h1>
          <p className="mt-2 text-gray-600">Comprehensive insights across all your business activities</p>
        </div>
        <div className="flex items-center gap-x-3">
          <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="inline-flex items-center gap-x-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$54,239</div>
              <div className="text-sm text-gray-500">Total Revenue</div>
              <div className="text-xs text-green-600 mt-1">+12.5% from last month</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <Activity className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24,847</div>
              <div className="text-sm text-gray-500">Total Visitors</div>
              <div className="text-xs text-blue-600 mt-1">+8.2% from last month</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3.24%</div>
              <div className="text-sm text-gray-500">Conversion Rate</div>
              <div className="text-xs text-red-600 mt-1">-0.3% from last month</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
              <PieChart className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1,293</div>
              <div className="text-sm text-gray-500">Active Users</div>
              <div className="text-xs text-green-600 mt-1">+18.7% from last month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Revenue Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Revenue chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {[
              { source: 'Direct', visitors: 8247, percentage: 45, color: 'bg-blue-600' },
              { source: 'Social Media', visitors: 5892, percentage: 32, color: 'bg-purple-600' },
              { source: 'Search Engines', visitors: 2847, percentage: 15, color: 'bg-green-600' },
              { source: 'Referrals', visitors: 1461, percentage: 8, color: 'bg-orange-600' },
            ].map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className={`h-3 w-3 rounded-full ${source.color}`}></div>
                  <span className="text-sm font-medium text-gray-900">{source.source}</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 w-12 text-right">{source.visitors.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Performance */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Platform Performance</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { platform: 'Social Media', metric: 'Engagement Rate', value: '4.2%', change: '+0.8%', color: 'from-pink-500 to-purple-600' },
            { platform: 'Link in Bio', metric: 'Click Rate', value: '18.7%', change: '+2.3%', color: 'from-blue-500 to-blue-600' },
            { platform: 'Email Marketing', metric: 'Open Rate', value: '24.3%', change: '+1.2%', color: 'from-green-500 to-green-600' },
            { platform: 'Website Builder', metric: 'Page Views', value: '12.4K', change: '+15.6%', color: 'from-orange-500 to-orange-600' },
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-3`}>
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">{item.platform}</h4>
              <p className="text-xs text-gray-500 mb-2">{item.metric}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{item.value}</span>
                <span className="text-xs text-green-600">{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Top Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New user registration', platform: 'Website', time: '2 minutes ago', impact: 'positive' },
              { action: 'High engagement post', platform: 'Instagram', time: '15 minutes ago', impact: 'positive' },
              { action: 'Email campaign sent', platform: 'Email Marketing', time: '1 hour ago', impact: 'neutral' },
              { action: 'Course completion', platform: 'Learning Platform', time: '2 hours ago', impact: 'positive' },
              { action: 'Payment received', platform: 'E-commerce', time: '3 hours ago', impact: 'positive' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`h-2 w-2 rounded-full ${
                  activity.impact === 'positive' ? 'bg-green-600' : 
                  activity.impact === 'negative' ? 'bg-red-600' : 'bg-gray-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.platform} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Content */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Content</h3>
          <div className="space-y-4">
            {[
              { title: 'How to Build a Successful Business', type: 'Blog Post', views: '12.4K', engagement: '8.2%' },
              { title: 'React Development Course', type: 'Course', views: '8.9K', engagement: '15.7%' },
              { title: 'Summer Sale Campaign', type: 'Email', views: '6.2K', engagement: '24.3%' },
              { title: 'Product Launch Video', type: 'Social Media', views: '15.8K', engagement: '6.8%' },
            ].map((content, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{content.title}</p>
                  <p className="text-xs text-gray-500">{content.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{content.views}</p>
                  <p className="text-xs text-green-600">{content.engagement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;