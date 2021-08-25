export const EDIT_CAT = "EDIT-CAT";
export const ADD_PAYMENT = "ADD_PAYMENT";
export const ADD_VOID = "ADD_VOID";
export const ADD_CURRENCY = "ADD_CURRENCY";
export const ADD_ITEMS = "ADD_ITEMS";
export const DELETE_CAT = "DELETE_CAT"
export const DELETE_PAYMENT = "DELETE_PAYMENT"
export const DELETE_VOID = "DELETE_VOID"
export const DELETE_CURRENCY = "DELETE_CURRENCY"
export const DELETE_ITEMS = "DELETE_CURRENCY"
export const SEARCH_CAT = "SEARCH_CAT"
export const SEARCH_PAYMENT = "SEARCH_PAYMENT"
export const SEARCH_VOID = "SEARCH_VOID"
export const SEARCH_CURRENCY = "SEARCH_CURRENCY"
export const SEARCH_ITEMS = "SEARCH_ITEMS"



const tabledata = [
    {
        key: 1,
        catId: "1",
        name: "Ivan",
        price: 169564,
        group: "group1",
        creationDate: "02/01/21",
        lastModificationDate: "09/06/02",
    },
    {
        key: 2,
        catId: "2",
        name: "Wylie",
        price: 55483,
        group: "group1",
        creationDate: "09/15/08",
        lastModificationDate: "07/05/10",
    },
    {
        key: 3,
        name: "Jakeem",
        catId: "3",
        price: 132759,
        group: "group1",
        creationDate: "11/16/06",
        lastModificationDate: "04/13/09",
    },
    {
        key: 4,
        name: "Adam",
        catId: "4",
        price: 111594,
        group: "group1",
        creationDate: "10/05/18",
        lastModificationDate: "01/12/14",
    },

];
const paymentData = [
    {
        key: 1,
        paymentId: "1",
        name: "Ivan",
        accountNumber: 55483,
        type: "Aliquam Ornare Incorporated",
        creationDate: "02/01/21",
        lastModificationDate: "09/06/02",
    },
    {
        key: 2,
        paymentId: "2",
        name: "Wylie",
        accountNumber: 55483,
        type: "Aliquam Ornare ",
        creationDate: "09/15/08",
        lastModificationDate: "07/05/10",
    },
    {
        key: 3,
        paymentId: "3",
        name: "Jakeem",
        accountNumber: 55483,
        type: "Aliquam ",
        creationDate: "11/16/06",
        lastModificationDate: "04/13/09",
    },


];
const voidData = [
    {
        key: 1,
        name: "Ivan",
        voidId: "1",
        price: 169564,
        group: "Imperdiet Institute",
        creationDate: "02/01/21",
        lastModificationDate: "09/06/02",
    },
    {
        key: 2,
        name: "Wylie",
        price: 55483,
        voidId: "2",
        group: "Aliquam Ornare Incorporated",
        creationDate: "09/15/08",
        lastModificationDate: "07/05/10",
    },
    {
        key: 3,
        name: "Jakeem",
        price: 132759,
        voidId: "3",
        group: "Nascetur LLP",
        creationDate: "11/16/06",
        lastModificationDate: "04/13/09",
    },

];
const currencyData = [
    {
        key: 1,
        name: "Ivan",
        currencyId: "1",
        symbol: 169564,
        group: "Imperdiet Institute",
        creationDate: "02/01/21",
        lastModificationDate: "09/06/02",
    },
    {
        key: 2,
        name: "Wylie",
        currencyId: "2",
        symbol: 55483,
        group: "Aliquam Ornare Incorporated",
        creationDate: "09/15/08",
        lastModificationDate: "07/05/10",
    },
    {
        key: 3,
        name: "Jakeem",
        symbol: 132759,
        currencyId: "3",
        group: "Nascetur LLP",
        creationDate: "11/16/06",
        lastModificationDate: "04/13/09",
    },
    {
        key: 4,
        name: "Adam",
        symbol: 111594,
        currencyId: "4",
        group: "Donec Consectetuer Institute",
        creationDate: "10/05/18",
        lastModificationDate: "01/12/14",
    },

];
const salesItemData = [
    {
        key: 1,
        name: "Ivan",
        itemId:"1",
        price: 169564,
        group: "group1",
        creationDate: "02/01/21",
        lastModificationDate: "09/06/02",
    },
    {
        key: 2,
        name: "Wylie",
        itemId:"2",
        price: 55483,
        group: "group1",
        creationDate: "09/15/08",
        lastModificationDate: "07/05/10",
    },
    {
        key: 3,
        name: "Jakeem",
        itemId:"3",
        price: 132759,
        group: "group1",
        creationDate: "11/16/06",
        lastModificationDate: "04/13/09",
    },
    {
        key: 4,
        name: "Adam",
        itemId:"4",
        price: 111594,
        group: "group1",
        creationDate: "10/05/18",
        lastModificationDate: "01/12/14",
    },
    {
        key: 5,
        itemId:"5",
        name: "Clayton",
        price: 151077,
        group: "group1",
        creationDate: "11/05/04",
        lastModificationDate: "09/04/19",
    },

];
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
export const deleteCurrency = (id) => {
    try {
        return async dispatch => {
            dispatch({
                type: DELETE_CURRENCY,
                payload: id
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


