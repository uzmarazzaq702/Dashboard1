import React from 'react';
import {
  MoreHorizontal,
  MessageCircle,
  Paperclip,
  Eye,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

// Avatar component with fallback
const Avatar = ({ src, alt }) => {
  const [imgError, setImgError] = React.useState(false);

  return imgError || !src ? (
    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-semibold border-2 border-white shadow-sm">
      {alt?.[0] || "?"}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      onError={() => setImgError(true)}
      className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
    />
  );
};

const tasks = [
  {
    id: 1,
    title: 'Dashboard Redesign',
    description: 'Sync up on redesign progress with UI/UX team.',
    priority: 'Low',
    priorityIcon: <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-green-600" />,
    progress: 'On Track',
    progressIcon: <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" />,
    members: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2'],
    stats: { messages: 14, files: 2, views: 10 },
  },
  {
    id: 2,
    title: 'E-commerce Launch',
    description: 'Engineering & marketing alignment on product release.',
    priority: 'High',
    priorityIcon: <AlertCircle className="w-3.5 h-3.5 mr-1 text-red-600" />,
    progress: 'Delayed',
    progressIcon: <Clock className="w-3.5 h-3.5 mr-1 text-yellow-600" />,
    members: ['https://i.pravatar.cc/150?img=3', 'https://i.pravatar.cc/150?img=200'],
    stats: { messages: 8, files: 4, views: 7 },
  },
  {
    id: 3,
    title: 'Mobile App Sprint',
    description: 'UI decisions for Android/iOS feature parity.',
    priority: 'Medium',
    priorityIcon: <AlertCircle className="w-3.5 h-3.5 mr-1 text-yellow-600" />,
    progress: 'On Track',
    progressIcon: <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" />,
    members: ['https://i.pravatar.cc/150?img=5', 'https://i.pravatar.cc/150?img=6'],
    stats: { messages: 10, files: 1, views: 9 },
  },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-6 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Team Schedule</h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{task.description}</p>
              </div>
              <MoreHorizontal className="text-gray-400 cursor-pointer w-5 h-5" />
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full text-xs font-medium">
                {task.priorityIcon}
                {task.priority}
              </div>
              <div className="flex items-center bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full text-xs font-medium">
                {task.progressIcon}
                {task.progress}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-3">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {task.members.map((src, idx) => (
                  <Avatar key={idx} src={src} alt={`Member ${idx + 1}`} />
                ))}
              </div>

              {/* Stats - Compact Spacing */}
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {task.stats.messages}
                </div>
                <div className="flex items-center gap-1">
                  <Paperclip className="w-4 h-4" />
                  {task.stats.files}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {task.stats.views}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
