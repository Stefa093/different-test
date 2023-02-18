import React from "react";
import Gallery from "./Gallery";
import Information from "./Information";
import Interests from "./Interests";

const Body = () => {
  return (
    <section className="relative -top-16 bg-white rounded-[30px] w-full px-6 pt-10">
      <Information />
      <Interests />
      <Gallery />
    </section>
  );
};

export default Body;
