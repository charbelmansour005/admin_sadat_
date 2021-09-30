

import {
  IMPORT_CUSTOMERS,
  IMPORT_EMPLOYEES_ROLES,
  IMPORT_EMPLOYEES_DATA,
  IMPORT_CURRENCY_DATA,
  IMPORT_VOID_REASONS,
  IMPORT_PAYMENT_DATA,
  IMPORT_CATEGORY_DATA,
  IMPORT_DIVISION_DATA,
  IMPORT_GROUP_DATA,
  IMPORT_ITEM_DATA,
  CLEAR_MAND_MODIFIER,
  CLEAR_EMP_SCHEDULE,
  ADD_MAND_MODIFIER,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  SEARCH_CUSTOMER,
  ADD_ROLE,
  DELETE_ROLE,
  SEARCH_ROLE,
  ADD_EMPLOYEES,
  DELETE_EMPLOYEES,
  SEARCH_EMPLOYEES,
  CLEAR_ADD,
  CLEAR_REMOVE,
  CLEAR_ADDON,
  EDIT_CAT,
  DELETE_CAT,
  SEARCH_CAT,
  ADD_PAYMENT,
  SEARCH_PAYMENT,
  DELETE_PAYMENT,
  DELETE_VOID,
  SEARCH_VOID,
  ADD_VOID,
  ADD_CURRENCY,
  SEARCH_CURRENCY,
  DELETE_CURRENCY,
  ADD_ITEMS,
  DELETE_ITEMS,
  SEARCH_ITEMS,
  ADD_GROUPS,
  DELETE_GROUPS,
  SEARCH_GROUPS,
  ADD_DIVISION,
  SEARCH_DIVISION,
  DELETE_DIVISION,
  ADDON_MODIFIER,
  ADD_MODIFIER,
  REMOVE_MODIFIER,
  ADD_EMP_SCHEDULE,
  DELETE_CUSTOMER_GROUP,
  DELETE_CUSTOMER_CATEGORY,
  ADD_QR_MENU,
  DELETE_QR_MENU,
  ADD_MENU_ITEM,
  DELETE_MENU_ITEM,
  SAVE_MENU_GROUP,
  SAVE_USER_INFO,
  GET_ALL_GROUPS,
  GET_ALL_GROUP_ITEMS

} from "./actions";

const initialState = {
  catItem: [],
  paymentItem: [],
  voidItem: [],
  currencyItems: [],
  salesItems: [],
  filteredData: [],
  groupItems: [],
  divisionItems: [],
  employeeData: [],
  roleData: [],
  customerData: [],
  modifiers: [],
  schedule: [],
  ItemAdd: {},
  ItemRemove: {},
  ItemAddOn: {},
  employeeSchedule: [],
  customerGroup: [],
  customerCategory: [],
  QRMenu: [],
  menuItems: [],
  menuName: '',
  userInfo: {},
  groupCategory: [],
  GroupItems: []
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

    case IMPORT_ITEM_DATA:
      return {
        ...state,
        salesItems: action.payload
      }
    case IMPORT_GROUP_DATA:
      return {
        ...state,
        groupItems: action.payload
      }
    case IMPORT_DIVISION_DATA:
      return {
        ...state,
        divisionItems: action.payload
      }
    case IMPORT_CATEGORY_DATA:
      return {
        ...state,
        catItem: action.payload
      }

    case IMPORT_PAYMENT_DATA:
      return {
        ...state,
        paymentItem: action.payload
      }

    case IMPORT_VOID_REASONS:
      return {
        ...state,
        voidItem: action.payload
      }
    case IMPORT_CURRENCY_DATA:
      return {
        ...state,
        currencyItems: action.payload
      }
    case IMPORT_EMPLOYEES_DATA:
      return {
        ...state,
        employeeData: action.payload
      }
    case IMPORT_EMPLOYEES_ROLES:
      return {
        ...state,
        roleData: action.payload
      }
    case IMPORT_CUSTOMERS:
      return {
        ...state,
        customerData: action.payload
      }


    case ADD_CURRENCY:
      return {
        ...state,
        currencyItems: action.payload,
      };
    case ADD_ITEMS:

      if (action.payload === '') {
        return state.salesItems
      } else {
        return {
          ...state,
          salesItems: action.payload,
        };
      }

    case ADD_MENU_ITEM:
      return {
        ...state,
        menuItems: action.payload,
      };

    case DELETE_CAT:

      return {
        ...state, catItem: state.catItem.filter((data) => data.catId !== action.payload)
      }
    case DELETE_MENU_ITEM:

      return {
        ...state, menuItems: state.menuItems.filter((data) => data.itemId !== action.payload)
      }
    case DELETE_CUSTOMER_GROUP:
      return {
        ...state, customerGroup: state.customerGroup.filter((data) => data.customerGroupId !== action.payload)
      }
    case DELETE_CUSTOMER_CATEGORY:
      return {
        ...state, customerCategory: state.customerCategory.filter((data) => data.customerCategoryId !== action.payload)
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
    case ADD_QR_MENU:
      return {
        ...state,
        QRMenu: action.payload
      }



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
    case ADD_EMP_SCHEDULE:
      return {
        ...state,
        schedule: {
          day1: action.payload.day1,
          day2: action.payload.day2,
          day3: action.payload.day3,
          day4: action.payload.day4,
          day5: action.payload.day5,
          day6: action.payload.day6,
          day7: action.payload.day7
        }
      }
    case CLEAR_MAND_MODIFIER:
      return {
        ...state, modifiers: action.payload
      }
    case CLEAR_EMP_SCHEDULE:
      return {
        ...state, schedule: action.payload
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
        ...state, employeeData: state.employeeData.filter((data) => data.employeeId !== action.payload)
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

    case DELETE_QR_MENU:

      return {
        ...state, QRMenu: state.QRMenu.filter((data) => data.groupId !== action.payload)
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

    case SAVE_MENU_GROUP:
      return {
        ...state, menuName: action.payload
      }

    case SAVE_USER_INFO:
      return {
        ...state, userInfo: action.payload
      }

    case GET_ALL_GROUPS:
      return {
        ...state, groupCategory: action.payload
      }
    case GET_ALL_GROUP_ITEMS:
      return {
        ...state, GroupItems: action.payload
      }
    default:
      return state;
  }
}

export default postReducer;
