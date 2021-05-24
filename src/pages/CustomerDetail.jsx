import React from "react";
import { CustomerForm } from "../components";

export const CustomerDetail = () => {
  const onFinish = (value) => {};

  return <CustomerForm submitLabel="저장" onFinish={onFinish} />;
};
