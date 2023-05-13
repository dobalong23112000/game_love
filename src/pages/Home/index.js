import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo from "../../assets/images/liam_home.png";
import key from "../../assets/images/key.png";
import ListIconCard from "components/Icons/ListIconCard";
import ListIcon from "components/Icons/ListIcon";
import SmallCard from "components/SmallCard";
import BigCard from "components/BigCard";
import { listBigCard, listSmallCard } from "helpers/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeartIcon from "components/Icons/HeartIcon";
import { Progress } from "reactstrap";
const cx = classNames.bind(style);

const Home = () => {
  const [isFooterActive, setIsFooterActive] = useState(false);
  const [valueProgress, setValueProgress] = useState(0);
  const handleClickOutside = () => {
    setIsFooterActive(false);
  };
  useEffect(() => {
    if (isFooterActive) {
      if (valueProgress === 0) {
        setValueProgress(valueProgress + 1);
      } else {
        const interval = setInterval(() => {
          if (valueProgress <= 100) {
            setValueProgress(valueProgress + 1);
          }
        }, 50);
        return () => clearInterval(interval);
      }
    } else {
      setValueProgress(0);
    }
  }, [valueProgress, isFooterActive]);
  return (
    <div className={cx("wrapper")}>
      <div onClick={handleClickOutside} style={{ paddingBottom: "80px" }}>
        <div className={cx("logo")}>
          <img src={logo} alt="#" width={51} height={"auto"}></img>
        </div>
        <div className={cx("header-text")}>ĐIỀU MÌNH CHƯA NÓI ?</div>
        <div className={cx("key", `${isFooterActive ? "key-active" : ""}`)}>
          <img src={key} alt="#" width={80} height={100}></img>
        </div>
        <div className={cx("list-config", "d-flex align-items-center")}>
          <div style={{ zIndex: 100 }}>
            <ListIcon />
          </div>
          <div
            style={{ position: "absolute", width: "100%", overflow: "hidden" }}
          >
            <Swiper
              spaceBetween={10}
              slidesPerView={2.5}
              speed={500}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ paddingLeft: "60px" }}
            >
              {listSmallCard.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SmallCard icon={item.icon} content={item.content} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className={cx("list-card", "d-flex align-items-center")}>
          <div style={{ zIndex: 100 }}>
            <ListIconCard />
          </div>
          <div
            style={{ position: "absolute", width: "100%", overflow: "hidden" }}
          >
            <Swiper
              spaceBetween={5}
              slidesPerView={1.5}
              onSlideChange={() => {}}
              speed={500}
              onSwiper={(swiper) => {}}
              style={{ paddingLeft: "45px" }}
            >
              {listBigCard.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <BigCard
                      img_front={item.img_front}
                      img_back={item.img_back}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div
        className={cx(
          "footer",
          `${isFooterActive ? "footer-active" : "footer-nonactive"}`
        )}
      >
        {!isFooterActive && (
          <div
            className={cx("img-footer")}
            onClick={() => {
              setIsFooterActive(true);
            }}
          ></div>
        )}

        {isFooterActive && (
          <div
            className={cx("img-footer-unlock")}
            onClick={() => {
              setIsFooterActive(true);
            }}
          ></div>
        )}
        {isFooterActive && (
          <div style={{ width: "65%", textAlign: "center" }}>
            <div
              style={{
                fontSize: "10px",
                lineHeight: "13px",
                fontWeight: 400,
                color: "white",
                height: "25px",
              }}
            >
              <HeartIcon love={true} />
              <span className="ms-1"> Cùng LIAM "mở cửa" trái tim với</span>
            </div>
            <div
              style={{
                fontSize: "15px",
                lineHeight: "18px",
                fontWeight: 800,
                color: "white",
                height: "25px",
              }}
            >
              ĐIỀU MÌNH CHƯA NÓI
            </div>
            <div className="w-70 mt-3">
              <Progress
                value={valueProgress}
                style={{
                  height: "5px",
                  width: "70%",
                  margin: "auto",
                }}
                barStyle={{
                  backgroundColor: "#FFBDEA",
                }}
              />
            </div>
            <div
              className="d-flex justify-content-between mt-2"
              style={{
                width: "70%",
                margin: "auto",
              }}
            >
              <div
                style={{
                  color: "rgba(87, 71, 188, 1)",
                  fontSize: "10px",
                  lineHeight: "12px",
                  fontWeight: 400,
                }}
              >
                Love
              </div>
              <div
                style={{
                  color: "rgba(87, 71, 188, 1)",
                  fontSize: "10px",
                  lineHeight: "12px",
                  fontWeight: 400,
                }}
              >
                Cherish
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
