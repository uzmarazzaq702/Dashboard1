import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const AnalyticsDashboard = () => {
  const data = [
    { label: 'Sale', value: 50, color: '#3B82F6' },     // Blue
    { label: 'Distribute', value: 30, color: '#FCD34D' },// Yellow
    { label: 'Return', value: 20, color: '#FB7185' }     // Red
  ];

  let cumulativePercentage = 0;

  const chartData = data.map(item => {
    const startAngle = +(cumulativePercentage * 3.6).toFixed(3);
    const endAngle = +((cumulativePercentage + item.value) * 3.6).toFixed(3);
    cumulativePercentage += item.value;
    return { ...item, startAngle, endAngle };
  });

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  const createPath = (startAngle, endAngle, innerRadius = 60, outerRadius = 100) => {
    const start = polarToCartesian(0, 0, outerRadius, endAngle);
    const end = polarToCartesian(0, 0, outerRadius, startAngle);
    const innerStart = polarToCartesian(0, 0, innerRadius, endAngle);
    const innerEnd = polarToCartesian(0, 0, innerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle > 180 ? '1' : '0';

    return [
      'M', start.x, start.y,
      'A', outerRadius, outerRadius, 0, largeArcFlag, 0, end.x, end.y,
      'L', innerEnd.x, innerEnd.y,
      'A', innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
      'Z'
    ].join(' ');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-10 px-4">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-5xl p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Analytics Overview</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Donut Chart */}
          <div className="flex justify-center">
            <div className="relative w-[260px] h-[260px]">
              <svg
                width="260"
                height="260"
                viewBox="-130 -130 260 260"
                className="transform -rotate-90"
              >
                {chartData.map((item, index) => (
                  <path
                    key={index}
                    d={createPath(item.startAngle, item.endAngle)}
                    fill={item.color}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                ))}
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Transactions</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col justify-center gap-5">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <p className="text-gray-800 font-semibold">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.value}% of total</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
