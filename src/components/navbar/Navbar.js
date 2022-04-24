import BrandLogo from "../brandLogo/BrandLogo"
import NavbarLinks from "../navbarLinks/NavbarLinks"
import UserCart from "../userCart/UserCart"

function Navbar(){
    return (
        <nav className="flex border-b justify-between items-center h-24 max-h-32">
            <div>
                <BrandLogo />
            </div>
            <NavbarLinks />
            <div>
                <UserCart />
            </div>
        </nav>
    )
}

export default Navbar