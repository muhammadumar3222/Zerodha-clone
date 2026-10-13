import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDes,
  tryDemo,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDes}</p>
          <div className="mt-3">
            <a href={tryDemo}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
         <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
