import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContractForm } from "../components/ContractForm";
import * as contractAPI from "../api";

export const ContractDetail = ({ history }) => {
  const params = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    contractAPI.getContract(params.id).then(({ data }) => setInfo(data));
  }, [params.id]);
  const onFinish = useCallback(
    (newInfo) => {
      contractAPI
        .updateContract({
          ...info,
          ...newInfo,
          car: {
            ...info.car,
            ...newInfo.car,
          },
          outer: {
            ...info.outer,
            ...newInfo.outer,
          },
          renter: {
            ...info.renter,
            ...newInfo.renter,
          },
          driver: {
            ...info.driver,
            ...(newInfo.driver || newInfo.renter),
          },
        })
        .then(() => {
          alert("수정했습니다");
          history.goBack();
        })
        .catch(() => alert("수정을 실패했습니다"));
    },
    [info, history]
  );
  if (!info) return <div>로딩중</div>;
  return <ContractForm onFinish={onFinish} info={info} />;
};
