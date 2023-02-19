import React from "react";
import Gallery from "./Gallery";
import Information from "./Information";
import Interests from "./Interests";

const Body = () => {
  return (
    <section className="relative -top-12 bg-white rounded-[20px] w-full px-8 pt-16">
      <Information />
      <Interests />
      <Gallery />
    </section>
  );
};

export default Body;
