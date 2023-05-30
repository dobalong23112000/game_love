import React from "react";
import ReactCardFlip from "react-card-flip";

const BigCard = (props) => {
  const { img_front, img_back, handleCardClick, isFlipped, id } = props;
  // const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    // setIsFlipped(!isFlipped);
    handleCardClick(id);
  };
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
