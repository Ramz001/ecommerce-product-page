import BrandLogo from "../brandLogo/BrandLogo";
import NavbarLinks from "../navbarLinks/NavbarLinks";
import UserCart from "../userCart/UserCart";
import PopUpCart from "../popUpCart/PopUpCart";
import { useState } from "react";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

function Navbar() {
  const [popUpCart, setPopUpCart] = useState(false);

  function togglePopUpCart() {
    setPopUpCart(!popUpCart);
  }
  return (
    <nav className="flex relative md:border-b border-light-grayish-blue justify-between items-center h-24 max-h-32 mx-4 md:mx-0">
      <div className="flex xl:gap-28 gap-8 h-full justify-center items-center relative">
        <MobileNavbar />
        <BrandLogo />
        <NavbarLinks />
      </div>
      <div>
        <UserCart togglePopUpCart={togglePopUpCart} />
      </div>
      <PopUpCart popUpCart={popUpCart} />
    </nav>
  );
}

export default Navbar;
