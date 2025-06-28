import React, { useState } from 'react';
import { Users, Mail, Phone, TrendingUp, Filter, Plus, Download, X } from 'lucide-react';

const Leads: React.FC = () => {
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [newLead, setNewLead] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    status: 'new'
  });

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (newLead.name && newLead.email) {
      alert(`Adding new lead: ${newLead.name} (${newLead.email})`);
      setNewLead({ name: '', email: '', phone: '', source: '', status: 'new' });
      setShowAddLeadModal(false);
    }
  };

  const handleExport = (format: string) => {
    alert(`Exporting leads as ${format}...`);
    setShowExportModal(false);
  };

  const handleFilter = (filterType: string) => {
    alert(`Applying filter: ${filterType}`);
    setShowFilterModal(false);
  };

  const AddLeadModal = () => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Add Lead</h3>
          <button
            onClick={() => setShowAddLeadModal(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <form onSubmit={handleAddLead} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={newLead.name}
              onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={newLead.email}
              onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={newLead.phone}
              onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
            <select
              value={newLead.source}
              onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select source</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
            </select>
          </div>
          
          <div className="flex items-center gap-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowAddLeadModal(false)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:shadow-lg transition-all"
            >
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const ExportModal = () => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Export Leads</h3>
          <button
            onClick={() => setShowExportModal(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => handleExport('CSV')}
            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-900">Export as CSV</div>
            <div className="text-sm text-gray-500">Comma-separated values file</div>
          </button>
          <button
            onClick={() => handleExport('Excel')}
            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-900">Export as Excel</div>
            <div className="text-sm text-gray-500">Microsoft Excel spreadsheet</div>
          </button>
          <button
            onClick={() => handleExport('PDF')}
            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-900">Export as PDF</div>
            <div className="text-sm text-gray-500">Portable document format</div>
          </button>
        </div>
      </div>
    </div>
  );

  const FilterModal = () => (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Filter Leads</h3>
          <button
            onClick={() => setShowFilterModal(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => handleFilter('New Leads')}
            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-900">New Leads</div>
            <div className="text-sm text-gray-500">Recently added leads</div>
          </button>
          <button
            onClick={() => handleFilter('Qualified')}
            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-900">Qualified Leads</div>
            <div className="text-sm text-gray-500">High-potential prospects</div>
          </button>
          <button
            onClick={() => handleFilter('Instagram Source')}
            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-900">Instagram Source</div>
            <div className="text-sm text-gray-500">Leads from Instagram</div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <p className="mt-2 text-gray-600">Manage your leads and email marketing campaigns</p>
        </div>
        <div className="flex items-center gap-x-3">
          <button 
            onClick={() => setShowExportModal(true)}
            className="inline-flex items-center gap-x-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
          <button 
            onClick={() => setShowAddLeadModal(true)}
            className="inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Plus className="h-4 w-4" />
            Add Lead
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">2,847</div>
              <div className="text-sm text-gray-500">Total Leads</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">18.2%</div>
              <div className="text-sm text-gray-500">Conversion Rate</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
              <Mail className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1,293</div>
              <div className="text-sm text-gray-500">Email Subscribers</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
              <Phone className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">847</div>
              <div className="text-sm text-gray-500">Phone Contacts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
            <button 
              onClick={() => setShowFilterModal(true)}
              className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Added
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">JD</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">john.doe@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Instagram
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Qualified
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  85/100
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2 hours ago
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">JS</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                      <div className="text-sm text-gray-500">jane.smith@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Link in Bio
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    New
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  72/100
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5 hours ago
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">MB</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Mike Brown</div>
                      <div className="text-sm text-gray-500">mike.brown@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                    Facebook
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Cold
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  45/100
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1 day ago
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {showAddLeadModal && <AddLeadModal />}
      {showExportModal && <ExportModal />}
      {showFilterModal && <FilterModal />}
    </div>
  );
};

export default Leads;