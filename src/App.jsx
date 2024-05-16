import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  setIncrementAmount,
} from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const incrementAmount = useSelector((state) => state.counter.incrementAmount);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <input
        onChange={(e) => dispatch(setIncrementAmount(e.target.value))}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrementByAmount(Number(incrementAmount)))}
      >
        Increment
      </button>
    </>
  );
}

export default App;
