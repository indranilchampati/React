import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD-OUT";
  } else if (props.location !== null) {
    badgeText = props.location;
  }
  // console.log(badgeText);
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} alt="" className="card--image" />
      <div className="card--stats">
        <img src="images/star.png" alt="" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) .</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <strong>From ${props.price} </strong>/ person
      </p>
    </div>
  );
}
export default Card;
