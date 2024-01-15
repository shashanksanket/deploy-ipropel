/* eslint-disable --  This file is for testing redux functionality, will be removed in future*/

"use client";

import { useState } from "react";
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from "@/lib/redux";
import styles from "./counter.module.css";

export function Counter(): JSX.Element {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  return (
    <div>
      <div className={styles.row}>
        <button
          aria-label="Decrement value"
          className={styles.button}
          onClick={() => dispatch(counterSlice.actions.decrement())}
          type="button"
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          aria-label="Increment value"
          className={styles.button}
          onClick={() => dispatch(counterSlice.actions.increment())}
          type="button"
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          aria-label="Set increment amount"
          className={styles.textbox}
          onChange={(e) => {
            setIncrementAmount(Number(e.target.value || 0));
          }}
          value={incrementAmount}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
          type="button"
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={async () => dispatch(incrementAsync(incrementAmount))}
          type="button"
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOddAsync(incrementAmount));
          }}
          type="button"
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
