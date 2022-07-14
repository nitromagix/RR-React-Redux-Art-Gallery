//

import { Fragment } from "react";

function Gallery(props) {
  const renderImg = () => {
    const apiData = props.apiData;
    console.log(apiData);
    if (props.apiData) {
      return (
        <img
          // style={{ maxHeight: "90vh", maxWidth: "90%" }}
          src={props.apiData.primaryImage}
          alt={props.apiData.title}
        />
      );
    } else {
      return <p>image here</p>;
    }
  };

  return <Fragment>{renderImg()}</Fragment>;
}

export default Gallery;
