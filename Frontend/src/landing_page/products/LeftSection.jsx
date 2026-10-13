import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDes,
  tryDemo,
  learMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDes}</p>
          <div className="mt-3">
            <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={tryDemo} style={{marginLeft: "90px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft: "50px"}}>
              <img src="/media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
