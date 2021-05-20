import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as carAPI from "../apis/car";
import { CarForm } from "../components";

export const CarDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const onFinish = (a) => {
    console.log(a);
  };
  useEffect(() => {
    carAPI.getCar(id).then(({ data }) => setInfo(data));
  }, []);

  return (
    <CarForm
      onFinish={onFinish}
      submitLabel="저장"
      initNumber="12하1221"
      info={info}
    />
  );
};
