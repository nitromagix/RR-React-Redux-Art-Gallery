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
  const artData = useSelector((state) => state.data);

  return (
    <Fragment>
      <button onClick={() => dispatch(decrementId())}>Back</button>
      <button onClick={() => dispatch(incrementId())}>Next</button>
      <span>&nbsp;|&nbsp;</span>
      <input
        value={artData.objectId}
        onChange={(e) => {
          dispatch(customId(Number(e.target.value)));
        }}
      />
      <button onClick={() => dispatch(fetchData())}>Go Get Art!</button>
      <span>&nbsp;|&nbsp;</span>
      <button onClick={() => dispatch(resetState())}>Clear</button>
    </Fragment>
  );
}

export default Controls;
