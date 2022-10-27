import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useShoppingCart } from "../MenuItem";
import { Menu } from "../../models/models";

interface Props {
  menuItem: Menu;
}
interface Props {
  closeOverlay: (close: boolean) => void;
}

export function Cart({ closeOverlay }: Props) {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();
  const closeBtn = () => {
    closeOverlay(false);
  };
  return (
    <section className="cart-overlay-container">
      <div className="cart-container">
        <div className="cart-upper-container">
          <h1 className="cart-title">Cart</h1>
          <img
            src="src\assets\close-overlay-button.svg"
            alt=""
            onClick={closeBtn}
            className="close-overlay-btn"
          />
        </div>

        {cartItems.map((item) => (
          <CartItem key={item.id} menuItem={item} />
        ))}

        <h2 className="cart-total">
          Total: {cartItems.reduce((total, cartItem) => {
            return total + (cartItem.price || 0) * cartItem.quantity;
          }, 0)}
          :-
        </h2>

        <input
          className="user-comment-input"
          type="text"
          placeholder="Any extra info about the order?"
        />

        
          <button className="cart-buttons">Place Order</button>
        
      </div>
    </section>
  );
}

export default Cart;
