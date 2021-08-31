export const EDIT_CAT = "EDIT-CAT";
export const ADD_PAYMENT = "ADD_PAYMENT";
export const ADD_VOID = "ADD_VOID";
export const ADD_CURRENCY = "ADD_CURRENCY";
export const ADD_ITEMS = "ADD_ITEMS";
export const ADD_GROUPS = "ADD_GROUPS";
export const ADD_DIVISION = "ADD_DIVISION";
export const DELETE_CAT = "DELETE_CAT"
export const DELETE_PAYMENT = "DELETE_PAYMENT"
export const DELETE_VOID = "DELETE_VOID"
export const DELETE_DIVISION = "DELETE_DIVISION"
export const DELETE_GROUPS = "DELETE_GROUPS"
export const DELETE_CURRENCY = "DELETE_CURRENCY"
export const DELETE_ITEMS = "DELETE_ITEMS"
export const SEARCH_CAT = "SEARCH_CAT"
export const SEARCH_PAYMENT = "SEARCH_PAYMENT"
export const SEARCH_VOID = "SEARCH_VOID"
export const SEARCH_CURRENCY = "SEARCH_CURRENCY"
export const SEARCH_ITEMS = "SEARCH_ITEMS"
export const SEARCH_GROUPS = "SEARCH_GROUPS"
export const SEARCH_DIVISION = "SEARCH_DIVISION"
export const ADD_MODIFIER = "ADD_MODIFIER"
export const REMOVE_MODIFIER = "REMOVE_MODIFIER"
export const ADDON_MODIFIER = "ADDON_MODIFIER"
export const CLEAR_ADD = "CLEAR_ADD"
export const CLEAR_REMOVE = "CLEAR_REMOVE"
export const CLEAR_ADDON = "CLEAR_ADDON"
export const CLEAR_MAND_MODIFIER = "CLEAR_MAND_MODIFIER"
export const ADD_EMPLOYEES = "ADD_EMPLOYEES"
export const SEARCH_EMPLOYEES = "SEARCH_EMPLOYEES"
export const DELETE_EMPLOYEES = "DELETE_EMPLOYEES"
export const ADD_ROLE = "ADD_ROLE"
export const SEARCH_ROLE = "SEARCH_ROLE"
export const DELETE_ROLE = "DELETE_ROLE"
export const ADD_CUSTOMER = "ADD_CUSTOMER"
export const SEARCH_CUSTOMER = "SEARCH_CUSTOMER"
export const DELETE_CUSTOMER = "DELETE_CUSTOMER"
export const ADD_MAND_MODIFIER = "ADD_MAND_MODIFIER"

const tabledata = [


];
const paymentData = [


];
const voidData = [


];
const currencyData = [
];
const salesItemData = [
];
const groupData = [


];
const divisionData = [


];
const employeesData = [

]
const roleData = [

]
const customerData = [

]


export const catPost = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: EDIT_CAT,
                payload: tabledata
            })
        };
    } catch (error) {
        console.log(error);
    }
};

export const deleteCat = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_CAT,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const deletePayment = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_PAYMENT,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const searchCat = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_CAT,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const searchPayment = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_PAYMENT,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const addPayment = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_PAYMENT,
                payload: paymentData
            })
        };
    } catch (error) {
        console.log(error);
    }
};
export const addVoid = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_VOID,
                payload: voidData
            })
        };
    } catch (error) {
        console.log(error);
    }
};

export const searchVoid = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_VOID,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteVoid = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_VOID,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const addCurrency = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_CURRENCY,
                payload: currencyData
            })
        };
    } catch (error) {
        console.log(error);
    }
};
export const searchCurrency = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_CURRENCY,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteCurrency = (currencyId) => {

    try {
        return async dispatch => {
            dispatch({
                type: DELETE_CURRENCY,
                payload: currencyId
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const addItems = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_ITEMS,
                payload: salesItemData
            })
        };
    } catch (error) {
        console.log(error);
    }
};
export const searchItems = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_ITEMS,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteItems = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_ITEMS,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const addGroups = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_GROUPS,
                payload: groupData
            })
        };
    } catch (error) {
        console.log(error);
    }
};
export const searchGroups = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_GROUPS,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteGroups = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_GROUPS,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const addDivisions = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_DIVISION,
                payload: divisionData
            })
        };
    } catch (error) {
        console.log(error);
    }
};

export const searchDivision = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_DIVISION,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteDivisions = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_DIVISION,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const addModifier = (item) => {
    try {
        return async dispatch => {
            dispatch({
                type: ADD_MODIFIER,
                payload: item
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const removeModifier = (item) => {
    try {
        return async dispatch => {
            dispatch({
                type: REMOVE_MODIFIER,
                payload: item
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const addOnModifier = (item) => {
    try {
        return async dispatch => {
            dispatch({
                type: ADDON_MODIFIER,
                payload: item
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const addMandModifier = (item,item1,item2) => {
    try {
        return async dispatch => {
            dispatch({
                type: ADD_MAND_MODIFIER,
                payload:{
                    modifier1:item,
                    modifier2:item1,
                    modifier3:item2
                }

            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const clearAddMod = () => {
    try {
        return async dispatch => {
            dispatch({
                type: CLEAR_ADD,
                payload: {}
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const clearRemoveMod = () => {
    try {
        return async dispatch => {
            dispatch({
                type: CLEAR_REMOVE,
                payload: {}
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const clearAddOnMod = () => {
    try {
        return async dispatch => {
            dispatch({
                type: CLEAR_ADDON,
                payload: {}
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const clearMandModifier = () => {
    try {
        return async dispatch => {
            dispatch({
                type: CLEAR_MAND_MODIFIER,
                payload: []
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const addEmployees = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_EMPLOYEES,
                payload: employeesData
            })
        };
    } catch (error) {
        console.log(error);
    }
};


export const deleteEmployees = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_EMPLOYEES,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const searchEmployees = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_EMPLOYEES,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const addRole = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_ROLE,
                payload: roleData
            })
        };
    } catch (error) {
        console.log(error);
    }
};
export const searchRole = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_ROLE,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteRole = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_ROLE,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const addCustomer = () => {
    try {
        return async (dispatch) => {
            dispatch({
                type: ADD_CUSTOMER,
                payload: customerData
            })
        };
    } catch (error) {
        console.log(error);
    }
};
export const searchCustomer = (name) => {
    try {
        return async dispatch => {
            dispatch({
                type: SEARCH_CUSTOMER,
                payload: name
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteCustomer = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_CUSTOMER,
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
    }
}