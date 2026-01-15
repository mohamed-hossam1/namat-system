import Link from "next/link";
import { Wallet, Coins, ArrowRight } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "New Cash Request",
      description: "Submit a new request",
      icon: Wallet,
      href: "/requests/new",
    },
    {
      title: "Add Expense",
      description: "Record an expense",
      icon: Coins,
      href: "/expenses",
    },
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <h3 className="text-lg font-bold text-text-color mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              href={action.href}
              className="group relative overflow-hidden rounded-lg p-4 bg-gradient-to-r hover:shadow-lg transition-all duration-300 from-primary-foreground/10 to-primary-foreground/5 hover:from-primary-foreground/20 hover:to-primary-foreground/10 border border-primary-foreground/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-gradient">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-color">
                      {action.title}
                    </p>
                    <p className="text-xs text-secondary">
                      {action.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-primary-foreground group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;