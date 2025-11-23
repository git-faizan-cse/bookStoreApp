import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../list.json";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // ≤ 1024px (laptops/tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // ≤ 768px (tablets)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // ≤ 480px (phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10 bg-base-100  dark:bg-slate-900 dark:text-white">
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Free Offered Courses
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          fugit sed asperiores ex doloremque dolores temporibus explicabo itaque
          nobis veniam, ducimus qui earum aut sapiente accusantium eius
          deleniti!
        </p>
      </div>

      <div className="slider-container px-2 md:px-0">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Freebook;
