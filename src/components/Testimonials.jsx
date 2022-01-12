import React from "react";
import profile1 from "../assets/image/image-emily.jpg";
import profile2 from "../assets/image/image-thomas.jpg";
import profile3 from "../assets/image/image-jennie.jpg";

function Testimonials() {
  const cards = [
    {
      image: profile1,
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      position: "Marketing Director",
    },
    {
      image: profile2,
      text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      position: "Chief Operating Officer",
    },
    {
      image: profile3,
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      position: "Business Owner",
    },
  ];
  return (
    <div className="grid m-16 ">
      <div>
        <span className="flex justify-center text-neutral-300 font-extrabold tracking-widest text-2xl my-12">
          Client testimonials
        </span>
      </div>
      <div className="flex flex-col xl:flex-row">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex items-center flex-col xl:grid-cols-3 gap-8 m-8"
          >
            <img src={card.image} alt="" className="rounded-full w-1/6 " />
            <p className="text-center">{card.text}</p>
            <span className="font-black ">{card.name}</span>
            <p>{card.position}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
