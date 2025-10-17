import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './CartPage.css';

function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleIncreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, type: 'increase' }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, type: 'decrease' }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="container">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to your cart!</p>
            <Link to="/products">
              <button className="continue-shopping-btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="quantity-btn"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <p className="item-total">${item.totalPrice.toFixed(2)}</p>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
            <Link to="/products">
              <button className="continue-shopping-btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
