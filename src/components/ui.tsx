import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow", className)} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-5 py-4 border-b border-slate-100 flex items-center justify-between", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("font-semibold text-slate-800 text-sm", className)} {...props}>
    {children}
  </h3>
);

export const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-5", className)} {...props}>
    {children}
  </div>
);

export const Tabs = ({ tabs, defaultTab }: { tabs: { id: string; label: string; content: ReactNode }[], defaultTab?: string }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div className="flex flex-col w-full">
      <div className="flex px-5 space-x-6 border-b border-slate-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "py-4 text-sm font-medium border-b-2 transition-colors",
              activeTab === tab.id
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-5 relative">
        {tabs.map((tab) => (
          <div key={tab.id} className={cn(activeTab === tab.id ? "block" : "hidden")}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
