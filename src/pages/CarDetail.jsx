import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CarForm } from "../components";

export const CarDetail = () => {
  // const { id } = useParams();
  const onFinish = (a) => {
    console.log(a);
  };
  useEffect(() => {
    //   getCarDetail(id)
  }, []);

  return (
    <CarForm onFinish={onFinish} submitLabel="저장" initNumber="12하1221" />
  );
};
