

import { CLEAR_MAND_MODIFIER, ADD_MAND_MODIFIER, ADD_CUSTOMER, DELETE_CUSTOMER, SEARCH_CUSTOMER, ADD_ROLE, DELETE_ROLE, SEARCH_ROLE, ADD_EMPLOYEES, DELETE_EMPLOYEES, SEARCH_EMPLOYEES, CLEAR_ADD, CLEAR_REMOVE, CLEAR_ADDON, EDIT_CAT, DELETE_CAT, SEARCH_CAT, ADD_PAYMENT, SEARCH_PAYMENT, DELETE_PAYMENT, DELETE_VOID, SEARCH_VOID, ADD_VOID, ADD_CURRENCY, SEARCH_CURRENCY, DELETE_CURRENCY, ADD_ITEMS, DELETE_ITEMS, SEARCH_ITEMS, ADD_GROUPS, DELETE_GROUPS, SEARCH_GROUPS, ADD_DIVISION, SEARCH_DIVISION, DELETE_DIVISION, ADDON_MODIFIER, ADD_MODIFIER, REMOVE_MODIFIER } from "./actions";

const initialState = {
  catItem: [],
  paymentItem: [],
  voidItem: [],
  currencyItems: [],
  salesItems: [],
  groupItems: [],
  divisionItems: [],
  employeeData: [],
  roleData: [],
  customerData: [],
  modifiers: [],
  ItemAdd: {},
  ItemRemove: {},
  ItemAddOn: {}

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
        currencyItems: action.payload,
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
        ...state, currencyItems: state.currencyItems.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case ADD_PAYMENT:
      return {
        ...state,
        paymentItem: action.payload,
      };



    case ADD_GROUPS:
      return {
        ...state,
        groupItems: action.payload,
      };

    case DELETE_GROUPS:

      return {
        ...state, groupItems: state.groupItems.filter((data) => data.groupId !== action.payload)
      }

    case SEARCH_GROUPS:

      return {
        ...state, groupItems: state.groupItems.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }

    case ADD_DIVISION:
      return {
        ...state,
        divisionItems: action.payload,
      };
    case DELETE_DIVISION:

      return {
        ...state, divisionItems: state.divisionItems.filter((data) => data.divisionId !== action.payload)
      }
    case SEARCH_DIVISION:

      return {
        ...state, divisionItems: state.divisionItems.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }

    case DELETE_CURRENCY:

      return {
        ...state, currencyItems: state.currencyItems.filter((data) => data.currencyId !== action.payload)
      }

    case ADD_MODIFIER:
      return {
        ...state,
        ItemAdd: action.payload,
      };
    case REMOVE_MODIFIER:
      return {
        ...state,
        ItemRemove: action.payload,
      };
    case ADDON_MODIFIER:
      return {
        ...state,
        ItemAddOn: action.payload,
      };
    case ADD_MAND_MODIFIER:
      return {
        ...state,
        modifiers: {
          mod1: action.payload.modifier1,
          mod2: action.payload.modifier2,
          mod3: action.payload.modifier3
        }
      };
    case CLEAR_MAND_MODIFIER:
      return {
        ...state, modifiers: action.payload
      }
    case CLEAR_ADD:
      return {
        ...state, ItemAdd: action.payload
      }
    case CLEAR_REMOVE:
      return {
        ...state, ItemRemove: action.payload
      }

    case CLEAR_ADDON:
      return {
        ...state, ItemAddOn: action.payload
      }
    case ADD_EMPLOYEES:
      return {
        ...state,
        employeeData: action.payload,
      };
    case SEARCH_EMPLOYEES:

      return {
        ...state, employeeData: state.employeeData.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }

    case DELETE_EMPLOYEES:

      return {
        ...state, employeeData: state.employeeData.filter((data) => data.empId !== action.payload)
      }
    case ADD_ROLE:
      return {
        ...state,
        roleData: action.payload,
      };
    case SEARCH_ROLE:

      return {
        ...state, roleData: state.roleData.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case DELETE_ROLE:

      return {
        ...state, roleData: state.roleData.filter((data) => data.roleId !== action.payload)
      }

    case ADD_CUSTOMER:
      return {
        ...state,
        customerData: action.payload,
      };
    case SEARCH_CUSTOMER:

      return {
        ...state, customerData: state.customerData.filter((dat) => dat.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case DELETE_CUSTOMER:

      return {
        ...state, customerData: state.customerData.filter((data) => data.customerId !== action.payload)
      }
    default:
      return state;
  }
}

export default postReducer;
