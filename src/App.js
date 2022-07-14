import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import Controls from "./components/Controls"
import Gallery from "./components/Gallery";

function App() {
  const data = useSelector((state) => state.data);

  return (
    <div className="App">
      <div className="controls">
        <Controls />
      </div>
      <div className="gallery">
        {data.objectId}
        <Gallery apiData={data.apiData} />
      </div>
    </div>
  );
}

export default App;
