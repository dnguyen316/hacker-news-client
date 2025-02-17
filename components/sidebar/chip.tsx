"use client";
import HomeIcon from "../icons/home";
import SpeakLineIcon from "../icons/speakLine";
import BriefcaseIcon from "../icons/briefcase";
import EyeLineIcon from "../icons/eyeline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarChipInterface {
  onToggleMobileSidebar?: () => void;
}

const Menu = [
  {
    key: "new",
    icon: "home",
    name: "New",
    url: "/",
  },
  {
    key: "ask",
    icon: "speakLine",
    name: "Ask",
    url: "/ask",
  },
  {
    key: "show",
    icon: "eyeLine",
    name: "Show",
    url: "/show",
  },
  {
    key: "jobs",
    icon: "briefcase",
    name: "Jobs",
    url: "/jobs",
  },
];

// Create a mapping object to map icon names to the corresponding component
const iconMapping = {
  home: HomeIcon,
  speakLine: SpeakLineIcon,
  eyeLine: EyeLineIcon,
  briefcase: BriefcaseIcon,
};

const SidebarChip: React.FC<SidebarChipInterface> = (props) => {
  const { onToggleMobileSidebar: handleToggleMobileSidebar } = props;

  const pathname = usePathname();

  return (
    <ul className="space-y-4 mt-4 ml-[-6px]">
      {Menu.map((item) => {
        const IconComponent =
          iconMapping[item.icon as keyof typeof iconMapping];
        return (
          <Link
            key={item.key}
            className={`flex items-center space-x-4 p-2 text-gray-800 rounded-md hover:bg-orange-100 group cursor-pointer ${
              item.url === pathname && "bg-orange-100"
            }`}
            href={item.url}
            onClick={handleToggleMobileSidebar}
          >
            {IconComponent && (
              <IconComponent
                className={`h-6 w-6 group-hover:text-orange-500 text-[#525252] ${
                  item.url === pathname && "text-orange-500"
                }`}
              />
            )}
            <span
              className={`font-medium group-hover:text-orange-600 ${
                item.url === pathname && "text-orange-500"
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </ul>
  );
};

export default SidebarChip;
