import React, { useState } from 'react';
import { Building2, ChevronDown, Plus, Check } from 'lucide-react';

const workspaces = [
  { id: 1, name: 'My Business', role: 'Owner', current: true },
  { id: 2, name: 'Client Project A', role: 'Admin', current: false },
  { id: 3, name: 'Marketing Agency', role: 'Editor', current: false },
];

const WorkspaceSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] = useState(workspaces.find(w => w.current));
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState('');

  const handleWorkspaceSwitch = (workspace: typeof workspaces[0]) => {
    // Update current workspace
    const updatedWorkspaces = workspaces.map(w => ({
      ...w,
      current: w.id === workspace.id
    }));
    setCurrentWorkspace(workspace);
    setIsOpen(false);
    
    // Show notification
    alert(`Switched to ${workspace.name}`);
  };

  const handleCreateWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWorkspaceName.trim()) {
      // In a real app, this would make an API call
      alert(`Creating workspace: ${newWorkspaceName}`);
      setNewWorkspaceName('');
      setShowCreateModal(false);
    }
  };

  return (
    <>
      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-x-3 rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="h-6 w-6 rounded bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <Building2 className="h-3 w-3 text-white" />
          </div>
          <span className="hidden sm:block">{currentWorkspace?.name}</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="p-4">
              <div className="text-sm font-medium text-gray-900 mb-3">Switch workspace</div>
              <div className="space-y-1">
                {workspaces.map((workspace) => (
                  <button
                    key={workspace.id}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                    onClick={() => handleWorkspaceSwitch(workspace)}
                  >
                    <div className="flex items-center gap-x-3">
                      <div className="h-6 w-6 rounded bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <Building2 className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{workspace.name}</div>
                        <div className="text-xs text-gray-500">{workspace.role}</div>
                      </div>
                    </div>
                    {workspace.current && (
                      <Check className="h-4 w-4 text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <button 
                  className="flex w-full items-center gap-x-3 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setShowCreateModal(true);
                    setIsOpen(false);
                  }}
                >
                  <div className="h-6 w-6 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <Plus className="h-3 w-3 text-gray-400" />
                  </div>
                  <span>Create new workspace</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Workspace Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Workspace</h3>
            <form onSubmit={handleCreateWorkspace}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Workspace Name
                </label>
                <input
                  type="text"
                  value={newWorkspaceName}
                  onChange={(e) => setNewWorkspaceName(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter workspace name"
                  required
                />
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
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkspaceSwitcher;