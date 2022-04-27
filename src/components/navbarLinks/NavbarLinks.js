import '../../index.css'

function NavbarLinks(){
    return(
        <div className="hidden md:flex items-center gap-4">
            <a href="#" className="nav-link-hover text-black-low-opacity">Collections</a>
            <a href="#" className="nav-link-hover text-black-low-opacity">Men</a>
            <a href="#" className="nav-link-hover text-black-low-opacity">Women</a>
            <a href="#" className="nav-link-hover text-black-low-opacity">About</a>
            <a href="#" className="nav-link-hover text-black-low-opacity">Contact</a>
        </div>
    )
}

export default NavbarLinks;