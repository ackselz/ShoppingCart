import React from 'react';
import {Link} from 'react-router-dom';

function Cart(props) {

  const renderCart = props.cart.products.map(cartItem => {
    const test = props.inventory.find(inventoryItem => 
      inventoryItem.id === cartItem.productId
    )
        return (
          <div className="cartItem__container" key={cartItem.productId}>
            <img className="cartItem__image" src={test.image} alt="" />
            <Link to={`/shop/item/${test.id}`}>
              <h4 className="cartItem__title">{test.title}</h4>
            </Link>
            <input className="cartItem__input" type="number" value={cartItem.quantity} id={cartItem.productId} onChange={props.handleChangeCartQuantity}/> 
            <h5 className="cartItem__subtitle">${(test.price * cartItem.quantity).toFixed(2)}</h5>
            <button className="cartItem__button" id={cartItem.productId} onClick={props.handleRemoveFromCart}>X</button>
          </div>
        )
      })

  const renderTotalPrice = () => {
    let totalPrice = 0
    props.cart.products.map(cartItem => {
      const test = props.inventory.find(inventoryItem => 
        inventoryItem.id === cartItem.productId
      )
      totalPrice += cartItem.quantity * test.price
          return totalPrice
        })
    return (
      <h3 className="cart__summary">
        Total Price: ${totalPrice.toFixed(2)}
      </h3>
    )
  } 


  return (
    <div className="cart__container">
      <div className="cartItems">
        {props.cart.products.length ? renderCart : <p className="cart__message">Your cart is empty</p>}
      </div>
      {props.cart.products.length ? renderTotalPrice() : <></>}
      <h3 className="cart__button">
        <Link to={`/shop`}>
            Back to Shop
        </Link>
      </h3>
    </div>
  );
}

export default Cart;