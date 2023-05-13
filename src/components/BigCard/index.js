import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import HeartIcon from "components/Icons/HeartIcon";
import bigcard1img from "assets/images/big_card1.png";
const cx = classNames.bind(style);
const BigCard = (props) => {
  const { img_front, img_back } = props;
  return (
    <div
      style={{
        background: `url(${bigcard1img})`,
        width: "245px",
        height: "250px",
        backgroundPosition: "center",
        backgroundSize: "cover",
     
      }}
    >
      {/* <img src={img_front} alt="" width={245} height={250}></img> */}
    </div>
  );
};

export default BigCard;
