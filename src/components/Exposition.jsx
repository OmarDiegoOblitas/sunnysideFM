import React from "react";
import sugar from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import milk from "../assets/mobile/image-gallery-milkbottles.jpg";
import orange from "../assets/mobile/image-gallery-orange.jpg";
import cone from "../assets/mobile/image-gallery-cone.jpg";
import sugar1 from "../assets/desktop/image-gallery-sugarcubes.jpg";
import milk1 from "../assets/desktop/image-gallery-milkbottles.jpg";
import orange1 from "../assets/desktop/image-gallery-orange.jpg";
import cone1 from "../assets/desktop/image-gallery-cone.jpg";

function Exposition() {
  return (
    <div className="">
      <div className="grid grid-flow-col">
        <div className="">
          <img src={sugar1} alt="" />
        </div>
        <div className="">
          <img src={milk1} alt="" />
        </div>
        <div className="">
          <img src={orange1} alt="" />
        </div>
        <div className="">
          <img src={cone1} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 xl:hidden ">
        <div>
          <img src={sugar} alt="" />
        </div>
        <div>
          <img src={milk} alt="" />
        </div>
        <div>
          <img src={orange} alt="" />
        </div>
        <div>
          <img src={cone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Exposition;
