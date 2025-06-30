import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate(); // get days for any month
  const today = new Date();

  
  const goToNextMonth = () => {
    const next = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(next);
  };

  const goToPrevMonth = () => {
    const prev = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
        
        <div className="flex items-center justify-between mb-6">
          <button onClick={goToPrevMonth} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {monthName} {year}
          </h2>
          <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-500 text-sm font-medium mb-4">
          {weekdays.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>

       
        <div className="grid grid-cols-7 gap-2 text-center text-gray-800">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const date = i + 1;
            const isToday =
              today.getDate() === date &&
              today.getMonth() === currentDate.getMonth() &&
              today.getFullYear() === currentDate.getFullYear();

            return (
              <div
                key={i}
                className={`p-3 rounded-xl transition duration-200 ${
                  isToday
                    ? 'bg-blue-500 text-white font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calender;
