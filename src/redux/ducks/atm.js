export const toggleAtm = () => ({
  type: "toggle",
});
const initialState = {
  startAtm: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, startAtm: !state.startAtm };
    default:
      return state;
  }
};
export default reducer;
