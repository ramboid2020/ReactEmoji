import React from "react";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.img}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Term;
