import React from "react";
import { registerCar } from "../api";
import { CarForm } from "../components/CarForm";

export const CarRegister = ({ history }) => {
  const onFinish = (info) => {
    registerCar(info)
      .then(() => {
        alert("저장했습니다.");
        history.goBack();
      })
      .catch(() => alert("저장을 실패했습니다"));
  };

  return <CarForm onFinish={onFinish} />;
};
