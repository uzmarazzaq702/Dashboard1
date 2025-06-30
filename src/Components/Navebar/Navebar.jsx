import React, { useState } from 'react';
import { ChevronDown, Calendar, Search } from 'lucide-react';

const Navebar = () => {
  const [startDate, setStartDate] = useState('10-06-2021');
  const [endDate, setEndDate] = useState('10-10-2021');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateRangeClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Dashboard Title */}
        <div className="w-1/3">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        {/* Center: Search Bar */}
        <div className="w-1/3 flex justify-center">
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="flex items-center justify-center px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: Date Range Selector */}
        <div className="w-1/3 flex justify-end">
          <div className="relative">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleDateRangeClick}
            >
              {/* Start Date */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700 font-medium">{startDate}</span>
              </div>

              {/* Separator */}
              <div className="w-3 h-px bg-gray-300"></div>

              {/* End Date */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700 font-medium">{endDate}</span>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isDatePickerOpen ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Date Picker Dropdown */}
            {isDatePickerOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4">
                  <div className="space-y-3">
                    {/* Start Date Input */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value="2021-06-10"
                        onChange={(e) => {
                          const formatted = e.target.value.split('-').reverse().join('-');
                          setStartDate(formatted);
                        }}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* End Date Input */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        value="2021-10-10"
                        onChange={(e) => {
                          const formatted = e.target.value.split('-').reverse().join('-');
                          setEndDate(formatted);
                        }}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setIsDatePickerOpen(false)}
                        className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsDatePickerOpen(false)}
                        className="flex-1 px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
