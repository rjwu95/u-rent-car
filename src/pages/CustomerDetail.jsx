import React from "react";
import { CustomerForm } from "../components";

export const CustomerDetail = () => {
  const onFinish = (value) => console.log(value);

  return <CustomerForm submitLabel="저장" onFinish={onFinish} />;
};
