import HomeIcon from "../icons/home";
import SpeakLineIcon from "../icons/speakLine";
import BriefcaseIcon from "../icons/briefcase";
import EyeLineIcon from "../icons/eyeline";
import Link from "next/link";

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
    url: "/",
  },
  {
    key: "show",
    icon: "eyeLine",
    name: "Show",
    url: "/",
  },
  {
    key: "jobs",
    icon: "briefcase",
    name: "Jobs",
    url: "/",
  },
];

// Create a mapping object to map icon names to the corresponding component
const iconMapping = {
  home: HomeIcon,
  speakLine: SpeakLineIcon,
  eyeLine: EyeLineIcon,
  briefcase: BriefcaseIcon,
};

const SidebarChip = () => {
  return (
    <ul className="space-y-4 mt-4 ml-[-6px]">
      {Menu.map((item) => {
        const IconComponent =
          iconMapping[item.icon as keyof typeof iconMapping];
        return (
          <Link
            key={item.key}
            className="flex items-center space-x-4 p-2 text-gray-800 rounded-md hover:bg-orange-100 group cursor-pointer"
            href={item.url}
          >
            {IconComponent && (
              <IconComponent className="h-6 w-6 group-hover:text-orange-500 text-[#525252] " />
            )}
            <span className=" font-medium group-hover:text-orange-600">
              {item.name}
            </span>
          </Link>
        );
      })}
    </ul>
  );
};

export default SidebarChip;
