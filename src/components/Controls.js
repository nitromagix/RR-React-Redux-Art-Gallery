//

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchData,
  incrementId,
  decrementId,
  customId,
  resetState,
} from "../features/artDataSlice";

function Controls() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  return (
    <Fragment>
      <input
        value={data.objectId}
        onChange={(e) => {
          dispatch(customId(Number(e.target.value)));
        }}
      />
      <button onClick={() => dispatch(fetchData())}>Thunk!</button>
      <button onClick={() => dispatch(resetState())}>Clear</button>
      <button onClick={() => dispatch(incrementId())}>Next</button>
      <button onClick={() => dispatch(decrementId())}>Back</button>
    </Fragment>
  );
}

export default Controls;
