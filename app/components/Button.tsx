"use client";

import React from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export type ButtonVariant =
  | "primarydefault"
  | "secondarydefault"
  | "contrastdefault";

export type ButtonSize = "M" | "L";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  trailingIcon?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  variant = "primarydefault",
  size = "L",
  trailingIcon = false,
  className = "",
  ...props
}) => {
  /** Variant styles */
  const variantClasses: Record<ButtonVariant, string> = {
    primarydefault: "bg-primary text-white hover:bg-[#101729]",
    secondarydefault: "bg-grayprimary text-primary hover:bg-[#DADCE0]",
    contrastdefault: "bg-white text-primary hover:bg-primary hover:text-white",
  };

  /** Icon bg + color per variant */
  const iconVariantClasses: Record<ButtonVariant, string> = {
    primarydefault: "bg-white text-[#101729]",      // white circle + dark icon
    secondarydefault: "bg-primary text-white",      // dark bg + white icon
    contrastdefault: "bg-primary text-white",       // dark bg + white icon
  };

  /** Base padding */
  const sizeClasses: Record<ButtonSize, string> = {
    M: "pl-7 pr-1 py-1 text-base font-medium",
    L: "pl-7 pr-1 py-1 text-lg font-semibold leading-5",
  };

  /** Padding when NO icon */
  const noIconPaddingClasses: Record<ButtonSize, string> = {
    M: "pl-7 pr-7 py-3",
    L: "pl-8 pr-8 py-4.5",
  };

  /** dynamic spacing */
  const dynamicGap = trailingIcon ? "gap-7" : "gap-0";

  /** apply no-icon padding */
  const extraPadding = trailingIcon ? "" : noIconPaddingClasses[size];

  return (
    <Link
      href={href}
      className={`
        inline-flex items-center rounded-full transition-all duration-400
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${dynamicGap}
        ${extraPadding}
        ${className}
      `}
      {...props}
    >
      <span>{label}</span>

      {trailingIcon && (
        <span
          className={`
            flex items-center justify-center min-w-12 w-12 h-12 rounded-full
            transition-all duration-200
            ${iconVariantClasses[variant]}
          `}
        >
          <IoArrowForward size={22} />
        </span>
      )}
    </Link>
  );
};

export default Button;
