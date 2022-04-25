import imgAvatar from '../../images/image-avatar.png'
import cartLogo from '../../images/icon-cart.svg'


function UserCart({ togglePopUpCart }) {
    return(
       <div className='flex gap-1 items-center justify-between w-28'>
           <img src={cartLogo} alt="cart logo" className='cursor-pointer' loading='lazy' 
           onClick={togglePopUpCart}/>
           <img src={imgAvatar} alt="user avatar" className='w-[50%] hover:border-2 cursor-pointer border-orange rounded-full' loading='lazy' onClick={togglePopUpCart}/>
       </div>
    )
}

export default UserCart;