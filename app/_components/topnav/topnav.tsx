"use client";

import { AlignJustify } from "lucide-react";
import LogoIcon from "../icons/logo";
import { useState } from "react";
import MobileSidebar from "../sidebar/mobile-sidebar";

const TopNav = () => {
  const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState(false);

  const handleToggleMobileSidebar = () => {
    setIsOpenMobileSidebar(!isOpenMobileSidebar);
  };

  return (
    <nav className="flex items-center justify-between p-4 border-solid border-neutral-200 border-b-2 md:hidden">
      <LogoIcon />
      <AlignJustify
        className="cursor-pointer"
        onClick={handleToggleMobileSidebar}
      />
      {
        <MobileSidebar
          handleToggleMobileSidebar={handleToggleMobileSidebar}
          isOpen={isOpenMobileSidebar}
        />
      }
      {/* {<MobileSidebar />} */}
    </nav>
  );
};

export default TopNav;
