import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContractForm } from "../components";
import * as contractAPI from "../apis/contract";

export const ContractDetail = ({ history }) => {
  const params = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    contractAPI.getContract(params.id).then(({ data }) => setInfo(data));
  }, []);
  const onFinish = (newInfo) => {
    contractAPI
      .updateContract({ ...info, ...newInfo }, info.id)
      .then(() => {
        alert("수정했습니다");
        history.goBack();
      })
      .catch(() => alert("저장을 실패했습니다"));
  };
  if (!info) return <div>로딩중</div>;
  return <ContractForm onFinish={onFinish} info={info} />;
};
