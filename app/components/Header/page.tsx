"use client";
import React, { useState } from "react";
import logo from "@/public/image/svg/logo-head.svg";
import risk from "@/public/image/svg/risk.svg";
import strategy from "@/public/image/svg/strategy.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { IoMenu, IoClose } from "react-icons/io5";
import { MobileBackButton, MobileNavItem, NavListItem } from "../navItems";

// 📌 DESKTOP DROPDOWN FOR "Automated Investing"
const automatedInvestingDropdown = [
  {
    href: "/",
    title: "Risk Profiles",
    description: "Choose the profile that matches your risk tolerance",
    iconSrc: risk,
  },
  {
    href: "/",
    title: "Strategy Framework",
    description:
      "See how Tradoo integrates proven principles behind the scenes",
    iconSrc: strategy,
  },
];
// 📌 DESKTOP MAIN NAV
const desktopNav = [
  { label: "Product", href: "/" },
  { label: "About", href: "/" },
  { label: "Approach", href: "/" },
  {
    label: "Automated Investing",
    submenu: true, // <--- flag
    items: [
      {
        href: "/",
        title: "Risk Profiles",
        description: "Choose the profile that matches your risk tolerance",
        iconSrc: risk,
      },
      {
        href: "/",
        title: "Strategy Framework",
        description:
          "See how Tradoo integrates proven principles behind the scenes",
        iconSrc: strategy,
      },
    ],
  },
  { label: "Investors", href: "/" },
];

export const navData = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },

  {
    label: "Automated Investing",
    submenu: true,
    items: [
      {
        href: "/",
        title: "Risk Profiles",
        description: "Choose the profile that matches your risk tolerance",
        iconSrc: risk,
      },
      {
        href: "/",
        title: "Strategy Framework",
        description:
          "See how Tradoo integrates proven principles behind the scenes",
        iconSrc: strategy,
      },
    ],
  },

  { label: "Investors", href: "/investors" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuItems, setSubmenuItems] = useState<any[]>([]);

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="hidden lg:block">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="h-9 block">
              <Image src={logo} alt="logo" className="w-full h-full" />
            </Link>

            {/* Desktop Menu */}
            <ul className="flex items-center gap-10 xl:gap-12">
              {navData.map((item, i) => (
                <li key={i} className="relative group">
                  {/* Simple Link */}
                  {!item.submenu && (
                    <NavItem label={item.label} linkUrl={item.href!} />
                  )}

                  {/* Dropdown Parent */}
                  {item.submenu && (
                    <>
                      <NavItem label={item.label} arrow />

                      <div className="absolute left-0 top-full w-111 bg-white rounded-xl shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition">
                        <ul>
                          {item.items?.map((sub, idx) => (
                            <li key={idx}>
                              <NavListItem {...sub} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              variant="primarydefault"
              label="Get Early Access"
              href="/"
            />
          </div>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <header className="py-5.5 lg:hidden">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="h-9 block">
              <Image src={logo} alt="logo" className="w-full h-full" />
            </Link>

            {/* Burger Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="cursor-pointer"
            >
              <IoMenu size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-background z-50 p-5 animate-slideLeft">
          <div className="flex justify-between items-center mb-8">
            <Image src={logo} alt="logo" className="h-7 w-auto" />
            <button
              className="cursor-pointer"
              onClick={() => {
                setMobileOpen(false);
                setSubmenuOpen(false);
              }}
            >
              <IoClose size={24} className="text-primary" />
            </button>
          </div>

          {/* Main Menu */}
          {!submenuOpen && (
            <div>
              <ul className="space-y-2">
                {navData.map((item, i) => (
                  <li key={i}>
                    {!item.submenu ? (
                      <MobileNavItem
                        label={item.label}
                        href={item.href!}
                        onClick={() => {
                          setMobileOpen(false);
                          setSubmenuOpen(false);
                        }}
                      />
                    ) : (
                      <MobileNavItem
                        label={item.label}
                        trailingIcon={true}
                        onClick={() => {
                          setSubmenuItems(item.items);
                          setSubmenuOpen(true);
                        }}
                      />
                    )}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    setSubmenuOpen(false);
                  }}
                  variant="primarydefault"
                  label="Get Early Access"
                  href="/"
                />
              </div>
            </div>
          )}

          {/* SUBMENU */}
          {submenuOpen && (
            <div className="animate-slideLeft space-y-3">
              <MobileBackButton onClick={() => setSubmenuOpen(false)} />

              <ul className="space-y-3">
                {submenuItems?.map((sub, i) => (
                  <li key={i}>
                    <NavListItem
                      {...sub}
                      onClick={() => {
                        setMobileOpen(false);
                        setSubmenuOpen(false);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

/* ----------------- SMALL COMPONENTS ------------------ */

const NavItem = ({ label, arrow, linkUrl = "/" }: any) => (
  <Link
    href={linkUrl}
    className="cursor-pointer flex items-center gap-2 text-primary text-base font-medium leading-tight hover:text-gray500 py-8.5 -mb-2 group transition"
  >
    {label}
    {arrow && <ArrowDown />}
  </Link>
);

const ArrowDown = () => (
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
    <path
      className="group-hover:stroke-[#8B909C]"
      d="M1 1L5.5 5.5L10 1"
      stroke="#101729"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Header;
