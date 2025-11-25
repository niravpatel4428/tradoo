import Link from "next/link";
import React from "react";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`
        text-gray400 
        hover:!text-gray300 
        transition-colors 
        duration-200  
        taxt-base
        font-medium
        leading-5 
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default FooterLink;