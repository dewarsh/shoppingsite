import { AppActions } from "./AppActions";

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    items: [],
    cartItems: [],
    totalItems: 0
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppActions.INITIALIZE_ITEMS: {
            return {
                ...state,
                items: action.payload
            }
        }

        case AppActions.ADD_ITEM_TO_CART: {
            let tempCart = [...state.cartItems];
            let item = action.payload
            let valueFound = false;
            for (let i = 0; i < tempCart.length; i++) {
                if (tempCart[i].id === item.id) {
                    tempCart[i] = { ...tempCart[i], count: tempCart[i].count + 1 }
                    valueFound = true;
                    break;
                }
            }
            if (!valueFound) {
                tempCart = [...tempCart, { ...item, count: 1 }]
            }
            return {
                ...state,
                cartItems: tempCart,
                totalItems: state.totalItems + 1
            }
        }

        case AppActions.REMOVE_ITEM_FROM_CART: {
            let tempCart = [...state.cartItems];
            let itemId = action.payload;
            let index = tempCart.findIndex(item => item.id === itemId);
            if (state.cartItems[index].count !== 1) {
                let newItem = { ...state.cartItems[index], count: state.cartItems[index].count - 1 };
                tempCart.splice(index, 1, newItem);
            } else {
                tempCart.splice(index, 1);
            }
            return {
                ...state,
                cartItems: tempCart,
                totalItems: state.totalItems - 1
            }
        }

        case AppActions.INCREASE_ITEM_COUNT: {
            let tempCart = [...state.cartItems];
            let itemId = action.payload;
            let index = tempCart.findIndex(item => item.id === itemId);
            let newItem = { ...state.cartItems[index], count: state.cartItems[index].count + 1 };
            tempCart.splice(index, 1, newItem);

            return {
                ...state,
                cartItems: tempCart,
                totalItems: state.totalItems + 1
            }
        }

        default:
            return state;
    }
}

export default loginReducer;