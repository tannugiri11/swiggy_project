import { useCart } from "../Context/CartContext";
import { ITEM_IMG_CDN_URL } from "../../../public/Common/constants";

const Cart = () => {
  const {
    cartItems,
    incrementItem,
    decrementItem,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
  const itemPrice =
    (item.price ?? item.defaultPrice ?? 0) / 100;

  return total + itemPrice * item.quantity;
}, 0);


  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <p>Add some delicious food to continue</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={ITEM_IMG_CDN_URL + item.imageId}
              alt={item.name}
              className="cart-item-img"
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>
                ₹{((item.price || 0) / 100).toFixed(2)}
              </p>

              <div className="cart-quantity">
                <button onClick={() => decrementItem(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementItem(item.id)}>+</button>
              </div>
            </div>

            <button
              className="cart-remove"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₹{totalAmount.toFixed(2)}</h2>
        <button className="cart-clear" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="cart-checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
