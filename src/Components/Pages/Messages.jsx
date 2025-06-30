import React, { useState } from 'react';
import { Phone, Video } from 'lucide-react';

const tabs = ['Chats', 'Updates', 'Communities', 'Calls'];

const sampleChats = [
  {
    name: 'Uzma Khan',
    message: 'Typing...',
    time: '9:41 AM',
    img: 'https://i.pravatar.cc/150?img=5',
    isOnline: true,
    isTyping: true,
  },
  {
    name: 'Ali Raza',
    message: 'Meeting is at 2 PM sharp.',
    time: '8:15 AM',
    img: 'https://i.pravatar.cc/150?img=6',
    isOnline: false,
    isTyping: false,
  },
  {
    name: 'Fatima Javed',
    message: 'Let’s catch up soon!',
    time: 'Yesterday',
    img: 'https://i.pravatar.cc/150?img=7',
    isOnline: true,
    isTyping: false,
  },
  {
    name: 'Bilal',
    message: 'I’ve sent the report.',
    time: 'Yesterday',
    img: 'https://i.pravatar.cc/150?img=8',
    isOnline: false,
    isTyping: false,
  },
  {
    name: 'Amna',
    message: 'See you at dinner!',
    time: '2 days ago',
    img: 'https://i.pravatar.cc/150?img=9',
    isOnline: true,
    isTyping: false,
  },
  {
    name: 'Talha',
    message: 'Typing...',
    time: 'Now',
    img: 'https://i.pravatar.cc/150?img=10',
    isOnline: true,
    isTyping: true,
  },
];

const statusUpdates = [
  {
    name: 'Fatima',
    time: '10 minutes ago',
    img: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Ahmed',
    time: '1 hour ago',
    img: 'https://i.pravatar.cc/150?img=12',
  },
];

const communityGroups = [
  {
    name: 'React Learners',
    members: '58 members',
    img: 'https://i.pravatar.cc/150?img=13',
  },
  {
    name: 'UI Designers',
    members: '30 members',
    img: 'https://i.pravatar.cc/150?img=14',
  },
];

const callLogs = [
  {
    name: 'Uzma Khan',
    type: 'missed',
    time: 'Today, 10:30 AM',
    video: false,
    img: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Ali Raza',
    type: 'incoming',
    time: 'Yesterday, 6:00 PM',
    video: true,
    img: 'https://i.pravatar.cc/150?img=6',
  },
];

const Messages = () => {
  const [activeTab, setActiveTab] = useState('Chats');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Chats':
        return (
          <div className="space-y-4 mt-6">
            {sampleChats.map((chat, index) => (
              <div key={index} className="flex items-center gap-4 relative">
                {/* Avatar with Online Badge */}
                <div className="relative">
                  <img
                    src={chat.img}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>

                {/* Message Info */}
                <div className="flex-1 border-b pb-3">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-800">{chat.name}</p>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p
                    className={`text-sm truncate ${
                      chat.isTyping ? 'text-green-500 font-medium' : 'text-gray-600'
                    }`}
                  >
                    {chat.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Updates':
        return (
          <div className="mt-6 space-y-4">
            {statusUpdates.map((status, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={status.img}
                  alt={status.name}
                  className="w-12 h-12 rounded-full border-2 border-green-500"
                />
                <div>
                  <p className="font-semibold text-gray-800">{status.name}</p>
                  <p className="text-xs text-gray-500">{status.time}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Communities':
        return (
          <div className="mt-6 space-y-4">
            {communityGroups.map((group, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={group.img}
                  alt={group.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{group.name}</p>
                  <p className="text-sm text-gray-500">{group.members}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Calls':
        return (
          <div className="mt-6 space-y-4">
            {callLogs.map((call, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={call.img}
                  alt={call.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{call.name}</p>
                  <p className="text-sm text-gray-500">{call.time}</p>
                  <span
                    className={`text-xs ${
                      call.type === 'missed' ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {call.type === 'missed' ? 'Missed Call' : 'Incoming Call'}
                  </span>
                </div>
                <div>
                  {call.video ? (
                    <Video className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Phone className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Messages;
