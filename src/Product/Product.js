import React from 'react';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product({ id, title, price, rating, image }) {
  const [{ }, dispatch] = useStateValue();
  const addToBasket = () => {
    // ADD ITEM TO BASKET
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRateSharpIcon className="product__ratingIcon" />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>
        <AddShoppingCartIcon /> <p>Add To Basket</p>
      </button>
    </div>
  );
}

export default Product;
