import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  MessageSquare,
  Calendar,
  Settings,
  Bell,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const activeItem = location.pathname;

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    { name: 'Invoices', icon: FileText, path: '/invoices' },
    { name: 'Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Schedule', icon: Calendar, path: '/schedule' },
    { name: 'Notifications', icon: Bell, path: '/notification' },
    { name: 'Settings', icon: Settings, path: '/setting' },
  ];

  return (
    <div className="w-[20%] bg-white border-r h-screen fixed left-0 top-0 z-20">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-100'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mr-3 ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Profile - directly after menu */}
      <div className="px-4 pt-2 pb-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover border"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">User</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
