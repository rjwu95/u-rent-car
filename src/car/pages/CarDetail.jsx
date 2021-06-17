import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarForm } from "../components/CarForm";
import * as carAPI from "../api";

export const CarDetail = ({ history }) => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    carAPI.getCar(id).then(({ data }) => setInfo(data));
  }, [id]);
  const onFinish = useCallback(
    (newInfo) => {
      carAPI
        .updateCar({ ...info, ...newInfo })
        .then(() => {
          alert("수정했습니다");
          history.goBack();
        })
        .catch(() => alert("수정을 실패했습니다"));
    },
    [info, history]
  );

  if (!info) return <div>로딩중</div>;
  return <CarForm onFinish={onFinish} submitLabel="저장" info={info} />;
};
