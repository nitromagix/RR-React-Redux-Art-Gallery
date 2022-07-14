//

import { createSlice } from "@reduxjs/toolkit";

const API_URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

const initialState = {
  objectId: 12345,
  apiData: {},
};

export const artDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      return { ...state, apiData: action.payload };
    },
    incrementId: (state, action) => {
      // console.log(action)
      return { ...state, objectId: state.objectId + 1 };
    },
    decrementId: (state, action) => {
      return { ...state, objectId: state.objectId - 1 };
    },
    customId: (state, action) => {
      return { ...state, objectId: action.payload };
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { setApiData, incrementId, decrementId, customId, resetState } =
  artDataSlice.actions;

export const fetchData = () => {
  const fetchDataThunk = async (dispatch, getState) => {
    let state = getState();
    const response = await fetch(`${API_URL}${state.data.objectId}`);
    const responseJson = await response.json();
    dispatch(setApiData(responseJson));
  };
  return fetchDataThunk;
};

export default artDataSlice.reducer;
