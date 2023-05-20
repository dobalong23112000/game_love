import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);
const SmallCard = (props) => {
  const { icon, content } = props;
  return (
    <div
      className={cx(
        "wrapper",
        "d-flex align-items-center justify-content-center flex-column"
      )}
   
    >
      <div>{icon}</div>
      <div className={cx("content", "mt-3")}>{content}</div>
    </div>
  );
};

export default SmallCard;
