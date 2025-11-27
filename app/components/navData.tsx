import risk from "@/public/image/svg/risk.svg";
import strategy from "@/public/image/svg/strategy.svg";

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
