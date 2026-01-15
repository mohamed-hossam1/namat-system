// components/dashboard/ChartCard.tsx
"use client";
import React from "react";

interface ChartDataItem {
  name: string;
  value: number;
}

interface ChartCardProps {
  title: string;
  data: ChartDataItem[];
  type?: "bar" | "progress";
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, type = "bar" }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-fit">
      <h3 className="text-lg font-bold text-text-color mb-6">{title}</h3>
      <div className="space-y-5">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-color">
                  {item.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-text-color">
                    {item.value}
                  </span>
                  <span className="text-xs text-secondary font-medium px-2 py-1 bg-foreground rounded-md">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="relative w-full h-2 bg-foreground rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-primary-gradient rounded-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartCard;
