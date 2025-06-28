import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Calendar,
  Mail,
  MessageSquare,
  Globe,
  Plus,
  X
} from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$54,239',
    change: '+12.5%',
    changeType: 'increase',
    icon: DollarSign,
  },
  {
    name: 'Active Users',
    value: '2,847',
    change: '+8.2%',
    changeType: 'increase',
    icon: Users,
  },
  {
    name: 'Conversion Rate',
    value: '3.24%',
    change: '-0.3%',
    changeType: 'decrease',
    icon: TrendingUp,
  },
  {
    name: 'Active Sessions',
    value: '1,293',
    change: '+18.7%',
    changeType: 'increase',
    icon: Activity,
  },
];

const quickActions = [
  { name: 'Create Link in Bio', icon: Globe, color: 'from-blue-500 to-blue-600', action: 'link-bio' },
  { name: 'Schedule Post', icon: Calendar, color: 'from-purple-500 to-purple-600', action: 'schedule-post' },
  { name: 'Send Campaign', icon: Mail, color: 'from-green-500 to-green-600', action: 'send-campaign' },
  { name: 'Create Course', icon: MessageSquare, color: 'from-orange-500 to-orange-600', action: 'create-course' },
];

const recentActivity = [
  { action: 'New user registered', time: '2 minutes ago', type: 'user' },
  { action: 'Payment received: $299', time: '5 minutes ago', type: 'payment' },
  { action: 'Course completed: React Basics', time: '12 minutes ago', type: 'course' },
  { action: 'New lead generated', time: '18 minutes ago', type: 'lead' },
  { action: 'Email campaign sent', time: '23 minutes ago', type: 'email' },
];

const Dashboard: React.FC = () => {
  const [showQuickStartModal, setShowQuickStartModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleQuickAction = (actionType: string) => {
    switch (actionType) {
      case 'link-bio':
        alert('Redirecting to Link in Bio creator...');
        break;
      case 'schedule-post':
        alert('Opening post scheduler...');
        break;
      case 'send-campaign':
        alert('Opening email campaign builder...');
        break;
      case 'create-course':
        alert('Redirecting to course creator...');
        break;
      default:
        alert(`Executing action: ${actionType}`);
    }
    setShowQuickStartModal(false);
  };

  const QuickStartModal = () => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Quick Start</h3>
          <button
            onClick={() => setShowQuickStartModal(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {quickActions.map((action) => (
            <button
              key={action.name}
              onClick={() => handleQuickAction(action.action)}
              className="group relative overflow-hidden rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity ${action.color}`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-r ${action.color} mb-4`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-medium text-gray-900">{action.name}</div>
                <div className="text-sm text-gray-500 mt-1">Get started quickly</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Other Actions</h4>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleQuickAction('create-website')}
              className="text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">Create Website</div>
              <div className="text-xs text-gray-500">Build a new site</div>
            </button>
            <button 
              onClick={() => handleQuickAction('add-lead')}
              className="text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">Add Lead</div>
              <div className="text-xs text-gray-500">Import contacts</div>
            </button>
            <button 
              onClick={() => handleQuickAction('create-template')}
              className="text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">Create Template</div>
              <div className="text-xs text-gray-500">Design templates</div>
            </button>
            <button 
              onClick={() => handleQuickAction('invite-user')}
              className="text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">Invite User</div>
              <div className="text-xs text-gray-500">Add team member</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>
        <button 
          onClick={() => setShowQuickStartModal(true)}
          className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Quick Start
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-2 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                  <stat.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
              <div className={`flex items-center gap-x-1 text-sm ${
                stat.changeType === 'increase' ? 'text-green-700' : 'text-red-700'
              }`}>
                {stat.changeType === 'increase' ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              onClick={() => handleQuickAction(action.action)}
              className="group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity ${action.color}`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center rounded-lg p-2 bg-gradient-to-r ${action.color}`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-3 text-sm font-medium text-gray-900">{action.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity & Analytics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h2>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Analytics chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Modal */}
      {showQuickStartModal && <QuickStartModal />}
    </div>
  );
};

export default Dashboard;