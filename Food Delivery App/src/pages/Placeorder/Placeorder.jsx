import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext';
const Placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivey Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="phone" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
            <hr />
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default Placeorder
