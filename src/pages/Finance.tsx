import React from 'react';
import { CreditCard, DollarSign, TrendingUp, FileText, Download, Plus } from 'lucide-react';

const Finance: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Finance</h1>
          <p className="mt-2 text-gray-600">Manage payments, invoices, and financial reports</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Create Invoice
        </button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$54,239</div>
              <div className="text-sm text-gray-500">Total Revenue</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <FileText className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">127</div>
              <div className="text-sm text-gray-500">Invoices Sent</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$8,247</div>
              <div className="text-sm text-gray-500">Pending Payments</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">+18.2%</div>
              <div className="text-sm text-gray-500">Growth Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions & Invoices */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Transactions */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'payment', amount: '+$299.00', description: 'Course purchase - React Mastery', time: '2 hours ago', status: 'completed' },
              { type: 'refund', amount: '-$49.99', description: 'Refund - Premium Plan', time: '5 hours ago', status: 'processed' },
              { type: 'payment', amount: '+$149.00', description: 'Website template purchase', time: '1 day ago', status: 'completed' },
              { type: 'payment', amount: '+$79.99', description: 'Monthly subscription', time: '2 days ago', status: 'completed' },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  transaction.type === 'payment' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <DollarSign className={`h-4 w-4 ${
                    transaction.type === 'payment' ? 'text-green-700' : 'text-red-700'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                    <span className={`text-sm font-semibold ${
                      transaction.type === 'payment' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {transaction.amount}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{transaction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Invoices</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { id: 'INV-001', client: 'Acme Corp', amount: '$2,499.00', status: 'paid', date: 'Jul 15, 2024' },
              { id: 'INV-002', client: 'Tech Solutions', amount: '$1,299.00', status: 'pending', date: 'Jul 18, 2024' },
              { id: 'INV-003', client: 'Design Studio', amount: '$899.00', status: 'overdue', date: 'Jul 10, 2024' },
              { id: 'INV-004', client: 'Marketing Agency', amount: '$1,799.00', status: 'draft', date: 'Jul 20, 2024' },
            ].map((invoice, index) => (
              <div key={index} className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{invoice.id}</p>
                      <p className="text-xs text-gray-500">{invoice.client}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900">{invoice.amount}</span>
                      <div className="flex items-center gap-x-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                          invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          invoice.status === 'overdue' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods & Reports */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Payment Methods */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-x-3">
                <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Stripe</div>
                  <div className="text-xs text-gray-500">Credit cards, ACH</div>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-x-3">
                <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">PayPal</div>
                  <div className="text-xs text-gray-500">PayPal, Venmo</div>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Financial Reports */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Reports</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-x-3">
                <Download className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Revenue Report</span>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-x-3">
                <Download className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Tax Summary</span>
              </div>
              <span className="text-xs text-gray-500">Excel</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-x-3">
                <Download className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">P&L Statement</span>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;