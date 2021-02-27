export const initialState = {
  basket: [
    // {
    //   id: '12345',
    //   title:
    //     'Mac Pro is designed for pros who need to build high-bandwidth capabilities into their systems. With four double-wide slots',
    //   price: 356.25,
    //   rating: 5,
    //   image:
    //     'https://www.apple.com/v/imac/k/images/overview/display_retina__cpte8uv0op6q_large.jpg',
    // },
    // {
    //   id: '12345',
    //   title:
    //     'Mac Pro is designed for pros who need to build high-bandwidth capabilities into their systems. With four double-wide slots',
    //   price: 356.25,
    //   rating: 5,
    //   image:
    //     'https://www.apple.com/v/imac/k/images/overview/display_retina__cpte8uv0op6q_large.jpg',
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_TO_BASKET':
      //    LOGIC TO ADD ITEMS TO BASKET
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case 'REMOVE_FROM_BASKET':
      //    LOGIC TO REMOVE ITEMS TO BASKET
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exist in basket, remove
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove id: ${action.id} from basket`);
      }
      return { ...state, basket: newBasket };

      break;
    default:
      return state;
  }
};

export default reducer;
