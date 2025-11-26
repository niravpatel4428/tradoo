import Image from "next/image";
import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface NavListItemProps {
  href: string;
  title: string;
  description: string;
  iconSrc: string;
  onClick?: () => void;
}

export const NavListItem = ({
  href = "/",
  title,
  description,
  iconSrc,
  onClick,
}: NavListItemProps) => {
  return (
    <Link
      href={href} onClick={onClick}
      className="rounded-xl cursor-pointer bg-white p-4 flex items-start gap-4 hover:bg-background transition-all duration-300 group"
    >
      <div className="bg-background rounded-xl size-14 flex-none flex items-center justify-center group-hover:bg-white transition-all duration-300">
        <Image
          src={iconSrc}
          alt={title}
          width={32}
          height={32}
          className="size-8"
        />
      </div>

      <div className="space-y-2">
        <span className="text-primary font-medium text-base leading-tight">
          {title}
        </span>

        <p className="text-darkgray font-normal text-base leading-snug">
          {description}
        </p>
      </div>
    </Link>
  );
};

interface MobileNavItemProps {
  label: string;
  href?: string;
  trailingIcon?: boolean; // show the ">" icon
  onClick?: () => void;
}

export const MobileNavItem: React.FC<MobileNavItemProps> = ({
  label,
  href = "/",
  trailingIcon = false,
  onClick,
}) => {
  const className = `w-full cursor-pointer flex items-center justify-between px-4 py-6 rounded-2xl
                  bg-white hover:bg-background transition-all text-left`;

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        <span className="text-primary text-base font-medium leading-tight capitalize">
          {label}
        </span>

        {trailingIcon && (
          <IoChevronForward size={24} className="text-darblue" />
        )}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="text-primary text-base font-medium leading-tight capitalize">
        {label}
      </span>

      {trailingIcon && <IoChevronForward size={24} className="text-darblue" />}
    </Link>
  );
};

interface MobileBackButtonProps {
  label?: string;
  onClick: () => void;
}

export const MobileBackButton: React.FC<MobileBackButtonProps> = ({
  label = "Back",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full cursor-pointer flex items-center gap-4 px-4 py-6 rounded-2xl
                 bg-background hover:bg-grayprimary transition-all text-left"
    >
      <IoChevronBack size={24} className="text-darblue" />
      <span className="text-base font-medium text-primary">{label}</span>
    </button>
  );
};
