import React, { ReactElement } from 'react';
import { useGlobalContext } from '../context';
import CartItem from './CartItem';


export default function Cart (): ReactElement {
  const { cart, total, clearCart } = useGlobalContext();

  if (!cart.length) {
    return (<>
      <section className="cart-container">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    </>);
  }

  return (
    <section className="cart-container">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {
          cart.map((item) =>
            <CartItem key={item.id} {...item} />
          )
        }
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
}
