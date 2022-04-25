import BrandLogo from "../brandLogo/BrandLogo"
import NavbarLinks from "../navbarLinks/NavbarLinks"
import UserCart from "../userCart/UserCart"
import PopUpCart from "../popUpCart/PopUpCart"
import {useState} from 'react'

function Navbar(){
    const [popUpCart, setPopUpCart] = useState(false)

    function togglePopUpCart(){
        setPopUpCart(!popUpCart)
    }
    return (
        <nav className="flex relative border-b border-light-grayish-blue justify-between items-center h-24 max-h-32">
            <div className="flex xl:gap-28 gap-8 h-full items-center relative">
                <BrandLogo />
                <NavbarLinks/>
            </div>
            <div>
                <UserCart togglePopUpCart={togglePopUpCart}/>
            </div>
            <PopUpCart popUpCart={popUpCart} />
        </nav>
    )
}

export default Navbar