import Link from "next/link";
import LogoIcon from "../icons/logo";
import SidebarChip from "./chip";

const Sidebar = () => {
  return (
    <nav className="transition-transform duration-300 ease-in-out transform flex-col border-r-2 md:translate-x-0 -translate-x-full md:w-60 md:static md:h-auto md:min-h-[100vh] fixed top-0 left-0 h-screen bg-gray-100 md:bg-white md:p-4 p-6 z-40">
      <Link href="/">
        <LogoIcon />
      </Link>
      <SidebarChip />
    </nav>
  );
};

export default Sidebar;
