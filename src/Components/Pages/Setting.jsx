import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

const Setting = () => {
  const [selectedDate, setSelectedDate] = useState(2);

  const dates = [
    { date: 9, day: 'Mon' },
    { date: 30, day: 'Tue' },
    { date: 1, day: 'Wed' }, 
    { date: 2, day: 'Thu' },
    { date: 3, day: 'Fri' },
    { date: 4, day: 'Sat' },
    { date: 5, day: 'Sun' },
    { date: 6, day: 'Mon' },
    { date: 7, day: 'Tue' },
    { date: 8, day: 'Wed' },
    { date: 9, day: 'Thu' },
    { date: 10, day: 'Fri' },
    { date: 11, day: 'Sat' },
    { date: 12, day: 'Sun' },
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM', 
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM'
  ];

  const tasks = [
    {
      id: 1,
      title: 'Graphic Design',
      time: '09:00 AM',
      teamMembers: [
        { id: 1, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
        { id: 2, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b814?w=32&h=32&fit=crop&crop=face' },
        { id: 3, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
        { id: 4, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' }
      ],
      status: 'Low',
      statusColor: 'bg-red-100 text-red-700',
      secondaryStatus: 'On Track',
      secondaryStatusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 2,
      title: 'Dashboard Design',
      time: '11:00 AM',
      teamMembers: [
        { id: 1, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face' },
        { id: 2, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face' },
        { id: 3, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face' }
      ],
      status: 'High',
      statusColor: 'bg-cyan-500 text-white',
      secondaryStatus: 'On Track',
      secondaryStatusColor: 'bg-yellow-100 text-yellow-700',
      hasIndicator: true
    },
    {
      id: 3,
      title: 'Logo Design',
      time: '02:00 PM',
      teamMembers: [
        { id: 1, avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=32&h=32&fit=crop&crop=face' },
        { id: 2, avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=32&h=32&fit=crop&crop=face' },
        { id: 3, avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=32&h=32&fit=crop&crop=face' }
      ],
      status: 'High',
      statusColor: 'bg-cyan-500 text-white',
      secondaryStatus: 'On Track',
      secondaryStatusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 4,
      title: 'Web Design',
      time: '04:00 PM',
      teamMembers: [
        { id: 1, avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=32&h=32&fit=crop&crop=face' },
        { id: 2, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b814?w=32&h=32&fit=crop&crop=face' },
        { id: 3, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' }
      ],
      status: 'High',
      statusColor: 'bg-cyan-500 text-white',
      secondaryStatus: 'On Track',
      secondaryStatusColor: 'bg-yellow-100 text-yellow-700'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Date Navigation */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {dates.map((dateItem) => (
            <button
              key={dateItem.date}
              onClick={() => setSelectedDate(dateItem.date)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-center min-w-[60px] transition-colors ${
                selectedDate === dateItem.date
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="text-lg font-semibold">{dateItem.date.toString().padStart(2, '0')}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="flex">
        {/* Time Column */}
        <div className="w-20 flex-shrink-0 border-r border-gray-200">
          {timeSlots.map((time, index) => (
            <div key={time} className="h-20 flex items-center justify-end pr-4 text-xs text-gray-500 border-b border-gray-100">
              {time}
            </div>
          ))}
        </div>

        {/* Content Column */}
        <div className="flex-1 relative">
          {timeSlots.map((time, index) => (
            <div key={time} className="h-20 border-b border-gray-100 relative">
              {/* Task Items */}
              {tasks
                .filter(task => task.time === time)
                .map((task) => (
                  <div key={task.id} className="absolute left-4 right-4 top-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        {/* Task Info */}
                        <div className="flex items-center gap-3">
                          {/* Indicator Dot */}
                          <div className={`w-3 h-3 rounded-full ${task.hasIndicator ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                          
                          {/* Task Title */}
                          <span className="font-medium text-gray-900">{task.title}</span>
                          
                          {/* Team Members */}
                          <div className="flex -space-x-1">
                            {task.teamMembers.map((member, memberIndex) => (
                              <div
                                key={member.id}
                                className="w-6 h-6 rounded-full border border-white overflow-hidden"
                                style={{ zIndex: task.teamMembers.length - memberIndex }}
                              >
                                <img
                                  src={member.avatar}
                                  alt="Team member"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                          
                          {/* Status Badges */}
                          <div className="flex gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${task.statusColor}`}>
                              {task.status}
                            </span>
                            {task.secondaryStatus && (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${task.secondaryStatusColor}`}>
                                {task.secondaryStatus}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* More Options */}
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setting;