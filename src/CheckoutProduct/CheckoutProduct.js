import React from 'react';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, price, rating, image }) {
    console.log(id, title, price, rating, image);
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // removing from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateSharpIcon className="checkoutProduct__ratingIcon" />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
