import React from "react";
import { CustomerForm } from "../components/CustomerForm";

export const CustomerRegister = () => {
  const onFinish = (a) => {};

  return <CustomerForm onFinish={onFinish} />;
};
