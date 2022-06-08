import React from "react";
import GuessField from "../GuessField/GuessField";
import css from "./GuessCard.module.css";

const GuessCard = (props) => {
  console.log(props);
  return (
    <div className={css.guessCard_container}>
      {props.value.map((value, i) => {
        return <GuessField key={i} value={value} />;
      })}
    </div>
  );
};

export default GuessCard;
