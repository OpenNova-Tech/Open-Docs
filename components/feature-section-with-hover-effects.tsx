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
    <div className="w-[250px] shrink-0 snap-start bg-neutral-900 rounded-xl border border-neutral-800 p-6 mx-10 hover:border-indigo-600 transition-all duration-200">
      <div className="mb-4 text-indigo-400 text-xl">{icon}</div>
      <h3 className="text-md font-bold text-neutral-100 mb-2">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
};
