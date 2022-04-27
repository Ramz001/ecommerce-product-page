import iconMenu from "../../images/icon-menu.svg";
import iconClose from "../../images/icon-close.svg";
import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState("100%");

  function toggleMenu() {
    setIsOpen(isOpen === "100%" ? "0%" : "100%");
  }

  return (
    <div className="block md:hidden">
      {isOpen === "100%" && (
        <img
          alt="hamburger menu"
          src={iconMenu}
          onClick={toggleMenu}
          className="w-auto h-[20px] cursor-pointer ml-4"
        />
      )}
      {isOpen === "0%" && (
        <div
          className={`h-screen top-0 left-0 w-[70%] text-very-dark-blue fixed bg-white transform 
            translate-x-[${isOpen}] z-40 transition-transform transform  ease-out delay-1000 duration-1000 before:w-screen before:h-screen before:bg-black-low-opacity before:left-[100%] before:top-0 before:absolute`}
        >
          <span className="flex w-5 h-5 mt-10 ml-7 cursor-pointer" onClick={toggleMenu}>
            <svg width='20px' xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                className="fill-light-grayish-blue"
                fill-rule="evenodd"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-6 justify-center font-bold mt-10 mx-8 sm:text-xl">
            <div className="cursor-pointer">Collections</div>
            <div className="cursor-pointer">Men</div>
            <div className="cursor-pointer">Women</div>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Contact</div>
          </div>
        </div>
      )}
    </div>
  );
}
