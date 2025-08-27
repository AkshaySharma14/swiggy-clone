import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { MdSearch } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { MdLiveHelp } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  const link = [
    { icon: <MdSearch />, name: "Search" },
    { icon: <CiDiscount1 />, name: "Offers", sup: "new" },
    { icon: <MdLiveHelp />, name: "Help" },
    { icon: <PiSignInBold />, name: "Sign In" },
    { icon: <FaCartArrowDown />, name: "Cart", sub: "1" },
  ];

  return (
    <>
      {}
      <div
        className="black-overlay w-full h-full fixed duration-500 z-[10000] 
                   bg-black/50"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[400px] h-full absolute duration-[600ms] 
                     bg-white dark:bg-gray-900 dark:text-gray-200"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          {}
        </div>
      </div>

      {}
      <header
        className="p-[15px] shadow-xl sticky top-0 z-[9999] 
                   bg-white text-[#686b78] 
                   dark:bg-gray-900 dark:text-gray-200"
      >
        <div className="max-w-[1200px] mx-auto flex items-center">
          {/* Logo */}
          <div className="w-[100px]">
            <img src="images/logo.png" className="w-full" />
          </div>

          { }
          <div>
            <span className="font-bold border-b-[3px] border-black dark:border-white">
              Ratanada
            </span>{" "}
            Jodhpur, Rajasthan, India
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc9019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>

          {/* Navigation */}
          <nav className="flex gap-10 ml-auto font-bold text-[18px]">
            {link.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer 
                           hover:text-[#fc9019] 
                           dark:hover:text-orange-400"
              >
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
              </li>
            ))}
            <li>
              <DarkModeToggle />
            </li>
          </nav>
        </div>
      </header>
    </>
  );
}
