import "./App.css";

import { useSelector } from "react-redux";

import Controls from "./components/Controls"
import Gallery from "./components/Gallery";

function App() {
  const artData = useSelector((state) => state.data);

  return (
    <div className="App">
      <div className="controls">
        <Controls />
      </div>
      <div className="gallery">
        <Gallery apiData={artData.apiData} />
      </div>
    </div>
  );
}

export default App;
