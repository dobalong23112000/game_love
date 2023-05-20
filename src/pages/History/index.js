import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import logo_liam from "assets/images/logo_liam.png";
import DeleteCircle from "components/Icons/DeleteCircle";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import Loader from "components/Loading/Loader/Loader";
import UserApi from "api/UserApi";
import GetMessageValidate from "helpers/GetMessageValidate";
const cx = classNames.bind(style);
const History = () => {
  const { loadUser, authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await loadUser();
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleBackGame = async (stt) => {
    setLoading(true)
    try {
      const response = await UserApi.update({ stt: stt - 1 });
      if (response?.data?.status === 200) {
        await loadUser()
        navigate('/game')

      } else {
        GetMessageValidate("Có lỗi xảy ra trên hệ thống!");
      }
    } catch (e) {
      GetMessageValidate("Có lỗi xảy ra trên hệ thống!");
    }
    setLoading(false)
  }
  return (
    <>
      {(authState?.authLoading || loading) && <Loader />}
      <div className={cx("wrapper")}>
        <div className={cx("background_header")}>
          <div className="text-center mb-5 mt-5 position-relative">
            <img src={logo_liam} alt="#logo" width={113} height={30}></img>
            <div
              className={cx("icon_closed", "position-absolute")}
              onClick={() => {
                navigate("/home");
              }}
            >
              <DeleteCircle />
            </div>
          </div>
          <div className={cx("title", "text-center")}>DANH SÁCH CÂU HỎI </div>
        </div>

        <div
          className={cx(
            "list-question",
            "d-flex align-items-center flex-column justify-content-center"
          )}
        >
          {authState?.user?.infoQuestionPlayed &&
            authState?.user?.infoQuestionPlayed.map((item, index) => {
              return (
                <div
                  onClick={async () => {
                    await handleBackGame(item.stt)
                  }}
                  className={cx(
                    "item-question",
                    "mb-4 d-flex align-items-center justify-content-between"
                  )}
                  key={index}

                >
                  <div className={cx("stt", "w-30")}>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid white",
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <div className={cx("content", "w-70")}>{item?.name}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default History;
