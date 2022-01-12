import React from "react";
import cereza from "../assets/mobile/image-graphic-design.jpg";
import orange from "../assets/mobile/image-photography.jpg";
import orange1 from "../assets/desktop/image-photography.jpg";
import cereza1 from "../assets/desktop/image-graphic-design.jpg";

function Products() {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <div className=" ">
          <img className="hidden" src={cereza} alt="" />
          <img className="" src={cereza1} alt="" />
        </div>
        <div className="flex flex-col items-center gap-8 -mt-48">
          <span className="text-2xl font-black">Graphic Design</span>
          <p className="text-center mx-36 ">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>

      <div className="xl:block">
        <div>
          <img className="hidden" src={orange} alt="" />
          <img className="" src={orange1} alt="" />
        </div>
        <div className="flex flex-col items-center gap-8 -mt-48">
          <span className="text-2xl font-black">Photography</span>
          <p className="text-center mx-36">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
