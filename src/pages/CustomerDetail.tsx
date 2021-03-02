import React from "react";
import { CustomerForm } from "../components";

export const CustomerDetail = () => {
  const onFinish = (value: any) => console.log(value);

  return <CustomerForm onFinish={onFinish} />;
};
