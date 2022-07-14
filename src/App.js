import "./App.css";

import { useSelector, connect, useDispatch } from "react-redux";

import { fetchData } from "./features/artDataSlice";
import Controls from "./components/Controls";
import Gallery from "./components/Gallery";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  objectId: state.data.objectId,
});

function App(props) {
  const dispatch = useDispatch();
  const artData = useSelector((state) => state.data);


  useEffect(() => {
    dispatch(fetchData());
  }, [props.objectId, dispatch]);

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

export default connect(mapStateToProps)(App)


