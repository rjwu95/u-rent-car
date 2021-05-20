import React from "react";
import { CarForm } from "../components";

export const CarRegister = () => {
  const onFinish = (a) => {
    console.log(a);
  };

  return <CarForm onFinish={onFinish} />;
};
