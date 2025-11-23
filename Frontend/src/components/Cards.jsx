import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="p-3">
      <div className="card bg-base-100 w-full shadow-md hover:shadow-lg transition-shadow hover:scale-105 duration-300  dark:bg-slate-900 dark:text-white dark:border-amber-100 dark:border-2">
        <figure className="overflow-hidden rounded-t-md">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover sm:h-56 md:h-64"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-lg sm:text-xl font-semibold">
            {item.title}
            <div className="badge badge-secondary text-white text-xs sm:text-sm">
              {item.category}
            </div>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
            {item.desc}
          </p>

          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline text-sm sm:text-base">
              ${item.price}
            </div>
            <button className="badge badge-outline hover:bg-pink-500 hover:text-white duration-300 cursor-pointer">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
