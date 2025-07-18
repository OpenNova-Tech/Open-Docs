// import { cn } from "../lib/utils";
import React from "react";

export const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col py-10 relative group/feature border-b-[1px] border-l-[1px] border-r-[1px] border-neutral-800">
      <div className="mb-4 relative z-10 px-10 text-indigo-400">
        {icon}
      </div>
      <div className="text-md font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-600 group-hover/feature:bg-indigo-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
