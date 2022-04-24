import imgAvatar from '../../images/image-avatar.png'
import cartLogo from '../../images/icon-cart.svg'

function UserCart(){
    return(
       <div className='grid grid-cols-2 xl:gap-2 gap-1 items-center'>
           <img src={cartLogo} alt="cart logo" className=''/>
           <img src={imgAvatar} alt="user avatar" className='w-[50%]' />
       </div>
    )
}

export default UserCart;