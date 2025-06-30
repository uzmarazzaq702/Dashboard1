import React from 'react';
import { Heart, Package, ShoppingCart, Briefcase } from 'lucide-react';

const Dashboard = () => {
  const statsData = [
    {
      id: 1,
      value: '178+',
      label: 'Save Products',
      icon: Heart,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      value: '20+',
      label: 'Stock Products',
      icon: Package,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 3,
      value: '190+',
      label: 'Sales Products',
      icon: ShoppingCart,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 4,
      value: '12+',
      label: 'Job Application',
      icon: Briefcase,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="flex gap-8 px-8 py-16 bg-gray-50 min-h-[80vh] items-start justify-center">
      {statsData.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-200 w-60"
          >
            {/* Icon */}
            <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mb-6`}>
              <IconComponent className={`w-7 h-7 ${stat.iconColor}`} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 text-base font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
