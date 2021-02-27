import React from 'react';

import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import SubTotal from '../SubTotal/SubTotal';
import './Checkout.css';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1500x600._CB661592357_.jpg"
        alt=""
      />
        {basket?.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <p>continue shopping...</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
