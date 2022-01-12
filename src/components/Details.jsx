import React from "react";
import huevo from "../assets/mobile/image-transform.jpg";
import huevo1 from "../assets/desktop/image-transform.jpg";
import copa from "../assets/mobile/image-stand-out.jpg";
import copa1 from "../assets/desktop/image-stand-out.jpg";

function Details() {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <div className="flex flex-col gap-8 m-36">
          <span className="font-extrabold text-4xl ">Transform your brand</span>
          <p className="text-slate-500">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="flex-row text-left font-bold text-lg my-1">
            Learn more
          </button>
        </div>
        <div className="">
          <img className="hidden" src={copa} alt="" />
          <img src={copa1} alt="" />
        </div>
      </div>

      <div className="">
        <div className="bg-cover">
          <img className="xl:hidden" src={huevo} alt="" />
          <img src={huevo1} alt="" />
        </div>

        <div className="flex flex-col gap-8 m-36">
          <span className="font-extrabold text-4xl">
            {" "}
            Stand out to the right audience
          </span>
          <p className="text-slate-500">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className=" flex-row text-left font-bold text-lg my-1">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
