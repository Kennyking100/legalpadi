import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Calendar, Users, FileText, Settings, CreditCard } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Cases', icon: Briefcase, path: '/cases' },
  { name: 'Calendar', icon: Calendar, path: '/calendar' },
  { name: 'Clients', icon: Users, path: '/clients' },
  { name: 'Documents', icon: FileText, path: '/documents' },
  { name: 'Pricing', icon: CreditCard, path: '/pricing' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow bg-gray-50 pt-5 overflow-y-auto">
        <div className="flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={`
                        mr-3 h-6 w-6
                        ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'}
                      `}
                    />
                    {item.name}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}