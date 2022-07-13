import "./App.css";

import { useSelector, useDispatch } from 'react-redux'

import {incrementId, decrementId, customId, resetState} from "./features/dataSlice"
import { fetchData } from "./features/dataSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const renderImg = () => {
    if (data.apiData) {
      return (
        <img
          style={{ width: "100vw" }}
          src={data.apiData.primaryImage}
          alt={data.apiData.title}
        />
      );
    } else {
      return <p>image here</p>;
    }
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(resetState())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input
        value={data.objectId}
        onChange={(e) => {
          dispatch(customId(Number(e.target.value)));
        }}
      />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div style={{ backgroundColor: "white", color: "black" }} className="App">
//       <Nav />
//       <ContentWrapper />
//       <Footer />
//     </div>
//   );
// }

export default App;
