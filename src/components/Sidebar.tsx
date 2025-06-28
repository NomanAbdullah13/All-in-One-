import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Share2, 
  Link2, 
  Users, 
  Scissors, 
  Gift, 
  Settings, 
  MessageCircle, 
  Globe, 
  User, 
  FileText, 
  Percent, 
  CreditCard, 
  GraduationCap, 
  Store, 
  Layout, 
  Shield, 
  TrendingUp,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Console', href: '/', icon: BarChart3, category: 'main' },
  { name: 'Socials', href: '/socials', icon: Share2, category: 'main' },
  { name: 'Link in Bio', href: '/link-in-bio', icon: Link2, category: 'main' },
  { name: 'Leads', href: '/leads', icon: Users, category: 'main' },
  { name: 'Link Shortener', href: '/link-shortener', icon: Scissors, category: 'main' },
  { name: 'Referral System', href: '/referrals', icon: Gift, category: 'main' },
  
  { name: 'Website Builder', href: '/website-builder', icon: Globe, category: 'creation' },
  { name: 'Courses & Community', href: '/courses', icon: GraduationCap, category: 'creation' },
  { name: 'Marketplace & Stores', href: '/marketplace', icon: Store, category: 'creation' },
  { name: 'Template Library', href: '/templates', icon: Layout, category: 'creation' },
  
  { name: 'Users', href: '/users', icon: User, category: 'management' },
  { name: 'Form Templates', href: '/form-templates', icon: FileText, category: 'management' },
  { name: 'Discount Codes', href: '/discount-codes', icon: Percent, category: 'management' },
  { name: 'Finance', href: '/finance', icon: CreditCard, category: 'management' },
  { name: 'Escrow System', href: '/escrow', icon: Shield, category: 'management' },
  { name: 'Analytics & Reporting', href: '/analytics', icon: TrendingUp, category: 'management' },
  
  { name: 'Settings', href: '/settings', icon: Settings, category: 'system' },
  { name: 'Contact Us', href: '/contact', icon: MessageCircle, category: 'system' },
];

const categoryLabels = {
  main: 'Core Features',
  creation: 'Creation Tools',
  management: 'Management',
  system: 'System'
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const groupedNavigation = navigation.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof navigation>);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="relative z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-900/80" onClick={onClose} />
          <div className="fixed inset-0 flex">
            <div className="relative mr-16 flex w-full max-w-xs flex-1">
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button type="button" className="-m-2.5 p-2.5" onClick={onClose}>
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <SidebarContent groupedNavigation={groupedNavigation} onItemClick={onClose} />
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <SidebarContent groupedNavigation={groupedNavigation} />
      </div>
    </>
  );
};

interface SidebarContentProps {
  groupedNavigation: Record<string, typeof navigation>;
  onItemClick?: () => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ groupedNavigation, onItemClick }) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-xl">
      <div className="flex h-16 shrink-0 items-center">
        <div className="flex items-center gap-x-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Platform
          </span>
        </div>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          {Object.entries(groupedNavigation).map(([category, items]) => (
            <li key={category}>
              <div className="text-xs font-semibold leading-6 text-gray-500 uppercase tracking-wide mb-3">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </div>
              <ul role="list" className="-mx-2 space-y-1">
                {items.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      onClick={onItemClick}
                      className={({ isActive }) =>
                        `group flex gap-x-3 rounded-lg p-2 text-sm leading-6 font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm'
                            : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <item.icon
                            className={`h-5 w-5 shrink-0 transition-colors ${
                              isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                            }`}
                          />
                          {item.name}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;