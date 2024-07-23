import seafood from "../assets/maxresdefault.jpg";
import pork from "../assets/pork.jpg";
import beef from "../assets/beef.jpg";
import chicken from "../assets/chicken.jpg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import vegetable from "../assets/vegetables.webp";
import prevArrow from "../assets/arrow-back.svg";
import { useState } from "react";
import CarouselItems from "./CarouselItems";
export default function Customize() {
  const [main, setMain] = useState({
    seafood: false,
    pork: false,
    beef: false,
    chicken: false,
    vegetable: false,
  });
  const circle =
    "h-28 w-28 sm:w-36 sm:h-36 bg-cover flex justify-center items-center rounded-full";
  const padding = "px-8 xs:px-10 sm:px-16 md:px-24 lg:px-30 xl:px-44 2xl:px-56";
  function handleClick(e) {
    setMain(() => {
      return {
        [e.target.id]: !main[e.target.id],
      };
    });
    console.log(main);
  }

  return (
    <div className="my-20">
      <div className={`${padding}`}>
        <h1 className="text-center font-poppins text-body sm:text-xl">
          Customize your own filipino meal
        </h1>
        <h1 className="text-center mt-2 font-shrikhand text-2xl sm:text-3xl">
          CHOOSE YOUR MAIN INGREDIENT
        </h1>
      </div>
      <div className="mb-10">
        <div className="py-5 flex justify-center">
          <Splide
            options={{
              arrows: false,
              gap: "2em",
              perPage: 5,
              perMove: 1,
              pagination: false,
              drag: false,
              rewind: false,
              breakpoints: {
                1023: {
                  drag: true,
                  width: "90%",
                  gap: "0px",
                  rewind: false,
                  arrows: true,
                  perPage: 4,
                  perMove: 1,
                },
                767: {
                  drag: true,
                  gap: "0em",
                  width: "80%",
                  rewind: false,
                  perPage: 3,
                  perMove: 1,
                },
                450: {
                  perPage: 2,
                },
              },
            }}
            hasTrack={false}
            aria-label="..."
          >
            <SplideTrack>
              <CarouselItems
                onClick={handleClick}
                className={`${circle} ${
                  main.seafood ? "border-4 border-darrow" : ""
                }`}
                id="seafood"
                style={{ backgroundImage: `url(${seafood})` }}
                title="Seafood"
              />
              <CarouselItems
                onClick={handleClick}
                className={`${circle} ${
                  main.pork ? "border-4 border-darrow" : ""
                }`}
                id="pork"
                style={{ backgroundImage: `url(${pork})` }}
                title="Pork"
              />
              <CarouselItems
                onClick={handleClick}
                className={`${circle} ${
                  main.beef ? "border-4 border-darrow" : ""
                }`}
                id="beef"
                style={{ backgroundImage: `url(${beef})` }}
                title="Beef"
              />
              <CarouselItems
                onClick={handleClick}
                className={`${circle} ${
                  main.chicken ? "border-4 border-darrow" : ""
                }`}
                id="chicken"
                style={{ backgroundImage: `url(${chicken})` }}
                title="Chicken"
              />
              <CarouselItems
                onClick={handleClick}
                className={`${circle} ${
                  main.vegetable ? "border-4 border-darrow" : ""
                }`}
                id="vegetable"
                style={{ backgroundImage: `url(${vegetable})` }}
                title="Vegetable"
              />
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow bg-red-200 splide__arrow--prev -left-7 sm:-left-6">
                <img src={prevArrow} className="me-1" alt="previous arrow" />
              </button>
              <button className="splide__arrow bg-red-200 splide__arrow--next -right-7 sm:-right-6">
                <img
                  src={prevArrow}
                  className="ms-1 rotate-180"
                  alt="previous arrow"
                />
              </button>
            </div>
          </Splide>
        </div>
        <div className="flex justify-center mt-5">
          <button className="text-white bg-orangered w-26 h-10 rounded-full font-medium font-poppins shadow-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
