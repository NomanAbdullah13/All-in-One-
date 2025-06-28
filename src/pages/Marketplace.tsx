import React from 'react';
import { Store, Plus, TrendingUp, Package, Star, DollarSign } from 'lucide-react';

const Marketplace: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace & Stores</h1>
          <p className="mt-2 text-gray-600">Manage your online stores and marketplace presence</p>
        </div>
        <button className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          <Plus className="h-4 w-4" />
          Create Store
        </button>
      </div>

      {/* Store Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <Store className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500">Active Stores</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
              <Package className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">247</div>
              <div className="text-sm text-gray-500">Total Products</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$24,847</div>
              <div className="text-sm text-gray-500">Monthly Revenue</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">+18.2%</div>
              <div className="text-sm text-gray-500">Growth Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Stores */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">My Stores</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Tech Gadgets Store',
              domain: 'techgadgets.mystore.com',
              products: 89,
              orders: 247,
              revenue: '$12,847',
              status: 'active',
              rating: 4.8
            },
            {
              name: 'Fashion Boutique',
              domain: 'fashionboutique.mystore.com',
              products: 156,
              orders: 189,
              revenue: '$8,923',
              status: 'active',
              rating: 4.6
            },
            {
              name: 'Digital Downloads',
              domain: 'digitalstore.mystore.com',
              products: 23,
              orders: 92,
              revenue: '$3,077',
              status: 'draft',
              rating: 4.9
            }
          ].map((store, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="flex items-center justify-center">
                  <Store className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    store.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {store.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{store.domain}</p>
                
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{store.products}</div>
                    <div>Products</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{store.orders}</div>
                    <div>Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{store.revenue}</div>
                    <div>Revenue</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{store.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">Customer Rating</span>
                </div>

                <div className="flex items-center gap-x-2">
                  <button className="flex-1 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                    Manage Store
                  </button>
                  <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                    <TrendingUp className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketplace Features */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Store Features */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Features</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm text-gray-700">Custom domain support</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <span className="text-sm text-gray-700">Inventory management</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-purple-600"></div>
              <span className="text-sm text-gray-700">Payment processing</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
              <span className="text-sm text-gray-700">Order fulfillment</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-red-600"></div>
              <span className="text-sm text-gray-700">Analytics & reporting</span>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Wireless Headphones', sales: 89, revenue: '$2,670', trend: '+12%' },
              { name: 'Smart Watch', sales: 67, revenue: '$2,010', trend: '+8%' },
              { name: 'Phone Case', sales: 156, revenue: '$1,560', trend: '+24%' },
              { name: 'Laptop Stand', sales: 34, revenue: '$1,020', trend: '+5%' },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-x-3">
                  <div className="h-8 w-8 rounded bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    <Package className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.sales} sales</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">{product.revenue}</div>
                  <div className="text-xs text-green-600">{product.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;