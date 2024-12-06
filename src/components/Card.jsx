import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={props.img} alt="Shoes" className="h-[320px] w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}!</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
