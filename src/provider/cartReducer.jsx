const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cloneState = [...state.cart];
      const isAvalibe = cloneState.findIndex((p) => p.id === action.payload.id);

      if (isAvalibe < 0) {
        cloneState.push({ ...action.payload, quntity: 1 });
      } else {
        const index = cloneState.findIndex(
          (item) => item.id === action.payload.id
        );
        cloneState[index].quntity++;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          cart: cloneState,
          total: state.total + action.payload.cost,
        })
      );

      return {
        ...state,
        cart: cloneState,
        total: state.total + action.payload.cost,
      };
    }

    case "REMOVE_ITEM": {
      const cloneState = [...state.cart];
      const newData = cloneState.filter((p) => p.id !== action.payload.id);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          cart: newData,
          total: state.total - action.payload.cost,
        })
      );

      return {
        ...state,
        cart: newData,
        total: state.total - action.payload.cost,
      };
    }

    case "DECREMENT_ITEM": {
      const cloneState = [...state.cart];
      const index = cloneState.findIndex(
        (item) => item.id === action.payload.id
      );

      if (parseInt(cloneState[index].quntity) === 1) {

        const filteredItem = cloneState.filter(
          (item) => item.id !== action.payload.id
        );

        localStorage.setItem(
          "cart",
          JSON.stringify({
            ...state,
            cart: filteredItem,
            total: state.total - action.payload.cost,
          })
        );

        return {
          ...state,
          cart: filteredItem,
          total: state.total - action.payload.cost,
        };

      } else {

        const cloneState = [...state.cart];
        const index = cloneState.findIndex(
          (item) => item.id === action.payload.id
        );
        cloneState[index].quntity--;
        localStorage.setItem(
          "cart",
          JSON.stringify({
            ...state,
            cart: cloneState,
            total: state.total - action.payload.cost,
          })
        );

      }

      return {
        ...state,
        cart: cloneState,
        total: state.total - action.payload.cost,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
