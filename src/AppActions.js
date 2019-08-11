// ------------------------------------
// Constants
// ------------------------------------
export const AppActions = {
    INITIALIZE_ITEMS: 'INITIALIZE_ITEMS',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
    INCREASE_ITEM_COUNT: 'INCREASE_ITEM_COUNT'
}

// ------------------------------------
// Actions
// ------------------------------------
export const initializeItems = items => {
  return {
    type    : AppActions.INITIALIZE_ITEMS,
    payload : items
  }
}

export const addItemToCart = item => {
  return {
    type    : AppActions.ADD_ITEM_TO_CART,
    payload : item
  }
}

export const decreaseItemCount = itemId => {
  return {
    type    : AppActions.REMOVE_ITEM_FROM_CART,
    payload : itemId
  }
}

export const increaseItemCount = itemId => {
  return {
    type: AppActions.INCREASE_ITEM_COUNT,
    payload: itemId
  }
}