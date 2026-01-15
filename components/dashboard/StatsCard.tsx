import React from "react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  subtitle?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  subtitle,
}) => {
  return (
    <div className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-2">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-text-color mb-1">{value}</h3>
          {subtitle && (
            <p className="text-xs text-secondary mt-1">{subtitle}</p>
          )}
        </div>
        <div className="p-3 rounded-xl bg-primary-gradient">
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
