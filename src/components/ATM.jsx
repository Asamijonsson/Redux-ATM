import { useDispatch, useSelector } from "react-redux";
import { toggleAtm } from "../redux/ducks/atm";
import Counter from "./Counter";
const ATM = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleAtm());
  };
  const toggleState = useSelector((state) => state.atm.startAtm);
  return (
    <div>
      <h2>Redux ATM</h2>

      <button onClick={toggle}>Start/Close ATM</button>
      {toggleState ? (
        <div>
          <h2>Account Balance</h2>
          <Counter />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ATM;
