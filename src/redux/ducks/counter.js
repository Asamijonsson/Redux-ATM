export const increment100 = () => ({
  type: "increment100",
});
export const increment200 = () => ({
  type: "increment200",
});
export const increment500 = () => ({
  type: "increment500",
});
export const increment1000 = () => ({
  type: "increment1000",
});

export const decrement100 = () => ({
  type: "decrement100",
});

export const decrement200 = () => ({
  type: "decrement200",
});
export const decrement500 = () => ({
  type: "decrement500",
});
export const decrement1000 = () => ({
  type: "decrement1000",
});

export const reset = () => ({
  type: "reset",
});
const initialState = {
  count: 1000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment100":
      return { ...state, count: state.count + 100 };
    case "increment200":
      return { ...state, count: state.count + 200 };
    case "increment500":
      return { ...state, count: state.count + 500 };
    case "increment1000":
      return { ...state, count: state.count + 1000 };
    case "decrement100":
      return { ...state, count: state.count - 100 };
    case "decrement200":
      return { ...state, count: state.count - 200 };
    case "decrement500":
      return { ...state, count: state.count - 500 };
    case "decrement1000":
      return { ...state, count: state.count - 1000 };
    case "reset":
      return { ...state, count: (state.count = 0) };
    default:
      return state;
  }
};
export default reducer;
