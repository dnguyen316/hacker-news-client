import React from "react";
import CloseIcon from "../icons/close";
import LogoIcon from "../icons/logo";
import SidebarChip from "./chip";

interface MobileSidebarPropsInterface {
  handleToggleMobileSidebar: () => void;
  isOpen: boolean;
}

const MobileSidebar = ({
  isOpen,
  handleToggleMobileSidebar,
}: MobileSidebarPropsInterface) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-neutral-950 transition-opacity duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-70" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggleMobileSidebar}
      ></div>
      <nav
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:w-60 w-[245px] h-full bg-white shadow-lg md:shadow-none md:p-4 p-6`}
      >
        <header className="flex items-center justify-between">
          <LogoIcon />
          <button
            className="cursor-pointer"
            onClick={handleToggleMobileSidebar}
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </header>
        <SidebarChip onToggleMobileSidebar={handleToggleMobileSidebar} />
      </nav>
    </>
  );
};

export default MobileSidebar;
