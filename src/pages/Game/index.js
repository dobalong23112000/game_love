import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import bg1img from "assets/images/game_background1_open.png";
import bg2img from "assets/images/game_background2_open.png";
import logo_liam from "assets/images/logo_liam.png";
import { Button } from "reactstrap";
import CircleAddIcon from "components/Icons/CircleAddIcon";
import CircleReloadIcon from "components/Icons/CircleReloadIcon";
import CircleHomeIcon from "components/Icons/CircleHomeIcon";
import CircleMenuIcon from "components/Icons/CircleMenuIcon";
const cx = classNames.bind(style);

const Game = () => {
  const [activeIcon, setActiveIcon] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img src={logo_liam} width={113} height={30} alt=""></img>
      </div>
      <div className={cx("background1")}></div>
      <div className={cx("background2")}></div>
      <div
        style={{
          width: "100%",
          height: "calc(var(--window-height))",
        }}
        className="d-flex align-items-center justify-content-center flex-column"
      >
        <div
          style={{
            fontSize: "20px",
            lineHeight: "24px",
            textAlign: "center",
            fontWeight: 800,
            color: "rgba(87, 71, 188, 1)",
            paddingLeft: "26px",
            paddingRight: "26px",
          }}
        >
          TRƯỢT SANG PHẢI HOẶC TRÁI ĐỂ XEM CÁC CÂU HỎI
        </div>
        <div>
          <Button className={"button_submit mt-5"} type="submit">
            Let's go
          </Button>
        </div>
      </div>
      <div className={cx("icon-footer", "d-flex align-items-center")}>
        <div
          onClick={() => {
            setActiveIcon(!activeIcon);
          }}
          className={`${
            activeIcon ? cx("active-circle-add") : cx("nonactive-circle-add")
          }`}
        >
          <CircleAddIcon />
        </div>
        <div className="d-flex">
          <div
            className={`${
              activeIcon
                ? cx("active-circle-reload", "ms-4")
                : cx("nonactive-circle-reload", "ms-4")
            }`}
          >
            <CircleReloadIcon />
          </div>
          <div
            className={`${
              activeIcon
                ? cx("active-circle-home", "ms-4")
                : cx("nonactive-circle-home", "ms-4")
            }`}
          >
            <CircleHomeIcon />
          </div>
          <div
            className={`${
              activeIcon
                ? cx("active-circle-menu", "ms-4")
                : cx("nonactive-circle-menu", "ms-4")
            }`}
          >
            <CircleMenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
