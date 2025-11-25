"use client";

import React from "react";

export type BadgeVariant = "lightgreen" | "darkgreen" | "gray"; 

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  icon?: React.ReactNode;  // ← any icon can be passed here
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "lightgreen",
  icon,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-6 px-3 py-2 text-base font-medium leading-5";

  const variantStyles: Record<BadgeVariant, string> = {
    lightgreen: "bg-lightgreen text-green",
    darkgreen: "bg-darkgreen text-greenlight",
    gray: "bg-grayprimary text-darkgray",
  };

  return (
    <span className={`${baseClasses} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="">{icon}</span>}
      {label}
    </span>
  );
};

export default Badge;
