import React from "react";
import information from "../utils/Information";
import Button from "./Button";

const Information = () => {
  return (
    <section>
      <Button />
      <header className="mb-5 flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold w-max">
            {information.name.firstName} {information.name.lastName},{" "}
            {information.age}
          </h1>
          <h2 className="text-section">{information.profession}</h2>
        </div>
        <div className="plane">
          <i className="bx bx-paper-plane"></i>
        </div>
      </header>
      <article>
        <h3 className="title-section-template">Location</h3>
        <div className="flex justify-between ">
        <p className="text-section">
          {information.location.city}, {information.location.state}{" "}
          {information.location.country}
        </p>
        <div className="text-red-500 rounded bg-red-100 text-xs text-center h-6 w-14 pt-1">
          <i className="bx bx-map "></i>
          {information.location.proximity}
        </div>
        </div>
      </article>
      <article>
        <h3 className="title-section-template">About</h3>
        <p className="text-section pb-2 text-justify">{information.about}</p>
        <span className="title-section-side cursor-pointer ">Read more</span>
      </article>
    </section>
  );
};

export default Information;
