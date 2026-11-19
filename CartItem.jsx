import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity
} from './CartSlice';

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const [message, setMessage] = React.useState('');

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  const decreaseQuantity = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity - 1
    }));
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">Cart ({cartItems.reduce(
            (total, item) => total + item.quantity, 0
          )})</a>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (

        <div>
          <h2>Your cart is empty!</h2>
          <a href="#plants">
            <button>Continue Shopping</button>
          </a>
        </div>

      ) : (

        <div>

          {cartItems.map(item => (

            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>
                Quantity: {item.quantity}
              </p>

              <p>
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => decreaseQuantity(item)}>
                -
              </button>

              <button onClick={() => increaseQuantity(item)}>
                +
              </button>

              <button onClick={() => deleteItem(item.id)}>
                Delete
              </button>

            </div>

          ))}

          <h2>
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>

          <button onClick={() => setMessage('Coming Soon!')}>
            Checkout
          </button>

          {message && <p>{message}</p>}

          <a href="#plants">
            <button>Continue Shopping</button>
          </a>

        </div>

      )}

    </div>
  );
}

export default CartItem;
