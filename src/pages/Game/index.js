import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";
import { Button } from "reactstrap";
import CircleAddIcon from "components/Icons/CircleAddIcon";
import CircleReloadIcon from "components/Icons/CircleReloadIcon";
import CircleHomeIcon from "components/Icons/CircleHomeIcon";
import CircleMenuIcon from "components/Icons/CircleMenuIcon";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import UserApi from "api/UserApi";
import GetMessageValidate from "helpers/GetMessageValidate";
import Loader from "components/Loading/Loader/Loader";
import generateImg from "helpers/generateImg ";
import getMessageSuccess from "helpers/getMessageSuccess";
import TinderCard from "react-tinder-card";
const cx = classNames.bind(style);

const Game = () => {
  const { authState, loadUser } = useContext(AuthContext);
  const [activeIcon, setActiveIcon] = useState(false);
  const [activeGame, setActiveGame] = useState(false);
  const [activeLastHeart, setActiveLastHeart] = useState(false);
  const [stt, setStt] = useState(0);
  const navigate = useNavigate();
  const [listQuestion, setListQuestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadedUser, setLoadedUser] = useState(false);

  // swipe
  const onSwipe = (direction, item) => {
    setStt(item.stt);
  };
  const questionPlayed = async (sttQuestion) => {
    setLoading(true);
    try {
      const response = await UserApi.update({ stt: sttQuestion });
      if (response?.data?.status === 200) {
        setLoading(false);
        return true;
      } else {
        GetMessageValidate("Có lỗi xảy ra trên hệ thống!");
      }
    } catch (e) {
      GetMessageValidate("Có lỗi xảy ra trên hệ thống!");
    }
    setLoading(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      await loadUser();
      setLoadedUser(true);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loadedUser) {
      const reversedArray = [...authState?.user?.infoQuestion].reverse();
      let arrayQuestionPlayed = authState?.user?.infoQuestionPlayed ?? [];
      const result = reversedArray.filter(
        (item1) =>
          !arrayQuestionPlayed.some(
            (item2) => item2.stt === item1.stt && item2.name === item1.name
          )
      );
      let sttQuestionPlayed = 0;
      if (arrayQuestionPlayed.length !== 0) {
        sttQuestionPlayed =
          arrayQuestionPlayed[arrayQuestionPlayed.length - 1].stt;
      }
      setStt(sttQuestionPlayed);
      setListQuestion(result);
    }
  }, [
    loadedUser,
    authState?.user?.infoQuestion,
    authState?.user?.infoQuestionPlayed,
  ]);
  const handleReloadQuestion = async () => {
    setLoading(true);
    await questionPlayed(0);
    const reversedArray = [...authState?.user?.infoQuestion].reverse();
    setListQuestion(reversedArray)
    setActiveLastHeart(false)
    // await loadUser();
    // window.location.reload();
    setLoading(false);
  };
  useEffect(() => {
    if (stt === 100) {
      setActiveLastHeart(true);
    }
    if (stt !== 0) {
      setListQuestion((prevCards) =>
        prevCards.filter((card) => card.stt !== stt)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stt]);
  const handleSaveIcon = async () => {
    const response = await questionPlayed(stt);
    if (response) {
      getMessageSuccess("Lưu câu hỏi thành công!");
    }
  };

  return (
    <>
      {loading && <Loader />}

      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
          <img src={logo_liam} width={113} height={30} alt=""></img>
        </div>
        <div
          className={cx(
            `${!activeGame ? "background1-open" : "background1-closed"}`,
            "background1"
          )}
        ></div>
        <div
          className={cx(
            `${!activeGame ? "background2-open" : "background2-closed"}`,
            "background2"
          )}
        ></div>
        <div
          style={{
            width: "100%",
            height: "calc(var(--window-height))",
          }}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          {!activeGame ? (
            <>
              <div className={cx("title")}>
                TRƯỢT SANG PHẢI HOẶC TRÁI ĐỂ XEM CÁC CÂU HỎI
              </div>
              <div>
                <Button
                  className={"button_submit mt-5"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveGame(true);
                  }}
                >
                  Let's go
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className={cx("list_card")} style={{ zIndex: 100 }}>
                {listQuestion.map((item, index) => {
                  if (stt + 3 > item.stt) {
                    console.log(item)
                    return (
                      <TinderCard
                        className={cx("swipe")}
                        onSwipe={(dir) => {
                          onSwipe(dir, item);
                        }}
                        onCardLeftScreen={() => { }}
                        preventSwipe={["up", "down"]}
                        key={item.stt}
                      >
                        <div
                          style={{
                            width: "327px",
                            height: "472px",
                            // backgroundColor: "black",
                            backgroundImage: `url(${generateImg(index)})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                            borderRadius: "48px",
                          }}
                        >
                          <div className={cx("header_card")}>
                            ĐIỀU MÌNH CHƯA NÓI
                          </div>
                          <div className={cx("content_card")}>{item.name}</div>
                        </div>
                      </TinderCard>
                    );
                  }
                  return null
                })}

                {activeLastHeart && <div className={cx("last_heart")}></div>}
              </div>
            </>
          )}
        </div>

        <div className={cx("icon-footer", "d-flex align-items-center")}>
          <div
            onClick={() => {
              setActiveIcon(!activeIcon);
            }}
            className={`${activeIcon ? cx("active-circle-add") : cx("nonactive-circle-add")
              }`}
          >
            <CircleAddIcon />
          </div>
          <div className="d-flex">
            <div
              className={`${activeIcon
                ? cx("active-circle-reload", "ms-4")
                : cx("nonactive-circle-reload", "ms-4")
                }`}
              onClick={handleReloadQuestion}
            >
              <CircleReloadIcon />
            </div>
            <div
              className={`${activeIcon
                ? cx("active-circle-home", "ms-4")
                : cx("nonactive-circle-home", "ms-4")
                }`}
              onClick={() => {
                navigate("/home");
              }}
            >
              <CircleHomeIcon />
            </div>
            <div
              className={`${activeIcon
                ? cx("active-circle-menu", "ms-4")
                : cx("nonactive-circle-menu", "ms-4")
                }`}
              onClick={() => {
                navigate("/history");
              }}
            >
              <CircleMenuIcon />
            </div>
            <div
              className={`${activeIcon
                ? cx("active-circle-save", "ms-4")
                : cx("nonactive-circle-save", "ms-4")
                }`}
              onClick={handleSaveIcon}
            >
              <CircleReloadIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
