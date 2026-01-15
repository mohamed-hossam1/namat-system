import React from "react";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

interface Activity {
  id: string;
  type: string;
  amount?: number;
  category?: string;
  purpose?: string;
  status?: string;
  verified?: boolean;
  created_at: string;
}

interface ActivityCardProps {
  activities: Activity[];
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activities }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getStatusIcon = (status?: string, verified?: boolean) => {
    if (status === "APPROVED" || verified === true)
      return <CheckCircle2 size={16} className="text-white" />;
    if (status === "PENDING" || verified === false)
      return <Clock size={16} className="text-white" />;
    if (status === "REJECTED")
      return <XCircle size={16} className="text-white" />;
    return <Clock size={16} className="text-white" />;
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-text-color">Recent Activity</h3>
      </div>

      <div className="space-y-3">
        {activities.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock size={24} className="text-secondary" />
            </div>
            <p className="text-secondary font-medium">No recent activity</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="group p-4 rounded-xl hover:bg-foreground transition-all duration-300 border border-transparent hover:border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center shrink-0">
                  {getStatusIcon(activity.status, activity.verified)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-text-color">
                      {activity.type}
                    </h4>
                    <span className="text-xs text-secondary px-2 py-0.5 bg-foreground rounded-md">
                      {activity.status ||
                        (activity.verified ? "Verified" : "Pending")}
                    </span>
                  </div>

                  <p className="text-xs text-secondary mb-2">
                    {activity.purpose || activity.category}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary">
                      {formatDate(activity.created_at)}
                    </span>
                    {activity.amount && (
                      <span className="text-sm font-bold text-primary-foreground">
                        ${activity.amount.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
