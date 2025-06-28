import React from 'react';
import { Shield, Plus, Clock, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';

const Escrow: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Escrow System</h1>
          <p className="mt-2 text-gray-600">Secure transactions with built-in buyer and seller protection</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Create Transaction
        </button>
      </div>

      {/* Escrow Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$124,847</div>
              <div className="text-sm text-gray-500">Total Secured</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-500">Active Transactions</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">247</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500">In Dispute</div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Transactions */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Active Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parties
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-x-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Instagram Account Sale</div>
                      <div className="text-sm text-gray-500">@fashionblogger - 50K followers</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <div>Buyer: john.doe@example.com</div>
                    <div>Seller: jane.smith@example.com</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">$2,500.00</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <Clock className="h-3 w-3 mr-1" />
                    Pending Delivery
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2 days ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-x-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Website Development</div>
                      <div className="text-sm text-gray-500">E-commerce platform build</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <div>Buyer: client@business.com</div>
                    <div>Seller: dev@agency.com</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">$5,000.00</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Clock className="h-3 w-3 mr-1" />
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1 week ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-x-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Digital Course</div>
                      <div className="text-sm text-gray-500">React Development Masterclass</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <div>Buyer: student@email.com</div>
                    <div>Seller: instructor@courses.com</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">$299.00</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3 days ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* How It Works & Features */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* How It Works */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How Escrow Works</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-blue-700">1</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Buyer deposits funds</div>
                <div className="text-xs text-gray-500">Funds are held securely in escrow</div>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-blue-700">2</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Seller delivers product/service</div>
                <div className="text-xs text-gray-500">Seller provides agreed deliverables</div>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-blue-700">3</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Buyer approves delivery</div>
                <div className="text-xs text-gray-500">Buyer confirms satisfaction with delivery</div>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-4 w-4 text-green-700" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Funds released to seller</div>
                <div className="text-xs text-gray-500">Transaction completed successfully</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <span className="text-sm text-gray-700">Identity verification for all parties</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm text-gray-700">Encrypted payment processing</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-purple-600"></div>
              <span className="text-sm text-gray-700">Dispute resolution system</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
              <span className="text-sm text-gray-700">Milestone-based payments</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-red-600"></div>
              <span className="text-sm text-gray-700">Automatic refund protection</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-teal-600"></div>
              <span className="text-sm text-gray-700">24/7 transaction monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escrow;