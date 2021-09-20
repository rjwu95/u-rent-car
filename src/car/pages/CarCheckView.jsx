import React from "react";
import { useParams } from "react-router";
import defaultImage from "../../assets/default.jpeg";

export const CarCheckView = () => {
  const { dataUrl } = useParams();

  return (
    <>
      <img
        src={decodeURIComponent(dataUrl)}
        alt="default"
        id="canvasimg"
        style={{
          backgroundImage: `url(${defaultImage})`,
        }}
      />
      <input
        type="button"
        value="닫기"
        id="btn"
        size="30"
        onClick={window.close}
      />
    </>
  );
};
