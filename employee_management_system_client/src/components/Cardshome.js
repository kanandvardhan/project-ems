import React from "react";
import { cardHome } from "../assets/constants";
import "./Cardshome.css";
import { useNavigate } from "react-router-dom";

const Cardshome = () => {
  const navigate = useNavigate();
  return (
    <>
      {cardHome.map((card) => (
        <div
          onClick={() => navigate("/pricing")}
          key={card.id}
          className="card_flex flex shadow-lg mb-10 max-w-5xl ml-5 lg:ml-0 cursor-pointer"
        >
          <div className="image w-1/2 bg-white ">
            <img
              src={require(`../assets/images/${card.img}.jpg`)}
              className="object-fill"
              alt=""
            />
          </div>
          <div className="text h-64 p-8 bg-black w-1/2 shadow-lg">
            <h5 className="mb-2 text-3xl font-medium font-medium text-white ">
              {card.label}
            </h5>
            <p className="mb-4 text-xl text-neutral-300 ">{card.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardshome;
