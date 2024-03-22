import React, { useState } from "react";
import Data from "../Components/Data.js";

const Furnitures = () => {
  const [items, setItems] = useState(Data);

  return (
    <div>
      <div className=" max-w-[1480px] m-auto mt-20 ">
        <div>
          <h2 className="text-xl md:text-3xl font-bold pl-7 ">
            Best Modern Furniture
          </h2>
        </div>
      </div>

      <div className=" max-w-[1480px] m-auto mt-12 content-center justify-center items-center grid grid-cols-2  xl:grid-cols-4 md:grid-cols-3 p-5 ">
        {items.map((elements, index) => {
          const { name, image, oldPrice, newPrice } = elements;
          return (
            <div key={index}>
              <div className="px-3">
                <div className="">
                  <a>
                    <img src={image} />
                  </a>
                </div>

                <div className="my-3">
                  <p>{name}</p>
                </div>

                <div className="flex mb-3">
                  <div className="flex font-bold">
                    <span>
                      <p>$</p>
                    </span>
                    <p>{newPrice}</p>
                  </div>
                  <div className="flex ml-5">
                    <span>
                      <p>$</p>
                    </span>
                    <p>
                      <del>{oldPrice}</del>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" max-w-[1480px] m-auto mt-12 content-center justify-center items-center grid grid-cols-2  xl:grid-cols-4 md:grid-cols-3 p-5  ">
        {items.map((elements,index) => {
          const { id, name, image, oldPrice, newPrice } = elements;
          return (
            <div key={index}>
              <div className="px-3">
                <div>
                  <a>
                    <img src={image} />
                  </a>
                </div>

                <div className="my-3">
                  <p>{name}</p>
                </div>

                <div className="flex mb-3">
                  <div className="flex">
                    <span>
                      <p>$</p>
                    </span>
                    <p className="font-bold">{newPrice}</p>
                  </div>
                  <div className="flex ml-5">
                    <span>
                      <p>$</p>
                    </span>
                    <p>
                      <del>{oldPrice}</del>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Furnitures;
