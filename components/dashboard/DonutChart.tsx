"use client";
import React from "react";

interface DonutDataItem {
  name: string;
  value: number;
}

interface DonutChartProps {
  title: string;
  data: DonutDataItem[];
  centerLabel?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  title,
  data,
  centerLabel = "Total",
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = 70;

  let currentAngle = 0;
  const segments = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;

    const color = index === 0 ? "#0b4d3a" : "#2fa06f";

    return {
      ...item,
      percentage,
      startAngle,
      angle,
      color,
    };
  });

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <h3 className="text-lg font-bold text-text-color mb-6">{title}</h3>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="24"
              className="text-foreground"
            />

            {segments.map((segment, index) => {
              const startAngle = (segment.startAngle - 90) * (Math.PI / 180);
              const endAngle = (segment.startAngle + segment.angle - 90) * (Math.PI / 180);

              const x1 = 100 + radius * Math.cos(startAngle);
              const y1 = 100 + radius * Math.sin(startAngle);
              const x2 = 100 + radius * Math.cos(endAngle);
              const y2 = 100 + radius * Math.sin(endAngle);

              const largeArcFlag = segment.angle > 180 ? 1 : 0;

              return (
                <g key={index} className="group cursor-pointer">
                  <path
                    d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`}
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="24"
                    strokeLinecap="round"
                    className="transition-all duration-300 group-hover:stroke-[28]"
                  />
                </g>
              );
            })}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-text-color">{total}</p>
            <p className="text-xs text-secondary font-medium mt-1">
              {centerLabel}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {segments.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-sm font-semibold text-text-color">
                  {item.name}
                </p>
                <p className="text-xs text-secondary">
                  {item.value} items • {item.percentage.toFixed(1)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;