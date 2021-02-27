import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

import './SubTotal.css';

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        // value={2058}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
