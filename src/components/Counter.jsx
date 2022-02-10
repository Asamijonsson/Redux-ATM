import { useDispatch, useSelector } from "react-redux";
import {
  increment100,
  increment200,
  increment500,
  increment1000,
  decrement100,
  decrement200,
  decrement500,
  decrement1000,
  reset,
} from "../redux/ducks/counter";
const Counter = () => {
  let dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  if ({ count }.count <= 0) {
    dispatch(reset());
  }
  console.log({ count });
  return (
    <div>
      {{ count }.count > 0 ? (
        <h2>{count}KR</h2>
      ) : (
        <p>You don't have money for withdrawal</p>
      )}
      <p>Withdraw</p>
      <button
        onClick={() => {
          dispatch(increment100());
        }}
      >
        100kr
      </button>
      <button
        onClick={() => {
          dispatch(increment200());
        }}
      >
        200kr
      </button>
      <button
        onClick={() => {
          dispatch(increment500());
        }}
      >
        500kr
      </button>
      <button
        onClick={() => {
          dispatch(increment1000());
        }}
      >
        1000kr
      </button>
      <br />
      <br />
      <p>Deposit</p>
      <button
        onClick={() => {
          dispatch(decrement100());
        }}
      >
        100kr
      </button>
      <button
        onClick={() => {
          dispatch(decrement200());
        }}
      >
        200kr
      </button>
      <button
        onClick={() => {
          dispatch(decrement500());
        }}
      >
        500kr
      </button>
      <button
        onClick={() => {
          dispatch(decrement1000());
        }}
      >
        1000kr
      </button>
    </div>
  );
};
export default Counter;
