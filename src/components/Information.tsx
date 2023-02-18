import React from "react";
import information from "../utils/Information";
import Button from "./Button";

const Information = () => {
  return (
    <section>
      <Button />
      <header className="mb-5 flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold w-max">
            {information.name.firstName} {information.name.lastName},{" "}
            {information.age}
          </h1>
          <h2 className="text-section">{information.profession}</h2>
        </div>
        <div className="w-12 text-5xl cursor-pointer text-red-500">
          <i className="bx bx-paper-plane"></i>
        </div>
      </header>
      <article>
        <h3 className="title-section-template">Location</h3>
        <div className="text-red-500">
          <i className="bx bx-map"></i>
          {information.location.proximity}
        </div>
        <p className="text-section">
          {information.location.city}, {information.location.state}{" "}
          {information.location.country}
        </p>
      </article>
      <article>
        <h3 className="title-section-template">About</h3>
        <p className="text-section">{information.about}</p>
        <span className="title-section-side">Read more</span>
      </article>
    </section>
  );
};

export default Information;
