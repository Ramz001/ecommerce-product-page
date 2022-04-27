import imgAvatar from "../../images/image-avatar.png";
import cartLogo from "../../images/icon-cart.svg";
import { connect } from "react-redux";

function UserCart({ togglePopUpCart, amount, addToCart, cartSeen, CartSeen }) {
  return (
    <div className="flex 2xl:gap-6 xl:gap-2 gap-1 items-center justify-between w-24 md:w-28">
      <div className="relative" onClick={() => CartSeen()}>
        <img
          src={cartLogo}
          alt="cart logo"
          className="cursor-pointer p-2 selection:hidden"
          loading="lazy"
          onClick={() => togglePopUpCart()}
        />
        {addToCart && amount > 0 && !cartSeen && (
          <span className="absolute z-60 flex items-center justify-center text-white text-sm right-0 -top-0 bg-orange w-4 rounded-full h-4">
            {amount}
          </span>
        )}
      </div>
      <img
        src={imgAvatar}
        alt="user avatar"
        className="w-[50%] 2xl:w-[60%]  active:border-2 hover:border-2 cursor-pointer border-orange rounded-full selection:hidden"
        loading="lazy"
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    CartSeen: () => dispatch({ type: "CART_SEEN" }),
  };
};

const mapStateToProps = (state) => {
  return {
    addToCart: state.mainReducer.addToCart,
    amount: state.mainReducer.amount,
    cartSeen: state.mainReducer.cartSeen,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
