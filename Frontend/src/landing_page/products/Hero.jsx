import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row mt-5 p-3 text-center">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">Sleek, modren and intuitive trading platforms</h3>
        <p className="mt-2 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
