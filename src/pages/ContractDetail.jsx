import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContractForm } from "../components";
import * as contractAPI from "../apis/contract";

export const ContractDetail = () => {
  const params = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    contractAPI.getContract(params.id).then(({ data }) => setInfo(data));
  }, []);
  const onFinish = () => {};

  return <ContractForm onFinish={onFinish} info={info} />;
};
