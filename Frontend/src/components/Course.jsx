import React from "react";
import list from "../list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-15">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-3xl pt-32">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here!) </span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab
            odit laboriosam sit aliquam pariatur quisquam in praesentium. Qui
            voluptatem delectus, fuga quaerat vero temporibus atque at ab
            expedita recusandae consequuntur molestias amet laudantium, dolor
            voluptatum minus, mollitia iusto? Nam reprehenderit esse rem fuga
            atque neque dolorum? Ipsum, autem qui.
          </p>
          <Link to="/">
            <button className="btn btn-soft btn-secondary mt-8">Back</button>
          </Link>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>

        {/* <div className="px-2 md:px-0">
          {list.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Course;
