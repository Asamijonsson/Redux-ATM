import { createStore, combineReducers } from "redux";
import CounterReducer from "./ducks/counter";
import AtmReducer from "./ducks/atm";
const reducer = combineReducers({
  counter: CounterReducer,
  atm: AtmReducer,
});

const store = createStore(reducer);

export default store;
