import React from 'react';
import { Menu, Bell, Search, User, ChevronDown } from 'lucide-react';
import WorkspaceSwitcher from './WorkspaceSwitcher';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={onMenuClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <WorkspaceSwitcher />
        </div>

        <div className="relative flex flex-1 items-center">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 pl-3" />
            <input
              id="search-field"
              className="block h-full w-full border-0 py-0 pl-10 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-transparent"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 transition-colors"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

          <div className="relative">
            <button
              type="button"
              className="-m-1.5 flex items-center p-1.5 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  John Doe
                </span>
                <ChevronDown className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;