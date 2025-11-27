"use client";

import Link from "next/link";
import React from "react";

type SocialIconsProps = {
  icon: React.ReactNode;   // 👈 your custom icon component
  href: string;            // 👈 link for that icon
  className?: string;
};

const SocialIcons: React.FC<SocialIconsProps> = ({ icon, href, className = "" }) => {
  return (
    <Link href={href} target="_blank" className={`text-aurometalsaurus hover:text-romansilver transition ${className}`} >
      {icon}
    </Link>
  );
};

export default SocialIcons;
