import React from 'react';
import { Bell } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'New Message Received',
    description: 'You have a new message from Uzma.',
    time: '2 minutes ago',
    read: false,
  },
  {
    id: 2,
    title: 'Project Deadline Reminder',
    description: 'Your project "Dashboard UI" is due tomorrow.',
    time: '1 hour ago',
    read: true,
  },
  {
    id: 3,
    title: 'System Update',
    description: 'The system was updated successfully.',
    time: 'Yesterday',
    read: true,
  },
];

const Notification = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border max-h-[500px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-6 text-gray-500">No notifications to show.</div>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              className={`p-4 border-b hover:bg-gray-50 transition ${
                !note.read ? 'bg-blue-50' : 'bg-white'
              }`}
            >
              <h2 className="font-semibold text-gray-800">{note.title}</h2>
              <p className="text-gray-600 text-sm">{note.description}</p>
              <p className="text-xs text-gray-400 mt-1">{note.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;
