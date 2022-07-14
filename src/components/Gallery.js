//

import { Fragment } from "react";

function Gallery(props) {
  const renderImg = () => {
    const apiData = props.apiData;
    if (apiData && apiData.objectID) {
      return (
        <Fragment>
          <p>
            {apiData.objectID} - <strong>{apiData.title}</strong>{" "}
            {apiData.artistDisplayName}
          </p>
          {apiData.primaryImage ? (
            <img src={apiData.primaryImage} alt={apiData.title} />
          ) : (
            <div>
              <p>Sorry, there is no image available</p>
            </div>
          )}
        </Fragment>
      );
    } else {
      return (
        <p>
          Please use the controls above to view artwork from{" "}
          <a href="metmuseum.org">metmuseum.org</a>
        </p>
      );
    }
  };

  return <Fragment>{renderImg()}</Fragment>;
}

export default Gallery;
