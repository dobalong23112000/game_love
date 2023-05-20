import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import HeartIcon from "components/Icons/HeartIcon";
import bigcard1img from "assets/images/big_card1.png";
import bigcard_1_bimg from "assets/images/big_card_b_1.png";

import ReactCardFlip from "react-card-flip";
const cx = classNames.bind(style);
const BigCard = (props) => {
  const { img_front, img_back } = props;
  const [isFlipped,setIsFlipped] = useState(false)
  const  handleClick= (e) => {
    setIsFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{
          background: `url(${img_front})`,
          width: "245px",
          height: "250px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        onClick={handleClick}
      ></div>
      <div
        style={{
          background: `url(${img_back})`,
          width: "245px",
          height: "250px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        onClick={handleClick}

      ></div>
    </ReactCardFlip>
  );
};

export default BigCard;
