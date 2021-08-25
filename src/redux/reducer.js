// import { GET_POSTS, ADD_POST, DELETE_ITEM, SAVE_USER } from "./actions";

import { EDIT_CAT, DELETE_CAT, SEARCH_CAT, ADD_PAYMENT, SEARCH_PAYMENT, DELETE_PAYMENT, DELETE_VOID, SEARCH_VOID, ADD_VOID, ADD_CURRENCY, SEARCH_CURRENCY, DELETE_CURRENCY, ADD_ITEMS, DELETE_ITEMS, SEARCH_ITEMS } from "./actions";

const initialState = {
  catItem: [],
  paymentItem: [],
  voidItem: [],
  currencyItem: [],
  salesItems: []

};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_CAT:
      return {
        ...state,
        catItem: action.payload,
      };
    case ADD_VOID:
      return {
        ...state,
        voidItem: action.payload,
      };
    case ADD_CURRENCY:
      return {
        ...state,
        currencyItem: action.payload,
      };
    case ADD_ITEMS:
      return {
        ...state,
        salesItems: action.payload,
      };
    case DELETE_CAT:

      return {
        ...state, catItem: state.catItem.filter((data) => data.catId !== action.payload)
      }
    case DELETE_PAYMENT:

      return {
        ...state, paymentItem: state.paymentItem.filter((data) => data.paymentId !== action.payload)
      }
    case DELETE_ITEMS:

      return {
        ...state, salesItems: state.salesItems.filter((data) => data.itemId !== action.payload)
      }
    case DELETE_VOID:

      return {
        ...state, voidItem: state.voidItem.filter((data) => data.voidId !== action.payload)
      }
    case DELETE_CURRENCY:

      return {
        ...state, currencyItem: state.currencyItem.filter((data) => data.currencyId !== action.payload)
      }

    case SEARCH_CAT:

      return {
        ...state, catItem: state.catItem.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case SEARCH_ITEMS:

      return {
        ...state, salesItems: state.salesItems.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case SEARCH_PAYMENT:

      return {
        ...state, paymentItem: state.paymentItem.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case SEARCH_VOID:

      return {
        ...state, voidItem: state.voidItem.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case SEARCH_CURRENCY:

      return {
        ...state, currencyItem: state.currencyItem.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case ADD_PAYMENT:
      return {
        ...state,
        paymentItem: action.payload,
      };

    default:
      return state;
  }
}

export default postReducer;
