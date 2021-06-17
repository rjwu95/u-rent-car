import React from "react";
import { registerContract } from "../api";
import { ContractForm } from "../components/ContractForm";

export const ContractRegister = ({ history }) => {
  const onFinish = (info) => {
    registerContract(info)
      .then(() => {
        alert("저장했습니다.");
        history.goBack();
      })
      .catch(() => alert("저장을 실패했습니다"));
  };

  return <ContractForm onFinish={onFinish} />;
};
